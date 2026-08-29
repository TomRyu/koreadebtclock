/* =========================================================
   대한민국 부채시계 — support.js
   광고(애드센스) · 쿠키 동의 배너 · 후원 UI · 법적 링크
   설정은 전부 data/support.js 에 있습니다.
   ========================================================= */
window.RDCSupport = (function () {
  'use strict';

  var R = window.RDC, S = window.ROK_SUPPORT;
  if (!R || !S) return { refresh: function () {} };

  var $ = function (id) { return document.getElementById(id); };
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function T(o) { return R.pick(o); }

  var CONSENT_KEY = 'rdc-consent';          // 'yes' | 'no'
  var SLOTS = ['mid', 'growth', 'cmp', 'jp', 'foot'];

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  /* 승인 전 배치 확인용:  index.html#ads=preview */
  var preview = /ads=preview/.test(window.location.search + window.location.hash);
  var live = !!(S.ads && S.ads.on && /^ca-pub-\d{10,}$/.test(S.ads.client));

  /* =========================================================
     1. 광고
     ========================================================= */
  var adsMounted = false, scriptLoaded = false, pushed = {};

  function mountAds() {
    if (adsMounted) return;
    adsMounted = true;

    SLOTS.forEach(function (key) {
      var box = $('ad-' + key);
      if (!box) return;

      if (live) {
        box.innerHTML =
          '<span class="adlbl">' + esc(T(S.ads.label)) + '</span>' +
          '<ins class="adsbygoogle" style="display:block"' +
          ' data-ad-client="' + esc(S.ads.client) + '"' +
          ' data-ad-slot="' + esc(S.ads.slots[key]) + '"' +
          ' data-ad-format="auto" data-full-width-responsive="true"></ins>';
        box.hidden = false;
      } else if (preview) {
        box.innerHTML =
          '<span class="adlbl">' + esc(T(S.ads.label)) + '</span>' +
          '<div class="adph">ad-' + key + ' · 728×90 / responsive</div>';
        box.hidden = false;
      } else {
        box.hidden = true;                 // 설정 전에는 흔적조차 남기지 않는다
      }
    });
  }

  /** 애드센스 스크립트 로드. personalized=false 면 비개인맞춤 광고로 요청한다. */
  function loadAdScript(personalized) {
    if (!live || scriptLoaded) return;
    scriptLoaded = true;

    window.adsbygoogle = window.adsbygoogle || [];
    if (!personalized) window.adsbygoogle.requestNonPersonalizedAds = 1;

    var s = document.createElement('script');
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' +
            encodeURIComponent(S.ads.client);
    document.head.appendChild(s);

    pushAll();
  }

  /** 숨은 화면(display:none)에서 push 하면 폭이 0으로 잡혀 빈 광고가 된다.
   *  그래서 실제로 보이는 슬롯만, 한 번씩만 push 한다. 화면을 전환할 때
   *  app.js 가 refresh() 를 부르면 그때 나머지가 채워진다. */
  function pushAll() {
    if (!scriptLoaded) return;
    SLOTS.forEach(function (key) {
      if (pushed[key]) return;
      var box = $('ad-' + key);
      if (!box || box.hidden) return;
      if (!box.querySelector('ins.adsbygoogle')) return;
      if (!box.offsetParent || box.clientWidth < 50) return;   // 아직 안 보임
      pushed[key] = true;
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
    });
  }

  /* =========================================================
     2. 쿠키 동의 배너
     ========================================================= */
  function initConsent() {
    if (!live) return;                     // 광고가 없으면 동의받을 것도 없다
    var mode = (S.consent && S.consent.mode) || 'builtin';

    if (mode === 'off')    { loadAdScript(true);  return; }
    if (mode === 'google') { loadAdScript(true);  return; }  // CMP 가 알아서 처리

    var saved = read(CONSENT_KEY);
    if (saved === 'yes') { loadAdScript(true);  return; }
    if (saved === 'no')  { loadAdScript(false); return; }

    showBanner();
  }

  function showBanner() {
    var c = S.consent;
    var el = document.createElement('div');
    el.className = 'consent';
    el.id = 'consentBar';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', esc(T(c.title)));
    el.innerHTML =
      '<div class="consent-t">' +
        '<b>' + esc(T(c.title)) + '</b>' +
        '<p>' + esc(T(c.body)) + ' ' +
          '<a href="privacy.html">' + esc(T(c.more)) + '</a></p>' +
      '</div>' +
      '<div class="consent-b">' +
        '<button type="button" class="btn k sm" data-consent="no">'  + esc(T(c.decline)) + '</button>' +
        '<button type="button" class="btn g sm" data-consent="yes">' + esc(T(c.accept))  + '</button>' +
      '</div>';
    document.body.appendChild(el);
  }

  function answerConsent(v) {
    store(CONSENT_KEY, v);
    var el = $('consentBar');
    if (el) el.parentNode.removeChild(el);
    loadAdScript(v === 'yes');
  }

  /* =========================================================
     3. 후원
     ========================================================= */
  function supportLinks() {
    var lang = R.lang();
    return (S.support.links || []).filter(function (l) {
      return l.on !== false && (!l.langs || l.langs.indexOf(lang) >= 0);
    });
  }

  function modalHTML() {
    var sp = S.support, h = '';

    h += '<div class="sup-card" role="dialog" aria-modal="true" aria-labelledby="supTitle">' +
           '<button type="button" class="sup-x" data-sup="close" aria-label="' +
             esc(T(S.legal.close)) + '">×</button>' +
           '<h2 id="supTitle">' + esc(T(sp.title)) + '</h2>' +
           '<p class="sup-intro">' + esc(T(sp.intro)) + '</p>' +
           '<div class="sup-grid">';

    supportLinks().forEach(function (l) {
      h += '<a class="sup-link" href="' + esc(l.url) + '" target="_blank" rel="noopener nofollow">' +
             '<span class="sup-ico">' + esc(l.icon || '❤') + '</span>' +
             '<span class="sup-txt"><b>' + esc(T(l.label)) + '</b>' +
               (l.note ? '<i>' + esc(T(l.note)) + '</i>' : '') + '</span>' +
           '</a>';
    });

    h += '</div>';

    if (sp.bank && sp.bank.on) {
      h += '<div class="sup-bank">' +
             '<b>' + esc(T(sp.bank.label)) + '</b> ' +
             '<span id="supAcc">' + esc(T(sp.bank.name)) + ' ' + esc(sp.bank.number) +
               ' (' + esc(T(sp.bank.holder)) + ')</span> ' +
             '<button type="button" class="btn k sm" data-sup="copy">' +
               esc(T(sp.bank.copy)) + '</button>' +
           '</div>';
    }

    if (sp.why)  h += '<p class="sup-why">'  + esc(T(sp.why))  + '</p>';
    if (sp.note) h += '<p class="sup-note">' + esc(T(sp.note)) + '</p>';

    h += '</div>';
    return h;
  }

  function openModal() {
    closeModal();
    var el = document.createElement('div');
    el.className = 'sup-wrap';
    el.id = 'supModal';
    el.innerHTML = modalHTML();
    document.body.appendChild(el);
    document.body.style.overflow = 'hidden';
    var x = el.querySelector('.sup-x');
    if (x) x.focus();
  }

  function closeModal() {
    var el = $('supModal');
    if (el) el.parentNode.removeChild(el);
    document.body.style.overflow = '';
  }

  /* =========================================================
     4. 푸터 · 헤더 문구 갱신 (언어 전환 시마다 호출)
     ========================================================= */
  function paintChrome() {
    /* 헤더 후원 버튼 */
    var b = $('btnSupport');
    if (b) {
      b.hidden = !S.support.on;
      b.textContent = T(S.support.btn);
    }

    /* 푸터 법적 링크 */
    var f = $('legalLinks');
    if (f) {
      f.innerHTML =
        '<a href="privacy.html">' + esc(T(S.legal.privacy)) + '</a>' +
        '<a href="terms.html">'   + esc(T(S.legal.terms))   + '</a>' +
        '<a href="mailto:' + esc(S.contact) + '">' + esc(T(S.legal.contact)) + '</a>' +
        (S.support.on
          ? '<a href="#support" data-sup="open">' + esc(T(S.support.btn)) + '</a>'
          : '');
    }

    /* 광고 라벨 (마크업은 다시 만들지 않는다 — 재푸시 방지) */
    var lbl = T(S.ads.label);
    Array.prototype.forEach.call(document.querySelectorAll('.adlbl'), function (n) {
      n.textContent = lbl;
    });

    /* 열려 있는 후원 모달도 같이 갱신 */
    if ($('supModal')) $('supModal').innerHTML = modalHTML();
  }

  /* =========================================================
     5. 이벤트
     ========================================================= */
  function initEvents() {
    document.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('[data-consent],[data-sup]') : null;

      if (t && t.dataset.consent) { answerConsent(t.dataset.consent); return; }

      if (t && t.dataset.sup === 'open')  { e.preventDefault(); openModal();  return; }
      if (t && t.dataset.sup === 'close') { closeModal(); return; }

      if (t && t.dataset.sup === 'copy') {
        var acc = $('supAcc');
        if (acc && navigator.clipboard) {
          navigator.clipboard.writeText(acc.textContent.trim()).then(function () {
            t.textContent = T(S.support.bank.copied);
            setTimeout(function () { t.textContent = T(S.support.bank.copy); }, 1600);
          }).catch(function () {});
        }
        return;
      }

      /* 오버레이 바깥 클릭 */
      var w = $('supModal');
      if (w && e.target === w) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

    if (/[#?&]support\b/.test(window.location.hash + window.location.search)) {
      openModal();
    }
  }

  /* =========================================================
     시작
     ========================================================= */
  function init() {
    mountAds();
    paintChrome();
    initEvents();
    initConsent();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* app.js 가 화면을 전환하거나 언어를 바꿔 다시 그릴 때 호출한다 */
  function refresh() { paintChrome(); pushAll(); }

  return { refresh: refresh, open: openModal };
})();
