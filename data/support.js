/* =============================================================
 * 대한민국 부채시계 — 광고 · 후원 설정
 * -------------------------------------------------------------
 * 이 파일 하나만 고치면 광고와 후원 UI가 전부 바뀝니다.
 * 렌더링 코드는 assets/js/support.js 에 있습니다.
 *
 * [처음 설정할 때 할 일]
 *   1. site / contact / operator 를 실제 값으로 교체
 *   2. 애드센스 승인 후 ads.client · ads.slots 를 실제 값으로 교체
 *   3. ads.on 을 true 로  (false 인 동안은 광고 코드가 아예 삽입되지 않음)
 *   4. 루트 ads.txt 의 pub 번호도 같이 교체
 *   5. support.links 에서 쓰지 않을 항목은 on:false
 *
 * 승인 전에 광고 "배치"만 미리 보려면 →  index.html#ads=preview
 * ============================================================= */

(function () {
  function I(ko, en, ja, zh) { return { ko: ko, en: en, ja: ja, zh: zh }; }

  window.ROK_SUPPORT = {

    /* ---------- 사이트 기본 정보 ---------- */
    site:      'koreadebtclock.org',
    contact:   'contact@koreadebtclock.org',
    operator:  I('대한민국 부채시계 운영자', 'Korea Debt Clock',
                 '大韓民国 債務時計 運営者', '大韩民国 债务时钟 运营者'),
    effective: '2026-09-01',            // 방침 시행일

    /* =========================================================
       1. 구글 애드센스
       ========================================================= */
    ads: {
      on: false,                        // ★ 승인 완료 후 true
      client: 'ca-pub-0000000000000000',

      /* 광고 단위 ID — 애드센스 > 광고 > 광고 단위 기준 에서 발급 */
      slots: {
        mid:    '0000000000',           // 부채시계 화면 · 히어로와 패널 사이
        growth: '0000000000',           // 증가율 화면 · 차트 아래
        cmp:    '0000000000',           // 남북 비교 화면 · 표 아래
        jp:     '0000000000',           // 한일 비교 화면 · 표 아래
        foot:   '0000000000'            // 모든 화면 · 푸터 위
      },

      /* 광고 라벨 — 애드센스 정책상 '광고 / Advertisement' 계열만 허용 */
      label: I('광고', 'Advertisement', '広告', '广告')
    },

    /* =========================================================
       2. 쿠키 동의 배너
       -----------------------------------------------------------
       mode 'builtin' : 아래 배너를 직접 띄움 (기본값)
            'google'  : 애드센스 콘솔의 '개인정보 보호 및 메시지'(Funding
                        Choices) CMP 를 쓸 때. 자체 배너는 뜨지 않습니다.
                        EEA·영국 트래픽이 있다면 이쪽이 구글의 공식 요구사항.
            'off'     : 배너 없이 바로 맞춤 광고 (EEA 대상이면 정책 위반)
       ========================================================= */
    consent: {
      mode: 'builtin',
      title: I('쿠키 사용 안내', 'Cookies on this site',
               'クッキーの使用について', '关于本站的 Cookie'),
      body: I(
        '이 사이트는 운영비를 충당하기 위해 구글 애드센스 광고를 게재합니다. 광고 제공사는 쿠키와 유사 기술로 맞춤 광고를 표시할 수 있습니다. ' +
        '‘거부’를 선택하면 맞춤형이 아닌 일반 광고만 표시됩니다. 어느 쪽을 선택하든 이 사이트가 직접 여러분의 개인정보를 수집하는 일은 없습니다.',

        'This site runs Google AdSense to cover its running costs. Ad providers may use cookies and similar technologies to show personalised ads. ' +
        'Choosing “Decline” means you will only see non-personalised ads. Either way, this site itself collects no personal data from you.',

        'このサイトは運営費をまかなうため Google AdSense 広告を掲載しています。広告提供事業者はクッキー等を用いてパーソナライズ広告を表示する場合があります。' +
        '「拒否」を選ぶとパーソナライズされていない広告のみが表示されます。いずれの場合も当サイト自身が個人情報を収集することはありません。',

        '本站通过 Google AdSense 广告来支付运营成本。广告提供商可能使用 Cookie 等技术展示个性化广告。' +
        '选择"拒绝"后将仅显示非个性化广告。无论选择哪一项，本站自身都不会收集您的个人信息。'
      ),
      accept:  I('동의', 'Accept', '同意する', '同意'),
      decline: I('거부', 'Decline', '拒否する', '拒绝'),
      more:    I('개인정보처리방침', 'Privacy Policy', 'プライバシーポリシー', '隐私政策')
    },

    /* =========================================================
       3. 후원
       -----------------------------------------------------------
       [중요] 대한민국 '기부금품의 모집 및 사용에 관한 법률'상 1천만원
       이상을 모집하려면 사전 등록이 필요하고, 기부금영수증은 지정
       기부금단체만 발급할 수 있습니다. 그래서 이 사이트는 '기부금'이
       아니라 '운영비 후원'으로 표기합니다. 문구를 바꿀 때 유지하세요.
       ========================================================= */
    support: {
      /* ★ 후원 UI 스위치.
         false 인 동안은 헤더의 '후원하기' 버튼도, 푸터 링크도, 모달도
         아예 렌더링되지 않습니다. 아래 설정은 전부 그대로 살아 있으므로
         true 한 글자만 바꾸면 즉시 되살아납니다.

         [언제 켜는가]
         후원 요청은 신뢰의 '결과'이지 신뢰를 만드는 수단이 아닙니다.
         아직 아무것도 주지 않은 사이트가 먼저 손을 내밀면 어색하고,
         "돈 벌려는 사이트"로 읽혀 언론 인용 확률이 떨어집니다.
         다음 중 하나가 실제로 일어난 뒤에 켜십시오.
           · 통계를 최소 한 번 실제로 갱신했다 (약속을 지킨 기록이 생겼다)
           · "누가 운영하나요 / 도울 방법 없나요" 하는 메일이 실제로 왔다
         그때는 낯간지럽지 않습니다. 이미 준 것이 있으니까요.
         켤 때도 채널을 다 열지 말고 한두 개만 남기는 편이 낫습니다. */
      on: false,

      btn:   I('후원하기', 'Support', '応援する', '支持我们'),
      title: I('이 사이트를 후원해 주세요', 'Support this site',
               'このサイトを応援する', '支持这个网站'),

      intro: I(
        '대한민국 부채시계는 광고 수익과 여러분의 후원으로 운영되는 독립 프로젝트입니다. ' +
        '후원금은 도메인·호스팅 비용과 통계 갱신 작업에 쓰입니다.',

        'Korea Debt Clock is an independent project funded by ad revenue and reader support. ' +
        'Contributions go to domain and hosting costs and to keeping the statistics up to date.',

        '大韓民国債務時計は、広告収入と皆さまのご支援によって運営される独立プロジェクトです。' +
        'いただいた支援はドメイン・ホスティング費用と統計の更新作業に充てられます。',

        '大韩民国债务时钟是依靠广告收入和读者支持运营的独立项目。' +
        '您的支持将用于域名、主机费用以及统计数据的更新维护。'
      ),

      /* 광고와 후원을 동시에 받는 이유 — 방문자가 가장 먼저 품는 의문 */
      why: I(
        '왜 광고도 받고 후원도 받나요? 광고 수익만으로는 통계 갱신에 드는 시간을 감당하기 어렵고, 후원만으로는 안정적이지 않기 때문입니다. ' +
        '후원해 주셔도 광고가 사라지지는 않습니다 — 로그인 없는 정적 사이트라 방문자별로 광고를 끌 방법이 없습니다. 이 점을 미리 밝혀 둡니다.',

        'Why both ads and donations? Ad revenue alone does not cover the time it takes to keep the statistics current, and donations alone are not steady enough. ' +
        'Supporting the site does not remove the ads — this is a static site with no accounts, so ads cannot be switched off per visitor. Saying so up front.',

        'なぜ広告と支援の両方なのか。広告収入だけでは統計更新にかかる時間をまかなえず、支援だけでは安定しないためです。' +
        'ご支援いただいても広告は消えません — ログインのない静的サイトのため、訪問者ごとに広告を止める手段がありません。あらかじめお伝えします。',

        '为什么既有广告又接受支持？仅靠广告收入难以覆盖统计更新所需的时间，而仅靠支持又不够稳定。' +
        '支持本站并不会去除广告 — 这是没有账号的静态网站，无法按访客关闭广告。特此说明。'
      ),

      /* 법적 성격 고지 — 삭제하지 마세요 */
      note: I(
        '후원은 대가나 반대급부가 없는 자발적 지원이며, 세법상 기부금영수증은 발급되지 않습니다. 결제는 각 외부 서비스에서 처리되고 이 사이트는 결제 정보에 접근하지 않습니다.',
        'Support is voluntary and carries no goods, services or tax-deductible receipt in return. Payments are handled entirely by the external services listed; this site never sees your payment details.',
        '応援は対価や見返りのない自発的な支援であり、税制上の寄付金領収書は発行されません。決済は各外部サービスで処理され、当サイトが決済情報にアクセスすることはありません。',
        '支持为自愿性质，不提供任何对价、回报或税务抵扣凭证。付款完全由所列外部服务处理，本站不会接触您的支付信息。'
      ),

      /* -----------------------------------------------------------
         [국제 후원 수단 — 한국 거주자 기준 검토 결과]

         한국은 Stripe 계정 개설·정산 미지원국입니다(stripe.com/global
         목록에 한국 없음). 그래서 Stripe로만 정산하는 플랫폼은 페이지는
         만들어져도 돈을 뺄 수 없습니다. 아래 표를 기준으로 골랐습니다.

           Toss / KakaoPay  ✅ 국내 전용. 수수료 0, 즉시. 한국어에만 노출.
           Ko-fi            ✅ PayPal 정산 지원 → 한국 거주자 가능.
                               해외 후원의 주력. 1회·정기 모두 됨.
           PayPal           △  해외→한국 수취는 가능하나, 한국 계정끼리는
                               송금이 금지되어 한국인 방문자는 쓸 수 없음.
                               그래서 langs 에서 ko 를 뺐습니다.
                               환전 수수료가 3~4% 붙고, 15만원 이상 인출은
                               인출 수수료 무료.
           GitHub Sponsors  △  Stripe Connect 미지원국은 GitHub 자체 수동
                               정산 경로. 개발자 프로젝트라 어울리지만
                               개인 계정 승인에 시간이 걸립니다.
           Patreon          △  정기 후원 특화. 플랫폼 수수료 10% + 결제
                               수수료. 매달 무언가를 주는 구조가 아니면
                               이 사이트에는 과합니다.
           Buy Me a Coffee  ❌ 정산이 Stripe 전용 → 한국 거주자 출금 불가.
                               그래서 on:false 로 꺼 두었습니다.
           암호화폐          ❌ 특금법·트래블룰·세무 처리가 복잡하고,
                               공공 통계 사이트의 신뢰도에도 마이너스.

         [세무] 후원 수입도 소득입니다. 계속·반복적이면 사업소득,
         일시적이면 기타소득으로 종합소득세 신고 대상입니다. 애드센스
         수입과 합쳐 규모가 커지면 사업자등록과 세무사 상담이 필요합니다.
         ----------------------------------------------------------- */

      /* on:false 면 표시되지 않습니다.
         langs 를 지정하면 해당 언어에서만 노출됩니다 (생략 시 전체 언어) */
      links: [
        { on: true, id: 'toss', langs: ['ko'], icon: '💙',
          label: I('토스 송금', 'Toss', 'Toss送金', 'Toss转账'),
          note:  I('국내 계좌 · 수수료 없음', 'Korean bank transfer', '韓国国内送金', '韩国国内转账'),
          url:   'https://toss.me/여기에닉네임' },

        { on: true, id: 'kakao', langs: ['ko'], icon: '💛',
          label: I('카카오페이', 'KakaoPay', 'カカオペイ', 'KakaoPay'),
          note:  I('카카오톡 송금', 'via KakaoTalk', 'カカオトーク送金', '通过 KakaoTalk 转账'),
          url:   'https://qr.kakaopay.com/여기에코드' },

        /* 해외 후원의 주력 — PayPal 정산이라 한국에서 실제로 출금됩니다 */
        { on: true, id: 'kofi', icon: '☕',
          label: I('Ko-fi', 'Ko-fi', 'Ko-fi', 'Ko-fi'),
          note:  I('해외 카드 · 1회 또는 정기', 'Card · one-off or monthly',
                   'カード・単発/毎月', '信用卡 · 单次或每月'),
          url:   'https://ko-fi.com/여기에아이디' },

        /* 한국 계정끼리는 PayPal 송금이 금지되므로 ko 에서는 숨깁니다 */
        { on: true, id: 'paypal', langs: ['en', 'ja', 'zh'], icon: '🌐',
          label: I('PayPal', 'PayPal', 'PayPal', 'PayPal'),
          note:  I('해외 후원', 'International', '海外からの支援', '海外支持'),
          url:   'https://paypal.me/여기에아이디' },

        { on: false, id: 'github', icon: '⭐',
          label: I('GitHub Sponsors', 'GitHub Sponsors', 'GitHub Sponsors', 'GitHub Sponsors'),
          note:  I('매월 정기 후원', 'Monthly', '毎月の定期支援', '每月定期支持'),
          url:   'https://github.com/sponsors/여기에아이디' },

        /* 정산이 Stripe 전용 → 한국 거주자는 출금 불가. 켜지 마십시오. */
        { on: false, id: 'bmc', icon: '🥤',
          label: I('Buy Me a Coffee', 'Buy Me a Coffee', 'Buy Me a Coffee', 'Buy Me a Coffee'),
          note:  I('한국 정산 불가', 'No payout to Korea', '韓国では出金不可', '无法向韩国结算'),
          url:   'https://www.buymeacoffee.com/여기에아이디' }
      ],

      /* 계좌 직접 표기 — 쓰지 않으려면 on:false */
      bank: {
        on: false,
        label:  I('무통장 입금', 'Bank transfer', '銀行振込', '银行转账'),
        name:   I('○○은행', 'Bank name', '○○銀行', '○○银行'),
        number: '000-0000-0000',
        holder: I('예금주명', 'Account holder', '口座名義', '账户名'),
        copy:   I('복사', 'Copy', 'コピー', '复制'),
        copied: I('복사됨', 'Copied', 'コピーしました', '已复制')
      }
    },

    /* =========================================================
       4. 푸터 · 공통 문구
       ========================================================= */
    legal: {
      privacy: I('개인정보처리방침', 'Privacy Policy', 'プライバシーポリシー', '隐私政策'),
      terms:   I('이용약관', 'Terms of Use', '利用規約', '使用条款'),
      contact: I('문의', 'Contact', 'お問い合わせ', '联系我们'),
      close:   I('닫기', 'Close', '閉じる', '关闭'),
      back:    I('부채시계로 돌아가기', 'Back to the debt clock', '債務時計に戻る', '返回债务时钟')
    }
  };
})();
