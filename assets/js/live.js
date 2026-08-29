/* =========================================================
   대한민국 부채시계 — 실시간 환율 (assets/js/live.js)

   이 사이트에서 "지금 이 순간 진짜로 맞는 숫자" 로 만들 수 있는 값 중
   효과가 압도적으로 큰 하나가 환율이다.

     · 한국어 사용자를 뺀 모든 방문자가 보는 **모든 금액**이 이 값 하나에 걸려 있다
       (지표 120여 개 × 통화 23개)
     · checkStale() 의 감시 밖이라 에러 없이 조용히 낡는다
     · 지표 '원/달러 환율' 과 실제 환산이 어긋나면 사이트가 자기모순에 빠진다

   그래서 여기서만 네트워크를 쓴다. 실패해도 사이트는 그대로 돌아간다.
   (file:// 로 열면 CORS 로 막히므로 아예 시도하지 않는다 —
    이 경우 data/live.js 의 씨앗값이 그대로 쓰이고, 45일이 지나면
    원화 외 통화를 볼 때 상단 배너가 스스로 알린다.)
   ========================================================= */
(function () {
  'use strict';

  var R = window.RDC;
  if (!R || !R.applyFx) return;

  /* file:// · about: 등에서는 어차피 막힌다. 콘솔만 더럽히므로 건너뛴다 */
  var proto = window.location.protocol;
  if (proto !== 'http:' && proto !== 'https:') return;

  var KEY = 'rdc-fx';
  var TTL = 6 * 3600e3;          // 6시간. 환율은 초 단위로 볼 값이 아니다

  /* 응답이 망가졌을 때 사이트 전체 금액이 엉키는 것이 최악이므로,
     원/달러가 상식 범위 밖이면 통째로 버린다. */
  function sane(fx) {
    return fx && isFinite(fx.USD) && fx.USD > 500 && fx.USD < 5000;
  }

  function apply(fx, date) {
    if (!sane(fx)) return false;
    if (!R.applyFx(fx, date)) return false;
    if (window.RDCApp) window.RDCApp.refresh();
    return true;
  }

  /* ---------- 캐시 ---------- */
  function readCache() {
    try {
      var c = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (c && c.t && (Date.now() - c.t) < TTL) return c;
    } catch (e) {}
    return null;
  }
  function writeCache(fx, date) {
    try { localStorage.setItem(KEY, JSON.stringify({ t: Date.now(), d: date, fx: fx })); }
    catch (e) {}
  }

  /* ---------- 응답 → "1 외화 = 몇 원" ----------
     두 API 모두 KRW 기준으로 "1원 = x 외화" 를 주므로 뒤집는다. */
  function invert(rates) {
    var fx = {}, codes = R.CUR_ORDER;
    for (var i = 0; i < codes.length; i++) {
      var c = codes[i];
      if (c === 'KRW') continue;
      var v = +rates[c];
      if (isFinite(v) && v > 0) fx[c] = 1 / v;
    }
    return fx;
  }

  function today() {
    var d = R.kst(Date.now());
    var p = function (x) { return x < 10 ? '0' + x : '' + x; };
    return d.getUTCFullYear() + '-' + p(d.getUTCMonth() + 1) + '-' + p(d.getUTCDate());
  }

  /* ---------- 소스 ----------
     둘 다 키가 필요 없고 CORS 를 허용한다.
     open.er-api 가 24개 통화를 모두 덮으므로 우선. frankfurter 는 ECB
     기준이라 TWD·RUB·SAR·AED·VND 가 빠지지만, 있는 것만 갱신해도 이득이다. */
  var SOURCES = [
    { url: 'https://open.er-api.com/v6/latest/KRW',
      read: function (j) {
        if (!j || j.result !== 'success' || !j.rates) return null;
        return { fx: invert(j.rates), d: (j.time_last_update_utc || '').slice(5, 16) || today() };
      } },
    { url: 'https://api.frankfurter.app/latest?from=KRW',
      read: function (j) {
        if (!j || !j.rates) return null;
        return { fx: invert(j.rates), d: j.date || today() };
      } }
  ];

  function tryNext(i) {
    if (i >= SOURCES.length) return;
    var s = SOURCES[i];
    fetch(s.url, { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        var got = j && s.read(j);
        if (!got || !apply(got.fx, normDate(got.d))) { tryNext(i + 1); return; }
        writeCache(got.fx, normDate(got.d));
      })
      .catch(function () { tryNext(i + 1); });
  }

  /* open.er-api 는 '30 Aug 2026' 꼴로 준다. 배너·푸터가 YYYY-MM-DD 를
     기대하므로 못 알아보면 오늘 날짜로 둔다 (표시용일 뿐 계산에 안 쓰인다). */
  function normDate(d) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
    var t = Date.parse(d);
    if (!isFinite(t)) return today();
    var x = new Date(t);
    var p = function (n) { return n < 10 ? '0' + n : '' + n; };
    return x.getUTCFullYear() + '-' + p(x.getUTCMonth() + 1) + '-' + p(x.getUTCDate());
  }

  var cached = readCache();
  if (cached && apply(cached.fx, cached.d)) return;
  if (typeof fetch === 'function') tryNext(0);
})();
