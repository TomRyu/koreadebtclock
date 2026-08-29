/* =============================================================
 * 대한민국 부채시계 — 언어 20 · 통화 24 정의
 * -------------------------------------------------------------
 * 언어와 통화를 분리했습니다. 독일어로 읽으면서 달러로 보거나,
 * 영어로 읽으면서 원화로 보는 것이 가능합니다.
 * 언어를 고르면 그 언어의 기본 통화(cur)가 함께 적용되고,
 * 그 뒤에 통화를 따로 바꾸면 선택이 유지됩니다.
 *
 * group — 큰 수를 끊는 방식
 *   'cjk'   4자리(만·억·조).  한국어·일본어·중국어
 *   'west'  3자리(천 단위).   Intl.NumberFormat 에 위임
 *   'indic' 인도식(라크·크로르). Intl 의 en-IN/hi-IN 이 처리
 *
 * tag — Intl.NumberFormat 에 넘길 BCP 47 태그.
 *       아랍어는 -u-nu-latn 을 붙여 라틴 숫자로 고정합니다.
 *       계기판 숫자 폰트(Open Sans)에 아랍·인도 숫자가 없어
 *       두 자리가 깨지기 때문입니다.
 * ============================================================= */

(function () {

  /* ---------------------------------------------------------
     통화 — fx 는 "이 통화 1단위 = 몇 원인가"
     ★ 환율은 수시로 변합니다. 갱신은 여기 한 곳만 고치면 됩니다.
        기준: 1 USD = 1,385원 (2026-08 무렵)
     --------------------------------------------------------- */
  var CURRENCIES = {
    KRW: { code: 'KRW', fx: 1,      pre: '',    post: '원',  sym: '₩',   name: '대한민국 원' },
    USD: { code: 'USD', fx: 1385,   pre: '$',   post: '',    sym: '$',   name: 'US Dollar' },
    EUR: { code: 'EUR', fx: 1510,   pre: '€',   post: '',    sym: '€',   name: 'Euro' },
    JPY: { code: 'JPY', fx: 9.4,    pre: '',    post: '円',  sym: '¥',   name: '日本円' },
    CNY: { code: 'CNY', fx: 190,    pre: '',    post: '元',  sym: '¥',   name: '人民币' },
    GBP: { code: 'GBP', fx: 1760,   pre: '£',   post: '',    sym: '£',   name: 'Pound Sterling' },
    TWD: { code: 'TWD', fx: 42.6,   pre: 'NT$', post: '',    sym: 'NT$', name: '新臺幣' },
    INR: { code: 'INR', fx: 16.3,   pre: '₹',   post: '',    sym: '₹',   name: 'Indian Rupee' },
    BRL: { code: 'BRL', fx: 243,    pre: 'R$',  post: '',    sym: 'R$',  name: 'Real' },
    RUB: { code: 'RUB', fx: 15.4,   pre: '',    post: '₽',   sym: '₽',   name: 'Рубль' },
    IDR: { code: 'IDR', fx: 0.0866, pre: 'Rp',  post: '',    sym: 'Rp',  name: 'Rupiah' },
    VND: { code: 'VND', fx: 0.0543, pre: '',    post: '₫',   sym: '₫',   name: 'Đồng' },
    THB: { code: 'THB', fx: 40.1,   pre: '฿',   post: '',    sym: '฿',   name: 'บาท' },
    TRY: { code: 'TRY', fx: 36.4,   pre: '₺',   post: '',    sym: '₺',   name: 'Türk lirası' },
    SAR: { code: 'SAR', fx: 369,    pre: '',    post: 'ر.س', sym: 'ر.س', name: 'ريال سعودي' },
    AED: { code: 'AED', fx: 377,    pre: '',    post: 'د.إ', sym: 'د.إ', name: 'درهم إماراتي' },
    MXN: { code: 'MXN', fx: 72.9,   pre: '$',   post: '',    sym: 'MX$', name: 'Peso mexicano' },
    CAD: { code: 'CAD', fx: 989,    pre: '$',   post: '',    sym: 'C$',  name: 'Canadian Dollar' },
    AUD: { code: 'AUD', fx: 894,    pre: '$',   post: '',    sym: 'A$',  name: 'Australian Dollar' },
    CHF: { code: 'CHF', fx: 1574,   pre: '',    post: 'Fr.', sym: 'Fr.', name: 'Schweizer Franken' },
    SGD: { code: 'SGD', fx: 1034,   pre: 'S$',  post: '',    sym: 'S$',  name: 'Singapore Dollar' },
    HKD: { code: 'HKD', fx: 178,    pre: 'HK$', post: '',    sym: 'HK$', name: '港幣' },
    PLN: { code: 'PLN', fx: 346,    pre: '',    post: 'zł',  sym: 'zł',  name: 'Złoty' },
    SEK: { code: 'SEK', fx: 132,    pre: '',    post: 'kr',  sym: 'kr',  name: 'Svensk krona' }
  };

  /* 통화 선택기에 이 순서로 나옵니다 */
  var CUR_ORDER = ['KRW', 'USD', 'EUR', 'JPY', 'CNY', 'GBP', 'INR', 'TWD',
                   'BRL', 'RUB', 'CAD', 'AUD', 'CHF', 'SGD', 'HKD', 'MXN',
                   'IDR', 'VND', 'THB', 'TRY', 'SAR', 'AED', 'PLN', 'SEK'];

  /* ---------------------------------------------------------
     언어 20 — 세계 주요 경제권 기준
       key    내부 코드 (localStorage · #lang= 딥링크에 쓰임)
       short  버튼에 표시할 2글자
       name   그 언어로 쓴 언어 이름
       cur    기본 통화
       group  숫자 끊는 방식
       tag    Intl 로케일 태그
       units  cjk 전용 — [조, 억, 만]
       dir    'rtl' 이면 문서 방향을 뒤집습니다
     --------------------------------------------------------- */
  var LOCALES = {
    ko: { key: 'ko', short: '한', name: '한국어',            cur: 'KRW', group: 'cjk',   tag: 'ko-KR', units: ['조', '억', '만'],    html: 'ko' },
    en: { key: 'en', short: 'EN', name: 'English',           cur: 'USD', group: 'west',  tag: 'en-US', html: 'en' },
    ja: { key: 'ja', short: '日', name: '日本語',             cur: 'JPY', group: 'cjk',   tag: 'ja-JP', units: ['兆', '億', '万'],    html: 'ja' },
    zh: { key: 'zh', short: '简', name: '简体中文',           cur: 'CNY', group: 'cjk',   tag: 'zh-CN', units: ['万亿', '亿', '万'],  html: 'zh-Hans' },
    zt: { key: 'zt', short: '繁', name: '繁體中文',           cur: 'TWD', group: 'cjk',   tag: 'zh-TW', units: ['兆', '億', '萬'],    html: 'zh-Hant' },
    es: { key: 'es', short: 'ES', name: 'Español',           cur: 'EUR', group: 'west',  tag: 'es-ES', html: 'es' },
    pt: { key: 'pt', short: 'PT', name: 'Português',         cur: 'BRL', group: 'west',  tag: 'pt-BR', html: 'pt' },
    fr: { key: 'fr', short: 'FR', name: 'Français',          cur: 'EUR', group: 'west',  tag: 'fr-FR', html: 'fr' },
    de: { key: 'de', short: 'DE', name: 'Deutsch',           cur: 'EUR', group: 'west',  tag: 'de-DE', html: 'de' },
    it: { key: 'it', short: 'IT', name: 'Italiano',          cur: 'EUR', group: 'west',  tag: 'it-IT', html: 'it' },
    nl: { key: 'nl', short: 'NL', name: 'Nederlands',        cur: 'EUR', group: 'west',  tag: 'nl-NL', html: 'nl' },
    ru: { key: 'ru', short: 'RU', name: 'Русский',           cur: 'RUB', group: 'west',  tag: 'ru-RU', html: 'ru' },
    ar: { key: 'ar', short: 'AR', name: 'العربية',            cur: 'SAR', group: 'west',  tag: 'ar-u-nu-latn', html: 'ar', dir: 'rtl' },
    hi: { key: 'hi', short: 'HI', name: 'हिन्दी',               cur: 'INR', group: 'indic', tag: 'en-IN', html: 'hi' },
    id: { key: 'id', short: 'ID', name: 'Bahasa Indonesia',  cur: 'IDR', group: 'west',  tag: 'id-ID', html: 'id' },
    vi: { key: 'vi', short: 'VI', name: 'Tiếng Việt',        cur: 'VND', group: 'west',  tag: 'vi-VN', html: 'vi' },
    th: { key: 'th', short: 'TH', name: 'ไทย',                cur: 'THB', group: 'west',  tag: 'th-TH', html: 'th' },
    tr: { key: 'tr', short: 'TR', name: 'Türkçe',            cur: 'TRY', group: 'west',  tag: 'tr-TR', html: 'tr' },
    pl: { key: 'pl', short: 'PL', name: 'Polski',            cur: 'PLN', group: 'west',  tag: 'pl-PL', html: 'pl' },
    sv: { key: 'sv', short: 'SV', name: 'Svenska',           cur: 'SEK', group: 'west',  tag: 'sv-SE', html: 'sv' }
  };

  var ORDER = ['ko', 'en', 'ja', 'zh', 'zt', 'es', 'pt', 'fr', 'de', 'it',
               'nl', 'ru', 'ar', 'hi', 'id', 'vi', 'th', 'tr', 'pl', 'sv'];

  /* 브라우저 언어 → 내부 코드 */
  function detect(nav) {
    var s = String(nav || 'en').toLowerCase();
    if (/^zh[-_]?(tw|hk|mo|hant)/.test(s)) return 'zt';
    if (/^zh/.test(s)) return 'zh';
    if (/^pt/.test(s)) return 'pt';
    var two = s.slice(0, 2);
    return LOCALES[two] ? two : 'en';
  }

  /* 번역이 없을 때 내려가는 순서: 요청 언어 → 영어 → 한국어 */
  var FALLBACK = ['en', 'ko'];

  window.ROK_I18N = {
    LOCALES: LOCALES, ORDER: ORDER,
    CURRENCIES: CURRENCIES, CUR_ORDER: CUR_ORDER,
    FALLBACK: FALLBACK, detect: detect
  };
})();
