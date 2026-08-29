/* =============================================================
 * 대한민국 부채시계 — 개인정보처리방침 · 이용약관 본문 (4개 언어)
 * -------------------------------------------------------------
 * privacy.html · terms.html 이 이 파일을 읽어 렌더링합니다.
 * 치환 토큰:  {site} {contact} {date}  → data/support.js 의 값
 *
 * [주의] 이 문서는 개인이 운영하는 정적 사이트를 전제로 작성된
 * 일반적인 초안입니다. 사업자 등록을 하거나 서버에서 개인정보를
 * 직접 수집하게 되면 반드시 내용을 다시 검토하십시오.
 * ============================================================= */

(function () {
  function I(ko, en, ja, zh) { return { ko: ko, en: en, ja: ja, zh: zh }; }

  window.ROK_LEGAL = {

    /* =========================================================
       개인정보처리방침
       ========================================================= */
    privacy: {
      title: I('개인정보처리방침', 'Privacy Policy', 'プライバシーポリシー', '隐私政策'),
      lead: I(
        '{site}(이하 “이 사이트”)는 방문자의 개인정보를 소중히 여기며, 이 방침을 통해 어떤 정보가 어떻게 다뤄지는지 밝힙니다. 시행일 {date}.',
        '{site} (“this site”) respects your privacy. This policy explains what information is handled and how. Effective {date}.',
        '{site}(以下「当サイト」)は訪問者のプライバシーを尊重し、どの情報がどのように扱われるかを本方針で明らかにします。施行日 {date}。',
        '{site}(以下称"本站")重视访问者的隐私。本政策说明哪些信息会被处理以及如何处理。生效日期 {date}。'
      ),
      sections: [
        {
          h: I('1. 이 사이트가 직접 수집하지 않는 것',
               '1. What this site does not collect',
               '1. 当サイトが直接収集しないもの',
               '1. 本站不直接收集的信息'),
          p: [
            I('이 사이트는 서버 측 애플리케이션이나 데이터베이스가 없는 정적 웹페이지입니다. 회원가입, 로그인, 댓글, 문의 양식이 없으며 이름·연락처·주민등록번호 등 어떠한 개인정보도 직접 수집하거나 저장하지 않습니다.',
              'This site is a static web page with no server-side application or database. There is no sign-up, log-in, comment or contact form, and it does not itself collect or store any personal data such as your name, contact details or identification numbers.',
              '当サイトはサーバーサイドのアプリケーションやデータベースを持たない静的ウェブページです。会員登録・ログイン・コメント・問い合わせフォームはなく、氏名・連絡先・識別番号などの個人情報を自ら収集・保存することはありません。',
              '本站是没有服务器端应用程序或数据库的静态网页。没有注册、登录、评论或联系表单，本站自身不收集或存储姓名、联系方式、身份证号等任何个人信息。'),
            I('화면에 표시되는 모든 통계는 방문자의 브라우저 안에서 계산되며, 계산 결과가 외부로 전송되지 않습니다.',
              'Every figure shown is calculated inside your own browser, and no result is transmitted anywhere.',
              '画面に表示される統計はすべて訪問者のブラウザ内で計算され、その結果が外部に送信されることはありません。',
              '页面显示的所有统计数据均在访问者浏览器内计算，计算结果不会向外部传输。')
          ]
        },
        {
          h: I('2. 브라우저에 저장되는 값',
               '2. What is stored in your browser',
               '2. ブラウザに保存される値',
               '2. 存储在您浏览器中的内容'),
          p: [
            I('이 사이트는 브라우저의 로컬 저장소(localStorage)에 다음 두 가지만 저장합니다. 선택한 표시 언어, 그리고 쿠키 동의 배너에 대한 선택입니다. 두 값 모두 이 사이트의 서버로 전송되지 않으며, 브라우저 설정에서 사이트 데이터를 삭제하면 함께 지워집니다.',
              'This site stores only two things in your browser’s localStorage: your chosen display language, and your answer to the cookie consent banner. Neither is sent to any server of ours, and clearing site data in your browser removes both.',
              '当サイトがブラウザのローカルストレージに保存するのは、選択した表示言語と、クッキー同意バナーへの選択の2点のみです。いずれも当サイトのサーバーに送信されることはなく、ブラウザでサイトデータを削除すれば消去されます。',
              '本站仅在浏览器 localStorage 中存储两项内容：您选择的显示语言，以及您对 Cookie 同意横幅的选择。两者均不会发送至本站服务器，清除浏览器站点数据即可删除。')
          ]
        },
        {
          h: I('3. 구글 애드센스와 광고 쿠키',
               '3. Google AdSense and advertising cookies',
               '3. Google AdSense と広告クッキー',
               '3. Google AdSense 与广告 Cookie'),
          p: [
            I('이 사이트는 운영비를 충당하기 위해 제3자 광고 서비스인 구글 애드센스(Google AdSense)를 사용합니다. 구글을 포함한 제3자 광고 사업자는 쿠키 및 유사 기술을 사용하여 방문자가 이 사이트나 다른 사이트를 방문한 기록을 바탕으로 광고를 게재할 수 있습니다.',
              'To cover its running costs this site uses Google AdSense, a third-party advertising service. Google and other third-party vendors may use cookies and similar technologies to serve ads based on your prior visits to this or other websites.',
              '当サイトは運営費をまかなうため、第三者広告サービスである Google AdSense を利用しています。Google を含む第三者広告事業者は、クッキー等の技術を用いて、当サイトや他サイトへの過去の訪問履歴に基づき広告を配信することがあります。',
              '为支付运营成本，本站使用第三方广告服务 Google AdSense。包括 Google 在内的第三方广告服务商可能使用 Cookie 及类似技术，根据您此前访问本站或其他网站的记录投放广告。'),
            I('구글이 광고 목적으로 처리하는 데이터의 범위와 방식은 구글의 정책이 정하며, 이 사이트는 해당 데이터에 접근할 수 없습니다. 자세한 내용은 “구글의 서비스 이용 시 파트너 사이트나 앱에서 수집하는 정보”(policies.google.com/technologies/partner-sites)에서 확인할 수 있습니다.',
              'What Google processes for advertising purposes, and how, is governed by Google’s own policies; this site has no access to that data. See “How Google uses information from sites or apps that use our services” at policies.google.com/technologies/partner-sites.',
              'Google が広告目的で処理するデータの範囲と方法は Google の方針によって定まり、当サイトはそのデータにアクセスできません。詳しくは policies.google.com/technologies/partner-sites をご覧ください。',
              'Google 出于广告目的处理数据的范围和方式由 Google 自身政策决定，本站无法访问这些数据。详情请参阅 policies.google.com/technologies/partner-sites。')
          ]
        },
        {
          h: I('4. 맞춤 광고를 원하지 않는 경우',
               '4. Opting out of personalised ads',
               '4. パーソナライズ広告を望まない場合',
               '4. 如不希望接收个性化广告'),
          p: [
            I('이 사이트의 쿠키 동의 배너에서 ‘거부’를 선택하면 맞춤형이 아닌 일반 광고만 게재됩니다. 선택은 브라우저에 저장되며, 사이트 데이터를 지우면 배너가 다시 표시됩니다.',
              'Choosing “Decline” on this site’s cookie banner means you will be served non-personalised ads only. Your choice is stored in your browser; clearing site data brings the banner back.',
              '当サイトのクッキー同意バナーで「拒否」を選択すると、パーソナライズされていない広告のみが配信されます。選択はブラウザに保存され、サイトデータを削除すると再度バナーが表示されます。',
              '在本站 Cookie 横幅中选择"拒绝"后，将仅向您展示非个性化广告。您的选择存储在浏览器中，清除站点数据后横幅会再次出现。'),
            I('브라우저나 기기 전체에 적용하려면 구글 광고 설정(adssettings.google.com), www.aboutads.info/choices, www.youronlinechoices.eu 에서 맞춤 광고를 해제할 수 있습니다. 맞춤 광고를 해제해도 광고 자체가 사라지지는 않습니다.',
              'For a browser- or device-wide setting, you can opt out at adssettings.google.com, www.aboutads.info/choices or www.youronlinechoices.eu. Opting out stops personalisation, not advertising itself.',
              'ブラウザや端末全体に適用するには、adssettings.google.com、www.aboutads.info/choices、www.youronlinechoices.eu でパーソナライズ広告を無効化できます。無効化しても広告自体がなくなるわけではありません。',
              '如需在整个浏览器或设备范围内设置，可通过 adssettings.google.com、www.aboutads.info/choices 或 www.youronlinechoices.eu 停用个性化广告。停用后广告本身仍会显示。')
          ]
        },
        {
          h: I('5. 호스팅 사업자의 접속 기록',
               '5. Server logs kept by the hosting provider',
               '5. ホスティング事業者のアクセス記録',
               '5. 主机服务商的访问日志'),
          p: [
            I('이 사이트가 이용하는 호스팅 및 CDN 사업자는 서비스 제공과 보안, 남용 방지를 위해 접속 IP 주소, 접속 시각, 브라우저 정보 등을 자체적으로 기록할 수 있습니다. 이 기록은 해당 사업자의 방침에 따라 처리되며 이 사이트 운영자는 개별 방문자를 식별할 수 있는 형태로 열람하지 않습니다.',
              'The hosting and CDN providers used by this site may keep their own logs of IP address, access time and browser information for service delivery, security and abuse prevention. Those logs are handled under the provider’s own policy, and the site operator does not review them in a form that identifies individual visitors.',
              '当サイトが利用するホスティング・CDN 事業者は、サービス提供、セキュリティ、不正利用防止のため、アクセス IP アドレス、アクセス日時、ブラウザ情報などを独自に記録することがあります。これらの記録は当該事業者の方針に従って処理され、当サイト運営者が個々の訪問者を識別できる形で閲覧することはありません。',
              '本站使用的主机与 CDN 服务商可能出于提供服务、安全及防止滥用的目的，自行记录访问 IP 地址、访问时间、浏览器信息等。这些日志依照该服务商自身政策处理，本站运营者不会以可识别个别访问者的形式查阅。')
          ]
        },
        {
          h: I('6. 후원 결제',
               '6. Support payments',
               '6. 応援の決済',
               '6. 支持款项'),
          p: [
            I('후원 링크를 누르면 토스, 카카오페이, PayPal 등 외부 결제 서비스로 이동합니다. 카드번호, 계좌번호를 포함한 모든 결제 정보는 해당 서비스가 직접 처리하며 이 사이트는 그 정보를 수신하거나 저장하지 않습니다. 각 서비스의 개인정보 처리는 해당 서비스의 방침을 따릅니다.',
              'Support links take you to external payment services such as Toss, KakaoPay or PayPal. All payment details, including card and account numbers, are handled by those services; this site never receives or stores them. Each service processes personal data under its own policy.',
              '応援リンクを押すと Toss、KakaoPay、PayPal などの外部決済サービスに移動します。カード番号や口座番号を含むすべての決済情報は各サービスが直接処理し、当サイトが受領・保存することはありません。各サービスの個人情報の取扱いは、当該サービスの方針に従います。',
              '点击支持链接后将跳转至 Toss、KakaoPay、PayPal 等外部支付服务。包括卡号、账号在内的所有支付信息均由这些服务直接处理，本站不会接收或存储。各服务的个人信息处理遵循其自身政策。')
          ]
        },
        {
          h: I('7. 아동의 개인정보',
               '7. Children',
               '7. 児童の個人情報',
               '7. 儿童个人信息'),
          p: [
            I('이 사이트는 아동을 대상으로 하지 않으며, 만 14세 미만 아동의 개인정보를 알면서 수집하지 않습니다.',
              'This site is not directed at children and does not knowingly collect personal data from children under 14.',
              '当サイトは児童を対象としておらず、14歳未満の児童の個人情報を意図的に収集することはありません。',
              '本站不面向儿童，也不会有意收集未满14周岁儿童的个人信息。')
          ]
        },
        {
          h: I('8. 문의 및 변경',
               '8. Contact and changes',
               '8. お問い合わせと変更',
               '8. 联系与变更'),
          p: [
            I('이 방침에 관한 문의는 {contact} 로 보내주십시오. 법령이나 서비스 변경에 따라 내용이 수정될 수 있으며, 변경된 내용은 이 페이지에 게시한 때부터 적용됩니다.',
              'Questions about this policy can be sent to {contact}. It may be revised as laws or the service change; revisions take effect when posted on this page.',
              '本方針に関するお問い合わせは {contact} までお願いします。法令やサービスの変更に応じて内容を改定する場合があり、改定内容はこのページに掲載した時点から適用されます。',
              '有关本政策的咨询请发送至 {contact}。本政策可能因法律或服务变更而修订，修订内容自在本页发布之时起适用。')
          ]
        }
      ]
    },

    /* =========================================================
       이용약관
       ========================================================= */
    terms: {
      title: I('이용약관', 'Terms of Use', '利用規約', '使用条款'),
      lead: I(
        '이 약관은 {site} 이용에 적용됩니다. 시행일 {date}.',
        'These terms apply to your use of {site}. Effective {date}.',
        '本規約は {site} のご利用に適用されます。施行日 {date}。',
        '本条款适用于您对 {site} 的使用。生效日期 {date}。'
      ),
      sections: [
        {
          h: I('1. 이 사이트의 성격',
               '1. What this site is',
               '1. 当サイトの性格',
               '1. 本站的性质'),
          p: [
            I('이 사이트는 대한민국의 재정·부채 관련 공표 통계를 시각적으로 보여주는 정보 제공 서비스입니다. 특정 정당, 정부 기관, 금융회사와 아무런 관련이 없으며 어느 곳으로부터도 후원이나 지시를 받지 않습니다.',
              'This site is an information service that visualises published statistics on Korea’s public finances and debt. It is unaffiliated with any political party, government body or financial institution, and takes no funding or direction from any of them.',
              '当サイトは、韓国の財政・債務に関する公表統計を視覚的に示す情報提供サービスです。特定の政党、政府機関、金融機関とは一切関係がなく、いかなる所からも支援や指示を受けていません。',
              '本站是将韩国财政与债务相关公开统计可视化呈现的信息服务。与任何政党、政府机构或金融机构均无关联，也不接受任何一方的资助或指示。')
          ]
        },
        {
          h: I('2. 숫자의 한계 — 반드시 읽어 주십시오',
               '2. The limits of these numbers — please read',
               '2. 数値の限界 — 必ずお読みください',
               '2. 数值的局限 — 请务必阅读'),
          p: [
            I('화면의 모든 값은 기획재정부, 한국은행, 통계청 등이 공표한 자료를 기준값으로 삼아 일정한 증감률로 선형 외삽한 추정치입니다. 실시간 실측값이 아니며, 확정 통계와 다를 수 있습니다.',
              'Every value shown is an estimate produced by linear extrapolation from baselines published by Korea’s Ministry of Economy and Finance, the Bank of Korea and Statistics Korea. These are not live measurements and may differ from final official statistics.',
              '画面上のすべての値は、企画財政部・韓国銀行・統計庁などが公表した資料を基準値とし、一定の増減率で線形外挿した推定値です。リアルタイムの実測値ではなく、確定統計と異なる場合があります。',
              '页面显示的所有数值，均以韩国企划财政部、韩国银行、统计厅等公布的资料为基准值，按一定增减率线性外推得出的估算。并非实时实测值，可能与最终确定统计不同。'),
            I('따라서 이 사이트의 숫자를 투자 판단, 정책 결정, 회계 처리, 학술 인용, 법적 주장의 근거로 사용해서는 안 됩니다. 확정 수치가 필요하면 각 원 출처 기관의 공식 자료를 직접 확인하십시오.',
              'The figures must therefore not be used as a basis for investment decisions, policy, accounting, academic citation or legal claims. For authoritative numbers, consult the original source agencies directly.',
              'したがって、当サイトの数値を投資判断、政策決定、会計処理、学術引用、法的主張の根拠として用いてはいけません。確定値が必要な場合は、各原典機関の公式資料を直接ご確認ください。',
              '因此，不得将本站数值用作投资判断、政策决策、会计处理、学术引用或法律主张的依据。如需权威数据，请直接查阅各原始来源机构的官方资料。')
          ]
        },
        {
          h: I('3. 면책',
               '3. Disclaimer',
               '3. 免責',
               '3. 免责声明'),
          p: [
            I('운영자는 정보의 정확성, 완전성, 최신성을 보증하지 않으며, 이 사이트의 이용 또는 이용 불가로 발생한 어떠한 손해에 대해서도 관련 법령이 허용하는 범위에서 책임을 지지 않습니다. 서비스는 사전 통지 없이 변경되거나 중단될 수 있습니다.',
              'The operator makes no warranty as to the accuracy, completeness or timeliness of the information, and to the extent permitted by law accepts no liability for any loss arising from use of, or inability to use, this site. The service may change or stop without notice.',
              '運営者は情報の正確性・完全性・最新性を保証せず、当サイトの利用または利用不能により生じたいかなる損害についても、関係法令が認める範囲で責任を負いません。サービスは予告なく変更・中断されることがあります。',
              '运营者不保证信息的准确性、完整性或时效性，并在法律允许的范围内，对因使用或无法使用本站而产生的任何损失不承担责任。服务可能在不另行通知的情况下变更或中止。')
          ]
        },
        {
          h: I('4. 저작권과 인용',
               '4. Copyright and citation',
               '4. 著作権と引用',
               '4. 版权与引用'),
          p: [
            I('원자료의 권리는 각 공표 기관에 있습니다. 사이트의 구성, 디자인, 코드에 대한 권리는 운영자에게 있습니다. 화면 갈무리나 수치를 인용할 때에는 출처를 {site} 로 밝히고, 이 숫자가 추정치라는 점을 함께 적어 주십시오.',
              'Rights in the underlying data belong to the publishing agencies. Rights in this site’s layout, design and code belong to the operator. If you quote a screenshot or a figure, please credit {site} and note that the number is an estimate.',
              '原資料の権利は各公表機関に帰属します。サイトの構成・デザイン・コードの権利は運営者に帰属します。スクリーンショットや数値を引用する際は、出典を {site} と明記し、その数値が推定値である旨も併せて記載してください。',
              '原始数据的权利归各公布机构所有。本站的结构、设计与代码权利归运营者所有。引用截图或数值时，请注明出处为 {site}，并同时说明该数值为估算值。')
          ]
        },
        {
          h: I('5. 광고',
               '5. Advertising',
               '5. 広告',
               '5. 广告'),
          p: [
            I('이 사이트에는 구글 애드센스를 통한 제3자 광고가 표시되며, 광고 영역에는 ‘광고’ 표시가 붙습니다. 광고의 내용과 광고주의 상품·서비스에 대해서는 운영자가 책임지지 않으며, 광고 게재가 해당 상품이나 광고주에 대한 추천을 의미하지 않습니다.',
              'Third-party ads are shown through Google AdSense and are labelled “Advertisement”. The operator is not responsible for the content of ads or for advertisers’ goods and services, and placement of an ad is not an endorsement.',
              '当サイトには Google AdSense を通じた第三者広告が表示され、広告枠には「広告」と表示されます。広告の内容および広告主の商品・サービスについて運営者は責任を負わず、広告の掲載が当該商品や広告主の推奨を意味するものではありません。',
              '本站通过 Google AdSense 展示第三方广告，广告位标注"广告"字样。运营者对广告内容及广告主的商品与服务不承担责任，广告的展示不构成对该商品或广告主的推荐。')
          ]
        },
        {
          h: I('6. 후원',
               '6. Support',
               '6. 応援について',
               '6. 支持'),
          p: [
            I('후원은 사이트 운영을 응원하기 위한 자발적 지원이며, 대가나 반대급부가 없습니다. 후원 여부는 사이트 이용에 아무런 영향을 주지 않고, 후원하더라도 광고가 제거되지는 않습니다.',
              'Support is a voluntary contribution to the running of the site, given without goods or services in return. It has no effect on how you may use the site, and it does not remove the ads.',
              '応援はサイト運営を支えるための自発的な支援であり、対価や見返りはありません。応援の有無はサイトの利用に一切影響せず、応援いただいても広告が消えることはありません。',
              '支持是为本站运营提供的自愿性资助，不附带任何对价或回报。是否支持不影响您使用本站，且支持后广告仍会显示。'),
            I('운영자는 「기부금품의 모집 및 사용에 관한 법률」에 따른 기부금품 모집등록을 하지 않았으며, 세법상 기부금영수증을 발급하지 않습니다. 후원금은 성격상 원칙적으로 환불되지 않으나, 착오 송금 등 명백한 사유가 있으면 {contact} 로 연락해 주십시오.',
              'The operator is not registered to solicit donations under Korea’s Act on Collection and Use of Donations, and issues no tax-deductible receipt. Contributions are in principle non-refundable, but if you sent one in error please write to {contact}.',
              '運営者は韓国の「寄付金品の募集及び使用に関する法律」に基づく募集登録を行っておらず、税制上の寄付金領収書は発行しません。応援金は性質上、原則として返金されませんが、誤送金など明白な理由がある場合は {contact} までご連絡ください。',
              '运营者未依据韩国《捐赠金品募集及使用相关法律》进行募集登记，亦不出具税务抵扣凭证。支持款项原则上不予退还，但如属误转等明确情形，请联系 {contact}。')
          ]
        },
        {
          h: I('7. 준거법 및 변경',
               '7. Governing law and changes',
               '7. 準拠法と変更',
               '7. 适用法律与变更'),
          p: [
            I('이 약관은 대한민국 법에 따릅니다. 약관은 변경될 수 있으며, 변경된 약관은 이 페이지에 게시한 때부터 적용됩니다. 문의는 {contact}.',
              'These terms are governed by the laws of the Republic of Korea. They may be amended, and amendments take effect when posted on this page. Contact: {contact}.',
              '本規約は大韓民国法に準拠します。規約は変更されることがあり、変更後の規約はこのページに掲載した時点から適用されます。お問い合わせは {contact}。',
              '本条款适用大韩民国法律。条款可能变更，变更后的条款自在本页发布之时起适用。咨询请联系 {contact}。')
          ]
        }
      ]
    }
  };
})();
