/* =============================================================
 * 대한민국 부채시계 — 남북 비교 데이터
 * -------------------------------------------------------------
 * 북한은 국가채무 · 재정 총액 · 조세 통계를 공표하지 않습니다.
 * 따라서 이 화면은 "북한 부채시계"가 아니라, 공표된 추정 통계로
 * 남북의 규모 차이를 보여주는 비교표입니다.
 *
 *   l      : 지표명   I(한국어, English, 日本語, 中文)
 *   fmt    : money(원) | usd(달러) | count(+un) | pct | f1 | f2
 *   south  : 남한 값     north : 북한 값
 *   year   : 기준 연도 (행마다 다를 수 있음 — 반드시 표시)
 *   src    : 출처 (툴팁)
 *   nobar  : true 면 비율 막대를 그리지 않음 (비율·지수 지표)
 *
 * [주의] 북한 수치는 전부 추정치입니다. 특히 한국은행의 북한 GNI는
 *        북한의 물량 생산을 '남한 가격'으로 평가한 값이므로,
 *        북한 내부의 실제 경제 규모와는 다릅니다.
 *        공개 전 통계청 북한통계포털(kosis.kr/bukhan)에서 확정치 대조 필요.
 * ============================================================= */

(function () {
  var 조 = 1e12, 억 = 1e8;
  function I(ko, en, ja, zh) { return { ko: ko, en: en, ja: ja, zh: zh }; }

  var UN_PERSON = I('명', ' people', '人', '人');
  var UN_TON    = I('톤', ' t', 'トン', '吨');
  var UN_CAR    = I('대', ' units', '台', '辆');
  var UN_SUB    = I('명', ' subscribers', '人', '人');

  window.ROK_NK = {

    /* 화면 상단 경고 — 이 화면의 신뢰도를 좌우하는 문장 */
    caveat: I(
      '북한은 국가채무 · 재정 총액 · 조세 통계를 공표하지 않습니다. 그래서 이 화면은 부채시계가 아니라 규모 비교표입니다. ' +
      '모든 북한 수치는 추정치이며, 특히 한국은행의 북한 국민총소득은 북한의 물량 생산을 남한 가격으로 평가한 값이라 ' +
      '북한 내부의 실제 경제 규모와는 다릅니다. 기준 연도가 지표마다 다르므로 각 행의 연도를 함께 보십시오.',

      'North Korea publishes no figures for national debt, total government spending or taxation. This screen is therefore a scale comparison, not a debt clock. ' +
      'Every North Korean figure is an estimate. In particular, the Bank of Korea values North Korean physical output at South Korean prices, ' +
      'so its GNI estimate is not the size of the North Korean economy as experienced inside it. Reference years differ by indicator — read each row with its year.',

      '北朝鮮は国家債務・財政総額・租税の統計を公表していません。したがってこの画面は債務時計ではなく規模の比較表です。' +
      '北朝鮮の数値はすべて推定値であり、特に韓国銀行の北朝鮮GNIは北朝鮮の生産量を韓国の価格で評価した値のため、' +
      '北朝鮮内部の実際の経済規模とは異なります。基準年は指標ごとに異なるため、各行の年と併せてご覧ください。',

      '朝鲜不公布国家债务、财政总额和税收统计。因此本页面是规模对比表，而非债务时钟。' +
      '所有朝鲜数值均为估算。特别是韩国银行的朝鲜国民总收入，是以韩国价格评估朝鲜实物产出所得，' +
      '与朝鲜内部实际经济规模不同。各指标基准年份不同，请结合每行标注的年份阅读。'
    ),

    groups: [

      /* ---------------------------------------------------- */
      { tone: 'teal',
        t: I('경제 규모', 'Economic Scale', '経済規模', '经济规模'),
        rows: [
          { l: I('명목 국민총소득 (GNI)', 'Gross National Income', '名目国民総所得(GNI)', '名义国民总收入'),
            fmt: 'money', year: 2023, south: 2404 * 조, north: 40.2 * 조,
            src: '한국은행 북한 경제성장률 추정 — 북한 GNI는 남한 가격으로 평가한 값' },

          { l: I('1인당 국민총소득', 'GNI per Capita', '1人当たり国民総所得', '人均国民总收入'),
            fmt: 'money', year: 2023, south: 47250000, north: 1589000,
            src: '한국은행 북한 경제성장률 추정' },

          { l: I('경제성장률', 'Real GDP Growth', '経済成長率', '经济增长率'),
            fmt: 'pct', year: 2023, south: 1.4, north: 3.1, nobar: true, diff: true,
            src: '한국은행 — 북한은 3년 만의 플러스 성장 추정' },

          { l: I('무역총액', 'Total Trade', '貿易総額', '贸易总额'),
            fmt: 'usd', year: 2023, south: 12749 * 억, north: 27.7 * 억,
            src: '한국무역협회 · KOTRA (북한은 남북교역 제외)' },

          { l: I('대중국 무역 의존도', 'Trade Dependence on China', '対中貿易依存度', '对华贸易依存度'),
            fmt: 'pct', year: 2023, south: 19.7, north: 98.3, nobar: true, diff: true,
            src: 'KOTRA 북한 대외무역 동향' }
        ]
      },

      /* ---------------------------------------------------- */
      { tone: 'orange',
        t: I('산업 · 에너지', 'Industry & Energy', '産業・エネルギー', '产业与能源'),
        rows: [
          { l: I('발전설비 용량', 'Power Generation Capacity', '発電設備容量', '发电装机容量'),
            fmt: 'f1', un: I(' GW', ' GW', ' GW', ' GW'), year: 2023, south: 143.0, north: 8.2,
            src: '통계청 북한통계포털' },

          { l: I('연간 발전량', 'Annual Electricity Output', '年間発電量', '年发电量'),
            fmt: 'f1', un: I(' TWh', ' TWh', ' TWh', ' TWh'), year: 2023, south: 588.0, north: 25.0,
            src: '통계청 북한통계포털 (북한 약 250억 kWh)' },

          { l: I('조강 생산량', 'Crude Steel Output', '粗鋼生産量', '粗钢产量'),
            fmt: 'count', un: UN_TON, year: 2023, south: 66700000, north: 620000,
            src: '통계청 북한통계포털' },

          { l: I('시멘트 생산량', 'Cement Output', 'セメント生産量', '水泥产量'),
            fmt: 'count', un: UN_TON, year: 2023, south: 50200000, north: 7000000,
            src: '통계청 북한통계포털' },

          { l: I('자동차 생산량', 'Motor Vehicle Output', '自動車生産台数', '汽车产量'),
            fmt: 'count', un: UN_CAR, year: 2023, south: 4240000, north: 4000,
            src: '통계청 북한통계포털 · 북한 수치는 불확실성이 특히 큼' }
        ]
      },

      /* ---------------------------------------------------- */
      { tone: 'green',
        t: I('식량', 'Food', '食糧', '粮食'),
        rows: [
          { l: I('곡물 생산량', 'Grain Production', '穀物生産量', '粮食产量'),
            s: I('북한이 더 많이 생산합니다', 'North Korea produces more', '北朝鮮の方が多い', '朝鲜产量更高'),
            fmt: 'count', un: UN_TON, year: 2023, south: 4300000, north: 4820000,
            src: '농림축산식품부 · 통계청 북한통계포털' },

          { l: I('1인당 곡물 생산량', 'Grain Output per Capita', '1人当たり穀物生産量', '人均粮食产量'),
            s: I('남한은 곡물 대부분을 수입합니다', 'South Korea imports most of its grain', '韓国は穀物の大半を輸入', '韩国粮食大部分依赖进口'),
            fmt: 'f1', un: I(' kg', ' kg', ' kg', ' kg'), year: 2023, south: 83.8, north: 186.9,
            src: '곡물 생산량 ÷ 인구' }
        ]
      },

      /* ---------------------------------------------------- */
      { tone: 'gray',
        t: I('인구 · 사회', 'Population & Society', '人口・社会', '人口与社会'),
        rows: [
          { l: I('총인구', 'Total Population', '総人口', '总人口'),
            fmt: 'count', un: UN_PERSON, year: 2023, south: 51325000, north: 25780000,
            src: '통계청 장래인구추계 · UN 인구추계' },

          { l: I('기대수명', 'Life Expectancy', '平均寿命', '预期寿命'),
            fmt: 'f1', un: I('세', ' yrs', '歳', '岁'), year: 2023, south: 83.5, north: 72.6,
            nobar: true, diff: true, src: '통계청 북한통계포털' },

          { l: I('영아사망률', 'Infant Mortality', '乳児死亡率', '婴儿死亡率'),
            s: I('출생 1,000명당', 'per 1,000 live births', '出生1,000人当たり', '每千名活产'),
            fmt: 'f1', year: 2023, south: 2.3, north: 13.6, nobar: true,
            src: '통계청 북한통계포털' },

          { l: I('합계출산율', 'Total Fertility Rate', '合計特殊出生率', '总和生育率'),
            s: I('북한이 2배 이상 높습니다', 'More than double in the North', '北朝鮮が2倍以上', '朝鲜高出两倍以上'),
            fmt: 'f2', year: 2023, south: 0.72, north: 1.79, nobar: true,
            src: '통계청 · UN 인구추계' },

          { l: I('도시화율', 'Urbanization Rate', '都市化率', '城市化率'),
            fmt: 'pct', year: 2023, south: 81.4, north: 62.6, nobar: true, diff: true,
            src: '통계청 북한통계포털' },

          { l: I('이동전화 가입자', 'Mobile Subscribers', '移動電話加入者', '移动电话用户'),
            fmt: 'count', un: UN_SUB, year: 2023, south: 56000000, north: 7000000,
            src: '과학기술정보통신부 · 통계청 북한통계포털' }
        ]
      },

      /* ---------------------------------------------------- */
      { tone: 'slate',
        t: I('국방', 'Defense', '国防', '国防'),
        rows: [
          { l: I('상비 병력', 'Active Military Personnel', '常備兵力', '现役兵力'),
            s: I('북한이 2.8배 많습니다', '2.8× larger in the North', '北朝鮮が2.8倍', '朝鲜多2.8倍'),
            fmt: 'count', un: UN_PERSON, year: 2024, south: 450000, north: 1280000,
            src: '국방백서' },

          { l: I('인구 100명당 군인', 'Soldiers per 100 People', '人口100人当たり軍人', '每百人军人数'),
            fmt: 'f2', un: I('명', '', '人', '人'), year: 2024, south: 0.88, north: 4.96,
            nobar: true, src: '상비 병력 ÷ 인구' }
        ]
      }
    ]
  };
})();
