# CLAUDE.md — koreadebtclock.org

usdebtclock.org 를 대한민국에 맞게 옮긴 **실시간 부채시계**.
빌드 도구·서버·API 가 없는 **단일 페이지 정적 사이트**. `index.html` 을 브라우저로 열면 바로 실행된다.

---

## 구조

```
index.html          부채시계 본체 (화면 4개를 탭으로 전환)
privacy.html        개인정보처리방침
terms.html          이용약관
ads.txt robots.txt sitemap.xml

assets/css/style.css        usdebtclock 계기판 스타일 (흰 판독창 + 컬러 링)
assets/js/core.js           언어·통화·숫자 포맷·KST 시간  → window.RDC
assets/js/app.js            렌더링·실시간 계산·SVG 차트
assets/js/live.js           ★ 실시간 환율 fetch (실패해도 무해)
assets/js/support.js        광고 슬롯·쿠키 배너·후원 모달
assets/js/legal.js          privacy/terms 렌더링
assets/img/flag-kr.svg      태극기 (국기법 시행령 규격). png 는 OG 용 1800×1200

data/i18n.js        20개 언어 · 24개 통화 정의        → ROK_I18N
data/ui.js          UI 단문 (20개 언어 인라인)        → ROK_UI
data/ui-long.js     UI 장문 (20개 언어 인라인)        → ROK_UI_LONG
data/labels.js      지표 라벨 번역 오버레이 ①         → ROK_LABELS
data/labels-debt.js   〃 ② 국가부채·세금·지출
data/labels-econ.js   〃 ③ 민간부채·경제·인구·연금·자산·사회
data/labels-more.js   〃 ④ 남북비교·연도별추이·후원
data/labels-time.js   〃 ⑤ 재정일정·카운트다운·시장금리
data/data.js        ★ 지표 100여 개                   → ROK_DATA
data/history.js     ★ 연도별 시계열 + 정권 + 부채비율 전망 → ROK_HISTORY
data/nk.js          ★ 남북 비교                       → ROK_NK
data/jp.js          ★ 한일 비교                       → ROK_JP
data/legal.js       법적 문서 본문                    → ROK_LEGAL
data/support.js     ★ 광고·후원 설정                  → ROK_SUPPORT
data/live.js        ★ 기계가 덮어쓰는 값 (환율·시장지표·앵커) → ROK_LIVE

scripts/update-live.js            환율 갱신 봇 (Actions 가 매일 실행)
scripts/audit-i18n.js             번역 커버리지 감사
.github/workflows/update-live.yml 매일 07:20 KST

문서/YYYY-MM-DD/NN-제목.html   운영 판단 기록 (사이트와 무관, 배포 대상 아님)
```

화면 4개: `v-clock` · `v-growth`(증가율) · `v-compare`(남북) · `v-jp`(한일)
딥링크: `index.html#growth` · `#compare` · `#lang=en` · `#growth&metric=household`

---

## 반드시 알아야 할 것

### 1. 스크립트 로드 순서가 의미를 가진다

```
i18n → ui → ui-long → labels(5개) → live → core.js → data → history → nk → jp → support
     → app.js → assets/js/support.js → assets/js/live.js
```

`core.js` 는 `ROK_I18N` 과 `ROK_LIVE` 를, `app.js` 는 나머지 전부를 전역에서 읽는다. 순서를 바꾸면 조용히 깨진다.
**`data/live.js` 는 반드시 `core.js` 앞**에 온다 — core 가 초기화 시점에 환율을 덮어쓰기 때문이다.
`assets/js/live.js` 는 반대로 맨 뒤다 (`window.RDCApp` 이 있어야 다시 그린다).
페이지를 추가하면 `index.html` · `privacy.html` · `terms.html` **세 곳 모두** 스크립트를 넣어야 한다.

### 2. 번역은 2단 구조다

`data/data.js` 등의 `I(ko, en, ja, zh)` 는 **4개 언어만** 담는다.
나머지 16개는 `labels*.js` 오버레이가 **한국어 원문을 키로** 공급한다.

```js
// core.js fromDict()
o[current]                      // ① I() 안에 그 언어가 있으면
|| ROK_LABELS[o.ko][current]    // ② 없으면 오버레이에서
|| FALLBACK 순서 (en → ko)       // ③ 그래도 없으면
```

**따라서 오버레이 키는 한국어 원문과 글자 하나까지 같아야 한다.** 원문을 고치면 오버레이 키도 같이 고쳐야 한다.
같은 한국어 문자열은 오버레이 한 항목을 공유한다 (예: `총인구` 는 부채시계·남북비교 양쪽에서 쓰임).

번역 커버리지 확인:

```bash
node scripts/audit-i18n.js      # 언어별 direct / overlay / FALLBACK 집계
```

`ROK_LEGAL`(39건)은 **의도적으로 ko/en 만** 유지한다. 법적 효력이 있는 문서라 번역 오류가 분쟁 소지가 된다.

### 3. 연간 기준 금액은 `data/data.js` 의 `Y` 하나에

여러 지표가 같은 금액을 나눠 쓴다. `Y.debtInterest` 를 고치면 누적·1인당·1초당·세수대비 4개가 함께 바뀐다.

**함정** — 같은 숫자가 보조설명(`s:`)에 **글자로도** 박혀 있다(`"연 415조원 목표"` 등).
`Y` 를 고치면 그 문구도 4개 언어 + 오버레이 16개 언어를 함께 고쳐야 한다. 대상 목록은 `Y` 블록 주석에 있다.

### 4. 시간은 전부 KST 고정

`yearly`/`daily` 누적 카운터의 경계는 한국 시각 기준이다. 해외 접속자도 "오늘·올해"가 한국 기준으로 맞는다.
`core.js` 의 `startOfDay` / `startOfYear` / `yearLength` 를 쓰고, 로컬 시간대를 쓰지 말 것.

### 5. 이 사이트는 스스로 갱신되지 않는다

해가 바뀌면 `yearly` 카운터는 리셋되지만 **작년 증가율로** 다시 쌓이고, `base+rate` 지표는 무한 선형 연장된다.
에러 없이 조용히 틀려지는 것이 가장 위험하다.

`meta.fiscalYear` 를 넘긴 해가 되거나 `meta.updated` 로부터 10개월이 지나면 **상단에 경고 배너가 자동 노출**된다(`checkStale()`).
통계를 갱신하면 `meta.updated` 와 `meta.fiscalYear` 를 **반드시 함께** 올려야 배너가 사라진다.

연간 갱신 체크리스트는 `README.md` 7장, 자동 갱신 계층은 7-1장.

### 6. 환율은 `data/live.js` 한 곳에만 있다

`data/i18n.js` 의 `fx` 는 **마지막 폴백**이다. 실제 값은 이 순서로 덮어써진다.

```
i18n.js 의 fx  →  data/live.js 의 fx (봇이 매일 커밋)  →  assets/js/live.js (브라우저 fetch)
```

`data.js` 의 '원/달러 환율' 항목도 숫자를 적지 않고 `window.RDC.CURRENCIES.USD.fx` 를 읽는다.
**환율을 두 군데에 적으면 반드시 어긋난다.** 표시된 환율과 실제 환산이 다른 사이트는 신뢰를 잃는다.

환율은 `checkStale()` 의 `meta.updated` 감시 밖이라 따로 본다 — 기준일이 45일을 넘기고
원화 외 통화를 보고 있으면 상단 배너가 뜬다(`fxStale`).

`node scripts/update-live.js --dry` 로 파일을 건드리지 않고 확인할 수 있다.
값이 상식 밖(원/달러 500~5000 밖)이거나 파일 구조가 다르면 봇은 **아무것도 쓰지 않는다.**

### 7. 지표마다 근거의 강도가 다르다 — `freq`

모든 숫자를 시각적으로 동등하게 두면 '이번 달 확정 공표치'와 '작년 증가율로 그은 직선'을
방문자가 구분할 수 없다. 셀 라벨 왼쪽 점 + 툴팁으로 구분한다.

`live · daily · monthly · quarterly · annual · budget · legal · projection`

패널에 적으면 기본값, 항목에 적으면 그 항목만. **안 적으면 `projection`** — 엔진이 실제로 하는 일이
선형 외삽이므로 그게 정직한 기본값이다. 공표 주기를 모르면 적지 마라. 틀린 배지는 없는 것보다 나쁘다.

### 8. `yearly` 는 균등하게 쌓지 않는다 — `season`

국세는 부가세 확정신고(1·7월) · 법인세(3월) · 종합소득세(5월)에 몰린다.
365일 균등 분배는 **연중 내내 틀리고 12월 31일에만 맞는다.**
`data/data.js` 의 `SEASON` 에 월별 가중치를 두고 `season: '키'` 로 붙인다.
연말 도달값은 가중치와 무관하게 언제나 `rate` 와 같다.

현재 가중치는 신고·납부 일정에서 온 **근사 프로파일**이다.
기재부 「월간 재정동향」의 과거 월별 실적으로 교체하면 한 단계 더 정확해진다.

### 9. 광고·후원 스위치

```js
// data/support.js
ads.on      = false   // 애드센스 승인 후 true. 그전엔 스니펫이 아예 삽입되지 않음
support.on  = false   // 의도적으로 꺼둔 상태 (사유는 파일 주석)
```

둘 다 false 면 푸터의 "광고와 후원으로 운영" 문구도 자동으로 숨는다(사실이 아니므로).

---

## 함정 모음 — 실제로 당한 것들

| 증상 | 원인 | 대응 |
|---|---|---|
| **화면 전체가 백지** | 화면을 추가하면서 `index.html` 의 nav 버튼을 빠뜨림. `applyText()` 가 `$('navXx').textContent` 에서 죽고 그 뒤 전부 중단 | 화면 추가 시 **nav 버튼 + section + app.js** 세 곳을 모두 건드릴 것 |
| `hidden` 이 안 먹힘 | `.btn{display:inline-block}` 같은 author 규칙이 UA 의 `[hidden]{display:none}` 을 이김 | `[hidden]{display:none !important}` 전역 규칙으로 차단 (style.css 상단) |
| 그리드가 뷰포트를 밀어냄 | `1fr` 의 자동 최소값이 `min-content` | 레이아웃 그리드는 `minmax(0,1fr)` 로 |
| 긴 숫자가 판독창에서 잘림 | 원화는 자릿수가 매우 큼 | `fit()` 이 자릿수 변화 시에만 폰트를 줄인다. 매 프레임 재계산하지 말 것 |
| 반올림 숫자에 `0000` 노이즈 | 조/억/만 3그룹 고정 출력 | 고정 금액 항목에 `compact: true` |
| 비율끼리 배율로 비교 | 성장률·의존도·기대수명은 나눗셈이 무의미 | `nk.js` 에서 `diff: true` → `+1.7%p` 형태 |

---

## 검증 방법

**Node 스텁 DOM 으로는 부족하다.** 스텁의 `getElementById` 는 절대 null 을 주지 않아서
"HTML 에 없는 id" 류 버그를 못 잡는다. 실제 브라우저 렌더링으로 확인할 것.

```bash
# 구문 검사
for f in data/*.js assets/js/*.js; do node --check "$f" || break; done

# 실제 렌더링 (Windows)
chrome --headless=new --disable-gpu --hide-scrollbars \
  --virtual-time-budget=12000 --window-size=1400,900 \
  --screenshot=out.png "file:///C:/Claude/biz/rokdebtclock/index.html"
```

**헤드리스 Chrome 은 뷰포트를 최소 485px 로 고정한다.** `--window-size=390` 을 줘도 390px 이 되지 않고
캡처만 잘려서 "레이아웃이 깨진 것처럼" 보인다. 진짜 모바일 폭을 보려면 iframe 하니스를 만들 것.

```html
<iframe src="index.html" width="390" height="880"></iframe>
```

---

## 데이터 신뢰도

**`data/` 안의 모든 수치는 공표 자료를 근거로 한 추정·전망값이며 아직 확정치와 대조되지 않았다.**
공개 전에 아래에서 반드시 검증해야 한다.

| 영역 | 출처 |
|---|---|
| 국가채무·재정·세입세출 | 기획재정부 [열린재정](https://www.openfiscaldata.go.kr/) |
| 가계·기업부채, GDP, 외환보유액, 금리 | 한국은행 [ECOS](https://ecos.bok.or.kr/) |
| 인구·출생·사망·고용 | 통계청 [KOSIS](https://kosis.kr/) |
| 주민등록 인구·세대 | 행정안전부 [주민등록 인구통계](https://jumin.mois.go.kr/) |
| 남북 비교 | 통계청 [북한통계포털](https://kosis.kr/bukhan) |

특히 **북한 수치는 전부 추정치**다. 한국은행의 북한 GNI 는 북한의 물량 생산을 **남한 가격으로 평가한** 값이라
북한 내부의 실제 경제 규모와 다르다. 이 경고는 남북 비교 화면 최상단에 고정 노출된다.

---

## 배포

```bash
npx vercel --prod                      # 또는
npx netlify deploy --prod --dir .      # 또는 GitHub Pages (Settings → Pages → main / root)
```

`data.js` 를 `fetch` 가 아니라 `<script>` 로 불러오므로 `file://` 에서도 그대로 동작한다.
`문서/` 폴더는 운영 판단 기록이며 배포 대상이 아니다.
