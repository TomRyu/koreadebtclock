/* =========================================================
   대한민국 부채시계 — legal.js
   privacy.html · terms.html 공용 렌더러
   어떤 문서를 그릴지는 <body data-doc="privacy|terms"> 로 정합니다.
   ========================================================= */
(function () {
  'use strict';

  var R = window.RDC, S = window.ROK_SUPPORT, L = window.ROK_LEGAL;
  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* {site} {contact} {date} 치환 */
  function fill(s) {
    return String(s)
      .replace(/\{site\}/g, S.site)
      .replace(/\{contact\}/g, S.contact)
      .replace(/\{date\}/g, S.effective);
  }

  var key = document.body.getAttribute('data-doc') || 'privacy';
  var doc = L[key];

  function render() {
    R.applyDir();

    var title = R.pick(doc.title);
    document.title = title + ' — ' + R.t('title');
    $('docTitle').textContent = title;
    $('logoTitle').textContent = R.t('title');
    $('docLead').textContent = fill(R.pick(doc.lead));
    $('backLink').textContent = R.pick(S.legal.back);

    var h = '';
    doc.sections.forEach(function (sec) {
      h += '<section class="lg-sec"><h2>' + esc(R.pick(sec.h)) + '</h2>';
      sec.p.forEach(function (p) { h += '<p>' + esc(fill(R.pick(p))) + '</p>'; });
      h += '</section>';
    });
    $('docBody').innerHTML = h;

    /* 문서 간 이동 링크 */
    $('docNav').innerHTML =
      (key === 'privacy'
        ? '<a href="terms.html">' + esc(R.pick(S.legal.terms)) + '</a>'
        : '<a href="privacy.html">' + esc(R.pick(S.legal.privacy)) + '</a>') +
      '<a href="mailto:' + esc(S.contact) + '">' + esc(R.pick(S.legal.contact)) + '</a>';

    $('docContact').innerHTML =
      esc(R.pick(S.operator)) + ' · <a href="mailto:' + esc(S.contact) + '">' +
      esc(S.contact) + '</a>';

    $('langBtns').innerHTML = R.pickerHTML();
  }

  document.addEventListener('change', function (e) {
    if (!e.target || e.target.id !== 'langSel') return;
    R.setLang(e.target.value);
    render();
  });

  /* index.html 과 같은 딥링크 규칙 */
  var q = window.location.search + window.location.hash;
  var m = q.match(/[#?&]lang=([a-z]{2})/);
  if (m && R.LOCALES[m[1]]) R.setLang(m[1]);

  render();
})();
