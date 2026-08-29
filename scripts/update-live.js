#!/usr/bin/env node
/* =============================================================
 * data/live.js 를 최신 값으로 덮어쓴다.
 * -------------------------------------------------------------
 * GitHub Actions 가 매일 돌리고, 바뀐 게 있을 때만 커밋합니다.
 * 로컬에서 그냥 돌려 봐도 됩니다:
 *
 *     node scripts/update-live.js            # 갱신
 *     node scripts/update-live.js --dry      # 파일은 안 건드리고 결과만 출력
 *
 * 설계 원칙
 *   · 이 스크립트가 실패해도 data/live.js 는 절대 망가지지 않는다.
 *     (전부 성공했을 때만 통째로 새로 쓴다)
 *   · 사람이 쓴 주석과 손으로 관리하는 칸(anchors · deadlines)은 보존한다.
 *     → 파일을 새로 만들지 않고 해당 블록만 정규식으로 갈아 끼운다.
 *   · 값이 상식 밖이면 갱신을 포기한다. 조용히 틀린 값이 들어가는 것이
 *     갱신이 안 되는 것보다 훨씬 위험하다.
 * ============================================================= */

'use strict';

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'data', 'live.js');
const DRY = process.argv.includes('--dry');

/* i18n.js 와 같은 24개 통화 (KRW 제외 23개) */
const CODES = ['USD', 'EUR', 'JPY', 'CNY', 'GBP', 'TWD', 'INR', 'BRL', 'RUB', 'IDR',
               'VND', 'THB', 'TRY', 'SAR', 'AED', 'MXN', 'CAD', 'AUD', 'CHF', 'SGD',
               'HKD', 'PLN', 'SEK'];

/* 키가 필요 없고 KRW 를 기준통화로 받아 주는 소스.
   open.er-api 가 23개를 모두 덮는다. frankfurter 는 ECB 기준이라
   TWD·RUB·SAR·AED·VND 가 빠지지만 비상용으로 둔다. */
const SOURCES = [
  { name: 'open.er-api',
    url: 'https://open.er-api.com/v6/latest/KRW',
    read: j => (j && j.result === 'success' && j.rates) ? j.rates : null },
  { name: 'frankfurter',
    url: 'https://api.frankfurter.app/latest?from=KRW',
    read: j => (j && j.rates) ? j.rates : null }
];

function kstToday() {
  const d = new Date(Date.now() + 9 * 3600e3);
  const p = n => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${p(d.getUTCMonth() + 1)}-${p(d.getUTCDate())}`;
}

/* 소수 유효숫자를 통화 규모에 맞춘다.
   1 VND = 0.0543원 처럼 작은 통화를 반올림해 버리면 환산이 통째로 망가진다. */
function round(v) {
  if (v >= 1000) return Math.round(v);
  if (v >= 100)  return Math.round(v * 10) / 10;
  if (v >= 1)    return Math.round(v * 100) / 100;
  if (v >= 0.01) return Math.round(v * 1e4) / 1e4;
  return Number(v.toPrecision(3));
}

async function fetchFx() {
  for (const s of SOURCES) {
    try {
      const res = await fetch(s.url, { headers: { 'user-agent': 'koreadebtclock-bot' } });
      if (!res.ok) { console.error(`  ${s.name}: HTTP ${res.status}`); continue; }
      const rates = s.read(await res.json());
      if (!rates) { console.error(`  ${s.name}: 예상과 다른 응답`); continue; }

      /* 응답은 "1원 = x 외화" — 사이트가 쓰는 "1 외화 = ?원" 으로 뒤집는다 */
      const fx = {};
      for (const c of CODES) {
        const v = Number(rates[c]);
        if (Number.isFinite(v) && v > 0) fx[c] = round(1 / v);
      }
      if (!(fx.USD > 500 && fx.USD < 5000)) {
        console.error(`  ${s.name}: 원/달러 ${fx.USD} — 상식 범위 밖이라 버림`);
        continue;
      }
      console.log(`  ${s.name}: ${Object.keys(fx).length}/23개 통화 · 1 USD = ${fx.USD}원`);
      return fx;
    } catch (e) {
      console.error(`  ${s.name}: ${e.message}`);
    }
  }
  return null;
}

/* fx 블록을 사람이 읽을 수 있게 5개씩 끊어 쓴다 (씨앗값과 같은 모양) */
function renderFx(fx, prev) {
  const merged = Object.assign({}, prev, fx);   // 못 받은 통화는 이전 값 유지
  const cells = CODES.map(c => `${c}: ${merged[c]}`);
  const width = Math.max(...cells.map(s => s.length)) + 2;
  const lines = [];
  for (let i = 0; i < cells.length; i += 5) {
    lines.push('    ' + cells.slice(i, i + 5)
      .map((s, k) => (i + k === cells.length - 1 ? s : (s + ',').padEnd(width)))
      .join('').replace(/\s+$/, ''));
  }
  return lines.join('\n');
}

function currentFx(src) {
  const m = src.match(/fx:\s*\{([\s\S]*?)\n\s*\},/);
  if (!m) return {};
  const out = {};
  for (const [, k, v] of m[1].matchAll(/([A-Z]{3}):\s*([\d.]+)/g)) out[k] = Number(v);
  return out;
}

(async function main() {
  console.log('환율 갱신 중…');
  const fx = await fetchFx();
  if (!fx) {
    console.error('모든 소스 실패 — data/live.js 를 건드리지 않고 종료합니다.');
    process.exit(0);          // 워크플로를 빨갛게 만들지 않는다. 낡은 값이 남을 뿐이다.
  }

  const before = fs.readFileSync(FILE, 'utf8');
  const today = kstToday();

  let after = before
    .replace(/(\n  updated:\s*)'[^']*'/,   `$1'${today}'`)
    .replace(/(\n  source:\s*)'[^']*'/,    `$1'bot'`)
    .replace(/(\n  fxUpdated:\s*)'[^']*'/, `$1'${today}'`)
    .replace(/(\n  fx:\s*\{\n)[\s\S]*?(\n  \},)/, `$1${renderFx(fx, currentFx(before))}$2`);

  /* 치환이 하나라도 먹지 않았으면 구조가 바뀐 것이다. 억지로 쓰지 않는다. */
  const ok = after.includes(`fxUpdated: '${today}'`) &&
             after.includes(`USD: ${fx.USD}`) &&
             after.length > before.length * 0.8;
  if (!ok) {
    console.error('data/live.js 의 구조가 예상과 다릅니다. 스크립트를 고치십시오.');
    process.exit(1);
  }

  if (DRY) { console.log('--dry — 파일을 쓰지 않았습니다.\n'); console.log(renderFx(fx, currentFx(before))); return; }
  if (after === before) { console.log('바뀐 값이 없습니다.'); return; }

  fs.writeFileSync(FILE, after);
  console.log(`data/live.js 갱신 완료 (기준일 ${today})`);
})();
