/* =============================================================
 * 대한민국 부채시계 — 지표 라벨 번역 오버레이 (추가 16개 언어)
 * -------------------------------------------------------------
 * data/data.js 의 I(ko, en, ja, zh) 는 4개 언어만 담습니다.
 * 이 파일은 거기에 나머지 언어를 덧씌웁니다. 키는 I() 의 첫 인자,
 * 즉 한국어 원문을 그대로 씁니다.
 *
 *   core.js 의 pick() 순서
 *     ① 그 언어의 번역이 I() 안에 있으면 그것
 *     ② 없으면 이 오버레이에서 찾기
 *     ③ 그래도 없으면 영어 → 한국어
 *
 * 그래서 이 파일은 "채우는 만큼 좋아지고, 비어도 깨지지 않습니다."
 * data.js 를 건드리지 않고 언어를 늘릴 수 있는 것이 이 구조의 목적입니다.
 *
 * X() 인자 순서 (16개):
 *   zt 繁體  es  pt  fr  de  it  nl  ru  ar  hi  id  vi  th  tr  pl  sv
 * ============================================================= */

(function () {
  function X(zt, es, pt, fr, de, it, nl, ru, ar, hi, id, vi, th, tr, pl, sv) {
    return { zt: zt, es: es, pt: pt, fr: fr, de: de, it: it, nl: nl, ru: ru,
             ar: ar, hi: hi, id: id, vi: vi, th: th, tr: tr, pl: pl, sv: sv };
  }

  window.ROK_LABELS = {

    /* ================= 패널 제목 ================= */

    '국가 부채': X(
      '國家債務', 'Deuda pública', 'Dívida pública', 'Dette publique', 'Staatsschulden',
      'Debito pubblico', 'Staatsschuld', 'Государственный долг', 'الدين العام',
      'राष्ट्रीय ऋण', 'Utang negara', 'Nợ công', 'หนี้สาธารณะ', 'Kamu borcu',
      'Dług publiczny', 'Statsskuld'),

    '재정 수입 · 세금': X(
      '財政收入·稅收', 'Ingresos e impuestos', 'Receitas e impostos', 'Recettes et impôts',
      'Einnahmen & Steuern', 'Entrate e imposte', 'Inkomsten & belastingen',
      'Доходы и налоги', 'الإيرادات والضرائب', 'राजस्व और कर', 'Pendapatan & pajak',
      'Thu ngân sách & thuế', 'รายได้และภาษี', 'Gelirler ve vergiler',
      'Dochody i podatki', 'Intäkter & skatter'),

    '나라 살림 · 지출': X(
      '財政支出', 'Gasto público', 'Despesa pública', 'Dépenses publiques', 'Staatsausgaben',
      'Spesa pubblica', 'Overheidsuitgaven', 'Государственные расходы', 'الإنفاق الحكومي',
      'सरकारी व्यय', 'Belanja negara', 'Chi ngân sách', 'รายจ่ายภาครัฐ',
      'Kamu harcamaları', 'Wydatki publiczne', 'Offentliga utgifter'),

    '민간 부채': X(
      '民間債務', 'Deuda privada', 'Dívida privada', 'Dette privée', 'Private Verschuldung',
      'Debito privato', 'Particuliere schuld', 'Долг частного сектора', 'دين القطاع الخاص',
      'निजी ऋण', 'Utang swasta', 'Nợ tư nhân', 'หนี้ภาคเอกชน', 'Özel sektör borcu',
      'Dług prywatny', 'Privat skuld'),

    '경제 · 대외': X(
      '經濟·對外', 'Economía y sector exterior', 'Economia e setor externo',
      'Économie et extérieur', 'Wirtschaft & Außenwirtschaft', 'Economia ed estero',
      'Economie & buitenland', 'Экономика и внешний сектор', 'الاقتصاد والقطاع الخارجي',
      'अर्थव्यवस्था और बाह्य क्षेत्र', 'Ekonomi & eksternal', 'Kinh tế & đối ngoại',
      'เศรษฐกิจและต่างประเทศ', 'Ekonomi ve dış denge', 'Gospodarka i sektor zewnętrzny',
      'Ekonomi & utland'),

    '인구 · 노동': X(
      '人口·勞動', 'Población y empleo', 'População e trabalho', 'Population et emploi',
      'Bevölkerung & Arbeit', 'Popolazione e lavoro', 'Bevolking & arbeid',
      'Население и труд', 'السكان والعمل', 'जनसंख्या और श्रम', 'Penduduk & tenaga kerja',
      'Dân số & lao động', 'ประชากรและแรงงาน', 'Nüfus ve işgücü',
      'Ludność i praca', 'Befolkning & arbete'),

    '연금 · 복지': X(
      '年金·福利', 'Pensiones y bienestar', 'Pensões e proteção social',
      'Retraites et protection sociale', 'Renten & Sozialleistungen', 'Pensioni e welfare',
      'Pensioenen & sociale zekerheid', 'Пенсии и соцобеспечение', 'المعاشات والرعاية',
      'पेंशन और कल्याण', 'Pensiun & kesejahteraan', 'Hưu trí & phúc lợi',
      'บำนาญและสวัสดิการ', 'Emeklilik ve refah', 'Emerytury i świadczenia',
      'Pensioner & välfärd'),

    '주택 · 자산': X(
      '住宅·資產', 'Vivienda y patrimonio', 'Habitação e património', 'Logement et patrimoine',
      'Wohnen & Vermögen', 'Casa e patrimonio', 'Wonen & vermogen', 'Жильё и активы',
      'الإسكان والأصول', 'आवास और संपत्ति', 'Perumahan & aset', 'Nhà ở & tài sản',
      'ที่อยู่อาศัยและสินทรัพย์', 'Konut ve varlıklar', 'Mieszkalnictwo i majątek',
      'Bostäder & tillgångar'),

    '사회 · 삶': X(
      '社會·生活', 'Sociedad y vida', 'Sociedade e vida', 'Société et vie quotidienne',
      'Gesellschaft & Leben', 'Società e vita', 'Samenleving & leven', 'Общество и жизнь',
      'المجتمع والحياة', 'समाज और जीवन', 'Masyarakat & kehidupan', 'Xã hội & đời sống',
      'สังคมและชีวิต', 'Toplum ve yaşam', 'Społeczeństwo i życie', 'Samhälle & liv'),

    /* ================= 대형 카운터 (히어로) ================= */

    '대한민국 국가채무': X(
      '大韓民國 國家債務', 'Deuda pública de Corea del Sur', 'Dívida pública da Coreia do Sul',
      'Dette publique de la Corée du Sud', 'Staatsschulden Südkoreas',
      'Debito pubblico della Corea del Sud', 'Staatsschuld van Zuid-Korea',
      'Государственный долг Южной Кореи', 'الدين العام لكوريا الجنوبية',
      'दक्षिण कोरिया का राष्ट्रीय ऋण', 'Utang negara Korea Selatan', 'Nợ công Hàn Quốc',
      'หนี้สาธารณะเกาหลีใต้', 'Güney Kore kamu borcu', 'Dług publiczny Korei Południowej',
      'Sydkoreas statsskuld'),

    '국민 1인당 국가채무': X(
      '國民人均國家債務', 'Deuda pública por habitante', 'Dívida pública por habitante',
      'Dette publique par habitant', 'Staatsschuld je Einwohner', 'Debito pubblico pro capite',
      'Staatsschuld per inwoner', 'Госдолг на человека', 'الدين العام للفرد',
      'प्रति नागरिक राष्ट्रीय ऋण', 'Utang negara per penduduk', 'Nợ công bình quân đầu người',
      'หนี้สาธารณะต่อประชากร', 'Kişi başına kamu borcu', 'Dług publiczny na mieszkańca',
      'Statsskuld per invånare'),

    '취업자 1인당 국가채무': X(
      '就業者人均國家債務', 'Deuda pública por ocupado', 'Dívida pública por trabalhador',
      'Dette publique par actif occupé', 'Staatsschuld je Erwerbstätigen',
      'Debito pubblico per occupato', 'Staatsschuld per werkende',
      'Госдолг на одного занятого', 'الدين العام لكل عامل',
      'प्रति कार्यरत व्यक्ति ऋण', 'Utang negara per pekerja', 'Nợ công trên mỗi lao động',
      'หนี้สาธารณะต่อผู้มีงานทำ', 'Çalışan başına kamu borcu',
      'Dług publiczny na pracującego', 'Statsskuld per sysselsatt'),

    '가계부채': X(
      '家庭債務', 'Deuda de los hogares', 'Dívida das famílias', 'Dette des ménages',
      'Verschuldung der Haushalte', 'Debito delle famiglie', 'Schuld van huishoudens',
      'Долг домохозяйств', 'ديون الأسر', 'घरेलू ऋण', 'Utang rumah tangga',
      'Nợ hộ gia đình', 'หนี้ครัวเรือน', 'Hanehalkı borcu', 'Zadłużenie gospodarstw domowych',
      'Hushållens skulder'),

    '올해 재정적자 (관리재정수지)': X(
      '本年度財政赤字(管理財政收支)', 'Déficit fiscal de este año', 'Défice orçamental deste ano',
      'Déficit budgétaire de l’année', 'Haushaltsdefizit dieses Jahres',
      'Disavanzo di bilancio di quest’anno', 'Begrotingstekort dit jaar',
      'Дефицит бюджета в этом году', 'عجز الموازنة هذا العام',
      'इस वर्ष का राजकोषीय घाटा', 'Defisit fiskal tahun ini', 'Thâm hụt ngân sách năm nay',
      'ขาดดุลการคลังปีนี้', 'Bu yılki bütçe açığı', 'Tegoroczny deficyt budżetowy',
      'Årets budgetunderskott'),

    '올해 국세 수입': X(
      '本年度國稅收入', 'Recaudación estatal de este año', 'Receita fiscal deste ano',
      'Recettes fiscales de l’année', 'Steuereinnahmen dieses Jahres',
      'Gettito fiscale di quest’anno', 'Belastinginkomsten dit jaar',
      'Налоговые поступления в этом году', 'الإيرادات الضريبية هذا العام',
      'इस वर्ष का कर राजस्व', 'Penerimaan pajak tahun ini', 'Thu thuế năm nay',
      'รายได้ภาษีปีนี้', 'Bu yılki vergi geliri', 'Tegoroczne wpływy podatkowe',
      'Årets skatteintäkter')
  };
})();
