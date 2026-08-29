#!/usr/bin/env node
/* =============================================================
 * data/live.js 를 최신 값으로 덮어쓴다.
 * -------------------------------------------------------------
 * GitHub Actions 가 매일 돌리고, 바뀐 게 있을 때만 커밋합니다.
 * 로컬에서 그냥 돌려 봐도 됩니다:
 *
 *     node scripts/update-live.js            # 갱신 (환율. 키가 있으면 금리도)
 *     node scripts/update-live.js --dry      # 파일은 안 건드리고 결과만 출력
 *
 *     node scripts/update-live.js --anchor population=51037320@2026-08-01
 *         월별 확정 공표치를 앵커로 박습니다. 여러 개면 --anchor 를 반복하십시오.
 *         앵커가 들어오면 그 시점부터 외삽하므로 연초 기준값보다 훨씬 정확합니다.
 *
 * 환경변수
 *     ECOS_API_KEY   한국은행 ECOS OpenAPI 키 (무료). 있으면 시장금리도 갱신.
 *                    GitHub 에서는 Settings → Secrets → Actions 에 넣습니다.
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
const ECOS_KEY = (process.env.ECOS_API_KEY || '').trim();

/* --anchor population=51037320@2026-08-01 (반복 가능) */
const ANCHORS = process.argv
  .filter((a, i) => process.argv[i - 1] === '--anchor')
  .map(a => {
    const m = a.match(/^(\w+)=(-?[\d.]+)@(\d{4}-\d{2}-\d{2})$/);
    if (!m) { console.error(`--anchor 형식이 틀렸습니다: ${a}`); process.exit(1); }
    return { key: m[1], v: Number(m[2]), d: m[3] };
  });

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

/* -------------------------------------------------------------
 * 한국은행 ECOS — 시장금리
 *
 * [확인 필요] 아래 통계표·항목 코드는 공표 실적과 대조되지 않았습니다.
 *   ECOS_API_KEY=... node scripts/update-live.js --dry
 * 로 먼저 돌려 값이 상식적인지(기준금리 2%대 등) 확인한 뒤 켜십시오.
 * 코드가 틀리면 ECOS 가 빈 응답을 주고, 이 스크립트는 그냥 건너뜁니다.
 * ------------------------------------------------------------- */
const ECOS = [
  { on: true,  field: 'bokRate', label: '한국은행 기준금리',
    stat: '722Y001', item: '0101000',   cycle: 'D', min: 0, max: 10 },
  { on: true,  field: 'ktb3y',   label: '국고채 3년',
    stat: '722Y001', item: '010200000', cycle: 'D', min: 0, max: 15 },
  { on: true,  field: 'ktb10y',  label: '국고채 10년',
    stat: '722Y001', item: '010210000', cycle: 'D', min: 0, max: 15 },

  /* 아래 둘은 통계표 코드를 확인하지 못했습니다. 확인 후 on: true 로 바꾸십시오.
     cpi 는 '전년동월비' 표를 써야 합니다 — 지수(총지수)를 그대로 넣으면
     '소비자물가 상승률 114.2%' 같은 값이 화면에 뜹니다. */
  { on: false, field: 'cpi',      label: '소비자물가 상승률(전년동월비)',
    stat: '901Y009', item: '0', cycle: 'M', min: -5, max: 20 },
  { on: false, field: 'reserves', label: '외환보유액(달러)',
    stat: '802Y001', item: '0', cycle: 'M', min: 1e11, max: 1e13 }
];

function ymd(d, cycle) {
  const p = n => String(n).padStart(2, '0');
  const s = `${d.getUTCFullYear()}${p(d.getUTCMonth() + 1)}${p(d.getUTCDate())}`;
  return cycle === 'D' ? s : s.slice(0, 6);
}

/** 최근 구간을 조회해 가장 최신 행 하나를 돌려준다. 실패하면 null. */
async function fetchEcosOne(spec) {
  const now = new Date(Date.now() + 9 * 3600e3);
  const back = new Date(now.getTime() - (spec.cycle === 'D' ? 21 : 200) * 86400e3);
  const url = `https://ecos.bok.or.kr/api/StatisticSearch/${ECOS_KEY}/json/kr/1/100/` +
              `${spec.stat}/${spec.cycle}/${ymd(back, spec.cycle)}/${ymd(now, spec.cycle)}/${spec.item}`;
  try {
    const res = await fetch(url);
    if (!res.ok) { console.error(`  ${spec.label}: HTTP ${res.status}`); return null; }
    const j = await res.json();
    if (j && j.RESULT) { console.error(`  ${spec.label}: ECOS ${j.RESULT.CODE} ${j.RESULT.MESSAGE}`); return null; }
    const rows = j && j.StatisticSearch && j.StatisticSearch.row;
    if (!rows || !rows.length) { console.error(`  ${spec.label}: 응답에 데이터 없음 (코드 확인 필요)`); return null; }

    rows.sort((a, b) => String(a.TIME).localeCompare(String(b.TIME)));
    const last = rows[rows.length - 1];
    const v = Number(last.DATA_VALUE);
    if (!Number.isFinite(v) || v < spec.min || v > spec.max) {
      console.error(`  ${spec.label}: ${last.DATA_VALUE} — 상식 범위(${spec.min}~${spec.max}) 밖이라 버림`);
      return null;
    }
    console.log(`  ${spec.label}: ${v}  (${last.TIME})`);
    return v;
  } catch (e) {
    console.error(`  ${spec.label}: ${e.message}`);
    return null;
  }
}

async function fetchEcos() {
  if (!ECOS_KEY) { console.log('  ECOS_API_KEY 없음 — 시장금리는 건너뜁니다.'); return {}; }
  const out = {};
  for (const spec of ECOS) {
    if (!spec.on) continue;
    const v = await fetchEcosOne(spec);
    if (v != null) out[spec.field] = v;
  }
  return out;
}

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

/** ind 의 한 필드만 갈아 끼운다. 뒤에 붙은 주석은 건드리지 않는다. */
function setInd(src, field, v) {
  const re = new RegExp('(\\n    ' + field + ':\\s*)(null|-?[\\d.]+)');
  return re.test(src) ? src.replace(re, `$1${v}`) : src;
}

/** anchors 의 한 항목을 { v, d } 로 갈아 끼운다. */
function setAnchor(src, key, v, d) {
  const re = new RegExp('(\\n    ' + key + ':\\s*)(null|\\{[^}]*\\})');
  return re.test(src) ? src.replace(re, `$1{ v: ${v}, d: '${d}' }`) : src;
}

(async function main() {
  console.log('환율 갱신 중…');
  const fx = await fetchFx();
  if (!fx) {
    console.error('모든 소스 실패 — data/live.js 를 건드리지 않고 종료합니다.');
    process.exit(0);          // 워크플로를 빨갛게 만들지 않는다. 낡은 값이 남을 뿐이다.
  }

  console.log('시장금리 갱신 중…');
  const ind = await fetchEcos();

  const before = fs.readFileSync(FILE, 'utf8');
  const today = kstToday();

  let after = before
    .replace(/(\n  updated:\s*)'[^']*'/,   `$1'${today}'`)
    .replace(/(\n  source:\s*)'[^']*'/,    `$1'bot'`)
    .replace(/(\n  fxUpdated:\s*)'[^']*'/, `$1'${today}'`)
    .replace(/(\n  fx:\s*\{\n)[\s\S]*?(\n  \},)/, `$1${renderFx(fx, currentFx(before))}$2`);

  /* 받아온 것만 갈아 끼운다. 실패한 필드는 이전 값이 그대로 남는다 —
     낡은 값이 남는 것이 잘못된 값이 들어가는 것보다 언제나 낫다. */
  for (const [field, v] of Object.entries(ind)) after = setInd(after, field, v);
  for (const a of ANCHORS) {
    const next = setAnchor(after, a.key, a.v, a.d);
    if (next === after) {
      console.error(`앵커 '${a.key}' 를 data/live.js 의 anchors 에서 찾지 못했습니다.`);
      process.exit(1);
    }
    after = next;
    console.log(`  앵커 ${a.key} = ${a.v} (${a.d})`);
  }

  /* 치환이 하나라도 먹지 않았으면 구조가 바뀐 것이다. 억지로 쓰지 않는다. */
  const ok = after.includes(`fxUpdated: '${today}'`) &&
             after.includes(`USD: ${fx.USD}`) &&
             after.length > before.length * 0.8;
  if (!ok) {
    console.error('data/live.js 의 구조가 예상과 다릅니다. 스크립트를 고치십시오.');
    process.exit(1);
  }

  if (DRY) {
    console.log('\n--dry — 파일을 쓰지 않았습니다. 아래는 쓰였을 값입니다.\n');
    console.log(renderFx(fx, currentFx(before)));
    if (Object.keys(ind).length) console.log('\n  ind     ' + JSON.stringify(ind));
    if (ANCHORS.length)          console.log('  anchors ' + JSON.stringify(ANCHORS));
    return;
  }
  if (after === before) { console.log('바뀐 값이 없습니다.'); return; }

  fs.writeFileSync(FILE, after);
  console.log(`data/live.js 갱신 완료 (기준일 ${today})`);
})();
