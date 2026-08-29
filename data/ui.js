/* =============================================================
 * 대한민국 부채시계 — UI 문구 (짧은 것) · 20개 언어
 * -------------------------------------------------------------
 * 긴 설명문은 data/ui-long.js 에 있습니다.
 * L() 인자 순서는 data/i18n.js 의 ORDER 와 같습니다.
 *
 *   ko 한국어  en English  ja 日本語  zh 简体  zt 繁體
 *   es Español pt Português fr Français de Deutsch it Italiano
 *   nl Nederlands ru Русский ar العربية hi हिन्दी id Indonesia
 *   vi Tiếng Việt th ไทย tr Türkçe pl Polski sv Svenska
 *
 * 번역이 비어 있으면 core.js 가 영어 → 한국어 순으로 대체합니다.
 * ============================================================= */

(function () {
  function L(ko, en, ja, zh, zt, es, pt, fr, de, it, nl, ru, ar, hi, id, vi, th, tr, pl, sv) {
    return { ko: ko, en: en, ja: ja, zh: zh, zt: zt, es: es, pt: pt, fr: fr, de: de, it: it,
             nl: nl, ru: ru, ar: ar, hi: hi, id: id, vi: vi, th: th, tr: tr, pl: pl, sv: sv };
  }

  window.ROK_UI = {

    /* ---------------- 사이트 이름 ---------------- */
    title: L('대한민국 부채시계', 'Korea Debt Clock', '大韓民国 債務時計', '大韩民国 债务时钟', '大韓民國 債務時鐘',
             'Reloj de la Deuda de Corea', 'Relógio da Dívida da Coreia', 'Horloge de la Dette Coréenne',
             'Korea-Schuldenuhr', 'Orologio del Debito Coreano', 'Koreaanse Schuldklok',
             'Часы долга Кореи', 'ساعة الدين الكوري', 'कोरिया ऋण घड़ी', 'Jam Utang Korea',
             'Đồng hồ Nợ Hàn Quốc', 'นาฬิกาหนี้เกาหลี', 'Kore Borç Saati', 'Zegar Długu Korei', 'Koreas Skuldklocka'),

    tagline: L('지금 이 순간에도 늘어나는 나랏빚', 'The national debt is growing right now',
               '今この瞬間も増え続ける国の借金', '此刻仍在增长的国家债务', '此刻仍在增長的國家債務',
               'La deuda pública crece en este mismo instante', 'A dívida pública cresce neste instante',
               'La dette publique augmente en ce moment même', 'Die Staatsschuld wächst in diesem Moment',
               'Il debito pubblico cresce proprio ora', 'De staatsschuld groeit op dit moment',
               'Государственный долг растёт прямо сейчас', 'الدين العام يتزايد في هذه اللحظة',
               'राष्ट्रीय ऋण इसी क्षण बढ़ रहा है', 'Utang negara terus bertambah saat ini juga',
               'Nợ công đang tăng ngay lúc này', 'หนี้สาธารณะกำลังเพิ่มขึ้นในขณะนี้',
               'Kamu borcu şu anda da artıyor', 'Dług publiczny rośnie w tej chwili',
               'Statsskulden växer just nu'),

    /* ---------------- 내비게이션 ---------------- */
    home:    L('부채시계', 'Debt Clock', '債務時計', '债务时钟', '債務時鐘',
               'Reloj de deuda', 'Relógio da dívida', 'Horloge de la dette', 'Schuldenuhr', 'Orologio del debito',
               'Schuldklok', 'Часы долга', 'ساعة الدين', 'ऋण घड़ी', 'Jam utang',
               'Đồng hồ nợ', 'นาฬิกาหนี้', 'Borç saati', 'Zegar długu', 'Skuldklocka'),

    trends:  L('증가율', 'Growth Rates', '増加率', '增长率', '增長率',
               'Crecimiento', 'Crescimento', 'Croissance', 'Wachstum', 'Crescita',
               'Groei', 'Динамика', 'معدلات النمو', 'वृद्धि दर', 'Laju pertumbuhan',
               'Tốc độ tăng', 'อัตราการเติบโต', 'Büyüme oranları', 'Tempo wzrostu', 'Tillväxttakt'),

    compare: L('남북 비교', 'South vs North', '南北比較', '南北对比', '南北對比',
               'Sur vs Norte', 'Sul vs Norte', 'Sud contre Nord', 'Süd gegen Nord', 'Sud contro Nord',
               'Zuid vs Noord', 'Юг и Север', 'الجنوب والشمال', 'दक्षिण बनाम उत्तर', 'Selatan vs Utara',
               'Nam và Bắc', 'ใต้เทียบเหนือ', 'Güney–Kuzey', 'Południe i Północ', 'Syd mot Nord'),

    /* ---------------- 컨트롤 ---------------- */
    timeMachine: L('타임머신', 'Time Machine', 'タイムマシン', '时光机', '時光機',
                   'Máquina del tiempo', 'Máquina do tempo', 'Machine à remonter le temps', 'Zeitmaschine', 'Macchina del tempo',
                   'Tijdmachine', 'Машина времени', 'آلة الزمن', 'टाइम मशीन', 'Mesin waktu',
                   'Cỗ máy thời gian', 'เครื่องย้อนเวลา', 'Zaman makinesi', 'Wehikuł czasu', 'Tidsmaskin'),

    live: L('실시간', 'Live', 'リアルタイム', '实时', '即時',
            'En vivo', 'Ao vivo', 'Direct', 'Live', 'In diretta',
            'Live', 'Сейчас', 'مباشر', 'लाइव', 'Langsung',
            'Trực tiếp', 'สด', 'Canlı', 'Na żywo', 'Direkt'),

    fullDigits: L('전체 자릿수', 'Full Digits', '全桁表示', '完整位数', '完整位數',
                  'Cifras completas', 'Dígitos completos', 'Chiffres complets', 'Alle Stellen', 'Cifre complete',
                  'Alle cijfers', 'Все разряды', 'الأرقام الكاملة', 'पूर्ण अंक', 'Angka penuh',
                  'Đầy đủ chữ số', 'ตัวเลขเต็ม', 'Tüm basamaklar', 'Pełne cyfry', 'Alla siffror'),

    unitDigits: L('축약 표기', 'Short Units', '短縮表記', '简写单位', '簡寫單位',
                  'Abreviado', 'Abreviado', 'Abrégé', 'Kurzform', 'Abbreviato',
                  'Verkort', 'Кратко', 'مختصر', 'संक्षिप्त', 'Ringkas',
                  'Rút gọn', 'แบบย่อ', 'Kısaltılmış', 'Skrócone', 'Förkortat'),

    pause: L('일시정지', 'Pause', '一時停止', '暂停', '暫停',
             'Pausa', 'Pausar', 'Pause', 'Pause', 'Pausa',
             'Pauze', 'Пауза', 'إيقاف مؤقت', 'रोकें', 'Jeda',
             'Tạm dừng', 'หยุดชั่วคราว', 'Duraklat', 'Pauza', 'Pausa'),

    play: L('재생', 'Play', '再生', '播放', '播放',
            'Reanudar', 'Retomar', 'Reprendre', 'Fortsetzen', 'Riprendi',
            'Hervatten', 'Продолжить', 'تشغيل', 'चलाएँ', 'Lanjutkan',
            'Tiếp tục', 'เล่นต่อ', 'Devam', 'Wznów', 'Fortsätt'),

    language: L('언어', 'Language', '言語', '语言', '語言',
                'Idioma', 'Idioma', 'Langue', 'Sprache', 'Lingua',
                'Taal', 'Язык', 'اللغة', 'भाषा', 'Bahasa',
                'Ngôn ngữ', 'ภาษา', 'Dil', 'Język', 'Språk'),

    currency: L('통화', 'Currency', '通貨', '货币', '貨幣',
                'Moneda', 'Moeda', 'Devise', 'Währung', 'Valuta',
                'Valuta', 'Валюта', 'العملة', 'मुद्रा', 'Mata uang',
                'Tiền tệ', 'สกุลเงิน', 'Para birimi', 'Waluta', 'Valuta'),

    /* ---------------- 기준 · 출처 ---------------- */
    basisDate: L('기준일', 'As of', '基準日', '基准日', '基準日',
                 'A fecha de', 'Data-base', 'Au', 'Stand', 'Al',
                 'Peildatum', 'На дату', 'حتى تاريخ', 'तिथि तक', 'Per tanggal',
                 'Tính đến', 'ณ วันที่', 'Tarih itibarıyla', 'Na dzień', 'Per den'),

    basisYear: L('기준', 'as of', '基準', '基准', '基準',
                 'de', 'de', 'de', 'Stand', 'del',
                 'van', 'за', 'حتى', 'तक', 'per',
                 'tính đến', 'ณ ปี', 'yılı', 'za', 'per'),

    sources: L('주요 출처', 'Sources', '主な出典', '主要来源', '主要來源',
               'Fuentes', 'Fontes', 'Sources', 'Quellen', 'Fonti',
               'Bronnen', 'Источники', 'المصادر', 'स्रोत', 'Sumber',
               'Nguồn', 'แหล่งข้อมูล', 'Kaynaklar', 'Źródła', 'Källor'),

    funding: L('광고와 후원으로 운영되는 독립 사이트',
               'Independent — funded by advertising and reader support',
               '広告と支援によって運営される独立サイト', '依靠广告与读者支持运营的独立网站', '依靠廣告與讀者支持營運的獨立網站',
               'Independiente — financiado con publicidad y donaciones',
               'Independente — mantido por publicidade e apoio de leitores',
               'Indépendant — financé par la publicité et les dons',
               'Unabhängig — finanziert durch Werbung und Leserspenden',
               'Indipendente — finanziato da pubblicità e donazioni',
               'Onafhankelijk — gefinancierd door advertenties en donaties',
               'Независимый проект — реклама и поддержка читателей',
               'مستقل — يُموَّل بالإعلانات ودعم القراء',
               'स्वतंत्र — विज्ञापन और पाठकों के सहयोग से संचालित',
               'Independen — didanai iklan dan dukungan pembaca',
               'Độc lập — vận hành bằng quảng cáo và ủng hộ của độc giả',
               'อิสระ — ดำเนินการด้วยโฆษณาและการสนับสนุนจากผู้อ่าน',
               'Bağımsız — reklam ve okur desteğiyle yürütülür',
               'Niezależny — finansowany z reklam i wsparcia czytelników',
               'Oberoende — finansierad av annonser och läsarstöd'),

    /* ---------------- 남북 비교 ---------------- */
    cmpTitle: L('남북 규모 비교', 'South Korea vs North Korea', '南北の規模比較', '韩朝规模对比', '韓朝規模對比',
                'Corea del Sur frente a Corea del Norte', 'Coreia do Sul frente à Coreia do Norte',
                'Corée du Sud face à la Corée du Nord', 'Südkorea im Vergleich zu Nordkorea',
                'Corea del Sud a confronto con la Corea del Nord', 'Zuid-Korea tegenover Noord-Korea',
                'Южная Корея и Северная Корея', 'كوريا الجنوبية مقابل كوريا الشمالية',
                'दक्षिण कोरिया बनाम उत्तर कोरिया', 'Korea Selatan dibanding Korea Utara',
                'So sánh Hàn Quốc và Triều Tiên', 'เปรียบเทียบเกาหลีใต้กับเกาหลีเหนือ',
                'Güney Kore ile Kuzey Kore', 'Korea Południowa i Korea Północna', 'Sydkorea mot Nordkorea'),

    south: L('남한', 'South', '韓国', '韩国', '韓國',
             'Sur', 'Sul', 'Sud', 'Süden', 'Sud',
             'Zuid', 'Юг', 'الجنوب', 'दक्षिण', 'Selatan',
             'Hàn Quốc', 'ใต้', 'Güney', 'Południe', 'Syd'),

    north: L('북한', 'North', '北朝鮮', '朝鲜', '朝鮮',
             'Norte', 'Norte', 'Nord', 'Norden', 'Nord',
             'Noord', 'Север', 'الشمال', 'उत्तर', 'Utara',
             'Triều Tiên', 'เหนือ', 'Kuzey', 'Północ', 'Nord'),

    southFull: L('대한민국', 'South Korea', '大韓民国', '大韩民国', '大韓民國',
                 'Corea del Sur', 'Coreia do Sul', 'Corée du Sud', 'Südkorea', 'Corea del Sud',
                 'Zuid-Korea', 'Южная Корея', 'كوريا الجنوبية', 'दक्षिण कोरिया', 'Korea Selatan',
                 'Hàn Quốc', 'เกาหลีใต้', 'Güney Kore', 'Korea Południowa', 'Sydkorea'),

    northFull: L('북한', 'North Korea', '北朝鮮', '朝鲜', '朝鮮',
                 'Corea del Norte', 'Coreia do Norte', 'Corée du Nord', 'Nordkorea', 'Corea del Nord',
                 'Noord-Korea', 'Северная Корея', 'كوريا الشمالية', 'उत्तर कोरिया', 'Korea Utara',
                 'Triều Tiên', 'เกาหลีเหนือ', 'Kuzey Kore', 'Korea Północna', 'Nordkorea'),

    caveatTag: L('읽기 전에', 'Read this first', 'お読みください', '阅读前须知', '閱讀前須知',
                 'Léalo primero', 'Leia antes', 'À lire d’abord', 'Bitte zuerst lesen', 'Da leggere prima',
                 'Lees dit eerst', 'Прочтите сначала', 'اقرأ هذا أولاً', 'पहले यह पढ़ें', 'Baca dulu',
                 'Đọc trước', 'อ่านก่อน', 'Önce bunu okuyun', 'Przeczytaj najpierw', 'Läs detta först'),

    pp: L('%p 높음', ' pp higher', '%ポイント高い', '个百分点', '個百分點',
          ' pp más', ' pp mais', ' pt de % de plus', ' Pp höher', ' pp in più',
          ' pp hoger', ' п. п. выше', ' نقطة مئوية أعلى', ' प्रतिशत अंक अधिक', ' pp lebih tinggi',
          ' điểm % cao hơn', ' จุด % สูงกว่า', ' puan yüksek', ' pp więcej', ' pe högre'),

    higherBy: L(' 높음', ' higher', ' 高い', ' 更高', ' 更高',
                ' más', ' mais', ' de plus', ' höher', ' in più',
                ' hoger', ' выше', ' أعلى', ' अधिक', ' lebih tinggi',
                ' cao hơn', ' สูงกว่า', ' kat', ' więcej', ' högre'),

    /* ---------------- 한일 비교 ---------------- */
    compareJp: L('한일 비교', 'Korea vs Japan', '日韓比較', '韩日对比', '韓日對比',
                 'Corea y Japón', 'Coreia e Japão', 'Corée–Japon', 'Korea–Japan', 'Corea–Giappone',
                 'Korea–Japan', 'Корея и Япония', 'كوريا واليابان', 'कोरिया बनाम जापान', 'Korea vs Jepang',
                 'Hàn Quốc–Nhật Bản', 'เกาหลี–ญี่ปุ่น', 'Kore–Japonya', 'Korea i Japonia', 'Korea mot Japan'),

    jpTitle: L('한일 재정 · 인구 비교', 'Korea and Japan — Same Definitions', '日韓の財政・人口比較',
               '韩日财政与人口对比', '韓日財政與人口對比',
               'Corea y Japón — mismas definiciones', 'Coreia e Japão — mesmas definições',
               'Corée et Japon — mêmes définitions', 'Korea und Japan — gleiche Definitionen',
               'Corea e Giappone — stesse definizioni', 'Korea en Japan — dezelfde definities',
               'Корея и Япония — единые определения', 'كوريا واليابان — بالتعريفات نفسها',
               'कोरिया और जापान — समान परिभाषाएँ', 'Korea dan Jepang — definisi sama',
               'Hàn Quốc và Nhật Bản — cùng định nghĩa', 'เกาหลีและญี่ปุ่น — นิยามเดียวกัน',
               'Kore ve Japonya — aynı tanımlarla', 'Korea i Japonia — te same definicje',
               'Korea och Japan — samma definitioner'),

    korea: L('한국', 'Korea', '韓国', '韩国', '韓國',
             'Corea', 'Coreia', 'Corée', 'Korea', 'Corea',
             'Korea', 'Корея', 'كوريا', 'कोरिया', 'Korea',
             'Hàn Quốc', 'เกาหลี', 'Kore', 'Korea', 'Korea'),

    japan: L('일본', 'Japan', '日本', '日本', '日本',
             'Japón', 'Japão', 'Japon', 'Japan', 'Giappone',
             'Japan', 'Япония', 'اليابان', 'जापान', 'Jepang',
             'Nhật Bản', 'ญี่ปุ่น', 'Japonya', 'Japonia', 'Japan'),

    koreaFull: L('대한민국', 'South Korea', '大韓民国', '大韩民国', '大韓民國',
                 'Corea del Sur', 'Coreia do Sul', 'Corée du Sud', 'Südkorea', 'Corea del Sud',
                 'Zuid-Korea', 'Южная Корея', 'كوريا الجنوبية', 'दक्षिण कोरिया', 'Korea Selatan',
                 'Hàn Quốc', 'เกาหลีใต้', 'Güney Kore', 'Korea Południowa', 'Sydkorea'),

    japanFull: L('일본', 'Japan', '日本', '日本', '日本',
                 'Japón', 'Japão', 'Japon', 'Japan', 'Giappone',
                 'Japan', 'Япония', 'اليابان', 'जापान', 'Jepang',
                 'Nhật Bản', 'ญี่ปุ่น', 'Japonya', 'Japonia', 'Japan'),

    /* 부채시계 화면의 '일본 참조선' 앞에 붙는 말 */
    refPrefix: L('일본', 'Japan', '日本', '日本', '日本',
                 'Japón', 'Japão', 'Japon', 'Japan', 'Giappone',
                 'Japan', 'Япония', 'اليابان', 'जापान', 'Jepang',
                 'Nhật Bản', 'ญี่ปุ่น', 'Japonya', 'Japonia', 'Japan'),

    /* ---------------- 증가율 화면 ---------------- */
    trTitle: L('연도별 · 정권별 증가율', 'Growth Rates by Year & Administration', '年度別・政権別 増加率',
               '按年度与各届政府的增长率', '按年度與各屆政府的增長率',
               'Crecimiento por año y por gobierno', 'Crescimento por ano e por governo',
               'Croissance par année et par gouvernement', 'Wachstum nach Jahr und Regierung',
               'Crescita per anno e per governo', 'Groei per jaar en per regering',
               'Динамика по годам и правительствам', 'النمو حسب السنة والإدارة',
               'वर्ष और सरकार के अनुसार वृद्धि', 'Pertumbuhan menurut tahun dan pemerintahan',
               'Tăng trưởng theo năm và theo nhiệm kỳ', 'อัตราการเติบโตรายปีและรายรัฐบาล',
               'Yıllara ve hükümetlere göre büyüme', 'Wzrost według lat i rządów',
               'Tillväxt per år och regering'),

    growth: L('증가', 'Increase', '増加', '增长', '增長',
              'Aumento', 'Aumento', 'Hausse', 'Anstieg', 'Aumento',
              'Stijging', 'Рост', 'زيادة', 'वृद्धि', 'Kenaikan',
              'Tăng', 'เพิ่มขึ้น', 'Artış', 'Wzrost', 'Ökning'),

    decrease: L('감소', 'Decrease', '減少', '减少', '減少',
                'Descenso', 'Queda', 'Baisse', 'Rückgang', 'Calo',
                'Daling', 'Снижение', 'انخفاض', 'कमी', 'Penurunan',
                'Giảm', 'ลดลง', 'Azalış', 'Spadek', 'Minskning'),

    level: L('연도별 누적 금액', 'Outstanding Balance by Year', '年度別 累積残高', '各年度累计余额', '各年度累計餘額',
             'Saldo acumulado por año', 'Saldo acumulado por ano', 'Encours par année', 'Bestand nach Jahr',
             'Saldo per anno', 'Uitstaand saldo per jaar', 'Остаток по годам', 'الرصيد القائم حسب السنة',
             'वर्षवार बकाया शेष', 'Saldo per tahun', 'Dư nợ theo năm', 'ยอดคงค้างรายปี',
             'Yıllara göre bakiye', 'Zadłużenie na koniec roku', 'Utestående per år'),

    actual: L('실적', 'Actual', '実績', '实际', '實際',
              'Real', 'Efetivo', 'Réel', 'Ist', 'Effettivo',
              'Werkelijk', 'Факт', 'فعلي', 'वास्तविक', 'Aktual',
              'Thực tế', 'ตัวเลขจริง', 'Gerçekleşen', 'Wykonanie', 'Utfall'),

    proj: L('전망', 'projected', '見通し', '预测', '預測',
            'previsión', 'projeção', 'prévision', 'Prognose', 'previsione',
            'prognose', 'прогноз', 'متوقَّع', 'अनुमानित', 'proyeksi',
            'dự báo', 'คาดการณ์', 'öngörü', 'prognoza', 'prognos'),

    yoy: L('전년 대비 증가율', 'Year-over-year growth', '前年比増加率', '同比增长率', '同比增長率',
           'Variación interanual', 'Variação anual', 'Croissance annuelle', 'Veränderung zum Vorjahr',
           'Variazione annua', 'Groei op jaarbasis', 'Прирост за год', 'النمو السنوي',
           'वार्षिक वृद्धि', 'Pertumbuhan tahunan', 'Tăng trưởng so với năm trước',
           'อัตราเติบโตเทียบปีก่อน', 'Yıllık büyüme', 'Wzrost rok do roku', 'Tillväxt jämfört med föregående år'),

    byAdmin: L('정권별 국가채무 증가', 'National Debt Growth by Administration', '政権別 国家債務の増加',
               '各届政府国家债务增长', '各屆政府國家債務增長',
               'Crecimiento de la deuda por gobierno', 'Crescimento da dívida por governo',
               'Croissance de la dette par gouvernement', 'Schuldenwachstum nach Regierung',
               'Crescita del debito per governo', 'Schuldengroei per regering',
               'Рост госдолга по правительствам', 'نمو الدين العام حسب الإدارة',
               'सरकार के अनुसार ऋण वृद्धि', 'Pertumbuhan utang per pemerintahan',
               'Nợ công tăng theo nhiệm kỳ', 'หนี้สาธารณะเพิ่มขึ้นตามรัฐบาล',
               'Hükümetlere göre borç artışı', 'Wzrost długu według rządów', 'Skuldtillväxt per regering'),

    president: L('대통령', 'President', '大統領', '总统', '總統',
                 'Presidente', 'Presidente', 'Président', 'Präsident', 'Presidente',
                 'President', 'Президент', 'الرئيس', 'राष्ट्रपति', 'Presiden',
                 'Tổng thống', 'ประธานาธิบดี', 'Cumhurbaşkanı', 'Prezydent', 'President'),

    term: L('재임', 'Term', '在任', '任期', '任期',
            'Mandato', 'Mandato', 'Mandat', 'Amtszeit', 'Mandato',
            'Ambtstermijn', 'Срок', 'الولاية', 'कार्यकाल', 'Masa jabatan',
            'Nhiệm kỳ', 'วาระ', 'Görev süresi', 'Kadencja', 'Mandatperiod'),

    startEnd: L('시작 → 종료', 'Start → End', '開始 → 終了', '开始 → 结束', '開始 → 結束',
                'Inicio → Fin', 'Início → Fim', 'Début → Fin', 'Beginn → Ende', 'Inizio → Fine',
                'Begin → Eind', 'Начало → Конец', 'البداية ← النهاية', 'आरंभ → अंत', 'Awal → Akhir',
                'Đầu → Cuối', 'เริ่ม → สิ้นสุด', 'Başlangıç → Bitiş', 'Początek → Koniec', 'Start → Slut'),

    increase: L('증가액', 'Increase', '増加額', '增加额', '增加額',
                'Aumento', 'Aumento', 'Augmentation', 'Zuwachs', 'Aumento',
                'Toename', 'Прирост', 'مقدار الزيادة', 'वृद्धि राशि', 'Kenaikan',
                'Mức tăng', 'จำนวนที่เพิ่ม', 'Artış tutarı', 'Przyrost', 'Ökning'),

    multiple: L('배율', 'Multiple', '倍率', '倍数', '倍數',
                'Múltiplo', 'Múltiplo', 'Multiple', 'Faktor', 'Multiplo',
                'Factor', 'Кратность', 'المضاعف', 'गुणक', 'Kelipatan',
                'Số lần', 'จำนวนเท่า', 'Kat', 'Krotność', 'Faktor'),

    cagr: L('연평균 증가율', 'Annual growth (CAGR)', '年平均増加率', '年均增长率', '年均增長率',
            'Crecimiento anual (TCAC)', 'Crescimento anual (CAGR)', 'Croissance annuelle (TCAC)',
            'Jährliches Wachstum (CAGR)', 'Crescita annua (CAGR)', 'Jaarlijkse groei (CAGR)',
            'Среднегодовой рост (CAGR)', 'النمو السنوي المركّب', 'वार्षिक वृद्धि (CAGR)',
            'Pertumbuhan tahunan (CAGR)', 'Tăng trưởng bình quân năm (CAGR)', 'อัตราเติบโตเฉลี่ยต่อปี',
            'Yıllık bileşik büyüme', 'Średnioroczny wzrost (CAGR)', 'Årlig tillväxt (CAGR)'),

    /* ---------------- 부채비율 시나리오 전망 ---------------- */
    ratioTitle: L('국가채무 / GDP — 시나리오 전망', 'Debt to GDP — Scenarios', '国家債務 / GDP — シナリオ見通し',
                  '国家债务/GDP — 情景预测', '國家債務/GDP — 情境預測',
                  'Deuda / PIB — Escenarios', 'Dívida / PIB — Cenários', 'Dette / PIB — Scénarios',
                  'Schulden / BIP — Szenarien', 'Debito / PIL — Scenari', 'Schuld / bbp — scenario’s',
                  'Долг / ВВП — сценарии', 'الدين / الناتج المحلي — سيناريوهات', 'ऋण / जीडीपी — परिदृश्य',
                  'Utang / PDB — Skenario', 'Nợ / GDP — Kịch bản', 'หนี้ / GDP — ฉากทัศน์',
                  'Borç / GSYH — Senaryolar', 'Dług / PKB — scenariusze', 'Skuld / BNP — scenarier'),

    scRule: L('재정준칙 준수', 'Fiscal rule kept', '財政準則の遵守', '遵守财政准则', '遵守財政準則',
              'Con regla fiscal', 'Com regra fiscal', 'Règle budgétaire respectée',
              'Fiskalregel eingehalten', 'Regola fiscale rispettata', 'Begrotingsregel nageleefd',
              'Соблюдение бюджетного правила', 'الالتزام بالقاعدة المالية', 'राजकोषीय नियम का पालन',
              'Aturan fiskal dipatuhi', 'Tuân thủ quy tắc tài khóa', 'ปฏิบัติตามกฎการคลัง',
              'Mali kurala uyum', 'Reguła fiskalna przestrzegana', 'Finanspolitiskt ramverk följs'),

    scFlat: L('현상유지', 'Status quo', '現状維持', '维持现状', '維持現狀',
              'Statu quo', 'Status quo', 'Statu quo', 'Status quo', 'Status quo',
              'Status quo', 'Без изменений', 'استمرار الوضع الحالي', 'यथास्थिति',
              'Status quo', 'Giữ nguyên hiện trạng', 'คงสภาพเดิม',
              'Mevcut durum', 'Bez zmian', 'Oförändrat'),

    scBase: L('기준 (예정처 경로)', 'Baseline (NABO path)', '基準(国会予算政策処の経路)',
              '基准(国会预算政策处路径)', '基準(國會預算政策處路徑)',
              'Base (senda de la OPC)', 'Base (trajetória do NABO)', 'Référence (trajectoire NABO)',
              'Basis (NABO-Pfad)', 'Base (percorso NABO)', 'Basis (NABO-pad)',
              'Базовый (траектория NABO)', 'الأساس (مسار NABO)', 'आधार (NABO पथ)',
              'Dasar (jalur NABO)', 'Cơ sở (lộ trình NABO)', 'กรณีฐาน (เส้นทาง NABO)',
              'Temel (NABO patikası)', 'Bazowy (ścieżka NABO)', 'Bas (NABO-bana)'),

    scWorst: L('비관', 'Pessimistic', '悲観', '悲观', '悲觀',
               'Pesimista', 'Pessimista', 'Pessimiste', 'Pessimistisch', 'Pessimistico',
               'Pessimistisch', 'Пессимистичный', 'متشائم', 'निराशावादी',
               'Pesimistis', 'Bi quan', 'กรณีเลวร้าย', 'Kötümser', 'Pesymistyczny', 'Pessimistisk'),

    deficitPct: L('적자', 'Deficit', '赤字', '赤字', '赤字',
                  'Déficit', 'Défice', 'Déficit', 'Defizit', 'Deficit',
                  'Tekort', 'Дефицит', 'العجز', 'घाटा', 'Defisit',
                  'Thâm hụt', 'ขาดดุล', 'Açık', 'Deficyt', 'Underskott'),

    nomGrowth: L('명목성장', 'Nominal growth', '名目成長', '名义增长', '名義增長',
                 'Crecimiento nominal', 'Crescimento nominal', 'Croissance nominale',
                 'Nominales Wachstum', 'Crescita nominale', 'Nominale groei',
                 'Номинальный рост', 'النمو الاسمي', 'नाममात्र वृद्धि', 'Pertumbuhan nominal',
                 'Tăng trưởng danh nghĩa', 'การเติบโตเชิงนาม', 'Nominal büyüme',
                 'Wzrost nominalny', 'Nominell tillväxt'),

    notReach: L('도달 안 함', 'Not reached', '到達せず', '未达到', '未達到',
                'No se alcanza', 'Não atingido', 'Non atteint', 'Nicht erreicht', 'Non raggiunto',
                'Niet bereikt', 'Не достигает', 'لا يُبلَغ', 'नहीं पहुँचता', 'Tidak tercapai',
                'Không đạt', 'ไม่ถึง', 'Ulaşmıyor', 'Nie osiąga', 'Nås inte'),

    scenario: L('시나리오', 'Scenario', 'シナリオ', '情景', '情境',
                'Escenario', 'Cenário', 'Scénario', 'Szenario', 'Scenario',
                'Scenario', 'Сценарий', 'السيناريو', 'परिदृश्य', 'Skenario',
                'Kịch bản', 'ฉากทัศน์', 'Senaryo', 'Scenariusz', 'Scenario'),

    assumption: L('가정', 'Assumption', '前提', '假设', '假設',
                  'Supuesto', 'Pressuposto', 'Hypothèse', 'Annahme', 'Ipotesi',
                  'Aanname', 'Допущение', 'الافتراض', 'मान्यता', 'Asumsi',
                  'Giả định', 'สมมติฐาน', 'Varsayım', 'Założenie', 'Antagande'),

    reachYear: L('도달 연도', 'Year reached', '到達年', '达到年份', '達到年份',
                 'Año de llegada', 'Ano em que atinge', 'Année d’atteinte', 'Jahr des Erreichens',
                 'Anno di raggiungimento', 'Jaar van bereiken', 'Год достижения', 'سنة البلوغ',
                 'पहुँचने का वर्ष', 'Tahun tercapai', 'Năm đạt', 'ปีที่ถึง',
                 'Ulaşılan yıl', 'Rok osiągnięcia', 'År då nivån nås'),

    inProgress: L('진행 중 · 전망 포함', 'in progress · incl. projection', '進行中・見通し含む',
                  '进行中·含预测', '進行中·含預測',
                  'en curso · incl. previsión', 'em curso · inclui projeção', 'en cours · projection incluse',
                  'laufend · inkl. Prognose', 'in corso · include previsione', 'lopend · incl. prognose',
                  'продолжается · с прогнозом', 'جارٍ · يشمل التوقعات', 'जारी · अनुमान सहित',
                  'berjalan · termasuk proyeksi', 'đang diễn ra · gồm dự báo', 'อยู่ระหว่างดำเนินการ · รวมคาดการณ์',
                  'sürüyor · öngörü dahil', 'w toku · z prognozą', 'pågår · inkl. prognos'),

    tableView: L('표로 보기', 'View as table', '表で見る', '以表格查看', '以表格檢視',
                 'Ver como tabla', 'Ver como tabela', 'Voir en tableau', 'Als Tabelle anzeigen', 'Vedi come tabella',
                 'Als tabel tonen', 'Показать таблицей', 'عرض كجدول', 'तालिका में देखें', 'Lihat sebagai tabel',
                 'Xem dạng bảng', 'ดูเป็นตาราง', 'Tablo olarak gör', 'Pokaż jako tabelę', 'Visa som tabell'),

    year: L('연도', 'Year', '年度', '年度', '年度',
            'Año', 'Ano', 'Année', 'Jahr', 'Anno',
            'Jaar', 'Год', 'السنة', 'वर्ष', 'Tahun',
            'Năm', 'ปี', 'Yıl', 'Rok', 'År'),

    value: L('값', 'Value', '値', '数值', '數值',
             'Valor', 'Valor', 'Valeur', 'Wert', 'Valore',
             'Waarde', 'Значение', 'القيمة', 'मान', 'Nilai',
             'Giá trị', 'ค่า', 'Değer', 'Wartość', 'Värde'),

    /* ---------------- 카운트다운 단위 ---------------- */
    uYear: L('년', ' y', '年', '年', '年',
             ' a', ' a', ' a', ' J', ' a',
             ' j', ' г', ' سنة', ' व', ' thn',
             ' năm', ' ปี', ' y', ' l', ' år'),

    uDay: L('일', ' d', '日', '天', '天',
            ' d', ' d', ' j', ' T', ' g',
            ' d', ' д', ' يوم', ' दि', ' hr',
            ' ngày', ' วัน', ' g', ' d', ' d'),

    /* 기한 당일 — 어느 언어에서나 D−DAY 로 통한다 */
    dday0: L('D−DAY'),

    /* ---------------- 근거 표시 ----------------
       셀 툴팁 첫 줄. "이 숫자는 어떤 종류인가" 를 밝힌다. */
    freqTip: L('근거', 'Basis', '根拠', '依据', '依據',
               'Base', 'Base', 'Base', 'Grundlage', 'Base',
               'Basis', 'Основание', 'الأساس', 'आधार', 'Dasar',
               'Cơ sở', 'ที่มา', 'Dayanak', 'Podstawa', 'Underlag'),

    fq_live: L('실시간', 'Live', 'リアルタイム', '实时', '即時',
               'En vivo', 'Ao vivo', 'En direct', 'Live', 'In tempo reale',
               'Live', 'В реальном времени', 'مباشر', 'लाइव', 'Langsung',
               'Trực tiếp', 'เรียลไทม์', 'Canlı', 'Na żywo', 'Live'),

    fq_daily: L('매일 갱신', 'Updated daily', '毎日更新', '每日更新', '每日更新',
                'Actualización diaria', 'Atualização diária', 'Mise à jour quotidienne',
                'Täglich aktualisiert', 'Aggiornato ogni giorno',
                'Dagelijks bijgewerkt', 'Обновляется ежедневно', 'تحديث يومي',
                'दैनिक अद्यतन', 'Diperbarui harian',
                'Cập nhật hằng ngày', 'อัปเดตรายวัน', 'Günlük güncellenir',
                'Aktualizowane codziennie', 'Uppdateras dagligen'),

    fq_monthly: L('월 단위 공표치', 'Monthly official data', '月次公表値', '月度公布值', '月度公布值',
                  'Dato oficial mensual', 'Dado oficial mensal', 'Donnée officielle mensuelle',
                  'Monatlich veröffentlicht', 'Dato ufficiale mensile',
                  'Maandelijks officieel cijfer', 'Ежемесячные официальные данные',
                  'بيانات رسمية شهرية', 'मासिक आधिकारिक आंकड़ा', 'Data resmi bulanan',
                  'Số liệu công bố hằng tháng', 'ข้อมูลทางการรายเดือน', 'Aylık resmî veri',
                  'Miesięczne dane oficjalne', 'Månatlig officiell statistik'),

    fq_quarterly: L('분기 공표치', 'Quarterly official data', '四半期公表値', '季度公布值', '季度公布值',
                    'Dato oficial trimestral', 'Dado oficial trimestral', 'Donnée officielle trimestrielle',
                    'Vierteljährlich veröffentlicht', 'Dato ufficiale trimestrale',
                    'Kwartaalcijfer', 'Квартальные официальные данные',
                    'بيانات رسمية فصلية', 'तिमाही आधिकारिक आंकड़ा', 'Data resmi triwulanan',
                    'Số liệu công bố hằng quý', 'ข้อมูลทางการรายไตรมาส', 'Üç aylık resmî veri',
                    'Kwartalne dane oficjalne', 'Kvartalsvis officiell statistik'),

    fq_annual: L('연 1회 공표치', 'Annual official data', '年1回の公表値', '年度公布值', '年度公布值',
                 'Dato oficial anual', 'Dado oficial anual', 'Donnée officielle annuelle',
                 'Jährlich veröffentlicht', 'Dato ufficiale annuale',
                 'Jaarcijfer', 'Годовые официальные данные',
                 'بيانات رسمية سنوية', 'वार्षिक आधिकारिक आंकड़ा', 'Data resmi tahunan',
                 'Số liệu công bố hằng năm', 'ข้อมูลทางการรายปี', 'Yıllık resmî veri',
                 'Roczne dane oficjalne', 'Årlig officiell statistik'),

    fq_budget: L('국회 확정 예산', 'Budget enacted by the National Assembly',
                 '国会で確定した予算', '国会通过的预算', '國會通過的預算',
                 'Presupuesto aprobado por la Asamblea Nacional', 'Orçamento aprovado pela Assembleia Nacional',
                 'Budget voté par l’Assemblée nationale', 'Vom Parlament beschlossener Haushalt',
                 'Bilancio approvato dall’Assemblea nazionale',
                 'Door het parlement vastgestelde begroting', 'Бюджет, утверждённый парламентом',
                 'ميزانية أقرّتها الجمعية الوطنية', 'राष्ट्रीय सभा द्वारा पारित बजट',
                 'Anggaran yang disahkan parlemen', 'Ngân sách đã được Quốc hội thông qua',
                 'งบประมาณที่รัฐสภาอนุมัติ', 'Meclisçe kabul edilen bütçe',
                 'Budżet uchwalony przez parlament', 'Budget antagen av nationalförsamlingen'),

    fq_legal: L('법정 기한 (헌법·법률)', 'Statutory deadline', '法定期限（憲法・法律）',
                '法定期限（宪法·法律）', '法定期限（憲法·法律）',
                'Plazo legal', 'Prazo legal', 'Délai légal', 'Gesetzliche Frist', 'Termine di legge',
                'Wettelijke termijn', 'Установленный законом срок', 'موعد نهائي قانوني',
                'वैधानिक समय-सीमा', 'Tenggat menurut undang-undang',
                'Thời hạn luật định', 'กำหนดเวลาตามกฎหมาย', 'Yasal süre',
                'Termin ustawowy', 'Lagstadgad tidsfrist'),

    fq_projection: L('선형 추정 · 장기 전망', 'Linear estimate — projection',
                     '線形推計・長期見通し', '线性推算 · 长期预测', '線性推算 · 長期預測',
                     'Estimación lineal — proyección', 'Estimativa linear — projeção',
                     'Estimation linéaire — projection', 'Lineare Schätzung — Projektion',
                     'Stima lineare — proiezione',
                     'Lineaire schatting — projectie', 'Линейная оценка — прогноз',
                     'تقدير خطي — إسقاط', 'रैखिक अनुमान — प्रक्षेपण',
                     'Estimasi linear — proyeksi', 'Ước tính tuyến tính — dự phóng',
                     'ประมาณการเชิงเส้น — การคาดการณ์', 'Doğrusal tahmin — projeksiyon',
                     'Szacunek liniowy — prognoza', 'Linjär skattning — prognos'),

    /* 환율은 meta.updated 와 따로 낡는다 — 원화 외 통화를 볼 때만 뜬다 */
    fxStale: L('환율 기준일이 {d} 입니다. 원화 외 통화로 표시된 금액은 현재 시세와 다를 수 있습니다.',
               'Exchange rates are as of {d}. Amounts shown in currencies other than KRW may differ from current market rates.',
               '為替レートの基準日は {d} です。ウォン以外の通貨で表示された金額は現在の相場と異なる場合があります。',
               '汇率基准日为 {d}。以韩元以外货币显示的金额可能与当前市场汇率不同。',
               '匯率基準日為 {d}。以韓元以外貨幣顯示的金額可能與目前市場匯率不同。',
               'Los tipos de cambio son a fecha de {d}. Los importes en monedas distintas del KRW pueden diferir de las cotizaciones actuales.',
               'As taxas de câmbio são de {d}. Os valores em moedas diferentes do KRW podem divergir das cotações atuais.',
               'Les taux de change sont à la date du {d}. Les montants dans une devise autre que le KRW peuvent différer des cours actuels.',
               'Wechselkurse mit Stand {d}. Beträge in anderen Währungen als KRW können von den aktuellen Kursen abweichen.',
               'I tassi di cambio sono aggiornati al {d}. Gli importi in valute diverse dal KRW possono differire dalle quotazioni attuali.',
               'Wisselkoersen per {d}. Bedragen in andere valuta dan KRW kunnen afwijken van de actuele koersen.',
               'Курсы валют на {d}. Суммы в валютах, отличных от KRW, могут отличаться от текущих котировок.',
               'أسعار الصرف حتى تاريخ {d}. قد تختلف المبالغ بعملات غير الوون الكوري عن الأسعار الحالية.',
               'विनिमय दरें {d} तक की हैं। KRW के अलावा अन्य मुद्राओं में दिखाई गई राशियाँ मौजूदा दरों से भिन्न हो सकती हैं।',
               'Kurs valuta per {d}. Nominal dalam mata uang selain KRW dapat berbeda dari kurs pasar saat ini.',
               'Tỷ giá tính đến {d}. Số tiền hiển thị bằng đơn vị tiền tệ khác KRW có thể khác tỷ giá hiện hành.',
               'อัตราแลกเปลี่ยน ณ วันที่ {d} จำนวนเงินที่แสดงในสกุลอื่นนอกจากวอนอาจต่างจากอัตราตลาดปัจจุบัน',
               'Döviz kurları {d} tarihlidir. KRW dışındaki para birimlerinde gösterilen tutarlar güncel kurlardan farklı olabilir.',
               'Kursy walut na dzień {d}. Kwoty w walutach innych niż KRW mogą różnić się od bieżących notowań.',
               'Växelkurser per {d}. Belopp i andra valutor än KRW kan avvika från aktuella kurser.')
  };
})();
