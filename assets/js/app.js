/* =========================================================
   대한민국 부채시계 — app.js
   화면 1: 실시간 부채시계   화면 2: 연도별·정권별 증가율
   ========================================================= */
(function () {
  'use strict';

  var R = window.RDC, DATA = window.ROK_DATA, H = window.ROK_HISTORY;
  var NK = window.ROK_NK, JP = window.ROK_JP;
  var $ = function (id) { return document.getElementById(id); };

  var LIVE = window.ROK_LIVE || {};
  var SEASON = DATA.SEASON || {};

  /* ================= 항목 수집 =================
     여기서 항목마다 두 가지를 한 번만 계산해 붙여 둔다.
       _anchor : live.js 가 최신 공표치를 주면 선형 외삽의 출발점을 그리로 옮긴다
       freq    : 패널에 적힌 기본값을 항목으로 내린다 (항목 쪽이 이긴다) */
  function anchorOf(it) {
    var A = it.id && LIVE.anchors && LIVE.anchors[it.id];
    if (!A || A.v == null || !A.d) return null;
    var t = Date.parse(A.d + 'T00:00:00+09:00'), v = +A.v;
    if (!isFinite(t) || !isFinite(v)) return null;
    return { v: v, t: t };
  }

  var ALL = [];
  function collect(it, panelFreq) {
    if (!it.freq && panelFreq) it.freq = panelFreq;
    it._anchor = anchorOf(it);
    ALL.push(it);
  }
  DATA.hero.forEach(function (it) { it._hero = true; collect(it, null); });
  DATA.panels.forEach(function (p) {
    p.items.forEach(function (it) { collect(it, p.freq); });
  });

  /* ================= 값 계산 ================= */

  /** 올해가 얼마나 지났는가 (0~1) — 전부 KST 기준 */
  function yearFrac(now) {
    return (now - R.startOfYear(now)) / R.yearLength(now);
  }

  /** 월별 가중치를 누적해 "연간 총액의 몇 %가 지금까지 쌓였는가" 를 준다.
   *  국세처럼 신고·납부가 특정 달에 몰리는 항목이 1년을 균등하게 쌓으면
   *  연중 내내 틀리고 12월 31일에만 맞는다. 이 함수가 그것을 교정한다.
   *  이번 달 안에서는 다시 균등하게 나눠 넣어 숫자가 매끄럽게 흐른다. */
  function seasonFrac(w, now) {
    var sum = 0, i;
    for (i = 0; i < 12; i++) sum += w[i];
    if (!(sum > 0)) return null;

    var d = R.kst(now), y = d.getUTCFullYear(), m = d.getUTCMonth();
    var acc = 0;
    for (i = 0; i < m; i++) acc += w[i];

    var mStart = Date.UTC(y, m, 1), mEnd = Date.UTC(y, m + 1, 1);
    var within = ((now + R.KST) - mStart) / (mEnd - mStart);
    if (!(within > 0)) within = 0; else if (within > 1) within = 1;

    return (acc + w[m] * within) / sum;
  }

  function rawValue(it, now) {
    if (it.text != null) return null;

    /* 카운트다운 — 목표 시각까지 남은 밀리초 (지났으면 음수) */
    if (it.until) {
      var tgt = typeof it.until === 'function' ? it.until(now) : Date.parse(it.until);
      return isFinite(tgt) ? tgt - now : 0;
    }
    if (it.progress) return yearFrac(now) * 100;
    if (it.fixed != null) return it.fixed;

    var base = it.base || 0, rate = it.rate || 0;
    if (it.daily) return base + rate * (now - R.startOfDay(now)) / R.YEAR_MS;

    if (it.yearly) {
      var w = it.season && SEASON[it.season];
      if (w) {
        var f = seasonFrac(w, now);
        if (f != null) return base + rate * f;
      }
      return base + rate * yearFrac(now);
    }

    /* 최신 공표치가 있으면 연초 기준값 대신 그 지점부터 외삽한다 */
    var a = it._anchor;
    if (a) return a.v + rate * (now - a.t) / R.YEAR_MS;

    return base + rate * (now - Date.parse(it.baseDate)) / R.YEAR_MS;
  }

  function computeAll(now) {
    var v = {}, pending = [];
    ALL.forEach(function (it) {
      if (it.derive) { pending.push(it); return; }
      it._v = rawValue(it, now);
      if (it.id) v[it.id] = it._v;
    });
    for (var pass = 0; pass < 3 && pending.length; pass++) {
      var next = [];
      pending.forEach(function (it) {
        var r;
        try { r = it.derive(v); } catch (e) { r = NaN; }
        if (isFinite(r)) { it._v = r; if (it.id) v[it.id] = r; }
        else next.push(it);
      });
      if (next.length === pending.length) break;
      pending = next;
    }
    pending.forEach(function (it) { it._v = 0; });
  }

  /* ================= 포맷 ================= */
  function signed(v, body) {
    return (v < 0 ? '<span class="neg">−</span>' : '') + body;
  }

  function fmtItem(it, full) {
    var loc = R.loc(), v = it._v;
    /* compact: 값이 딱 떨어지는 고정 금액에서 뒤쪽 0 그룹을 생략한다 */
    var cp = !!it.compact;
    var u = it.un ? R.unit(R.pick(it.un)) : '';
    switch (it.fmt) {
      case 'text':
        return R.pick(it.text);
      case 'money':
        /* noconv 는 통화를 바꿔도 항상 원화 — 숫자 표기만 현재 언어를 따른다 */
        if (it.noconv) return R.money(v, loc, full, cp, R.CURRENCIES.KRW);
        return R.money(R.toLocal(v), loc, full, cp);
      case 'usd':
        return R.money(R.usdToLocal(v), loc, full, cp);
      /* 카운트다운 — v 는 남은 밀리초.
         '2055년' 같은 죽은 글자보다 남은 시간이 훨씬 잘 읽힌다. */
      case 'until':
        var uDays = Math.max(0, Math.floor(v / 86400e3));
        var uY = Math.floor(uDays / 365.25);
        var uD = Math.max(0, uDays - Math.round(uY * 365.25));
        return (uY ? R.comma(uY) + R.unit(R.t('uYear')) : '') +
               R.comma(uD) + R.unit(R.t('uDay'));
      case 'dday':
        var dDays = Math.ceil(v / 86400e3);
        if (dDays <= 0) return R.t('dday0');
        return R.unit('D−') + R.comma(dDays) + R.unit(R.t('uDay'));
      case 'pct':
        return signed(v, R.dec(v, 1, loc) + R.unit('%'));
      case 'f1':
        return signed(v, R.dec(v, 1, loc) + u);
      case 'f2':
        return signed(v, R.dec(v, 2, loc) + u);
      default:
        return signed(v, R.count(v, loc, full) + u);
    }
  }

  var RING = { red: '', green: 'g', blue: 'b', gray: 'k', ink: 'k', slate: 'k', mute: 'k' };

  /* 판독창 폭에 맞춰 숫자 크기를 줄인다 (자릿수가 바뀔 때만 실행) */
  function fit(it) {
    var n = it._node; if (!n) return;
    var box = n.parentNode;
    n.style.fontSize = '';
    var avail = box.clientWidth - 14;
    if (avail <= 0) return;
    var w = n.getBoundingClientRect().width;
    if (w > avail) {
      var cur = parseFloat(window.getComputedStyle(n).fontSize) || 14;
      n.style.fontSize = Math.max(8, Math.floor(cur * avail / w * 10) / 10) + 'px';
    }
  }
  function fitAll() { ALL.forEach(fit); }

  /* ================= 화면 1 렌더 ================= */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /** 일본 참조선 — 같은 지표의 일본 값을 셀 아래에 한 줄로 덧붙인다.
   *  시계처럼 흐르지 않는 고정 비교값이므로 그릴 때 한 번만 계산한다.
   *  (통화를 바꾸면 buildClock 이 다시 불려 금액 참조선도 함께 환산된다) */
  function refHTML(it) {
    var r = it.ref;
    if (!r) return '';
    var f = r.fmt || it.fmt, loc = R.loc(), v = r.v, body;
    var u = it.un ? R.unit(R.pick(it.un)) : '';
    switch (f) {
      case 'pct':   body = R.dec(v, 1, loc) + R.unit('%'); break;
      case 'f1':    body = R.dec(v, 1, loc) + u; break;
      case 'f2':    body = R.dec(v, 2, loc) + u; break;
      case 'jpy':   body = R.money(R.jpyToLocal(v), loc, false, true); break;
      case 'money': body = R.money(R.toLocal(v), loc, false, true); break;
      case 'usd':   body = R.money(R.usdToLocal(v), loc, false, true); break;
      default:      body = R.count(v, loc, false) + u;
    }
    return '<div class="ref">' + esc(R.t('refPrefix')) + ' ' + body + '</div>';
  }

  /* 이 숫자가 어떤 종류인가 — 라벨 왼쪽의 작은 점 + 툴팁 한 줄.
     모든 숫자를 시각적으로 동등하게 두면 '이번 달 확정 공표치'와
     '작년 증가율로 그은 직선'을 방문자가 구분할 방법이 없다.
     불확실성을 감추지 않고 드러내는 쪽이 사이트를 더 신뢰하게 만든다. */
  var FREQ = ['live', 'daily', 'monthly', 'quarterly',
              'annual', 'budget', 'legal', 'projection'];
  function freqOf(it) {
    var f = it.freq || 'projection';
    return FREQ.indexOf(f) < 0 ? 'projection' : f;
  }

  function cellHTML(it, idx) {
    var ring = RING[it.c] != null ? RING[it.c] : 'k';
    var size = it.size || 'md';
    var sub = it.s ? '<div class="sub">' + esc(R.pick(it.s)) + '</div>' : '';
    var fq = freqOf(it);
    /* 참조선의 출처도 같은 툴팁에 붙인다 — 근거 없는 숫자를 띄우지 않기 위해 */
    var tip = [R.t('freqTip') + ': ' + R.t('fq_' + fq), it.src, it.ref && it.ref.s]
              .filter(Boolean).join(' · ');
    it._el = 'n' + idx;
    return '<div class="cell ' + size + '"' + (tip ? ' title="' + esc(tip) + '"' : '') + '>' +
             '<div class="tag ' + ring + '">' +
               '<i class="fq fq-' + fq + '"></i>' + esc(R.pick(it.l)) + '</div>' +
             '<div class="readout ' + ring + '">' +
               '<span class="num c-' + (it.c || 'ink') + '" id="' + it._el + '">—</span>' +
             '</div>' + sub + refHTML(it) +
           '</div>';
  }

  function buildClock() {
    var n = 0, h = '';
    DATA.hero.forEach(function (it) { h += cellHTML(it, n++); });
    $('hero').innerHTML = h;

    h = '';
    DATA.panels.forEach(function (p) {
      h += '<section class="panel t-' + p.tone + '">' +
             '<div class="panel-t">' + esc(R.pick(p.t)) + '</div>' +
             '<div class="panel-body">';
      p.items.forEach(function (it) { h += cellHTML(it, n++); });
      h += '</div></section>';
    });
    $('panels').innerHTML = h;

    ALL.forEach(function (it) { it._node = $(it._el); it._last = null; it._fitLen = -1; });
  }

  /* ================= 상태 ================= */
  var paused = false, offset = 0, frozenAt = 0, view = 'clock';
  /* 만·억·조가 있는 CJK 는 축약이 기본, 나머지 언어는 자릿수가 굴러가는
     쪽이 이 사이트의 본체이므로 전체 자릿수가 기본. 사용자가 버튼을 한 번
     누르면 그 선택을 언어를 바꿔도 유지한다. */
  var fullPinned = false;
  var fullMode = R.loc().group !== 'cjk';
  function vnow() { return (paused ? frozenAt : Date.now()) + offset; }

  /* ================= 틱 ================= */
  function paint() {
    var now = vnow();
    computeAll(now);

    if (view === 'clock') {
      for (var i = 0; i < ALL.length; i++) {
        var it = ALL[i];
        if (!it._node) continue;
        var s = fmtItem(it, fullMode);
        if (s !== it._last) {
          it._node.innerHTML = s;
          it._last = s;
          var plain = s.replace(/<[^>]+>/g, '').length;
          if (plain !== it._fitLen) { it._fitLen = plain; fit(it); }
        }
      }
    }

    var d = R.kst(now), p2 = function (x) { return x < 10 ? '0' + x : '' + x; };
    $('clock').textContent = p2(d.getUTCHours()) + ':' + p2(d.getUTCMinutes()) + ':' + p2(d.getUTCSeconds());
    $('clockDate').textContent = d.getUTCFullYear() + '.' + p2(d.getUTCMonth() + 1) + '.' + p2(d.getUTCDate());
  }

  var last = 0;
  function loop(t) {
    if (t - last >= 50) { last = t; paint(); }
    requestAnimationFrame(loop);
  }

  /* =========================================================
     화면 2 — 증가율
     ========================================================= */
  var METRICS = [
    { key: 'debt',      src: function () { return H.debt; },      c: '#e34948' },
    { key: 'household', src: function () { return H.household; }, c: '#eb6834' },
    { key: 'gdp',       src: function () { return H.gdp; },       c: '#2a78d6' }
  ];
  var metric = 'debt';

  var TT = null;
  function tipShow(html, e) {
    if (!TT) TT = $('tt');
    TT.innerHTML = html;
    TT.classList.add('on');
    var x = e.clientX + 14, y = e.clientY - 12;
    if (x + TT.offsetWidth > window.innerWidth - 8) x = e.clientX - TT.offsetWidth - 14;
    TT.style.left = x + 'px';
    TT.style.top = y + 'px';
  }
  function tipHide() { if (TT) TT.classList.remove('on'); }

  function svgEl(tag, attrs) {
    var e = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs) if (attrs.hasOwnProperty(k)) e.setAttribute(k, attrs[k]);
    return e;
  }

  function niceStep(max, target) {
    var raw = max / target, mag = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10));
    var n = raw / mag;
    var s = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
    return s * mag;
  }

  /* ---------- 차트 0 : 연도별 누적 잔액 ---------- */
  function drawLevel(host, W) {
    var m = null;
    METRICS.forEach(function (x) { if (x.key === metric) m = x; });
    var ser = m.src(), from = ser.from, v = ser.v;

    var pts = [];
    for (var i = 0; i < v.length; i++) {
      pts.push({ y: from + i, v: v[i], proj: (from + i) > H.lastActual,
                 r: i ? (v[i] / v[i - 1] - 1) * 100 : null });
    }

    var Hh = 280, PL = 54, PR = 12, PT = 20, PB = 26;
    var iw = W - PL - PR, ih = Hh - PT - PB;

    var mx = 0;
    pts.forEach(function (p) { if (p.v > mx) mx = p.v; });
    var step = niceStep(mx, 5), top = Math.ceil(mx / step) * step;

    var y = function (val) { return PT + ih - val / top * ih; };
    var bw = iw / pts.length, barW = Math.max(2, bw * 0.72);
    var base = PT + ih;

    var svg = svgEl('svg', { viewBox: '0 0 ' + W + ' ' + Hh, width: W, height: Hh });

    for (var g = 0; g <= top + 1e-9; g += step) {
      svg.appendChild(svgEl('line', { x1: PL, x2: PL + iw, y1: y(g), y2: y(g),
        'class': g === 0 ? 'zeroline' : 'gridline' }));
      var tx = svgEl('text', { x: PL - 7, y: y(g) + 3.4, 'class': 'tick', 'text-anchor': 'end' });
      tx.textContent = R.comma(g);
      svg.appendChild(tx);
    }

    var everyN = bw >= 26 ? 1 : bw >= 15 ? 2 : bw >= 9 ? 3 : 5;
    var unitTxt = R.pick(H.unitTrn);

    pts.forEach(function (p, i) {
      var cx = PL + bw * i + bw / 2, yy = y(p.v);
      var rect = svgEl('rect', {
        x: cx - barW / 2, y: yy, width: barW, height: Math.max(base - yy, 1),
        rx: Math.min(3, barW / 2), fill: m.c, 'class': 'bar' + (p.proj ? ' proj' : '')
      });
      rect.addEventListener('mousemove', function (e) {
        tipShow('<b>' + p.y + '</b>' + (p.proj ? ' (' + R.t('proj') + ')' : '') + '<br>' +
                '<b>' + R.dec(p.v, 1) + '</b> ' + unitTxt +
                (p.r == null ? '' : '<br>' + R.t('yoy') + ' <b>' +
                  (p.r >= 0 ? '+' : '−') + R.dec(p.r, 1) + '%</b>'), e);
      });
      rect.addEventListener('mouseleave', tipHide);
      svg.appendChild(rect);

      if (i % everyN === 0 || i === pts.length - 1) {
        var t = svgEl('text', { x: cx, y: Hh - PB + 14, 'class': 'tick', 'text-anchor': 'middle' });
        t.textContent = everyN >= 3 ? ("'" + String(p.y).slice(2)) : p.y;
        svg.appendChild(t);
      }
    });

    /* 처음과 마지막만 직접 라벨 */
    [0, pts.length - 1].forEach(function (i) {
      var p = pts[i], cx = PL + bw * i + bw / 2;
      var t = svgEl('text', { x: cx, y: y(p.v) - 6, 'class': 'dlabel',
        'text-anchor': i === 0 ? 'start' : 'end' });
      t.textContent = R.comma(Math.round(p.v));
      svg.appendChild(t);
    });

    host.innerHTML = '';
    host.appendChild(svg);
  }

  /* ---------- 차트 A : 연도별 전년 대비 증가율 ---------- */
  function drawYoY(host, W) {
    var m = null;
    METRICS.forEach(function (x) { if (x.key === metric) m = x; });
    var ser = m.src(), from = ser.from, v = ser.v;

    var pts = [];
    for (var i = 1; i < v.length; i++) {
      pts.push({ y: from + i, r: (v[i] / v[i - 1] - 1) * 100, proj: (from + i) > H.lastActual, cur: v[i], prev: v[i - 1] });
    }

    var Hh = 300, PL = 44, PR = 10, PT = 16, PB = 26;
    var iw = W - PL - PR, ih = Hh - PT - PB;

    var mx = 0, mn = 0;
    pts.forEach(function (p) { if (p.r > mx) mx = p.r; if (p.r < mn) mn = p.r; });
    var step = niceStep(Math.max(mx, -mn, 1), 4);
    var top = Math.ceil(mx / step) * step, bot = Math.min(0, Math.floor(mn / step) * step);
    if (top === bot) top = step;

    var y = function (val) { return PT + ih - (val - bot) / (top - bot) * ih; };
    var bw = iw / pts.length;
    var barW = Math.max(2, bw * 0.7);

    var svg = svgEl('svg', { viewBox: '0 0 ' + W + ' ' + Hh, width: W, height: Hh });

    for (var g = bot; g <= top + 1e-9; g += step) {
      svg.appendChild(svgEl('line', { x1: PL, x2: PL + iw, y1: y(g), y2: y(g),
        'class': Math.abs(g) < 1e-9 ? 'zeroline' : 'gridline' }));
      var tx = svgEl('text', { x: PL - 6, y: y(g) + 3.4, 'class': 'tick', 'text-anchor': 'end' });
      tx.textContent = (g > 0 ? '+' : '') + (Math.round(g * 10) / 10) + '%';
      svg.appendChild(tx);
    }

    var everyN = bw >= 26 ? 1 : bw >= 15 ? 2 : bw >= 9 ? 3 : 5;
    var zeroY = y(0);

    pts.forEach(function (p, i) {
      var cx = PL + bw * i + bw / 2;
      var yy = y(p.r), h = Math.abs(yy - zeroY);
      var rect = svgEl('rect', {
        x: cx - barW / 2, y: Math.min(yy, zeroY), width: barW, height: Math.max(h, 1),
        rx: Math.min(3, barW / 2), fill: p.r >= 0 ? m.c : '#2a78d6',
        'class': 'bar' + (p.proj ? ' proj' : '')
      });
      rect.addEventListener('mousemove', function (e) {
        tipShow('<b>' + p.y + '</b>' + (p.proj ? ' (' + R.t('proj') + ')' : '') + '<br>' +
                R.t('yoy') + ' <b>' + (p.r >= 0 ? '+' : '−') + R.dec(p.r, 1) + '%</b><br>' +
                R.dec(p.prev, 1) + ' → <b>' + R.dec(p.cur, 1) + '</b> ' + R.pick(H.unitTrn), e);
      });
      rect.addEventListener('mouseleave', tipHide);
      svg.appendChild(rect);

      if (i % everyN === 0 || i === pts.length - 1) {
        var t = svgEl('text', { x: cx, y: Hh - PB + 14, 'class': 'tick', 'text-anchor': 'middle' });
        t.textContent = everyN >= 3 ? ("'" + String(p.y).slice(2)) : p.y;
        svg.appendChild(t);
      }
    });

    /* 최대·최소만 직접 라벨 */
    [pts.reduce(function (a, b) { return b.r > a.r ? b : a; }),
     pts.reduce(function (a, b) { return b.r < a.r ? b : a; })].forEach(function (p) {
      var i = pts.indexOf(p), cx = PL + bw * i + bw / 2, yy = y(p.r);
      var t = svgEl('text', { x: cx, y: p.r >= 0 ? yy - 5 : yy + 12, 'class': 'dlabel', 'text-anchor': 'middle' });
      t.textContent = (p.r >= 0 ? '+' : '−') + R.dec(p.r, 1) + '%';
      svg.appendChild(t);
    });

    host.innerHTML = '';
    host.appendChild(svg);
    return pts;
  }

  /* ---------- 차트 B : 정권별 연평균 증가율 ---------- */
  function drawAdmin(host, W) {
    var d = H.debt, from = d.from, v = d.v;
    var get = function (y) { return v[y - from]; };

    var rows = H.admins.map(function (a) {
      var s = get(a.y0), e = get(a.y1), n = a.y1 - a.y0;
      return { a: a, s: s, e: e, n: n, add: e - s, mult: e / s,
               cagr: (Math.pow(e / s, 1 / n) - 1) * 100 };
    });

    var PL = Math.min(112, Math.max(76, W * 0.13)), PR = 58, PT = 6, PB = 22;
    var rowH = 34, ih = rows.length * rowH;
    var Hh = ih + PT + PB, iw = W - PL - PR;

    var mx = 0;
    rows.forEach(function (r) { if (r.cagr > mx) mx = r.cagr; });
    var step = niceStep(mx, 4), top = Math.ceil(mx / step) * step;

    var svg = svgEl('svg', { viewBox: '0 0 ' + W + ' ' + Hh, width: W, height: Hh });

    for (var g = 0; g <= top + 1e-9; g += step) {
      var gx = PL + g / top * iw;
      svg.appendChild(svgEl('line', { x1: gx, x2: gx, y1: PT, y2: PT + ih,
        'class': g === 0 ? 'zeroline' : 'gridline' }));
      var tx = svgEl('text', { x: gx, y: Hh - 6, 'class': 'tick', 'text-anchor': 'middle' });
      tx.textContent = (Math.round(g * 10) / 10) + '%';
      svg.appendChild(tx);
    }

    rows.forEach(function (r, i) {
      var cy = PT + rowH * i + rowH / 2;
      var bh = 17, bw = Math.max(2, r.cagr / top * iw);

      var nm = svgEl('text', { x: PL - 8, y: cy + 4, 'class': 'dlabel', 'text-anchor': 'end' });
      nm.textContent = R.pick(r.a.name);
      svg.appendChild(nm);

      var rect = svgEl('rect', {
        x: PL, y: cy - bh / 2, width: bw, height: bh, rx: 4, fill: '#e34948',
        'class': 'bar' + (r.a.ongoing ? ' proj' : '')
      });
      rect.addEventListener('mousemove', function (e) {
        tipShow('<b>' + R.pick(r.a.name) + '</b> · ' + R.pick(r.a.term) +
                (r.a.ongoing ? ' (' + R.t('inProgress') + ')' : '') + '<br>' +
                r.a.y0 + ' → ' + r.a.y1 + ': <b>' + R.dec(r.s, 1) + '</b> → <b>' + R.dec(r.e, 1) + '</b> ' +
                R.pick(H.unitTrn) + '<br>' +
                R.t('increase') + ' <b>+' + R.dec(r.add, 1) + '</b> · ' +
                R.t('multiple') + ' <b>' + R.dec(r.mult, 2) + '×</b><br>' +
                R.t('cagr') + ' <b>+' + R.dec(r.cagr, 1) + '%</b>', e);
      });
      rect.addEventListener('mouseleave', tipHide);
      svg.appendChild(rect);

      var lb = svgEl('text', { x: PL + bw + 7, y: cy + 4, 'class': 'dlabel' });
      lb.textContent = '+' + R.dec(r.cagr, 1) + '%' + (r.a.ongoing ? ' *' : '');
      svg.appendChild(lb);
    });

    host.innerHTML = '';
    host.appendChild(svg);
    return rows;
  }

  /* ---------- 차트 C : GDP 대비 국가채무 시나리오 ----------
   * 부채비율은 두 값으로만 움직인다 — 그 해 새로 지는 빚 / GDP (%) 와
   * 명목 GDP 성장률 (%). 출발값은 debt·gdp 계열의 마지막 두 해에서
   * 직접 끈어오므로 통계를 갱신하면 전망도 같이 움직인다.
   */
  function projPaths() {
    var P = H.projection, d = H.debt, g = H.gdp;
    var n = d.v.length, m = g.v.length;
    var Y0 = d.from + n - 1;
    var D0 = d.v[n - 1], G0 = g.v[m - 1];
    var def0 = (D0 - d.v[n - 2]) / G0 * 100;
    var gr0 = (G0 / g.v[m - 2] - 1) * 100;

    return P.scenarios.map(function (sc) {
      var def1 = sc.def[0] == null ? def0 : sc.def[0], defY = sc.def[1];
      var gr1 = sc.gr[0], grY = sc.gr[1];
      var dd = D0, gg = G0, pts = [{ y: Y0, r: D0 / G0 * 100 }], hit = {}, cut = false;
      for (var y = Y0 + 1; y <= P.to + 80; y++) {
        var t1 = Math.min(1, (y - Y0) / (defY - Y0));
        var t2 = Math.min(1, (y - Y0) / (grY - Y0));
        dd += gg * (def0 + (def1 - def0) * t1) / 100;
        gg *= 1 + (gr0 + (gr1 - gr0) * t2) / 100;
        var r = dd / gg * 100;
        if (!cut && y <= P.to) {
          if (r > P.ymax) cut = true;          /* 상한을 넘기면 선을 자른다 */
          else pts.push({ y: y, r: r });
        }
        for (var k = 0; k < P.targets.length; k++) {
          var T = P.targets[k];
          if (!hit[T] && r >= T) hit[T] = y;
        }
      }
      return { sc: sc, pts: pts, hit: hit, def1: def1, gr1: gr1 };
    });
  }

  function drawRatio(host, W) {
    var P = H.projection, d = H.debt, g = H.gdp;
    var S = projPaths();
    var Y0 = d.from + d.v.length - 1;
    var X0 = d.from, X1 = P.to, YM = P.ymax;

    var Hh = 330, PL = 40, PR = 44, PT = 16, PB = 26;
    var iw = W - PL - PR, ih = Hh - PT - PB;
    var px = function (y) { return PL + (y - X0) / (X1 - X0) * iw; };
    var py = function (r) { return PT + ih - Math.min(r, YM) / YM * ih; };

    var svg = svgEl('svg', { viewBox: '0 0 ' + W + ' ' + Hh, width: W, height: Hh });

    for (var v = 0; v <= YM; v += 40) {
      svg.appendChild(svgEl('line', { x1: PL, x2: PL + iw, y1: py(v), y2: py(v),
        'class': v === 0 ? 'zeroline' : 'gridline' }));
      var ty = svgEl('text', { x: PL - 6, y: py(v) + 3.4, 'class': 'tick', 'text-anchor': 'end' });
      ty.textContent = v + '%';
      svg.appendChild(ty);
    }

    var stepX = iw / (X1 - X0) < 4 ? 20 : 10;
    for (var yy = 2000; yy <= X1; yy += stepX) {
      svg.appendChild(svgEl('line', { x1: px(yy), x2: px(yy), y1: PT, y2: PT + ih, 'class': 'gridline' }));
      var tx = svgEl('text', { x: px(yy), y: Hh - PB + 14, 'class': 'tick', 'text-anchor': 'middle' });
      tx.textContent = yy;
      svg.appendChild(tx);
    }

    /* 전망 구간 음영 */
    svg.appendChild(svgEl('rect', { x: px(Y0), y: PT, width: PL + iw - px(Y0), height: ih,
      fill: '#000', opacity: '.035' }));

    /* 기준선 */
    P.targets.forEach(function (T) {
      svg.appendChild(svgEl('line', { x1: PL, x2: PL + iw, y1: py(T), y2: py(T), 'class': 'goalline' }));
      var gt = svgEl('text', { x: PL + iw + 5, y: py(T) + 3.4, 'class': 'goaltag' });
      gt.textContent = T + '%';
      svg.appendChild(gt);
    });

    function path(pts) {
      return pts.map(function (q, i) {
        return (i ? 'L' : 'M') + px(q.y).toFixed(1) + ' ' + py(q.r).toFixed(1);
      }).join('');
    }

    /* 실적선 */
    var act = [];
    for (var i = 0; i < d.v.length; i++) act.push({ y: d.from + i, r: d.v[i] / g.v[i] * 100 });
    svg.appendChild(svgEl('path', { d: path(act), fill: 'none', stroke: '#2b2820', 'stroke-width': 2.4 }));

    /* 시나리오선 */
    S.forEach(function (r) {
      svg.appendChild(svgEl('path', { d: path(r.pts), fill: 'none', stroke: r.sc.c,
        'stroke-width': r.sc.key === 'base' ? 2.4 : 1.8,
        'stroke-dasharray': r.sc.dash, opacity: r.sc.key === 'base' ? 1 : .85 }));
    });

    /* 현재 위치 */
    svg.appendChild(svgEl('line', { x1: px(Y0), x2: px(Y0), y1: PT, y2: PT + ih,
      stroke: '#e34948', 'stroke-width': 1, 'stroke-dasharray': '3 3' }));
    var nw = svgEl('text', { x: px(Y0) + 5, y: PT + 11, 'class': 'nowlbl' });
    nw.textContent = Y0 + '  ' + R.dec(act[act.length - 1].r, 1) + '%';
    svg.appendChild(nw);

    /* 통과 지점 — markMax 이하만 표기한다.
       좁은 화면에서는 연도 라벨이 서로 겹치므로 기준 시나리오만 남긴다 */
    var wide = iw / (X1 - X0) >= 6;
    S.forEach(function (r, si) {
      P.targets.forEach(function (T) {
        var h = r.hit[T];
        if (!h || T > P.markMax || h > X1) return;
        if (!wide && r.sc.key !== 'base') {
          svg.appendChild(svgEl('circle', { cx: px(h), cy: py(T), r: 2.6, fill: r.sc.c,
            stroke: '#fff', 'stroke-width': 1.2 }));
          return;
        }
        svg.appendChild(svgEl('circle', { cx: px(h), cy: py(T), r: 3.4, fill: r.sc.c,
          stroke: '#fff', 'stroke-width': 1.4 }));
        var hl = svgEl('text', { x: px(h), y: py(T) - 7 - (si % 2) * 10, 'class': 'hitlbl',
          fill: r.sc.c, 'text-anchor': 'middle' });
        hl.textContent = h;
        svg.appendChild(hl);
      });
    });

    /* 호버 — 연도별 값 */
    var hover = svgEl('rect', { x: PL, y: PT, width: iw, height: ih, fill: 'transparent' });
    hover.addEventListener('mousemove', function (e) {
      var box = svg.getBoundingClientRect();
      var sx = (e.clientX - box.left) / box.width * W;      /* viewBox 좌표로 환산 */
      var yr = Math.round(X0 + (sx - PL) / iw * (X1 - X0));
      if (yr < X0) yr = X0;
      if (yr > X1) yr = X1;
      var html = '<b>' + yr + '</b>';
      if (yr <= Y0) {
        var a = act[yr - X0];
        html += '<br>' + R.t('actual') + ' <b>' + R.dec(a.r, 1) + '%</b>';
      } else {
        S.forEach(function (r) {
          var q = null;
          for (var j = 0; j < r.pts.length; j++) if (r.pts[j].y === yr) { q = r.pts[j]; break; }
          html += '<br><span style="color:' + r.sc.c + '">\u25cf</span> ' + esc(R.t(r.sc.name)) +
                  ' <b>' + (q ? R.dec(q.r, 1) + '%' : '&gt; ' + YM + '%') + '</b>';
        });
      }
      tipShow(html, e);
    });
    hover.addEventListener('mouseleave', tipHide);
    svg.appendChild(hover);

    host.innerHTML = '';
    host.appendChild(svg);
    return S;
  }

  /* ---------- 증가율 화면 조립 ---------- */
  function buildGrowth() {
    $('grTitle').textContent = R.t('trTitle');
    $('grIntro').textContent = R.t('trIntro');

    var mn = { debt: H.debt.title, household: H.household.title, gdp: H.gdp.title };
    $('picker').innerHTML = METRICS.map(function (m) {
      return '<button type="button" class="btn' + (m.key === metric ? ' on' : '') +
             '" data-metric="' + m.key + '">' + esc(R.pick(mn[m.key])) + '</button>';
    }).join('');

    $('charts').innerHTML =
      '<div class="chart-wrap">' +
        '<div class="chart-h"><h3 id="cAt"></h3><span id="cAr"></span></div>' +
        '<p class="chart-sub" id="cAs"></p>' +
        '<div class="legend" id="cAl"></div>' +
        '<div class="chart" id="cA"></div>' +
        '<details class="tblbox"><summary id="cAsum"></summary><div class="scroll" id="cAtbl"></div></details>' +
      '</div>' +
      '<div class="chart-wrap">' +
        '<div class="chart-h"><h3 id="cLt"></h3><span id="cLr"></span></div>' +
        '<p class="chart-sub" id="cLs"></p>' +
        '<div class="legend" id="cLl"></div>' +
        '<div class="chart" id="cL"></div>' +
      '</div>' +
      '<div class="chart-wrap">' +
        '<div class="chart-h"><h3 id="cBt"></h3></div>' +
        '<p class="chart-sub" id="cBs"></p>' +
        '<div class="chart" id="cB"></div>' +
        '<div class="scroll" id="cBtbl" style="overflow-x:auto;margin-top:12px"></div>' +
      '</div>' +
      '<div class="chart-wrap">' +
        '<div class="chart-h"><h3 id="cRt"></h3><span id="cRr"></span></div>' +
        '<div class="caveat"><b id="cRtag"></b><span id="cRwarn"></span></div>' +
        '<p class="chart-sub" id="cRs"></p>' +
        '<div class="legend" id="cRl"></div>' +
        '<div class="chart" id="cR"></div>' +
        '<div class="scroll" id="cRtbl" style="overflow-x:auto;margin-top:12px"></div>' +
      '</div>';

    renderGrowth();
  }

  function renderRatio() {
    var P = H.projection;
    var host = $('cR'), W = Math.max(320, host.clientWidth || 900);

    $('cRt').textContent = R.t('ratioTitle');
    $('cRr').textContent = H.debt.from + ' ~ ' + P.to;
    $('cRtag').textContent = R.t('caveatTag');
    $('cRwarn').textContent = R.t('ratioNote');
    $('cRs').textContent = R.t('ratioSub');

    var S = drawRatio(host, W);

    $('cRl').innerHTML =
      '<span><i style="background:#2b2820"></i>' + R.t('actual') + '</span>' +
      S.map(function (r) {
        return '<span><i style="background:' + r.sc.c + '"></i>' + esc(R.t(r.sc.name)) + '</span>';
      }).join('');

    $('cRtbl').innerHTML = '<table class="admtbl"><thead><tr>' +
      '<th>' + R.t('scenario') + '</th><th>' + R.t('assumption') + '</th>' +
      P.targets.map(function (T) { return '<th>' + T + '%</th>'; }).join('') +
      '</tr></thead><tbody>' +
      S.map(function (r) {
        var asm = R.t('deficitPct') + ' ' + R.dec(r.def1, 1) + '% \u00b7 ' +
                  R.t('nomGrowth') + ' ' + R.dec(r.gr1, 1) + '%';
        return '<tr>' +
          '<td><b style="color:' + r.sc.c + '">' + esc(R.t(r.sc.name)) + '</b></td>' +
          '<td>' + esc(asm) + '</td>' +
          P.targets.map(function (T) {
            return r.hit[T] ? '<td class="n">' + r.hit[T] + '</td>'
                            : '<td class="n" style="opacity:.5">' + esc(R.t('notReach')) + '</td>';
          }).join('') + '</tr>';
      }).join('') + '</tbody></table>';
  }

  function renderGrowth() {
    if (view !== 'growth') return;
    var mn = { debt: H.debt.title, household: H.household.title, gdp: H.gdp.title };

    /* --- 차트 A --- */
    var hostA = $('cA'), W = Math.max(320, hostA.clientWidth || 900);
    $('cAt').textContent = R.pick(mn[metric]) + ' — ' + R.t('yoy');
    var ser = metric === 'debt' ? H.debt : metric === 'household' ? H.household : H.gdp;
    $('cAr').textContent = (ser.from + 1) + ' ~ ' + (ser.from + ser.v.length - 1);
    $('cAs').textContent = R.t('srcNote');
    $('cAl').innerHTML =
      '<span><i style="background:#e34948"></i>' + R.t('growth') + '</span>' +
      '<span><i style="background:#2a78d6"></i>' + R.t('decrease') + '</span>' +
      '<span><i style="background:#e34948;opacity:.5"></i>' + R.t('proj') + '</span>';
    var pts = drawYoY(hostA, W);

    $('cAsum').textContent = R.t('tableView');
    $('cAtbl').innerHTML = '<table class="admtbl"><thead><tr><th>' + R.t('year') + '</th><th>' +
      R.pick(H.unitTrn) + '</th><th>' + R.t('yoy') + '</th></tr></thead><tbody>' +
      pts.map(function (p) {
        return '<tr' + (p.proj ? ' class="ongoing"' : '') + '><td>' + p.y + (p.proj ? ' *' : '') +
               '</td><td class="n">' + R.dec(p.cur, 1) + '</td><td class="' + (p.r >= 0 ? 'up' : 'n') + '">' +
               (p.r >= 0 ? '+' : '−') + R.dec(p.r, 1) + '%</td></tr>';
      }).join('') + '</tbody></table>';

    /* --- 누적 잔액 --- */
    var mc = null;
    METRICS.forEach(function (x) { if (x.key === metric) mc = x; });
    var hostL = $('cL'), WL = Math.max(320, hostL.clientWidth || 900);
    $('cLt').textContent = R.pick(mn[metric]) + ' — ' + R.t('level');
    $('cLr').textContent = ser.from + ' ~ ' + (ser.from + ser.v.length - 1) +
                           ' · ' + R.pick(H.unitTrn);
    $('cLs').textContent = R.t('levelNote');
    $('cLl').innerHTML =
      '<span><i style="background:' + mc.c + '"></i>' + R.t('actual') + '</span>' +
      '<span><i style="background:' + mc.c + ';opacity:.5"></i>' + R.t('proj') + '</span>';
    drawLevel(hostL, WL);

    /* --- 차트 C : 부채비율 시나리오 (지표 선택과 무관) --- */
    renderRatio();

    /* --- 차트 B --- */
    var hostB = $('cB'), W2 = Math.max(320, hostB.clientWidth || 900);
    $('cBt').textContent = R.t('byAdmin');
    $('cBs').textContent = R.t('adminNote');
    var rows = drawAdmin(hostB, W2);

    $('cBtbl').innerHTML = '<table class="admtbl"><thead><tr>' +
      '<th>' + R.t('president') + '</th><th>' + R.t('term') + '</th><th>' + R.t('startEnd') + ' (' + R.pick(H.unitTrn) + ')</th>' +
      '<th>' + R.t('increase') + '</th><th>' + R.t('multiple') + '</th><th>' + R.t('cagr') + '</th>' +
      '</tr></thead><tbody>' +
      rows.map(function (r) {
        return '<tr' + (r.a.ongoing ? ' class="ongoing"' : '') + '>' +
          '<td>' + esc(R.pick(r.a.name)) + (r.a.ongoing ? ' *' : '') + '</td>' +
          '<td>' + esc(R.pick(r.a.term)) + (r.a.note ? ' <span style="color:#b06">· ' + esc(R.pick(r.a.note)) + '</span>' : '') + '</td>' +
          '<td class="n">' + R.dec(r.s, 1) + ' → ' + R.dec(r.e, 1) + '</td>' +
          '<td class="up">+' + R.dec(r.add, 1) + '</td>' +
          '<td class="n">' + R.dec(r.mult, 2) + '×</td>' +
          '<td class="up">+' + R.dec(r.cagr, 1) + '%</td></tr>';
      }).join('') + '</tbody></table>' +
      '<p style="font-size:10.5px;color:#8a857a;margin:7px 0 0">* ' + R.t('inProgress') + '</p>';
  }

  /* =========================================================
     화면 3 · 4 — 두 나라 비교 (남북 · 한일)
     -----------------------------------------------------------
     두 화면은 데이터와 라벨만 다르고 그리는 방식은 같습니다.
     새 비교 화면을 붙이려면 CMP 에 항목을 하나 더 넣으십시오.
     ========================================================= */

  /** 비교 화면 정의
   *  data : 데이터 객체        a / b : 행에서 왼쪽 · 오른쪽 값을 담은 필드 이름
   *  ids  : 이 화면이 쓸 DOM id
   *  keys : 나라 이름을 담은 ui.js 의 문구 키 */
  var CMP = {
    compare: {
      data: function () { return NK; }, a: 'south', b: 'north',
      ids:  { title: 'cmpTitle', tag: 'caveatTag', txt: 'caveatTxt', host: 'cmp' },
      keys: { title: 'cmpTitle', a: 'south', aFull: 'southFull', b: 'north', bFull: 'northFull' }
    },
    jp: {
      data: function () { return JP; }, a: 'kr', b: 'jp',
      ids:  { title: 'jpTitle', tag: 'jpCaveatTag', txt: 'jpCaveatTxt', host: 'jpcmp' },
      keys: { title: 'jpTitle', a: 'korea', aFull: 'koreaFull', b: 'japan', bFull: 'japanFull' }
    }
  };

  /** 비교 행 한 칸의 값을 현재 언어·통화로 렌더.
   *  fmt 을 따로 받는 이유: 한일 비교는 왼쪽이 원화, 오른쪽이 엔화라
   *  같은 행 안에서도 통화 기준이 다릅니다 (row.bfmt). */
  function cmpValue(row, v, fmt) {
    switch (fmt) {
      case 'text':  return esc(R.pick(v));
      case 'money': return R.money(R.toLocal(v), R.loc(), false, true);
      case 'jpy':   return R.money(R.jpyToLocal(v), R.loc(), false, true);
      case 'usd':   return R.money(R.usdToLocal(v), R.loc(), false, true);
      case 'pct':   return R.dec(v, 1) + R.unit('%');
      case 'f1':    return R.dec(v, 1) + (row.un ? R.unit(R.pick(row.un)) : '');
      case 'f2':    return R.dec(v, 2) + (row.un ? R.unit(R.pick(row.un)) : '');
      /* 연도는 자릿수를 끊지 않는다 — 2,024년이 되면 안 됩니다 */
      case 'year':  return String(Math.round(v)) + (row.un ? R.unit(R.pick(row.un)) : '');
      default:      return R.comma(Math.round(v)) + (row.un ? R.unit(R.pick(row.un)) : '');
    }
  }

  function buildCmp(cfg) {
    var D = cfg.data(), K = cfg.keys, ID = cfg.ids;
    if (!D || !$(ID.host)) return;

    $(ID.title).textContent = R.t(K.title);
    $(ID.tag).textContent = R.t('caveatTag');
    $(ID.txt).textContent = R.pick(D.caveat);

    var h = '';
    D.groups.forEach(function (g) {
      h += '<section class="panel t-' + g.tone + ' cmp-panel">' +
             '<div class="panel-t">' + esc(R.pick(g.t)) + '</div>' +
             '<div class="cmp-head">' +
               '<span class="s">' + esc(R.t(K.aFull)) + '</span>' +
               '<span></span>' +
               '<span class="n">' + esc(R.t(K.bFull)) + '</span>' +
             '</div>';

      g.rows.forEach(function (row) {
        var s = row[cfg.a], n = row[cfg.b];
        var af = row.fmt, bf = row.bfmt || row.fmt;
        /* 통화가 서로 다른 행(원 vs 엔)은 원화로 맞춰야 배율이 뜻을 갖는다 */
        var sc = af === 'text' ? 0 : R.toKrw(s, af);
        var nc = bf === 'text' ? 0 : R.toKrw(n, bf);
        var bigger = sc >= nc;
        var side = bigger ? R.t(K.a) : R.t(K.b);
        var rTxt;

        if (row.cmpText) {
          /* 도달 연도처럼 배율도 차이도 어울리지 않는 행은 문장을 직접 씁니다 */
          rTxt = R.pick(row.cmpText);
          bigger = true;
        } else if (af === 'text') {
          rTxt = '';
        } else if (row.diff) {
          /* 비율(%)이나 지수는 배율로 나누면 안 된다 — 차이로 비교한다 */
          var d = Math.abs(sc - nc);
          rTxt = side + ' +' + R.dec(d, 1) +
                 (row.fmt === 'pct' ? R.t('pp')
                                    : (row.un ? R.pick(row.un) : '') + R.t('higherBy'));
        } else {
          var ratio = bigger ? (nc ? sc / nc : 0) : (sc ? nc / sc : 0);
          rTxt = side + ' ' + (ratio >= 100 ? R.comma(Math.round(ratio)) : R.dec(ratio, 1)) + '×';
        }

        var bar = '';
        if (!row.nobar && sc > 0 && nc > 0) {
          var tot = sc + nc, ps = sc / tot * 100;
          bar = '<div class="cmp-bar" role="img" aria-label="' + esc(rTxt) + '">' +
                  '<i style="width:' + ps.toFixed(2) + '%"></i>' +
                  '<b style="width:' + (100 - ps).toFixed(2) + '%"></b>' +
                '</div>';
        }

        h += '<div class="cmp"' + (row.src ? ' title="' + esc(row.src) + '"' : '') + '>' +
               '<div class="cmp-cell">' +
                 '<span class="side s">' + esc(R.t(K.a)) + '</span>' +
                 '<div class="readout b"><span class="num c-blue">' + cmpValue(row, s, af) + '</span></div>' +
               '</div>' +
               '<div class="cmp-mid">' +
                 '<div class="cmp-lbl">' + esc(R.pick(row.l)) + '</div>' +
                 '<div class="cmp-yr">' + R.t('basisYear') + ' ' + row.year + '</div>' +
                 bar +
                 (rTxt ? '<div class="cmp-ratio' + (bigger ? '' : ' nk') + '">' + esc(rTxt) + '</div>' : '') +
                 (row.s ? '<div class="cmp-note">' + esc(R.pick(row.s)) + '</div>' : '') +
               '</div>' +
               '<div class="cmp-cell">' +
                 '<span class="side n">' + esc(R.t(K.b)) + '</span>' +
                 '<div class="readout k"><span class="num c-gray">' + cmpValue(row, n, bf) + '</span></div>' +
               '</div>' +
             '</div>';
      });

      h += '</section>';
    });

    $(ID.host).innerHTML = h;
  }

  function buildCompare() {
    buildCmp(CMP.compare);
    buildCmp(CMP.jp);
  }

  /* =========================================================
     UI 문구 · 컨트롤
     ========================================================= */
  /** 기준 통계가 낡았는지 검사해 상단에 경고를 띄운다.
   *  - 현재 연도가 meta.fiscalYear 를 넘겼거나
   *  - 최종 갱신일로부터 10개월이 지났으면 노출한다. */
  function checkStale() {
    var el = $('stalebar');
    if (!el) return;
    var now = Date.now();
    var year = R.kst(now).getUTCFullYear();
    var upd = Date.parse(DATA.meta.updated + 'T00:00:00+09:00');
    var months = (now - upd) / (30.44 * 86400e3);

    /* 환율은 meta.updated 와 별개로 낡는다. 통화를 바꿔 보는 해외 방문자에게는
       모든 금액이 한꺼번에 틀어지는 값이라 따로 감시한다. */
    var fxs = R.fxStamp();
    var fxAge = fxs ? (now - Date.parse(fxs + 'T00:00:00+09:00')) / 86400e3 : 1e4;

    if (year > (DATA.meta.fiscalYear || year) || months > 10) {
      el.hidden = false;
      el.textContent = R.t('staleWarn')
        .replace('{y}', DATA.meta.fiscalYear)
        .replace('{d}', DATA.meta.updated);
    } else if (R.curCode() !== 'KRW' && fxAge > 45) {
      el.hidden = false;
      el.textContent = R.t('fxStale').replace('{d}', fxs || '—');
    } else {
      el.hidden = true;
    }
  }

  /** 헤더 환율 표시 — 통화 선택기 바로 옆.
   *  원화를 보고 있으면 환산이 없으므로 숨긴다.
   *  점 색깔은 셀의 freq 점과 같은 어휘를 쓴다 — 오늘 받아온 값이면 초록,
   *  낡았으면 회색. 값과 그 값의 신선도를 한 자리에서 보여 준다. */
  function updateFxTag() {
    var el = $('fxTag');
    if (!el) return;
    var s = R.fxShort();
    if (!s) { el.hidden = true; el.innerHTML = ''; return; }
    var age = R.fxAgeDays();
    var fq = age <= 3 ? 'live' : age <= 45 ? 'daily' : 'projection';
    el.hidden = false;
    el.innerHTML = '<i class="fq fq-' + fq + '"></i>' + esc(s);
    el.title = R.fxLine();
  }

  function applyText() {
    R.applyDir();
    document.title = R.t('title') + ' — Korea Debt Clock';
    $('logoTitle').textContent = R.t('title');
    $('navClock').textContent = R.t('home');
    $('navGrowth').textContent = R.t('trends');
    $('navCompare').textContent = R.t('compare');
    $('navJp').textContent = R.t('compareJp');
    $('tmLabel').textContent = R.t('timeMachine') + ' ';
    $('btnUnit').textContent = fullMode ? R.t('unitDigits') : R.t('fullDigits');
    $('btnPause').textContent = paused ? R.t('play') : R.t('pause');
    $('howTitle').textContent = R.t('howTitle');
    $('how1').textContent = R.t('how1');
    $('formula').textContent = R.t('formula');
    $('how2').textContent = R.t('how2');
    $('disclaimer').textContent = R.t('disclaimer');
    $('srcLabel').textContent = R.t('sources');
    $('fxNote').textContent = R.fxLine();
    updateFxTag();
    $('basisLabel').textContent = R.t('basisDate');
    $('updated').textContent = DATA.meta.updated;
    $('year').textContent = R.kst(Date.now()).getUTCFullYear();
    /* 광고도 후원도 꺼져 있으면 '광고와 후원으로 운영' 문구는 사실이 아니다.
       실제로 켜진 것이 있을 때만 표시한다. */
    var S = window.ROK_SUPPORT;
    var funded = S && ((S.ads && S.ads.on) || (S.support && S.support.on));
    $('funding').textContent = funded ? R.t('funding') : '';
    $('langBtns').innerHTML = R.pickerHTML();
    var sel = $('tmYear');
    if (sel.options.length) sel.options[0].textContent = R.t('live');
    checkStale();
  }

  function setView(v) {
    view = v;
    ['clock', 'growth', 'compare', 'jp'].forEach(function (k) {
      $('v-' + k).classList.toggle('on', v === k);
    });
    $('navClock').classList.toggle('on', v === 'clock');
    $('navGrowth').classList.toggle('on', v === 'growth');
    $('navCompare').classList.toggle('on', v === 'compare');
    $('navJp').classList.toggle('on', v === 'jp');
    if (v === 'growth') renderGrowth();
    else if (v === 'clock') { paint(); fitAll(); }
    /* 새로 보이게 된 화면의 광고 슬롯을 채운다 */
    if (window.RDCSupport) window.RDCSupport.refresh();
  }

  function rerenderAll() {
    applyText();
    buildClock();
    buildGrowth();
    buildCompare();
    paint();
    /* 광고 라벨 · 후원 버튼 · 푸터 링크도 같은 언어로 다시 그린다 */
    if (window.RDCSupport) window.RDCSupport.refresh();
  }

  function initControls() {
    var sel = $('tmYear');
    for (var y = 2015; y <= 2040; y++) {
      var o = document.createElement('option');
      o.value = String(y); o.textContent = y;
      sel.appendChild(o);
    }
    sel.addEventListener('change', function () {
      var b = $('tmbar');
      if (sel.value === 'now') { offset = 0; b.hidden = true; }
      else {
        var target = parseInt(sel.value, 10), d = R.kst(Date.now());
        var dd = Math.min(d.getUTCDate(), 28);
        offset = Date.UTC(target, d.getUTCMonth(), dd, d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()) -
                 Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), dd, d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds());
        b.hidden = false;
        b.textContent = R.t('tmBanner').replace('{y}', target);
      }
      paint();
    });

    document.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('button') : null;
      if (!t) return;

      if (t.dataset.view) { setView(t.dataset.view); return; }


      if (t.dataset.metric) { metric = t.dataset.metric; buildGrowth(); return; }

      if (t.id === 'btnUnit') {
        fullMode = !fullMode;
        fullPinned = true;
        t.setAttribute('aria-pressed', String(fullMode));
        t.textContent = fullMode ? R.t('unitDigits') : R.t('fullDigits');
        ALL.forEach(function (it) { it._last = null; });
        paint();
        return;
      }

      if (t.id === 'btnPause') {
        paused = !paused;
        if (paused) frozenAt = Date.now();
        t.setAttribute('aria-pressed', String(paused));
        t.textContent = paused ? R.t('play') : R.t('pause');
        paint();
      }
    });

    /* 언어 · 통화 선택기 — 20개 언어를 버튼으로 늘어놓을 수 없어 select 를 쓴다 */
    document.addEventListener('change', function (e) {
      var el = e.target;
      if (!el || !el.id) return;

      if (el.id === 'langSel') {
        R.setLang(el.value);
        if (!fullPinned) fullMode = R.loc().group !== 'cjk';
        ALL.forEach(function (it) { it._last = null; });
        rerenderAll();
        setView(view);
        return;
      }

      if (el.id === 'curSel') {
        R.setCur(el.value);
        ALL.forEach(function (it) { it._last = null; });
        $('fxNote').textContent = R.fxLine();
        updateFxTag();
        checkStale();
        /* 일본 참조선의 금액도 새 통화로 다시 계산해야 한다 */
        buildClock();
        buildCompare();
        paint();
        fitAll();
      }
    });

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () {
        if (view === 'growth') renderGrowth();
        else fitAll();
      }, 180);
    });
  }

  /* ================= 시작 ================= */
  (function readParams() {
    var q = window.location.search + window.location.hash;
    var mL = q.match(/[#?&]lang=([a-z]{2})/);
    if (mL && R.LOCALES[mL[1]]) R.setLang(mL[1]);
    var mC = q.match(/[#?&]cur=([A-Z]{3})/);
    if (mC && R.CURRENCIES[mC[1]]) R.setCur(mC[1]);
    var mV = q.match(/(clock|growth|compare|jp)/);
    if (mV) view = mV[1];
    var mM = q.match(/metric=(debt|household|gdp)/);
    if (mM) metric = mM[1];
  })();

  /* assets/js/live.js 가 실시간 환율을 받아오면 이것을 부른다.
     환율은 24개 통화 환산 전체가 걸린 값이라 셀을 다시 그려야 한다.
     live.js 가 없거나 fetch 가 막힌 환경(file://)에서는 아무 일도 없다. */
  window.RDCApp = {
    refresh: function () {
      ALL.forEach(function (it) { it._last = null; });
      $('fxNote').textContent = R.fxLine();
      updateFxTag();
      buildClock();
      buildCompare();
      paint();
      fitAll();
      checkStale();
    }
  };

  initControls();
  rerenderAll();
  setView(view);
  requestAnimationFrame(loop);
})();
