/* =============================================================
 * 대한민국 부채시계 — 지표 데이터 (4개 언어)
 * -------------------------------------------------------------
 * 계산:  현재값 = base + rate × (지금 − baseDate) ÷ 1년
 *
 *   l      : 라벨      I(한국어, English, 日本語, 中文)
 *   s      : 보조설명   (선택)
 *   un     : 단위      (fmt:'count' 일 때)
 *   fmt    : money(원 기준) | usd(달러 기준) | count | pct | f1 | f2 | text
 *            until(남은 기간 '00년 000일') | dday(D-000)
 *   c      : red | green | gray | blue | slate | mute
 *   size   : xl | lg | md | sm
 *   base   : 기준 시점(2026-01-01 KST)의 값
 *   rate   : 연간 증감액 (감소는 음수)
 *   yearly : 매년 1월 1일 0시에 0부터 다시 누적
 *   daily  : 매일 자정에 0부터 다시 누적
 *   fixed  : 시간에 따라 변하지 않는 값
 *   noconv : 통화 환산하지 않고 항상 원화로 표시
 *   derive : 다른 항목으로 계산 (v.<id> 로 참조 · 원화/원단위 기준)
 *   ref    : 같은 지표의 일본 값 — 셀 아래에 '일본 000%' 한 줄로 표시
 *            { v: 숫자, fmt: 생략하면 이 지표의 fmt, s: 출처 문구(툴팁) }
 *            자세한 한일 비교는 data/jp.js 의 '한일 비교' 화면에 있습니다.
 *   src    : 출처 (툴팁)
 *
 *   ── 아래 4개는 "이 숫자는 어떤 종류인가" 를 다루는 새 필드입니다 ──
 *
 *   freq   : 이 값이 실제로 얼마나 자주 갱신되는가. 셀 라벨 왼쪽에 점으로,
 *            툴팁에 글자로 표시됩니다. 패널에 적으면 그 패널의 기본값이 되고
 *            항목에 적으면 그 항목만 덮어씁니다. 적지 않으면 'projection'.
 *              live       실시간 (환율 · 경과율)
 *              daily      매일 갱신 (시장금리 · 지수)
 *              monthly    월 단위 공표 (재정동향 · 주민등록 인구)
 *              quarterly  분기 공표 (GDP · 가계신용)
 *              annual     연 1회 공표
 *              budget     확정 예산 — 연간 총액이 국회에서 확정된 값
 *              legal      법정 기한 — 헌법·법률이 못박은 날짜
 *              projection 장기 전망 · 선형 추정  ← 기본값(가장 약한 근거)
 *
 *   season : yearly 항목이 1년을 균등하게 쌓지 않도록 월별 가중치를 지정.
 *            SEASON 의 키를 씁니다. 연말 도달값은 rate 와 언제나 같습니다.
 *
 *   until  : 카운트다운 목표 시각. 문자열(고정 시점) 또는 function(now)→ms.
 *
 *   progress : true 면 '올해가 몇 % 지났는가' 를 값으로 씁니다 (fmt:'pct').
 *
 * [주의] 공표 자료를 근거로 한 추정·전망값입니다. 확정 통계로 갱신하세요.
 * ============================================================= */

(function () {
  var 조 = 1e12, 억 = 1e8;
  var D = '2026-01-01T00:00:00+09:00';

  function I(ko, en, ja, zh) { return { ko: ko, en: en, ja: ja, zh: zh }; }

  /* =========================================================
     연간 기준 금액 — 통계가 갱신되면 여기 한 곳만 고치면 됩니다.
     같은 값을 쓰는 지표가 모두 함께 바뀝니다.

     [주의] 아래 값 중 일부는 각 지표의 보조설명(s:) 에도 글자로 적혀 있습니다.
            숫자를 바꾸면 해당 문구도 4개 언어 모두 함께 고치십시오:
              Y.taxRevenue   → '올해 국세 수입'      s: "연 415조원 목표"
              Y.totalSpend   → '올해 정부 총지출'    s: "2026년 예산 728조원"
              Y.debtInterest → '올해 국채 이자 지출' s: "연 30.5조원 · 줄일 수 없는 고정비"
              Y.deficit      → '올해 관리재정수지 적자' s: "GDP 대비 약 -4.0%"
     ========================================================= */
  var SEC_PER_YEAR = 365.25 * 86400;
  function perSec(yearly) { return yearly / SEC_PER_YEAR; }

  var Y = {
    debtBase:     1301.9 * 조,   // 2026-01-01 국가채무(D1) 잔액
    debtGrowth:    113.3 * 조,   // 국가채무 연간 증가액
    debtInterest:   30.5 * 조,   // 국고채 이자 (잔액 약 1,150조 × 평균 조달금리 약 2.6%)
    taxRevenue:      415 * 조,   // 국세 수입
    localTax:        125 * 조,   // 지방세 수입
    totalSpend:      728 * 조,   // 정부 총지출
    deficit:         110 * 조,   // 관리재정수지 적자
    d2Base:         1400 * 조,   // 2026-01-01 일반정부 부채(D2) 잔액
    d2Growth:        110 * 조,   // 일반정부 부채(D2) 연간 증가액 (적자와는 무관한 별개 값)
    gdpYear:        2740 * 조,   // 연간 명목 GDP (올해 생산분)
    popBase:    51110000,        // 2026-01-01 총인구 (주민등록 기준)
    popRate:     -110000         // 총인구 연간 증감 (감소)
  };

  /* =========================================================
     기계 갱신 계층 — data/live.js 의 값을 읽습니다.
     없거나 null 이면 여기 적힌 폴백값이 그대로 쓰입니다.
     ========================================================= */
  var LIVE = window.ROK_LIVE || {};
  var IND  = LIVE.ind || {};
  function live(key, fallback) {
    var v = IND[key];
    return (v == null || !isFinite(v)) ? fallback : +v;
  }

  /* ---------------------------------------------------------
     매년 돌아오는 법정 기한 → 다음 도래 시각(ms) 을 주는 함수.
     올해 것이 이미 지났으면 자동으로 내년을 가리키므로
     해가 바뀌어도 손대지 않아도 됩니다.
     --------------------------------------------------------- */
  var KST_MS = 9 * 3600e3;
  var DL = LIVE.deadlines || {};
  function annualDeadline(mmdd, fallback) {
    var md = (mmdd && mmdd.length === 2) ? mmdd : fallback;
    return function (now) {
      var y = new Date(now + KST_MS).getUTCFullYear();
      var t = Date.UTC(y, md[0] - 1, md[1]) - KST_MS;
      if (t <= now) t = Date.UTC(y + 1, md[0] - 1, md[1]) - KST_MS;
      return t;
    };
  }

  /* =========================================================
     월별 계절성 — yearly 카운터가 1년을 균등하게 쌓는 것을 교정합니다.

     국세는 전혀 균등하지 않습니다. 부가세 확정신고(1·7월),
     법인세 신고(3월), 종합소득세(5월)에 크게 몰립니다.
     365일 균등 분배는 연중 내내 틀리고 12월 31일에만 맞습니다.

     각 배열은 1~12월 가중치이고, 합계로 나눠 쓰므로 단위는 무의미합니다.
     연말 도달값은 가중치와 무관하게 언제나 rate(연간 총액)와 같습니다.

     [확인 필요] 아래는 신고·납부 일정에서 온 **근사 프로파일**입니다.
     기획재정부 「월간 재정동향」의 과거 월별 국세수입 실적으로
     교체하면 정확도가 한 단계 더 올라갑니다.
     ========================================================= */
  var SEASON = {
    /* 국세 총액 — 개별 세목을 합친 모양 */
    tax:       [9.5, 6.0, 12.5, 8.0, 10.5, 7.0, 10.0, 7.0, 7.0, 8.5, 7.5, 6.5],
    /* 소득세 — 원천징수가 매월 균등하게 깔리고 5월 종합소득세가 얹힌다 */
    income:    [7.2, 7.2, 7.2, 7.2, 20.0, 7.2, 7.2, 7.2, 7.2, 7.2, 8.0, 7.2],
    /* 법인세 — 12월 결산법인 신고(3월) + 중간예납(8월) */
    corporate: [3.5, 3.5, 45.0, 3.5, 3.5, 3.5, 3.5, 20.0, 3.5, 3.5, 3.5, 3.5],
    /* 부가가치세 — 확정신고(1·7월) + 예정신고(4·10월) */
    vat:       [27.0, 1.25, 1.25, 18.0, 1.25, 1.25, 27.0, 1.25, 1.25, 18.0, 1.25, 1.25],
    /* 지방세 — 재산세(7·9월) + 자동차세(6·12월) */
    localTax:  [6.0, 6.0, 6.5, 7.0, 7.0, 11.0, 12.0, 6.5, 11.0, 7.0, 7.0, 13.0],
    /* 혼인 — 12월·1월에 몰리고 한여름에 준다 */
    marriage:  [9.5, 8.0, 8.0, 8.5, 9.0, 7.0, 6.5, 6.5, 7.5, 9.0, 9.5, 11.0]
  };

  var UN_PERSON = I('명', ' people', '人', '人');
  var UN_HOUSE  = I('세대', ' households', '世帯', '户');
  var UN_HOME   = I('호', ' units', '戸', '套');
  var UN_CASE   = I('건', ' cases', '件', '件');
  var UN_HOUR   = I('시간', ' hours', '時間', '小时');

  window.ROK_DATA = {

    /* 한일 비교 화면(data/jp.js)이 한국 쪽 값을 여기서 가져갑니다.
       두 화면의 숫자가 어긋나지 않도록 반드시 이 Y 하나만 고치십시오. */
    Y: Y,

    /* app.js 의 rawValue() 가 yearly 항목의 season 키로 찾아 씁니다 */
    SEASON: SEASON,

    meta: {
      updated: '2026-08-23',
      /* 이 파일의 기준값이 근거로 삼은 회계연도.
         현재 연도가 이 값을 넘어가면 사이트 상단에 '통계 미갱신' 경고가
         자동으로 뜹니다. 통계를 갱신하면 이 값도 함께 올리십시오. */
      fiscalYear: 2026,
      site: 'koreadebtclock.org'
    },

    /* ============ 대형 카운터 (헤더 좌우) ============ */
    hero: [
      { id: 'nationalDebt', size: 'xl', c: 'red', fmt: 'money', freq: 'monthly',
        l: I('대한민국 국가채무', 'KOREA NATIONAL DEBT', '大韓民国 国家債務', '大韩民国 国家债务'),
        base: Y.debtBase, rate: Y.debtGrowth, baseDate: D,
        src: '기획재정부 2026년 예산 — 2025년 말 1,301.9조원 → 2026년 말 1,415.2조원 전망' },

      { size: 'lg', c: 'red', fmt: 'money',
        freq: 'monthly',
        l: I('국민 1인당 국가채무', 'DEBT PER CITIZEN', '国民1人当たり国家債務', '人均国家债务'),
        derive: function (v) { return v.nationalDebt / v.population; } },

      { size: 'lg', c: 'red', fmt: 'money',
        freq: 'monthly',
        l: I('취업자 1인당 국가채무', 'DEBT PER WORKER', '就業者1人当たり国家債務', '就业者人均国家债务'),
        derive: function (v) { return v.nationalDebt / v.employed; } },

      { id: 'householdDebt2', size: 'lg', c: 'red', fmt: 'money', freq: 'quarterly',
        l: I('가계부채', 'HOUSEHOLD DEBT', '家計債務', '家庭债务'),
        derive: function (v) { return v.householdDebt; } },

      { size: 'lg', c: 'red', fmt: 'money',
        freq: 'monthly',
        l: I('올해 재정적자 (관리재정수지)', 'BUDGET DEFICIT THIS YEAR', '今年の財政赤字', '本年度财政赤字'),
        base: 0, rate: Y.deficit, baseDate: D, yearly: true },

      { size: 'lg', c: 'green', fmt: 'money',
        freq: 'monthly', season: 'tax',
        l: I('올해 국세 수입', 'TAX REVENUE THIS YEAR', '今年の国税収入', '本年度国税收入'),
        base: 0, rate: Y.taxRevenue, baseDate: D, yearly: true }
    ],

    /* ============ 패널 ============ */
    panels: [

      /* -------------------------------------------------- */
      { id: 'debt', freq: 'monthly', tone: 'red', span: 6,
        t: I('국가 부채', 'National Debt', '国家債務', '国家债务'),
        items: [
          { size: 'lg', c: 'red', fmt: 'money',
            l: I('국가채무 (D1)', 'National Debt (D1)', '国家債務 (D1)', '国家债务 (D1)'),
            s: I('중앙정부 + 지방정부', 'Central + local government', '中央政府＋地方政府', '中央＋地方政府'),
            base: Y.debtBase, rate: Y.debtGrowth, baseDate: D, src: '기획재정부 2026년 예산' },

          { id: 'd2', size: 'md', c: 'red', fmt: 'money',
            freq: 'annual',
            l: I('일반정부 부채 (D2)', 'General Govt Debt (D2)', '一般政府債務 (D2)', '一般政府债务 (D2)'),
            s: I('국제 비교 기준', 'International comparison basis', '国際比較基準', '国际比较口径'),
            base: Y.d2Base, rate: Y.d2Growth, baseDate: D },

          { size: 'md', c: 'red', fmt: 'money',
            freq: 'annual',
            l: I('공공부문 부채 (D3)', 'Public Sector Debt (D3)', '公共部門債務 (D3)', '公共部门债务 (D3)'),
            s: I('비금융공기업 포함', 'Incl. non-financial SOEs', '非金融公企業を含む', '含非金融国企'),
            base: 1800 * 조, rate: 120 * 조, baseDate: D },

          { size: 'md', c: 'red', fmt: 'money',
            freq: 'annual',
            l: I('국가부채 총계', 'Total Liabilities', '国家負債総計', '国家负债总额'),
            s: I('재무제표 기준 (발생주의)', 'Accrual accounting basis', '財務諸表基準(発生主義)', '财务报表口径(权责发生制)'),
            base: 2700 * 조, rate: 120 * 조, baseDate: D,
            src: '2024회계연도 국가결산 부채총계 2,585.6조원 기준 추정' },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('국고채 발행잔액', 'Treasury Bonds Outstanding', '国庫債発行残高', '国库债券余额'),
            base: 1150 * 조, rate: 100 * 조, baseDate: D },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('1가구당 국가채무', 'Debt per Household', '1世帯当たり国家債務', '每户国家债务'),
            derive: function (v) { return v.nationalDebt / v.households; } },

          { size: 'md', c: 'gray', fmt: 'pct',
            l: I('국가채무 / GDP', 'Debt to GDP Ratio', '国家債務 / GDP', '国家债务 / GDP'),
            s: I('2019년 37.6% → 지속 상승', '37.6% in 2019, still climbing', '2019年37.6%→上昇継続', '2019年37.6%→持续上升'),
            derive: function (v) { return v.nationalDebt / v.gdp * 100; },
            ref: { v: 165.5, s: '일본 참조 — 2026년도말 보통국채 1,145조엔 ÷ 명목GDP 691.9조엔. 포괄 범위가 달라 국제비교는 아래 일반정부 부채 행으로' } },

          { size: 'md', c: 'gray', fmt: 'pct',
            l: I('일반정부 부채 / GDP', 'General Govt Debt to GDP', '一般政府債務 / GDP', '一般政府债务 / GDP'),
            s: I('국제비교는 이 지표로', 'The internationally comparable one', '国際比較はこの指標で', '国际比较用此指标'),
            derive: function (v) { return v.d2 / v.gdp * 100; },
            ref: { v: 204.4, s: '일본 참조 — IMF Fiscal Monitor 2026.4 총부채 204.4%(순부채 134.3%). 2026년 4월부터 연결 액면가 기준' } },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('오늘 늘어난 국가채무', 'Debt Added Today', '今日増えた国家債務', '今日新增国家债务'),
            s: I('자정 이후 누적', 'Since midnight KST', '午前0時以降の累計', '自午夜起累计'),
            base: 0, rate: Y.debtGrowth, baseDate: D, daily: true },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('1초당 국가채무 증가', 'Debt Growth per Second', '1秒当たりの債務増加', '每秒债务增长'),
            fixed: perSec(Y.debtGrowth) },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('올해 국채 이자 지출', 'Interest on Debt This Year', '今年の国債利払い', '本年度国债利息支出'),
            s: I('연 30.5조원 · 줄일 수 없는 고정비', 'KRW 30.5 trn/yr — an unavoidable fixed cost',
                 '年30.5兆ウォン・削れない固定費', '年30.5万亿韩元·无法削减的固定支出'),
            base: 0, rate: Y.debtInterest, baseDate: D, yearly: true,
            src: '국고채 잔액 약 1,150조원 × 평균 조달금리 약 2.6% 수준' },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('국민 1인당 국채 이자', 'Interest per Citizen', '国民1人当たり国債利払い', '人均国债利息'),
            s: I('연간', 'per year', '年間', '每年'),
            derive: function (v) { return Y.debtInterest / v.population; } },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('1초당 국채 이자', 'Interest per Second', '1秒当たりの国債利払い', '每秒国债利息'),
            fixed: perSec(Y.debtInterest) },

          { size: 'md', c: 'gray', fmt: 'pct',
            l: I('국채 이자 / 국세수입', 'Interest as Share of Tax Revenue', '国債利払い / 国税収入', '国债利息占国税收入'),
            s: I('세금 100원 중 이자로 나가는 몫', 'Of every 100 won in tax, this goes to interest',
                 '税金100ウォンのうち利払い分', '每100元税收中用于付息的部分'),
            derive: function () { return Y.debtInterest / Y.taxRevenue * 100; },
            src: '2026년 국세수입 415조원 대비' },

          { size: 'md', c: 'red', fmt: 'money',
            freq: 'annual',
            l: I('공무원·군인 연금충당부채', 'Public Pension Obligations', '公務員・軍人年金充当負債', '公务员军人养老金负债'),
            s: I('미래 연금지급 추정액', 'Estimated future payouts', '将来の年金支給推定額', '未来养老金支付估算'),
            base: 1420 * 조, rate: 60 * 조, baseDate: D,
            src: '2024회계연도 국가결산 1,377조원 기준 추정' }
        ]
      },

      /* -------------------------------------------------- */
      { id: 'revenue', freq: 'monthly', tone: 'green', span: 6,
        t: I('재정 수입 · 세금', 'Revenue & Taxes', '財政収入・税金', '财政收入与税收'),
        items: [
          { size: 'lg', c: 'green', fmt: 'money',
            l: I('올해 국세 수입', 'National Tax Revenue', '今年の国税収入', '本年度国税收入'),
            s: I('연 415조원 목표', 'Target: 415 trn KRW/yr', '年415兆ウォン目標', '年度目标415万亿韩元'),
            base: 0, rate: Y.taxRevenue, baseDate: D, yearly: true, season: 'tax',
            src: '국세는 부가세 확정신고(1·7월) · 법인세(3월) · 종합소득세(5월)에 몰립니다. 균등 분배가 아니라 월별 신고·납부 일정을 반영해 쌓습니다.' },

          { size: 'md', c: 'green', fmt: 'money',
            l: I('올해 지방세 수입', 'Local Tax Revenue', '今年の地方税収入', '本年度地方税收入'),
            base: 0, rate: Y.localTax, baseDate: D, yearly: true, season: 'localTax' },

          { size: 'md', c: 'green', fmt: 'money',
            l: I('올해 소득세', 'Income Tax', '今年の所得税', '本年度个人所得税'),
            base: 0, rate: 145 * 조, baseDate: D, yearly: true, season: 'income' },

          { size: 'md', c: 'green', fmt: 'money',
            l: I('올해 법인세', 'Corporate Tax', '今年の法人税', '本年度企业所得税'),
            base: 0, rate: 88 * 조, baseDate: D, yearly: true, season: 'corporate' },

          { size: 'md', c: 'green', fmt: 'money',
            l: I('올해 부가가치세', 'Value Added Tax', '今年の付加価値税', '本年度增值税'),
            base: 0, rate: 96 * 조, baseDate: D, yearly: true, season: 'vat' },

          { size: 'md', c: 'green', fmt: 'money',
            l: I('올해 상속·증여세', 'Inheritance & Gift Tax', '今年の相続・贈与税', '本年度遗产赠与税'),
            base: 0, rate: 17 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'green', fmt: 'money',
            l: I('올해 종합부동산세', 'Comprehensive Property Tax', '今年の総合不動産税', '本年度综合不动产税'),
            base: 0, rate: 5 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'green', fmt: 'money',
            l: I('올해 관세', 'Customs Duties', '今年の関税', '本年度关税'),
            base: 0, rate: 7 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'green', fmt: 'money',
            l: I('올해 4대보험료 수입', 'Social Insurance Contributions', '今年の社会保険料収入', '本年度社保缴费收入'),
            base: 0, rate: 220 * 조, baseDate: D, yearly: true },

          { id: 'taxYear', size: 'md', c: 'green', fmt: 'money',
            l: I('연간 총조세', 'Total Annual Taxes', '年間総租税', '年度税收总额'),
            s: I('국세 + 지방세', 'National + local', '国税＋地方税', '国税＋地方税'),
            base: 540 * 조, rate: 25 * 조, baseDate: D },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('국민 1인당 조세부담액', 'Tax Burden per Citizen', '国民1人当たり租税負担', '人均税负'),
            derive: function (v) { return v.taxYear / v.population; } },

          { size: 'md', c: 'gray', fmt: 'pct',
            l: I('조세부담률', 'Tax to GDP Ratio', '租税負担率', '税收占GDP比重'),
            derive: function (v) { return v.taxYear / v.gdp * 100; } },

          { size: 'md', c: 'gray', fmt: 'pct',
            l: I('국민부담률', 'Total Tax & Social Burden', '国民負担率', '国民负担率'),
            s: I('조세 + 사회보장기여금', 'Taxes + social contributions', '租税＋社会保障拠出', '税收＋社保缴费'),
            derive: function (v) { return (v.taxYear + 250 * 1e12) / v.gdp * 100; },
            ref: { v: 33.7, s: '일본 참조 — OECD Revenue Statistics 2025, 2023년 33.7% (일본은 2024년 잠정치 미제출)' } }
        ]
      },

      /* -------------------------------------------------- */
      { id: 'spending', freq: 'budget', tone: 'blue', span: 6,
        t: I('나라 살림 · 지출', 'Government Spending', '国の財政・支出', '政府支出'),
        items: [
          { size: 'lg', c: 'blue', fmt: 'money',
            l: I('올해 정부 예산 (총지출)', 'Government Budget This Year', '今年の政府予算(総支出)', '本年度政府预算(总支出)'),
            s: I('2026년 확정 예산 총액', '2026 enacted budget', '2026年度確定予算総額', '2026年度预算总额'),
            fixed: Y.totalSpend, compact: true, src: '기획재정부 2026년 예산 총지출' },

          { id: 'spentYTD', size: 'lg', c: 'blue', fmt: 'money',
            l: I('올해 집행된 예산', 'Budget Spent So Far', '今年の執行済み予算', '本年度已执行预算'),
            s: I('1월 1일 이후 누적 (연간 균등 배분 가정)', 'Since Jan 1 — assumes even spending across the year',
                 '1月1日以降の累計(年間均等配分の仮定)', '自1月1日累计(假设全年均匀支出)'),
            base: 0, rate: Y.totalSpend, baseDate: D, yearly: true },

          { size: 'md', c: 'green', fmt: 'money',
            l: I('올해 남은 예산', 'Budget Remaining This Year', '今年の残り予算', '本年度剩余预算'),
            derive: function (v) { return Y.totalSpend - v.spentYTD; } },

          { size: 'md', c: 'red', fmt: 'f2', un: I('배', '×', '倍', '倍'),
            l: I('국가채무 / 1년 예산', 'National Debt vs Annual Budget', '国家債務 / 1年分予算', '国家债务 / 一年预算'),
            s: I('나랏빚이 1년 예산의 몇 배인가', 'Debt as a multiple of one year of spending',
                 '国の借金は1年分予算の何倍か', '国债相当于一年预算的几倍'),
            derive: function (v) { return v.nationalDebt / Y.totalSpend; } },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('올해 관리재정수지 적자', 'Managed Fiscal Deficit', '今年の管理財政収支赤字', '本年度管理财政赤字'),
            s: I('GDP 대비 약 -4.0%', 'About -4.0% of GDP', 'GDP比 約-4.0%', '约占GDP -4.0%'),
            base: 0, rate: Y.deficit, baseDate: D, yearly: true },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('올해 통합재정수지 적자', 'Consolidated Fiscal Deficit', '今年の統合財政収支赤字', '本年度综合财政赤字'),
            base: 0, rate: 70 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'blue', fmt: 'money',
            l: I('올해 보건·복지·고용', 'Health, Welfare & Labor', '今年の保健・福祉・雇用', '本年度卫生福利就业'),
            s: I('연 268조원 · 최대 항목', '268 trn KRW — largest item', '年268兆ウォン・最大項目', '年268万亿韩元·最大项'),
            base: 0, rate: 268 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'blue', fmt: 'money',
            l: I('올해 교육', 'Education', '今年の教育', '本年度教育'),
            base: 0, rate: 105 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'blue', fmt: 'money',
            l: I('올해 국방', 'Defense', '今年の国防', '本年度国防'),
            base: 0, rate: 66.3 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'blue', fmt: 'money',
            l: I('올해 R&D', 'R&D', '今年のR&D', '本年度研发'),
            base: 0, rate: 35.3 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'blue', fmt: 'money',
            l: I('올해 SOC', 'Infrastructure', '今年のSOC', '本年度基础设施'),
            base: 0, rate: 27 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'blue', fmt: 'money',
            l: I('올해 지방교부세·교육교부금', 'Local & Education Grants', '今年の地方交付税・教育交付金', '本年度地方与教育转移支付'),
            base: 0, rate: 145 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'blue', fmt: 'money',
            l: I('올해 산업·중소기업·에너지', 'Industry, SMEs & Energy', '今年の産業・中小企業・エネルギー', '本年度产业中小企业能源'),
            base: 0, rate: 30 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'blue', fmt: 'money',
            l: I('올해 농림·수산·식품', 'Agriculture & Fisheries', '今年の農林・水産・食品', '本年度农林水产食品'),
            base: 0, rate: 27 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'blue', fmt: 'money',
            l: I('올해 공공질서·안전', 'Public Order & Safety', '今年の公共秩序・安全', '本年度公共秩序与安全'),
            base: 0, rate: 26 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'gray', fmt: 'money',
            l: I('국민 1인당 정부지출', 'Spending per Citizen', '国民1人当たり政府支出', '人均政府支出'),
            derive: function (v) { return Y.totalSpend / v.population; } }
        ]
      },

      /* --------------------------------------------------
         재정 일정 — 이 패널만은 추정이 하나도 없습니다.
         날짜를 헌법과 국가재정법이 못박아 두었기 때문에,
         사이트에서 유일하게 '지금 이 순간 100% 정확한' 숫자입니다.
         -------------------------------------------------- */
      { id: 'deadline', freq: 'legal', tone: 'sand', span: 6,
        t: I('재정 일정 · 남은 시간', 'Fiscal Countdown', '財政日程・残り時間', '财政日程 · 倒计时'),
        items: [
          { size: 'lg', c: 'blue', fmt: 'dday',
            l: I('내년 예산안 국회 제출까지', 'Until Budget Bill Submission', '来年度予算案の国会提出まで', '距明年预算案提交国会'),
            s: I('헌법 제54조 · 회계연도 개시 90일 전', 'Constitution Art.54 — 90 days before fiscal year', '憲法第54条・会計年度開始90日前', '宪法第54条·会计年度开始前90日'),
            until: annualDeadline(DL.budgetSubmit, [9, 3]),
            src: '대한민국 헌법 제54조 제2항' },

          { size: 'lg', c: 'red', fmt: 'dday',
            l: I('국회 예산안 처리 법정기한까지', 'Until Budget Passage Deadline', '国会の予算案議決期限まで', '距国会预算案议决期限'),
            s: I('헌법 제54조 · 회계연도 개시 30일 전', 'Constitution Art.54 — 30 days before fiscal year', '憲法第54条・会計年度開始30日前', '宪法第54条·会计年度开始前30日'),
            until: annualDeadline(DL.budgetPass, [12, 2]),
            src: '대한민국 헌법 제54조 제2항' },

          { size: 'md', c: 'gray', fmt: 'dday',
            l: I('올해 회계연도 종료까지', 'Until Fiscal Year End', '今年度の会計年度終了まで', '距本会计年度结束'),
            s: I('국가재정법 제2조 · 12월 31일', 'National Finance Act Art.2 — Dec 31', '国家財政法第2条・12月31日', '国家财政法第2条·12月31日'),
            until: annualDeadline(DL.fiscalEnd, [12, 31]) },

          { size: 'md', c: 'gray', fmt: 'pct', freq: 'live',
            l: I('올해 경과율', 'Year Elapsed', '今年の経過率', '本年度已过'),
            s: I('한국 시각 기준', 'Korea Standard Time', '韓国時間基準', '韩国时间'),
            progress: true }
        ]
      },

      /* -------------------------------------------------- */
      { id: 'private', freq: 'quarterly', tone: 'orange', span: 6,
        t: I('민간 부채', 'Private Debt', '民間債務', '民间债务'),
        items: [
          { id: 'householdDebt', size: 'lg', c: 'red', fmt: 'money',
            l: I('가계부채 (가계신용)', 'Household Debt', '家計債務(家計信用)', '家庭债务(家庭信贷)'),
            base: 1980 * 조, rate: 55 * 조, baseDate: D, src: '한국은행 가계신용 통계 기준 추정' },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('주택담보대출', 'Mortgage Loans', '住宅担保ローン', '住房抵押贷款'),
            base: 1150 * 조, rate: 45 * 조, baseDate: D },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('신용대출 등 기타대출', 'Other Consumer Loans', '信用ローン等その他', '信用贷款等其他'),
            base: 690 * 조, rate: 6 * 조, baseDate: D },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('판매신용', 'Credit Card & Installment', '販売信用', '销售信贷'),
            base: 122 * 조, rate: 4 * 조, baseDate: D },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('자영업자 대출', 'Self-employed Business Loans', '自営業者ローン', '个体户贷款'),
            base: 1080 * 조, rate: 20 * 조, baseDate: D },

          { id: 'corpDebt', size: 'md', c: 'red', fmt: 'money',
            l: I('기업부채 (기업신용)', 'Corporate Debt', '企業債務(企業信用)', '企业债务(企业信贷)'),
            base: 2900 * 조, rate: 100 * 조, baseDate: D },

          { size: 'md', c: 'red', fmt: 'money',
            freq: 'projection',
            l: I('전세보증금 추정 총액', 'Jeonse Deposits Outstanding', 'チョンセ保証金推定総額', '全租保证金总额估算'),
            base: 900 * 조, rate: 10 * 조, baseDate: D },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('1가구당 가계부채', 'Household Debt per Household', '1世帯当たり家計債務', '每户家庭债务'),
            derive: function (v) { return v.householdDebt / v.households; } },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('국민 1인당 가계부채', 'Household Debt per Citizen', '国民1人当たり家計債務', '人均家庭债务'),
            derive: function (v) { return v.householdDebt / v.population; } },

          { size: 'md', c: 'gray', fmt: 'pct',
            l: I('가계부채 / GDP', 'Household Debt to GDP', '家計債務 / GDP', '家庭债务 / GDP'),
            s: I('가계신용 잔액 기준', 'Household credit basis', '家計信用残高基準', '家庭信贷余额口径'),
            derive: function (v) { return v.householdDebt / v.gdp * 100; },
            ref: { v: 61.1, s: '일본 참조 — BIS 총여신 통계, 2024년말 61.1%' } },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('가계+기업+국가 총부채', 'Total Economy-wide Debt', '家計＋企業＋国の総債務', '家庭＋企业＋国家总债务'),
            derive: function (v) { return v.householdDebt + v.corpDebt + v.nationalDebt; } },

          { size: 'md', c: 'red', fmt: 'pct',
            l: I('총부채 / GDP', 'Total Debt to GDP', '総債務 / GDP', '总债务 / GDP'),
            derive: function (v) { return (v.householdDebt + v.corpDebt + v.nationalDebt) / v.gdp * 100; } }
        ]
      },

      /* -------------------------------------------------- */
      { id: 'economy', freq: 'monthly', tone: 'teal', span: 6,
        t: I('경제 · 대외', 'Economy & Trade', '経済・対外', '经济与对外'),
        items: [
          { id: 'gdp', size: 'lg', c: 'green', fmt: 'money', freq: 'quarterly',
            l: I('국내총생산 (명목 GDP)', 'Gross Domestic Product', '国内総生産(名目GDP)', '国内生产总值(名义)'),
            s: I('연간 환산 기준', 'Annualized', '年間換算基準', '年化口径'),
            base: 2640 * 조, rate: 100 * 조, baseDate: D,
            src: '한국은행 국민계정 — 2025년 약 2,640조원 → 2026년 약 2,740조원' },

          { size: 'md', c: 'green', fmt: 'money',
            l: I('올해 생산된 GDP', 'GDP Produced This Year', '今年生産されたGDP', '本年度已产出GDP'),
            base: 0, rate: Y.gdpYear, baseDate: D, yearly: true },

          { size: 'md', c: 'green', fmt: 'money',
            l: I('1인당 GDP', 'GDP per Capita', '1人当たりGDP', '人均GDP'),
            derive: function (v) { return v.gdp / v.population; } },

          { size: 'md', c: 'gray', fmt: 'pct',
            freq: 'quarterly',
            l: I('실질 GDP 성장률', 'Real GDP Growth', '実質GDP成長率', '实际GDP增长率'),
            fixed: 1.8 },

          { id: 'exports', size: 'md', c: 'green', fmt: 'usd',
            l: I('올해 수출액', 'Exports This Year', '今年の輸出額', '本年度出口额'),
            s: I('연 7,100억 달러', 'USD 710 bn/yr', '年7,100億ドル', '年7,100亿美元'),
            base: 0, rate: 7100 * 억, baseDate: D, yearly: true },

          { id: 'imports', size: 'md', c: 'red', fmt: 'usd',
            l: I('올해 수입액', 'Imports This Year', '今年の輸入額', '本年度进口额'),
            base: 0, rate: 6600 * 억, baseDate: D, yearly: true },

          { size: 'md', c: 'green', fmt: 'usd',
            l: I('올해 무역수지', 'Trade Balance This Year', '今年の貿易収支', '本年度贸易差额'),
            derive: function (v) { return v.exports - v.imports; }, deriveUSD: true },

          { size: 'md', c: 'green', fmt: 'usd',
            l: I('외환보유액', 'Foreign Exchange Reserves', '外貨準備高', '外汇储备'),
            base: 4150 * 억, rate: 60 * 억, baseDate: D },

          { size: 'md', c: 'green', fmt: 'usd',
            freq: 'quarterly',
            l: I('대외순금융자산', 'Net External Financial Assets', '対外純金融資産', '对外净金融资产'),
            base: 11000 * 억, rate: 600 * 억, baseDate: D },

          /* 환율은 이 항목에 숫자로 적지 않습니다.
             통화 환산에 실제로 쓰이는 값(core.js 의 CURRENCIES.USD.fx)을 그대로 읽어야
             '표시된 환율' 과 '실제 환산' 이 어긋나지 않습니다.
             값의 출처는 data/live.js → assets/js/live.js 순입니다. */
          { size: 'md', c: 'gray', fmt: 'money', noconv: true, freq: 'live',
            l: I('원/달러 환율', 'KRW / USD Exchange Rate', 'ウォン/ドル為替レート', '韩元/美元汇率'),
            derive: function () { return window.RDC.CURRENCIES.USD.fx; },
            src: '이 사이트의 모든 통화 환산에 실제로 쓰이는 환율입니다' },

          { size: 'md', c: 'gray', fmt: 'pct', freq: 'daily',
            l: I('한국은행 기준금리', 'BOK Policy Rate', '韓国銀行 基準金利', '韩国银行基准利率'),
            fixed: live('bokRate', 2.25) },

          { size: 'md', c: 'gray', fmt: 'pct', freq: 'daily',
            l: I('국고채 3년', 'Treasury Bond 3Y', '国庫債3年', '国债3年'),
            s: I('국채 조달금리의 기준', 'Benchmark funding cost', '国債調達金利の基準', '国债融资成本基准'),
            fixed: live('ktb3y', 2.68),
            src: '[확인 필요] 한국은행 ECOS 시장금리로 검증하십시오' },

          { size: 'md', c: 'gray', fmt: 'pct', freq: 'daily',
            l: I('국고채 10년', 'Treasury Bond 10Y', '国庫債10年', '国债10年'),
            s: I('장기 조달금리', 'Long-term funding cost', '長期調達金利', '长期融资成本'),
            fixed: live('ktb10y', 3.05),
            src: '[확인 필요] 한국은행 ECOS 시장금리로 검증하십시오' },

          { size: 'md', c: 'gray', fmt: 'pct',
            l: I('소비자물가 상승률', 'Consumer Inflation', '消費者物価上昇率', '消费者物价涨幅'),
            fixed: live('cpi', 1.9) },

          { size: 'md', c: 'gray', fmt: 'count', freq: 'daily',
            l: I('코스피 지수', 'KOSPI Index', 'KOSPI指数', 'KOSPI指数'),
            fixed: live('kospi', 3150) },

          { size: 'md', c: 'slate', fmt: 'text',
            freq: 'annual',
            l: I('국가신용등급', 'Sovereign Credit Rating', '国家信用格付け', '主权信用评级'),
            s: I('S&P 기준', 'S&P', 'S&P基準', 'S&P'),
            text: I('AA / 안정적', 'AA / Stable', 'AA / 安定的', 'AA / 稳定') }
        ]
      },

      /* -------------------------------------------------- */
      { id: 'population', freq: 'monthly', tone: 'gray', span: 6,
        t: I('인구 · 노동', 'Population & Labor', '人口・労働', '人口与劳动'),
        items: [
          { id: 'population', size: 'lg', c: 'gray', fmt: 'count', un: UN_PERSON,
            l: I('총인구', 'Total Population', '総人口', '总人口'),
            s: I('주민등록 기준 · 감소 중', 'Resident registration — declining', '住民登録基準・減少中', '户籍口径·持续减少'),
            base: Y.popBase, rate: Y.popRate, baseDate: D,
            src: '행정안전부 주민등록 인구통계 기준 추정' },

          { id: 'households', size: 'md', c: 'gray', fmt: 'count', un: UN_HOUSE,
            l: I('총 세대수', 'Total Households', '総世帯数', '总户数'),
            base: 23000000, rate: 200000, baseDate: D },

          { size: 'md', c: 'gray', fmt: 'count', un: UN_HOUSE,
            l: I('1인 가구', 'Single-person Households', '単身世帯', '单人户'),
            base: 8100000, rate: 200000, baseDate: D },

          { id: 'employed', size: 'md', c: 'green', fmt: 'count', un: UN_PERSON,
            l: I('취업자 수', 'Employed Persons', '就業者数', '就业人数'),
            base: 29000000, rate: 150000, baseDate: D, src: '통계청 경제활동인구조사' },

          { size: 'md', c: 'red', fmt: 'count', un: UN_PERSON,
            l: I('실업자 수', 'Unemployed Persons', '失業者数', '失业人数'),
            base: 850000, rate: 10000, baseDate: D },

          { size: 'md', c: 'gray', fmt: 'pct',
            l: I('실업률', 'Unemployment Rate', '失業率', '失业率'),
            fixed: 2.9 },

          { size: 'md', c: 'green', fmt: 'count', un: UN_PERSON,
            l: I('올해 태어난 아기', 'Births This Year', '今年生まれた赤ちゃん', '本年度出生人数'),
            s: I('연 25.5만명', '255,000 per year', '年25.5万人', '年25.5万人'),
            base: 0, rate: 255000, baseDate: D, yearly: true },

          { size: 'md', c: 'red', fmt: 'count', un: UN_PERSON,
            l: I('올해 사망자', 'Deaths This Year', '今年の死亡者', '本年度死亡人数'),
            base: 0, rate: 360000, baseDate: D, yearly: true },

          { size: 'md', c: 'red', fmt: 'count', un: UN_PERSON,
            l: I('올해 인구 자연감소', 'Natural Population Decline', '今年の人口自然減', '本年度人口自然减少'),
            s: I('출생 − 사망', 'Births − deaths', '出生−死亡', '出生−死亡'),
            base: 0, rate: -105000, baseDate: D, yearly: true },

          { size: 'md', c: 'red', fmt: 'f2',
            freq: 'annual',
            l: I('합계출산율', 'Total Fertility Rate', '合計特殊出生率', '总和生育率'),
            s: I('세계 최저 수준', 'Lowest in the world', '世界最低水準', '全球最低水平'),
            fixed: 0.82,
            ref: { v: 1.14, s: '일본 참조 — 厚生労働省 人口動態統計, 2025년 1.14 (2024년 1.15)' } },

          { id: 'elderly', size: 'md', c: 'gray', fmt: 'count', un: UN_PERSON,
            l: I('65세 이상 고령인구', 'Population Aged 65+', '65歳以上高齢人口', '65岁以上人口'),
            base: 10800000, rate: 450000, baseDate: D },

          { size: 'md', c: 'red', fmt: 'pct',
            l: I('고령인구 비율', 'Share Aged 65+', '高齢人口比率', '老龄人口比重'),
            s: I('20% 이상 = 초고령사회', 'Over 20% = super-aged', '20%以上＝超高齢社会', '超20%即超老龄社会'),
            derive: function (v) { return v.elderly / v.population * 100; },
            ref: { v: 29.6, s: '일본 참조 — 総務省 人口推計, 2025-01-01 기준 29.58%. 일본은 2005년에 20%를 넘었다' } },

          { id: 'workingAge', size: 'md', c: 'gray', fmt: 'count', un: UN_PERSON,
            l: I('생산가능인구 (15~64세)', 'Working-age Population', '生産年齢人口(15〜64歳)', '劳动年龄人口(15~64岁)'),
            base: 35700000, rate: -320000, baseDate: D },

          { size: 'md', c: 'red', fmt: 'f1',
            l: I('노년부양비', 'Old-age Dependency Ratio', '老年従属人口指数', '老年抚养比'),
            s: I('생산가능인구 100명당 노인', 'Elderly per 100 working-age', '生産年齢人口100人当たり', '每百名劳动年龄人口'),
            derive: function (v) { return v.elderly / v.workingAge * 100; } },

          { size: 'md', c: 'gray', fmt: 'count', un: UN_PERSON,
            l: I('체류 외국인', 'Foreign Residents', '在留外国人', '在韩外国人'),
            base: 2700000, rate: 120000, baseDate: D },

          { size: 'md', c: 'gray', fmt: 'count', un: UN_CASE,
            l: I('올해 혼인 건수', 'Marriages This Year', '今年の婚姻件数', '本年度结婚数'),
            base: 0, rate: 240000, baseDate: D, yearly: true, season: 'marriage' },

          { size: 'md', c: 'gray', fmt: 'count', un: UN_CASE,
            l: I('올해 이혼 건수', 'Divorces This Year', '今年の離婚件数', '本年度离婚数'),
            base: 0, rate: 92000, baseDate: D, yearly: true }
        ]
      },

      /* -------------------------------------------------- */
      { id: 'pension', freq: 'annual', tone: 'purple', span: 6,
        t: I('연금 · 복지', 'Pensions & Welfare', '年金・福祉', '养老金与福利'),
        items: [
          { size: 'lg', c: 'green', fmt: 'money',
            freq: 'monthly',
            l: I('국민연금 적립금', 'National Pension Fund', '国民年金積立金', '国民年金基金'),
            base: 1350 * 조, rate: 100 * 조, baseDate: D,
            src: '국민연금공단 기금운용 현황 기준 추정' },

          /* 2055년이라는 죽은 글자 대신 남은 시간을 세어 보여 줍니다.
             확정 공표된 전망 시점이라 카운트다운의 근거가 분명합니다. */
          { size: 'md', c: 'red', fmt: 'until', freq: 'projection',
            l: I('국민연금 기금 소진까지', 'Until Pension Fund Depletion', '国民年金 基金枯渇まで', '距国民年金基金枯竭'),
            s: I('제5차 재정계산 · 2055년 전망', '5th actuarial projection — 2055', '第5次財政計算・2055年見通し', '第五次财政测算·2055年'),
            until: '2055-01-01T00:00:00+09:00',
            src: '보건복지부 제5차 국민연금 재정계산' },

          { size: 'md', c: 'gray', fmt: 'count', un: UN_PERSON,
            freq: 'monthly',
            l: I('국민연금 가입자', 'Pension Contributors', '国民年金加入者', '国民年金参保人'),
            base: 22000000, rate: -50000, baseDate: D },

          { size: 'md', c: 'gray', fmt: 'count', un: UN_PERSON,
            freq: 'monthly',
            l: I('국민연금 수급자', 'Pension Recipients', '国民年金受給者', '国民年金领取人'),
            base: 8200000, rate: 500000, baseDate: D },

          { size: 'md', c: 'gray', fmt: 'money',
            l: I('국민연금 월평균 수급액', 'Average Monthly Pension', '国民年金 月平均受給額', '国民年金月均领取额'),
            base: 680000, rate: 25000, baseDate: D },

          { size: 'md', c: 'gray', fmt: 'pct',
            l: I('국민연금 소득대체율', 'Pension Replacement Rate', '国民年金 所得代替率', '国民年金替代率'),
            s: I('40년 가입 기준', '40 years of contributions', '40年加入基準', '按缴费40年计'),
            fixed: 42.0 },

          { size: 'md', c: 'red', fmt: 'money',
            freq: 'monthly',
            l: I('올해 건강보험 진료비', 'Health Insurance Spending', '今年の健康保険診療費', '本年度医保医疗费'),
            base: 0, rate: 135 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('건강보험 누적 적립금', 'Health Insurance Reserve', '健康保険 累積積立金', '医保累计储备金'),
            s: I('감소 중', 'Shrinking', '減少中', '持续减少'),
            base: 25 * 조, rate: -2 * 조, baseDate: D },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('올해 기초연금 지출', 'Basic Pension Spending', '今年の基礎年金支出', '本年度基础养老金支出'),
            base: 0, rate: 26 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('올해 공무원연금 적자 보전', 'Civil Service Pension Subsidy', '今年の公務員年金赤字補填', '本年度公务员养老金补贴'),
            base: 0, rate: 6.5 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'gray', fmt: 'count', un: UN_PERSON,
            freq: 'monthly',
            l: I('기초생활보장 수급자', 'Basic Livelihood Recipients', '基礎生活保障受給者', '基本生活保障领取人'),
            base: 2600000, rate: 60000, baseDate: D },

          { size: 'md', c: 'red', fmt: 'pct',
            l: I('노인 빈곤율', 'Elderly Poverty Rate', '高齢者貧困率', '老年贫困率'),
            s: I('OECD 최고 수준', 'Highest in the OECD', 'OECD最高水準', 'OECD最高'),
            fixed: 38.2 }
        ]
      },

      /* -------------------------------------------------- */
      { id: 'asset', freq: 'monthly', tone: 'sand', span: 6,
        t: I('주택 · 자산', 'Housing & Assets', '住宅・資産', '住房与资产'),
        items: [
          { size: 'md', c: 'gray', fmt: 'count', un: UN_HOME,
            freq: 'annual',
            l: I('전국 주택 수', 'Total Housing Units', '全国の住宅数', '全国住房数量'),
            base: 19900000, rate: 350000, baseDate: D },

          { size: 'lg', c: 'red', fmt: 'money',
            l: I('서울 아파트 평균 매매가', 'Seoul Apartment Average Price', 'ソウル マンション平均価格', '首尔公寓平均售价'),
            base: 1250000000, rate: 40000000, baseDate: D },

          { size: 'md', c: 'red', fmt: 'money',
            l: I('전국 아파트 평균 매매가', 'National Apartment Average Price', '全国 マンション平均価格', '全国公寓平均售价'),
            base: 480000000, rate: 12000000, baseDate: D },

          { size: 'md', c: 'red', fmt: 'f1',
            freq: 'annual',
            l: I('서울 PIR', 'Seoul Price-to-Income Ratio', 'ソウル PIR', '首尔房价收入比'),
            s: I('평균가 ÷ 연소득', 'Price ÷ annual income', '平均価格÷年収', '均价÷年收入'),
            fixed: 15.2 },

          { size: 'md', c: 'gray', fmt: 'pct',
            freq: 'annual',
            l: I('자가점유율', 'Home Ownership Rate', '持ち家率', '自有住房率'),
            fixed: 57.5 },

          { size: 'md', c: 'red', fmt: 'count', un: UN_HOME,
            l: I('미분양 주택', 'Unsold New Homes', '未分譲住宅', '未售出住房'),
            base: 62000, rate: 4000, baseDate: D },

          { size: 'md', c: 'green', fmt: 'money',
            freq: 'annual',
            l: I('가계 순자산 총액', 'Total Household Net Worth', '家計純資産総額', '家庭净资产总额'),
            base: 12000 * 조, rate: 350 * 조, baseDate: D },

          { size: 'md', c: 'green', fmt: 'money',
            freq: 'quarterly',
            l: I('가계 금융자산 총액', 'Household Financial Assets', '家計金融資産総額', '家庭金融资产总额'),
            base: 5600 * 조, rate: 200 * 조, baseDate: D },

          { size: 'md', c: 'green', fmt: 'money',
            freq: 'annual',
            l: I('1가구당 평균 순자산', 'Net Worth per Household', '1世帯当たり平均純資産', '每户平均净资产'),
            derive: function (v) { return 12000 * 1e12 / v.households; } }
        ]
      },

      /* -------------------------------------------------- */
      { id: 'society', freq: 'annual', tone: 'slate', span: 6,
        t: I('사회 · 삶', 'Society & Living', '社会・暮らし', '社会与生活'),
        items: [
          { size: 'md', c: 'red', fmt: 'money',
            l: I('올해 사교육비 지출', 'Private Education Spending', '今年の私教育費支出', '本年度课外教育支出'),
            base: 0, rate: 30 * 조, baseDate: D, yearly: true },

          { size: 'md', c: 'red', fmt: 'count', un: UN_PERSON,
            l: I('올해 자살 사망자', 'Suicides This Year', '今年の自殺者', '本年度自杀人数'),
            base: 0, rate: 14000, baseDate: D, yearly: true },

          { size: 'md', c: 'red', fmt: 'f1',
            l: I('자살률', 'Suicide Rate', '自殺率', '自杀率'),
            s: I('인구 10만명당 · OECD 1위', 'Per 100,000 — highest in OECD', '人口10万人当たり・OECD1位', '每十万人·OECD第一'),
            fixed: 27.3 },

          { size: 'md', c: 'red', fmt: 'count', un: UN_PERSON,
            l: I('올해 교통사고 사망자', 'Road Deaths This Year', '今年の交通事故死者', '本年度交通事故死亡'),
            base: 0, rate: 2500, baseDate: D, yearly: true },

          { size: 'md', c: 'red', fmt: 'count', un: UN_PERSON,
            l: I('올해 산업재해 사망자', 'Workplace Deaths This Year', '今年の労働災害死者', '本年度工伤死亡'),
            base: 0, rate: 800, baseDate: D, yearly: true },

          { size: 'md', c: 'gray', fmt: 'count', un: UN_PERSON,
            l: I('공무원 수', 'Public Officials', '公務員数', '公务员人数'),
            base: 1170000, rate: 5000, baseDate: D },

          { size: 'md', c: 'gray', fmt: 'count', un: UN_PERSON,
            l: I('군 병력', 'Military Personnel', '軍兵力', '军队人数'),
            base: 450000, rate: -8000, baseDate: D },

          { size: 'md', c: 'gray', fmt: 'count', un: UN_PERSON,
            l: I('의사 수', 'Physicians', '医師数', '医生人数'),
            base: 140000, rate: 3500, baseDate: D },

          { size: 'md', c: 'green', fmt: 'money',
            l: I('최저임금 (시급)', 'Minimum Wage (hourly)', '最低賃金(時給)', '最低工资(时薪)'),
            s: I('2026년 적용', 'Effective 2026', '2026年適用', '2026年适用'),
            fixed: 10320 },

          { size: 'md', c: 'green', fmt: 'money',
            l: I('상용근로자 월평균 임금', 'Average Monthly Wage', '常用労働者 月平均賃金', '正式员工月均工资'),
            base: 4300000, rate: 130000, baseDate: D },

          { size: 'md', c: 'gray', fmt: 'count', un: UN_HOUR,
            l: I('연간 근로시간', 'Annual Working Hours', '年間労働時間', '年工作时长'),
            s: I('OECD 평균 대비 장시간', 'Long by OECD standards', 'OECD平均より長時間', '高于OECD平均'),
            fixed: 1859 },

          { size: 'md', c: 'red', fmt: 'pct',
            l: I('비정규직 비율', 'Non-regular Employment', '非正規職比率', '非正规就业比重'),
            fixed: 38.4 }
        ]
      }
    ]
  };
})();
