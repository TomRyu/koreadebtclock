/* =========================================================
   대한민국 부채시계 — core.js
   언어(20) / 통화(24) / 숫자 포맷 / KST 시간

   언어 정의   → data/i18n.js   (window.ROK_I18N)
   UI 문구     → data/ui.js     (window.ROK_UI)
   이 파일은 로직만 갖습니다.
   ========================================================= */
window.RDC = (function () {
  'use strict';

  var I18N = window.ROK_I18N;
  var LOCALES = I18N.LOCALES, ORDER = I18N.ORDER;
  var CURRENCIES = I18N.CURRENCIES, CUR_ORDER = I18N.CUR_ORDER;
  var LIVE = window.ROK_LIVE || {};

  /* ---------------- 환율 ----------------
     i18n.js 의 fx 는 마지막 수단(폴백)일 뿐이고, 실제 값은
       data/live.js  (봇이 매일 커밋)  →  assets/js/live.js (브라우저 fetch)
     순서로 덮어써진다. 환율이 두 군데 이상에 적혀 있으면 반드시 어긋나므로
     "고치는 곳은 한 곳" 을 여기서 강제한다.
     data.js 의 '원/달러 환율' 항목도 이 값을 읽어 간다. */
  var fxStamp = '';

  function applyFx(map, stamp) {
    if (!map) return 0;
    var n = 0;
    for (var k in map) {
      if (!map.hasOwnProperty(k)) continue;
      if (k === 'KRW') continue;                 // 기준 통화는 언제나 1
      var v = +map[k];
      if (CURRENCIES[k] && isFinite(v) && v > 0) { CURRENCIES[k].fx = v; n++; }
    }
    if (n && stamp) fxStamp = stamp;
    return n;
  }
  applyFx(LIVE.fx, LIVE.fxUpdated);
  /* 짧은 문구(ui.js) + 긴 설명문(ui-long.js) 을 하나로 합친다 */
  var T = {};
  [window.ROK_UI, window.ROK_UI_LONG].forEach(function (src) {
    if (!src) return;
    for (var k in src) if (src.hasOwnProperty(k)) T[k] = src[k];
  });

  var KST = 9 * 3600e3;                 // 한국 표준시 (UTC+9, 서머타임 없음)
  var YEAR_MS = 365.25 * 86400e3;

  /* ---------------- 시간 (KST 고정) ---------------- */
  function kst(ms) { return new Date(ms + KST); }
  function startOfDay(ms) { return Math.floor((ms + KST) / 86400e3) * 86400e3 - KST; }
  function startOfYear(ms) { return Date.UTC(kst(ms).getUTCFullYear(), 0, 1) - KST; }
  function yearLength(ms) {
    var y = kst(ms).getUTCFullYear();
    return Date.UTC(y + 1, 0, 1) - Date.UTC(y, 0, 1);
  }

  /* ---------------- 로케일 상태 ---------------- */
  var current = 'ko';
  var curCode = 'KRW';
  var curPinned = false;                // 사용자가 통화를 직접 고른 적이 있는가

  try {
    var sl = localStorage.getItem('rdc-lang');
    current = (sl && LOCALES[sl]) ? sl : I18N.detect(navigator.language);
    var sc = localStorage.getItem('rdc-cur');
    if (sc && CURRENCIES[sc]) { curCode = sc; curPinned = true; }
    else curCode = LOCALES[current].cur;
  } catch (e) {
    curCode = LOCALES[current].cur;
  }

  function loc() { return LOCALES[current]; }
  function cur() { return CURRENCIES[curCode]; }

  function setLang(k) {
    if (!LOCALES[k]) return;
    current = k;
    /* 통화를 직접 고른 적이 없으면 언어의 기본 통화를 따라간다 */
    if (!curPinned) curCode = LOCALES[k].cur;
    try { localStorage.setItem('rdc-lang', k); } catch (e) {}
  }

  function setCur(c) {
    if (!CURRENCIES[c]) return;
    curCode = c;
    curPinned = true;
    try { localStorage.setItem('rdc-cur', c); } catch (e) {}
  }

  /* ---------------- 다국어 문자열 ----------------
     번역이 비어 있으면 영어 → 한국어 순으로 내려간다.
     16개 언어를 한 번에 채울 수는 없으므로, 빠진 칸이
     깨진 화면이 아니라 영어로 보이게 하는 것이 핵심이다. */
  var OVER = window.ROK_LABELS || {};      // data/labels.js — 추가 언어 오버레이

  function fromDict(o) {
    if (o == null) return '';
    if (typeof o === 'string') return o;
    if (o[current]) return o[current];

    /* data.js 의 I() 는 4개 언어만 담는다. 나머지는 한국어 원문을
       키로 삼아 오버레이에서 찾는다. */
    if (o.ko) {
      var ov = OVER[o.ko];
      if (ov && ov[current]) return ov[current];
    }

    for (var i = 0; i < I18N.FALLBACK.length; i++) {
      var f = I18N.FALLBACK[i];
      if (o[f]) return o[f];
    }
    for (var k in o) if (o.hasOwnProperty(k) && o[k]) return o[k];
    return '';
  }
  function t(key) { return fromDict(T[key]) || key; }
  function pick(obj) { return fromDict(obj); }

  /* ---------------- 숫자 ---------------- */
  function comma(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  function unit(t) { return '<span class="u">' + t + '</span>'; }

  /** 4자리로 채우고 선행 0은 흐리게 (CJK 전용) */
  function pad4(n) {
    var s = String(n);
    while (s.length < 4) s = '0' + s;
    var i = 0;
    while (i < 3 && s.charAt(i) === '0') i++;
    return i ? '<span class="z">' + s.slice(0, i) + '</span>' + s.slice(i) : s;
  }

  /* Intl 포맷터는 만들 때마다 비싸므로 캐시한다.
     paint() 가 초당 20회, 140개 지표를 돈다. */
  var nfCache = {};
  function nf(tag, opts, ck) {
    var k = tag + '|' + ck;
    if (nfCache[k]) return nfCache[k];
    var f;
    try { f = new Intl.NumberFormat(tag, opts); }
    catch (e) { f = new Intl.NumberFormat('en-US', opts); }
    nfCache[k] = f;
    return f;
  }
  function grouped(n, L)  { return nf(L.tag, {maximumFractionDigits: 0}, 'g').format(n); }
  function compactN(n, L) {
    return nf(L.tag, {notation: 'compact', compactDisplay: 'short',
                      maximumFractionDigits: 2}, 'c').format(n);
  }

  /** 3자리권·인도식 통화 표기.
   *  기호를 앞에 둘지 뒤에 둘지, 사이에 공백을 넣을지는 언어마다 다르다
   *  (€862 Mrd. · 862 mld €· 84,5 трлн ₽). 직접 붙이면 반드시 틀리므로
   *  Intl 에 맡기고, 기호 부분만 꺼내 흐린 span 으로 감싼다. */
  function fmtCurrency(a, L, C, mode) {
    var o = { style: 'currency', currency: C.code, currencyDisplay: 'narrowSymbol' };
    if (mode === 'compact') {
      o.notation = 'compact'; o.compactDisplay = 'short';
      o.minimumFractionDigits = 0; o.maximumFractionDigits = 2;
    } else if (mode === 'cents') {
      o.minimumFractionDigits = 2; o.maximumFractionDigits = 2;
    } else {
      o.minimumFractionDigits = 0; o.maximumFractionDigits = 0;
    }
    var f;
    try { f = nf(L.tag, o, 'C' + C.code + mode); }
    catch (e) {
      o.currencyDisplay = 'symbol';
      f = nf(L.tag, o, 'S' + C.code + mode);
    }
    try {
      return f.formatToParts(a).map(function (p) {
        return p.type === 'currency' ? unit(p.value) : p.value;
      }).join('');
    } catch (e) {
      return f.format(a);
    }
  }
  function dec(v, d, L) {
    if (L && L.group !== 'cjk') {
      return nf(L.tag, {minimumFractionDigits: d, maximumFractionDigits: d}, 'd' + d).format(Math.abs(v));
    }
    var s = Math.abs(v).toFixed(d).split('.');
    return comma(s[0]) + (s[1] ? '.' + s[1] : '');
  }

  /** 통화 금액 렌더
   *  v       : 선택된 통화 단위의 값
   *  L       : 로케일 (숫자를 어떻게 끊을지)
   *  full    : 전체 자릿수 모드
   *  compact : 뒤쪽 0 그룹 생략 (2,404조 0000억 0000만원 → 2,404조원) — CJK 전용
   *  C       : 통화 (기호 · 접미사). 생략하면 현재 통화
   */
  function money(v, L, full, compact, C) {
    L = L || loc();
    C = C || cur();
    var neg = v < 0 ? '<span class="neg">−</span>' : '';
    var a = Math.abs(v);
    var pre = C.pre ? unit(C.pre) : '';
    var post = C.post || '';

    /* ---- 3자리권 · 인도식: Intl 에 맡긴다 ---- */
    if (L.group !== 'cjk') {
      var mode = a < 1000 ? 'cents' : (full ? 'plain' : 'compact');
      return neg + fmtCurrency(a, L, C, mode);
    }

    /* ---- CJK: 만 · 억 · 조 ---- */
    if (full) {
      var b = a < 1000 ? dec(a, 2, L) : comma(Math.floor(a));
      return neg + pre + b + (post ? unit(post) : '');
    }

    var U = L.units, w = Math.floor(a);
    /* g[0]=조  g[1]=억  g[2]=만  g[3]=나머지 */
    var g = [Math.floor(w / 1e12), Math.floor((w % 1e12) / 1e8),
             Math.floor((w % 1e8) / 1e4), w % 1e4];

    var first = 0;
    while (first < 3 && !g[first]) first++;

    /* 만 단위 미만만 남은 경우 */
    if (first === 3) {
      return neg + pre + (a < 100 ? dec(a, 2, L) : comma(g[3])) + unit(post);
    }

    /* 조·억이 있으면 만까지만, 그 아래면 원 단위까지 */
    var lastIdx = first <= 1 ? 2 : 3;
    if (compact) { while (lastIdx > first && !g[lastIdx]) lastIdx--; }

    var out = '';
    for (var i = first; i <= lastIdx; i++) {
      var n = i === first ? comma(g[i]) : pad4(g[i]);
      var u = i < 3 ? U[i] : '';
      if (i === lastIdx) u += post;
      out += n + (u ? unit(u) : '');
    }
    return neg + pre + out;
  }

  /** 개수·인원처럼 통화가 아닌 큰 수 */
  function count(v, L, full) {
    L = L || loc();
    var a = Math.abs(v);
    if (L.group === 'cjk' || full) return comma(Math.floor(a));
    return a < 10000 ? grouped(Math.floor(a), L) : compactN(a, L);
  }

  /* ---------------- 환산 ---------------- */
  /** 원화 기준 금액 → 현재 선택 통화 */
  function toLocal(krw) { return krw / cur().fx; }
  /** 달러 기준 금액 → 현재 선택 통화 */
  function usdToLocal(usd) { return usd * CURRENCIES.USD.fx / cur().fx; }
  /** 엔화 기준 금액 → 현재 선택 통화 (한일 비교 화면의 일본 쪽 금액) */
  function jpyToLocal(jpy) { return jpy * CURRENCIES.JPY.fx / cur().fx; }
  /** 어떤 기준의 금액이든 원화로 환산 — 배율·막대를 계산할 때만 쓴다 */
  function toKrw(v, fmt) {
    if (fmt === 'jpy') return v * CURRENCIES.JPY.fx;
    if (fmt === 'usd') return v * CURRENCIES.USD.fx;
    return v;
  }

  /* ---------------- 언어 · 통화 선택기 ----------------
     20개 언어를 버튼으로 늘어놓으면 헤더가 무너진다.
     index.html 과 privacy/terms 가 같은 마크업을 쓰도록 여기서 만든다. */
  function pickerHTML() {
    var a = '<label class="btn k sm sel" title="' + t('language') + '">' +
            '<select id="langSel" aria-label="' + t('language') + '">' +
            ORDER.map(function (k) {
              return '<option value="' + k + '"' + (k === current ? ' selected' : '') + '>' +
                     LOCALES[k].short + ' · ' + LOCALES[k].name + '</option>';
            }).join('') + '</select></label>';

    var b = '<label class="btn k sm sel" title="' + t('currency') + '">' +
            '<select id="curSel" aria-label="' + t('currency') + '">' +
            CUR_ORDER.map(function (c) {
              return '<option value="' + c + '"' + (c === curCode ? ' selected' : '') + '>' +
                     c + ' ' + CURRENCIES[c].sym + '</option>';
            }).join('') + '</select></label>';

    return a + b;
  }

  /** 아랍어 등 오른쪽에서 왼쪽으로 읽는 언어의 문서 방향을 맞춘다 */
  function applyDir() {
    var L = loc();
    document.documentElement.lang = L.html;
    document.documentElement.dir = L.dir || 'ltr';
  }

  /** 환율 안내 문구를 현재 통화 기준으로 만든다.
   *  환율은 checkStale() 의 감시 밖이라 조용히 낡는다. 기준일을 항상
   *  같이 찍어 두면 방문자가 스스로 판단할 수 있다. */
  function fxLine() {
    var C = cur();
    var stamp = fxStamp ? ' (' + t('basisDate') + ' ' + fxStamp + ')' : '';
    if (C.code === 'KRW') return t('fxKrw');
    /* 1 VND = 0.05원 처럼 작은 통화는 1단위로 쓰면 반올림에 뭉개진다.
       원화 표시가 100 이상이 되도록 배수를 키운다. */
    var m = 1;
    while (C.fx * m < 100) m *= 100;
    var v = C.fx * m;
    var s = v >= 1000 ? comma(Math.round(v)) : String(Math.round(v * 100) / 100);
    return t('fxNote') + ' ' + comma(m) + ' ' + C.code + ' = ' + s + ' KRW' + stamp;
  }

  /** 헤더용 — 통화 선택기 바로 옆에 붙는 짧은 형태.
   *  통화를 고르는 컨트롤과 그 선택이 만들어내는 환율이 떨어져 있으면
   *  방문자는 자기가 보는 금액이 무엇으로 환산된 것인지 알 수 없다.
   *  원화를 보고 있으면 환산이 없으므로 빈 문자열(= 숨김). */
  function fxShort() {
    var C = cur();
    if (C.code === 'KRW') return '';
    var m = 1;
    while (C.fx * m < 100) m *= 100;
    var v = C.fx * m;
    var s = v >= 1000 ? comma(Math.round(v)) : String(Math.round(v * 100) / 100);
    return (m > 1 ? comma(m) + ' ' : '1 ') + C.code + ' = ' + s + ' KRW';
  }

  /** 환율 기준일이 며칠 지났는가 — 헤더 점 색깔에 쓴다 */
  function fxAgeDays() {
    if (!fxStamp) return 1e4;
    var t = Date.parse(fxStamp + 'T00:00:00+09:00');
    return isFinite(t) ? (Date.now() - t) / 86400e3 : 1e4;
  }

  return {
    KST: KST, YEAR_MS: YEAR_MS,
    LOCALES: LOCALES, ORDER: ORDER,
    CURRENCIES: CURRENCIES, CUR_ORDER: CUR_ORDER,
    T: T,
    kst: kst, startOfDay: startOfDay, startOfYear: startOfYear, yearLength: yearLength,
    comma: comma, unit: unit, pad4: pad4, dec: dec, money: money, count: count,
    loc: loc, lang: function () { return current; }, setLang: setLang,
    cur: cur, curCode: function () { return curCode; }, setCur: setCur,
    t: t, pick: pick, toLocal: toLocal, usdToLocal: usdToLocal,
    jpyToLocal: jpyToLocal, toKrw: toKrw, fxLine: fxLine,
    applyFx: applyFx, fxStamp: function () { return fxStamp; },
    fxShort: fxShort, fxAgeDays: fxAgeDays,
    LIVE: LIVE,
    pickerHTML: pickerHTML, applyDir: applyDir
  };
})();
