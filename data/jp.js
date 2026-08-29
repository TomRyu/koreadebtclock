/* =============================================================
 * 대한민국 부채시계 — 한일 비교 데이터
 * -------------------------------------------------------------
 * 이 화면은 "일본 부채시계"가 아닙니다. 일본에는 이미 오래된
 * 부채시계들이 있습니다(財部誠一 借金時計, kh-web 財政赤字カウンター 등).
 * 여기서 하려는 것은 한국 재정 논쟁에서 가장 많이 인용되는 준거국인
 * 일본과 한국을 같은 정의로 나란히 놓는 일입니다.
 *
 *   l      : 지표명   I(한국어, English, 日本語, 中文)
 *   s      : 보조설명 (선택)
 *   fmt    : 한국 값의 형식   money(원) | usd(달러) | jpy(엔) | count(+un) | pct | f1 | f2 | text
 *   bfmt   : 일본 값의 형식 (생략하면 fmt 와 같음)
 *   kr     : 한국 값        jp : 일본 값
 *   year   : 기준 연도 (행마다 다를 수 있음 — 반드시 표시)
 *   src    : 출처 (툴팁)
 *   nobar  : true 면 비율 막대를 그리지 않음 (비율 · 지수 · 연도 지표)
 *   diff   : true 면 배율이 아니라 차이(%p 등)로 비교
 *
 * [정의를 맞추는 것이 이 화면의 전부입니다]
 *   · 한국의 "국가채무(D1)"와 일본에서 흔히 말하는 「国の借金」은
 *     포괄 범위가 다릅니다. 그대로 나란히 놓으면 비교가 왜곡됩니다.
 *     그래서 국제비교 행은 일반정부 총부채(D2 계열)로 통일하고,
 *     각국 국내 기준(D1 · 普通国債残高)은 별도 행으로 따로 적었습니다.
 *     한국 값은 data/data.js 의 Y 에서 파생되고(= 부채시계와 항상 같은 숫자),
 *     일본 값은 IMF Fiscal Monitor 를 씁니다.
 *   · IMF 는 2026년 4월 자료부터 일본의 총부채 정의를
 *     '비연결 시가' 에서 '연결 액면가' 로 바꿨습니다. 그래서 예전에
 *     널리 인용되던 250% 안팎의 수치와는 이어지지 않습니다.
 *   · 원화 금액과 엔화 금액을 배율로 비교하는 행은 환율에 흔들립니다.
 *     GDP 대비 · 1인당 같은 정규화 지표를 먼저 보십시오.
 *
 * [갱신] 일본 예산 · 국채 수치는 매년 12월(정부안) · 3월(성립) 에,
 *        IMF 수치는 4월 · 10월 에 바뀝니다.
 * ============================================================= */

(function () {
  var 조 = 1e12;
  function I(ko, en, ja, zh) { return { ko: ko, en: en, ja: ja, zh: zh }; }

  /* ---------------------------------------------------------
     한국 쪽 값은 부채시계와 같은 상수(data/data.js 의 Y)에서 뽑습니다.
     여기에 숫자를 다시 적으면 두 화면이 어긋나므로 그러지 마십시오.
     기준 시점은 2026년말(= 기준값 + 연간 증감액) 로 통일했습니다.
     --------------------------------------------------------- */
  var Y = (window.ROK_DATA && window.ROK_DATA.Y) || {};
  var KR = {
    debt:     Y.debtBase + Y.debtGrowth,   // 2026년말 국가채무(D1)
    d2:       Y.d2Base   + Y.d2Growth,     // 2026년말 일반정부 부채(D2)
    gdp:      Y.gdpYear,                   // 2026년 연간 명목 GDP
    pop:      Y.popBase  + Y.popRate,      // 2026년말 총인구
    interest: Y.debtInterest,              // 올해 국채 이자
    spend:    Y.totalSpend                 // 올해 정부 총지출
  };
  function pct(a, b) { return Math.round(a / b * 1000) / 10; }

  var UN_PERSON = I('명', ' people', '人', '人');
  var UN_YEAR   = I('년', '', '年', '年');

  window.ROK_JP = {

    /* 화면 상단 경고 — 이 화면의 신뢰도를 좌우하는 문장 */
    caveat: I(
      '일본에는 이미 여러 부채시계가 있습니다. 이 화면은 그것을 옮겨온 것이 아니라, 두 나라를 같은 정의로 나란히 놓은 비교표입니다. ' +
      '한국의 국가채무(D1)와 일본의 보통국채 잔액은 포괄 범위가 다르므로, 국제비교는 일반정부 총부채 행을 보십시오. ' +
      '한국 값은 이 사이트 부채시계와 같은 기준값에서 계산하고, 일본 값은 IMF 자료를 씁니다. ' +
      'IMF 는 2026년 4월부터 일본의 총부채 정의를 연결 액면가 기준으로 바꿔, 예전에 인용되던 250% 안팎의 수치와는 이어지지 않습니다. ' +
      '원화와 엔화의 금액 배율은 환율에 따라 흔들리므로, GDP 대비와 1인당 지표를 먼저 보십시오. 기준 연도는 지표마다 다릅니다.',

      'Japan already has several debt clocks. This screen is not a copy of them — it places the two countries side by side on matching definitions. ' +
      'Korean national debt (D1) and the Japanese JGB balance cover different things, so use the general government gross debt row for international comparison. ' +
      'The Korean figures come from the same basis values as the debt clock on this site; the Japanese ones come from the IMF. ' +
      'From April 2026 the IMF restated Japanese gross debt on a consolidated face-value basis, so it does not connect to the ~250% figures long quoted elsewhere. ' +
      'Won-versus-yen ratios move with the exchange rate — read the ratios to GDP and the per-capita rows first. Reference years differ by indicator.',

      '日本にはすでに複数の借金時計があります。この画面はそれを写したものではなく、両国を同じ定義で並べた比較表です。' +
      '韓国の国家債務(D1)と日本の普通国債残高は範囲が異なるため、国際比較には一般政府総債務の行をご覧ください。' +
      '韓国の数値は当サイトの債務時計と同じ基準値から算出し、日本の数値はIMF資料によります。' +
      'IMFは2026年4月から日本の総債務を連結・額面ベースに改めたため、従来引用されてきた250%前後の数値とは接続しません。' +
      'ウォンと円の金額倍率は為替に左右されるので、GDP比と1人当たりの指標を先にご覧ください。基準年は指標ごとに異なります。',

      '日本已有多个债务时钟。本页面并非其复制，而是以统一口径并列两国的对比表。' +
      '韩国的国家债务(D1)与日本的普通国债余额涵盖范围不同，国际比较请看一般政府总债务一行。' +
      '韩国数值取自本站债务时钟所用的同一基准值，日本数值取自IMF资料。' +
      'IMF自2026年4月起将日本总债务改为合并、面值口径，因此与此前常被引用的250%左右的数值不衔接。' +
      '韩元与日元的金额倍数受汇率影响，请优先参考占GDP比重与人均指标。各指标基准年份不同。'
    ),

    groups: [

      /* ---------------------------------------------------- */
      { tone: 'red',
        t: I('나라빚', 'Government Debt', '国の借金', '国家债务'),
        rows: [
          { l: I('일반정부 총부채 / GDP', 'General Govt Gross Debt to GDP', '一般政府総債務 / GDP', '一般政府总债务 / GDP'),
            s: I('국제비교는 이 행으로 — 일반정부 부채 기준', 'The row to compare — general government basis',
                 '国際比較はこの行 — 一般政府ベース', '国际比较请看此行 — 一般政府口径'),
            fmt: 'pct', year: 2026, kr: pct(KR.d2, KR.gdp), jp: 204.4, nobar: true, diff: true,
            src: '한국 — 이 사이트의 2026년말 기준값(일반정부 부채 ÷ 명목 GDP) · ' +
                 '일본 — IMF Fiscal Monitor 2026.4 총부채 204.4%(순부채 134.3%), 2026년 4월부터 연결 액면가 기준' },

          { l: I('국내 기준 국가채무', 'National Debt, Domestic Basis', '国内基準の国の借金', '本国口径国家债务'),
            s: I('한국 국가채무(D1) · 일본 보통국채 잔액 — 범위가 다릅니다',
                 'Korea D1 vs Japan JGB balance — different coverage',
                 '韓国D1・日本の普通国債残高 — 範囲が異なる', '韩国D1·日本普通国债余额 — 口径不同'),
            fmt: 'money', bfmt: 'jpy', year: 2026, kr: KR.debt, jp: 1145 * 조,
            src: '한국 — 부채시계와 같은 2026년말 국가채무(D1) 전망 · 財務省 2026年度末 普通国債残高 見込 1,145兆円' },

          { l: I('국내 기준 국가채무 / GDP', 'Domestic-basis Debt to GDP', '国内基準の国の借金 / GDP', '本国口径国家债务 / GDP'),
            fmt: 'pct', year: 2026, kr: pct(KR.debt, KR.gdp), jp: 165.5, nobar: true, diff: true,
            src: '위 두 행을 각국 명목 GDP 로 나눈 값 (일본 1,145조엔 ÷ 691.9조엔)' },

          { l: I('국민 1인당 국가채무', 'Debt per Citizen', '国民1人当たりの借金', '人均国家债务'),
            fmt: 'money', bfmt: 'jpy', year: 2026, kr: KR.debt / KR.pop, jp: 9286000,
            src: '국내 기준 국가채무 ÷ 총인구 (일본 1,145조엔 ÷ 1억2,330만명)' },

          { l: I('올해 국채 이자 지출', 'Interest on Debt This Year', '今年の国債利払い費', '本年度国债利息支出'),
            fmt: 'money', bfmt: 'jpy', year: 2026, kr: KR.interest, jp: 13 * 조,
            src: '한국 — 부채시계와 같은 국고채 이자 · 財務省 令和8年度予算 利払費 約13兆円' },

          { l: I('이자 지출 / 정부 지출', 'Interest as Share of Spending', '利払費 / 政府支出', '利息支出 / 政府支出'),
            s: I('세금을 걷어 이자부터 내는 비중', 'Share of the budget spent before anything else',
                 '税収からまず利子に充てる割合', '税收中优先支付利息的比重'),
            fmt: 'pct', year: 2026, kr: pct(KR.interest, KR.spend), jp: 10.6, nobar: true, diff: true,
            src: '한국 — 국채 이자 ÷ 총지출 · 일본 13兆円 ÷ 一般会計歳出 122.3兆円' },

          /* [뺀 행] 10년 국채 금리 · 국가신용등급 —
             시장 시세와 등급은 다른 행보다 훨씬 빨리 낡아, 갱신을 놓치면
             틀린 숫자가 오래 남습니다. 되살리려면 갱신 주기를 함께 정하십시오. */
        ]
      },

      /* ---------------------------------------------------- */
      { tone: 'blue',
        t: I('나라 살림', 'Public Finance', '国の財政', '国家财政'),
        rows: [
          { l: I('명목 GDP', 'Nominal GDP', '名目GDP', '名义GDP'),
            fmt: 'money', bfmt: 'jpy', year: 2026, kr: KR.gdp, jp: 691.9 * 조,
            src: '한국 — 부채시계와 같은 2026년 연간 명목 GDP · 内閣府 2026年度 政府経済見通し 691.9兆円' },

          { l: I('정부 지출 규모', 'Government Spending', '政府支出の規模', '政府支出规模'),
            s: I('한국은 총지출, 일본은 일반회계 세출', 'Korea total expenditure vs Japan general account',
                 '韓国は総支出、日本は一般会計歳出', '韩国为总支出，日本为一般会计岁出'),
            fmt: 'money', bfmt: 'jpy', year: 2026, kr: KR.spend, jp: 122.3 * 조,
            src: '한국 — 부채시계와 같은 2026년 총지출 · 令和8年度予算 一般会計 122兆3,092億円 (過去最大)' },

          { l: I('국민부담률', 'Tax & Social Contributions to GDP', '国民負担率(OECD基準)', '国民负担率(OECD口径)'),
            s: I('조세 + 사회보장기여금 ÷ GDP · OECD 기준', 'Taxes plus social contributions over GDP, OECD basis',
                 '租税＋社会保障拠出 ÷ GDP · OECD基準', '税收＋社保缴费 ÷ GDP · OECD口径'),
            fmt: 'pct', year: 2024, kr: 25.3, jp: 33.7, nobar: true, diff: true,
            src: 'OECD Revenue Statistics 2025 — 한국 25.3%(2024) · 일본 33.7%(2023, 2024년 잠정치 미제출)' }
        ]
      },

      /* ---------------------------------------------------- */
      { tone: 'orange',
        t: I('가계 · 인구', 'Households & Population', '家計・人口', '家庭与人口'),
        rows: [
          { l: I('가계부채 / GDP', 'Household Debt to GDP', '家計債務 / GDP', '家庭债务 / GDP'),
            s: I('이 지표는 한국이 훨씬 높습니다', 'Korea is far higher on this one',
                 'この指標は韓国が遥かに高い', '此项韩国远高于日本'),
            fmt: 'pct', year: 2025, kr: 88.6, jp: 61.1, nobar: true, diff: true,
            src: 'BIS 총여신 통계 — 한국 2025년말 88.6% · 일본 2024년말 61.1%' },

          { l: I('총인구', 'Total Population', '総人口', '总人口'),
            fmt: 'count', un: UN_PERSON, year: 2026, kr: KR.pop, jp: 123300000,
            src: '한국 — 부채시계와 같은 2026년말 총인구 · 総務省 人口推計' },

          { l: I('고령인구 비율 (65세 이상)', 'Share Aged 65+', '高齢化率(65歳以上)', '老龄人口比重(65岁以上)'),
            s: I('한국이 지금의 일본에 이르는 데 20년쯤 남았습니다',
                 'Korea is roughly two decades behind where Japan is now',
                 '韓国が今の日本に至るまで20年ほど', '韩国距日本当前水平约二十年'),
            fmt: 'pct', year: 2026, kr: 21.5, jp: 29.6, nobar: true, diff: true,
            src: '통계청 · 総務省 — 일본은 2025-01-01 기준 29.58%' },

          { l: I('합계출산율', 'Total Fertility Rate', '合計特殊出生率', '总和生育率'),
            s: I('일본이 1.5배 높습니다', 'Half again as high in Japan', '日本が1.5倍高い', '日本高出五成'),
            fmt: 'f2', year: 2024, kr: 0.75, jp: 1.15, nobar: true,
            src: '통계청 인구동향조사 · 厚生労働省 人口動態統計' }
        ]
      },

      /* ---------------------------------------------------- */
      { tone: 'slate',
        t: I('한국은 일본을 몇 년 뒤에서 따라가는가', 'How Many Years Behind Japan Is Korea?',
             '韓国は日本の何年後を歩いているか', '韩国落后日本多少年'),
        rows: [
          { l: I('고령인구 비율 20% 도달', 'Year the 65+ Share Reached 20%', '高齢化率20%到達', '老龄人口比重达20%'),
            s: I('한국이 19년 뒤에 같은 지점을 지났습니다', 'Korea passed the same point 19 years later',
                 '韓国は19年遅れて同じ地点を通過', '韩国晚19年跨过同一节点'),
            fmt: 'year', un: UN_YEAR, year: 2026, kr: 2024, jp: 2005, nobar: true,
            cmpText: I('한국이 19년 늦게 도달', 'Korea arrived 19 years later',
                       '韓国は19年遅れて到達', '韩国晚19年到达'),
            src: '통계청 — 한국 2024년 12월 20% 돌파 · 일본 2005년 20.2%' },

          { l: I('총인구 정점', 'Year Population Peaked', '総人口のピーク', '总人口峰值年份'),
            s: I('두 나라 모두 이미 지났습니다', 'Both countries are already past it',
                 '両国ともすでに通過', '两国均已越过'),
            fmt: 'year', un: UN_YEAR, year: 2026, kr: 2020, jp: 2008, nobar: true,
            cmpText: I('한국이 12년 늦게 정점', 'Korea peaked 12 years later',
                       '韓国は12年遅れてピーク', '韩国晚12年见顶'),
            src: '통계청 · 総務省 — 한국 2020년 5,184만명, 일본 2008년 1억2,808만명' }
        ]
      }
    ]
  };
})();
