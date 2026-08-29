/* =============================================================
 * 번역 커버리지 감사
 * -------------------------------------------------------------
 *   node scripts/audit-i18n.js
 *
 * core.js 의 fromDict() 해석 경로를 그대로 재현해
 * "그 언어가 실제로 화면에 나오는가" 를 언어별로 집계합니다.
 *
 *   direct    I(ko,en,ja,zh) 안에 그 언어가 직접 있음
 *   overlay   labels*.js 오버레이가 공급함
 *   FALLBACK  둘 다 없어 영어/한국어로 대체됨  ← 이것이 미번역
 *
 * 언어를 추가하거나 라벨 원문을 고친 뒤 반드시 돌려볼 것.
 * (오버레이 키는 한국어 원문과 글자 하나까지 같아야 하므로,
 *  원문을 고치면 여기서 FALLBACK 이 튄다.)
 *
 * ROK_LEGAL 은 의도적으로 ko/en 만 유지하므로 FALLBACK 이 정상입니다.
 * ============================================================= */

var path = require('path');
var ROOT = path.resolve(__dirname, '..');

global.window = {};
[ 'data/i18n.js', 'data/ui.js', 'data/ui-long.js',
  'data/labels.js', 'data/labels-debt.js', 'data/labels-econ.js', 'data/labels-more.js', 'data/labels-jp.js', 'data/labels-time.js',
  'data/legal.js', 'data/support.js',
  'data/data.js', 'data/history.js', 'data/nk.js', 'data/jp.js'
].forEach(function (f) {
  try { require(path.join(ROOT, f)); }
  catch (e) { console.log('로드 실패  ' + f + '  → ' + e.message); }
});

var W = global.window;
var I18N = W.ROK_I18N || {};
var ORDER = I18N.ORDER || [];
var OVER = W.ROK_LABELS || {};

/** core.js fromDict() 재현 */
function resolves(o, lang) {
  if (o == null) return 'none';
  if (typeof o === 'string') return 'raw';
  if (o[lang]) return 'direct';
  if (o.ko && OVER[o.ko] && OVER[o.ko][lang]) return 'overlay';
  return 'fallback';
}

/** {ko:…, en:…} 형태의 다국어 객체를 전부 찾아낸다 */
function walk(obj, p, out, seen) {
  if (obj == null || typeof obj !== 'object') return;
  if (seen.has(obj)) return;
  seen.add(obj);
  var keys = Object.keys(obj);
  var isI18n = keys.length && typeof obj.ko === 'string' &&
               keys.every(function (k) { return ORDER.indexOf(k) >= 0; });
  if (isI18n) { out.push({ p: p, o: obj }); return; }
  keys.forEach(function (k) { walk(obj[k], p + '.' + k, out, seen); });
}

var GROUPS = ['ROK_UI', 'ROK_UI_LONG', 'ROK_DATA', 'ROK_HISTORY',
              'ROK_NK', 'ROK_JP', 'ROK_LEGAL', 'ROK_SUPPORT'];
var all = [];
GROUPS.forEach(function (g) {
  if (!W[g]) return;
  var out = [];
  walk(W[g], g, out, new Set());
  out.forEach(function (x) { x.g = g; });
  all = all.concat(out);
});

console.log('언어 ' + ORDER.length + '개 · 통화 ' + (I18N.CUR_ORDER || []).length + '개');
console.log('번역 대상 문자열 ' + all.length + '개\n');

var head = 'lang'.padEnd(6) + 'direct'.padStart(8) + 'overlay'.padStart(9) +
           'FALLBACK'.padStart(10) + '   커버리지';
console.log(head);
console.log('-'.repeat(head.length + 4));

var miss = {};
ORDER.forEach(function (l) {
  var c = { direct: 0, overlay: 0, fallback: 0 };
  miss[l] = [];
  all.forEach(function (x) {
    var r = resolves(x.o, l);
    if (c[r] != null) c[r]++;
    if (r === 'fallback') miss[l].push(x);
  });
  var pct = ((c.direct + c.overlay) / all.length * 100).toFixed(1);
  console.log(l.padEnd(6) + String(c.direct).padStart(8) + String(c.overlay).padStart(9) +
              String(c.fallback).padStart(10) + '   ' + pct + '%');
});

console.log('\n미번역 항목이 있는 언어 — 영역별 건수');
var any = false;
ORDER.forEach(function (l) {
  if (!miss[l].length) return;
  any = true;
  var by = {};
  miss[l].forEach(function (x) { by[x.g] = (by[x.g] || 0) + 1; });
  console.log('  ' + l.padEnd(4) + String(miss[l].length).padStart(4) + '건  ' + JSON.stringify(by));
});
if (!any) console.log('  없음 — 전 언어 완비');

/* --detail <lang> : 그 언어의 미번역 원문을 전부 출력 */
var di = process.argv.indexOf('--detail');
if (di > -1 && process.argv[di + 1]) {
  var t = process.argv[di + 1];
  console.log('\n[' + t + '] 미번역 원문');
  (miss[t] || []).forEach(function (x) {
    console.log('  ' + x.g.padEnd(12) + ' [' + String(x.o.ko).replace(/\n/g, ' ⏎ ').slice(0, 70) + ']');
  });
}
