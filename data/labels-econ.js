/* =============================================================
 * 지표 라벨 번역 오버레이 ② — 민간부채 · 경제 · 인구 · 연금 · 자산 · 사회
 * -------------------------------------------------------------
 * X() 인자 순서 (16개):
 *   zt 繁體 · es · pt · fr · de · it · nl · ru · ar · hi · id · vi · th · tr · pl · sv
 * ============================================================= */

(function () {
  var L = window.ROK_LABELS = window.ROK_LABELS || {};
  function X(zt, es, pt, fr, de, it, nl, ru, ar, hi, id, vi, th, tr, pl, sv) {
    return { zt: zt, es: es, pt: pt, fr: fr, de: de, it: it, nl: nl, ru: ru,
             ar: ar, hi: hi, id: id, vi: vi, th: th, tr: tr, pl: pl, sv: sv };
  }

  /* ================= 민간 부채 ================= */

  L['가계부채 (가계신용)'] = X(
    '家庭債務(家庭信貸)', 'Deuda de los hogares', 'Dívida das famílias',
    'Dette des ménages', 'Verschuldung der Haushalte', 'Debito delle famiglie',
    'Schuld van huishoudens', 'Долг домохозяйств', 'ديون الأسر',
    'घरेलू ऋण', 'Utang rumah tangga', 'Nợ hộ gia đình',
    'หนี้ครัวเรือน', 'Hanehalkı borcu', 'Zadłużenie gospodarstw domowych',
    'Hushållens skulder');

  L['주택담보대출'] = X(
    '住房抵押貸款', 'Préstamos hipotecarios', 'Crédito imobiliário',
    'Crédits immobiliers', 'Hypothekendarlehen', 'Mutui ipotecari',
    'Hypotheken', 'Ипотечные кредиты', 'قروض الرهن العقاري',
    'गृह बंधक ऋण', 'Kredit pemilikan rumah', 'Vay thế chấp nhà',
    'สินเชื่อที่อยู่อาศัย', 'Konut kredileri', 'Kredyty hipoteczne',
    'Bolån');

  L['신용대출 등 기타대출'] = X(
    '信用貸款等其他', 'Otros créditos al consumo', 'Outros créditos ao consumo',
    'Autres crédits à la consommation', 'Sonstige Konsumkredite',
    'Altri crediti al consumo', 'Overige consumptieve kredieten',
    'Прочие потребительские кредиты', 'قروض استهلاكية أخرى',
    'अन्य उपभोक्ता ऋण', 'Kredit konsumsi lainnya', 'Vay tiêu dùng khác',
    'สินเชื่อผู้บริโภคอื่น', 'Diğer tüketici kredileri', 'Pozostałe kredyty konsumpcyjne',
    'Övriga konsumtionslån');

  L['판매신용'] = X(
    '銷售信貸', 'Crédito de tarjetas y a plazos', 'Crédito de cartões e parcelado',
    'Crédit à la consommation (cartes)', 'Karten- und Ratenkredite',
    'Credito al consumo (carte e rate)', 'Krediet via kaarten en termijnen',
    'Карточный и рассрочный кредит', 'ائتمان البطاقات والتقسيط',
    'कार्ड एवं किस्त ऋण', 'Kredit kartu & cicilan', 'Tín dụng thẻ và trả góp',
    'สินเชื่อบัตรและผ่อนชำระ', 'Kart ve taksitli krediler', 'Kredyt kartowy i ratalny',
    'Kort- och avbetalningskrediter');

  L['자영업자 대출'] = X(
    '個體戶貸款', 'Créditos a autónomos', 'Crédito a autônomos',
    'Crédits aux indépendants', 'Kredite an Selbstständige',
    'Prestiti ai lavoratori autonomi', 'Kredieten aan zelfstandigen',
    'Кредиты самозанятым', 'قروض أصحاب الأعمال الحرة',
    'स्वरोजगार ऋण', 'Kredit wirausaha perorangan', 'Vay hộ kinh doanh',
    'สินเชื่อผู้ประกอบอาชีพอิสระ', 'Esnaf kredileri', 'Kredyty dla samozatrudnionych',
    'Lån till egenföretagare');

  L['기업부채 (기업신용)'] = X(
    '企業債務(企業信貸)', 'Deuda empresarial', 'Dívida das empresas',
    'Dette des entreprises', 'Unternehmensverschuldung', 'Debito delle imprese',
    'Bedrijfsschuld', 'Долг компаний', 'ديون الشركات',
    'कॉर्पोरेट ऋण', 'Utang korporasi', 'Nợ doanh nghiệp',
    'หนี้ภาคธุรกิจ', 'Şirket borcu', 'Zadłużenie przedsiębiorstw',
    'Företagens skulder');

  L['전세보증금 추정 총액'] = X(
    '全租保證金總額估算', 'Depósitos jeonse en circulación',
    'Depósitos jeonse em circulação', 'Dépôts jeonse en cours',
    'Ausstehende Jeonse-Kautionen', 'Depositi jeonse in essere',
    'Uitstaande jeonse-waarborgsommen', 'Депозиты чонсе в обращении',
    'ودائع الجونسي القائمة', 'बकाया जोन्से जमा',
    'Deposit jeonse beredar', 'Tiền đặt cọc jeonse đang lưu hành',
    'เงินมัดจำจอนเซคงค้าง', 'Devam eden jeonse depozitoları',
    'Depozyty jeonse w obiegu', 'Utestående jeonse-depositioner');

  L['1가구당 가계부채'] = X(
    '每戶家庭債務', 'Deuda por hogar', 'Dívida por domicílio',
    'Dette par ménage', 'Schulden je Haushalt', 'Debito per famiglia',
    'Schuld per huishouden', 'Долг на домохозяйство', 'الدين لكل أسرة',
    'प्रति परिवार ऋण', 'Utang per rumah tangga', 'Nợ trên mỗi hộ',
    'หนี้ต่อครัวเรือน', 'Hane başına borç', 'Dług na gospodarstwo domowe',
    'Skuld per hushåll');

  L['국민 1인당 가계부채'] = X(
    '人均家庭債務', 'Deuda de los hogares por habitante',
    'Dívida das famílias por habitante', 'Dette des ménages par habitant',
    'Haushaltsschulden je Einwohner', 'Debito delle famiglie per abitante',
    'Huishoudschuld per inwoner', 'Долг домохозяйств на человека',
    'ديون الأسر لكل مواطن', 'प्रति व्यक्ति घरेलू ऋण',
    'Utang rumah tangga per penduduk', 'Nợ hộ gia đình đầu người',
    'หนี้ครัวเรือนต่อคน', 'Kişi başına hanehalkı borcu',
    'Dług gospodarstw domowych na mieszkańca', 'Hushållsskuld per invånare');

  L['가계부채 / GDP'] = X(
    '家庭債務 / GDP', 'Deuda de los hogares / PIB', 'Dívida das famílias / PIB',
    'Dette des ménages / PIB', 'Haushaltsschulden / BIP', 'Debito famiglie / PIL',
    'Huishoudschuld / bbp', 'Долг домохозяйств / ВВП', 'ديون الأسر / الناتج المحلي',
    'घरेलू ऋण / जीडीपी', 'Utang rumah tangga / PDB', 'Nợ hộ gia đình / GDP',
    'หนี้ครัวเรือน / GDP', 'Hanehalkı borcu / GSYH', 'Dług gospodarstw domowych / PKB',
    'Hushållens skulder / BNP');

  L['가계신용 잔액 기준'] = X(
    '家庭信貸餘額口徑', 'Base: saldo de crédito a hogares',
    'Base: saldo de crédito às famílias', 'Base : encours de crédit aux ménages',
    'Basis: Kreditbestand der Haushalte', 'Base: stock di credito alle famiglie',
    'Basis: uitstaand huishoudkrediet', 'На основе остатка кредитов домохозяйствам',
    'على أساس رصيد ائتمان الأسر', 'आधार: घरेलू ऋण शेष',
    'Basis: saldo kredit rumah tangga', 'Cơ sở: dư nợ tín dụng hộ gia đình',
    'ฐาน: ยอดคงค้างสินเชื่อครัวเรือน', 'Esas: hanehalkı kredi bakiyesi',
    'Podstawa: saldo kredytów gospodarstw domowych', 'Grund: hushållens kreditstock');

  L['가계+기업+국가 총부채'] = X(
    '家庭＋企業＋國家總債務', 'Deuda total de la economía',
    'Dívida total da economia', 'Dette totale de l’économie',
    'Gesamtverschuldung der Volkswirtschaft', 'Debito totale dell’economia',
    'Totale schuld van de economie', 'Совокупный долг экономики',
    'إجمالي دين الاقتصاد', 'अर्थव्यवस्था का कुल ऋण',
    'Total utang perekonomian', 'Tổng nợ toàn nền kinh tế',
    'หนี้รวมทั้งระบบเศรษฐกิจ', 'Ekonominin toplam borcu',
    'Całkowite zadłużenie gospodarki', 'Ekonomins totala skuld');

  L['총부채 / GDP'] = X(
    '總債務 / GDP', 'Deuda total / PIB', 'Dívida total / PIB', 'Dette totale / PIB',
    'Gesamtverschuldung / BIP', 'Debito totale / PIL', 'Totale schuld / bbp',
    'Совокупный долг / ВВП', 'إجمالي الدين / الناتج المحلي', 'कुल ऋण / जीडीपी',
    'Total utang / PDB', 'Tổng nợ / GDP', 'หนี้รวม / GDP', 'Toplam borç / GSYH',
    'Dług ogółem / PKB', 'Total skuld / BNP');

  /* ================= 경제 · 대외 ================= */

  L['국내총생산 (명목 GDP)'] = X(
    '國內生產總值(名義)', 'Producto interior bruto (nominal)',
    'Produto interno bruto (nominal)', 'Produit intérieur brut (nominal)',
    'Bruttoinlandsprodukt (nominal)', 'Prodotto interno lordo (nominale)',
    'Bruto binnenlands product (nominaal)', 'Валовой внутренний продукт (номинальный)',
    'الناتج المحلي الإجمالي (الاسمي)', 'सकल घरेलू उत्पाद (नाममात्र)',
    'Produk domestik bruto (nominal)', 'Tổng sản phẩm quốc nội (danh nghĩa)',
    'ผลิตภัณฑ์มวลรวมในประเทศ (ราคาปัจจุบัน)', 'Gayrisafi yurt içi hasıla (nominal)',
    'Produkt krajowy brutto (nominalny)', 'Bruttonationalprodukt (nominell)');

  L['연간 환산 기준'] = X(
    '年化口徑', 'Anualizado', 'Anualizado', 'En rythme annuel',
    'Auf Jahresbasis', 'Annualizzato', 'Op jaarbasis', 'В годовом выражении',
    'بمعدل سنوي', 'वार्षिकीकृत', 'Disetahunkan', 'Quy đổi theo năm',
    'ปรับเป็นรายปี', 'Yıllıklandırılmış', 'W ujęciu rocznym', 'Uppräknat till årstakt');

  L['올해 생산된 GDP'] = X(
    '本年度已產出GDP', 'PIB producido este año', 'PIB produzido este ano',
    'PIB produit cette année', 'In diesem Jahr erwirtschaftetes BIP',
    'PIL prodotto quest’anno', 'Dit jaar geproduceerd bbp',
    'ВВП, произведённый в этом году', 'الناتج المحلي المنتج هذا العام',
    'इस वर्ष उत्पादित जीडीपी', 'PDB yang dihasilkan tahun ini',
    'GDP tạo ra trong năm nay', 'GDP ที่ผลิตได้ปีนี้',
    'Bu yıl üretilen GSYH', 'PKB wytworzony w tym roku', 'BNP producerad i år');

  L['1인당 GDP'] = X(
    '人均GDP', 'PIB per cápita', 'PIB per capita', 'PIB par habitant',
    'BIP je Einwohner', 'PIL pro capite', 'Bbp per hoofd', 'ВВП на душу населения',
    'نصيب الفرد من الناتج المحلي', 'प्रति व्यक्ति जीडीपी', 'PDB per kapita',
    'GDP bình quân đầu người', 'GDP ต่อหัว', 'Kişi başına GSYH',
    'PKB na mieszkańca', 'BNP per capita');

  L['실질 GDP 성장률'] = X(
    '實際GDP增長率', 'Crecimiento real del PIB', 'Crescimento real do PIB',
    'Croissance réelle du PIB', 'Reales BIP-Wachstum', 'Crescita reale del PIL',
    'Reële bbp-groei', 'Реальный рост ВВП', 'النمو الحقيقي للناتج المحلي',
    'वास्तविक जीडीपी वृद्धि', 'Pertumbuhan PDB riil', 'Tăng trưởng GDP thực',
    'อัตราเติบโต GDP ที่แท้จริง', 'Reel GSYH büyümesi', 'Realny wzrost PKB',
    'Real BNP-tillväxt');

  L['올해 수출액'] = X(
    '本年度出口額', 'Exportaciones este año', 'Exportações este ano',
    'Exportations cette année', 'Exporte in diesem Jahr', 'Esportazioni quest’anno',
    'Export dit jaar', 'Экспорт в этом году', 'الصادرات هذا العام',
    'इस वर्ष निर्यात', 'Ekspor tahun ini', 'Xuất khẩu năm nay',
    'การส่งออกปีนี้', 'Bu yıl ihracat', 'Eksport w tym roku', 'Export i år');

  L['연 7,100억 달러'] = X(
    '年7,100億美元', '710 000 M USD al año', 'US$ 710 bilhões por ano',
    '710 Md USD par an', '710 Mrd. USD pro Jahr', '710 mld USD all’anno',
    '710 mld USD per jaar', '710 млрд долл. в год', '710 مليار دولار سنويًا',
    '710 अरब डॉलर प्रति वर्ष', 'USD 710 miliar/tahun', '710 tỷ USD mỗi năm',
    '7.1 แสนล้านดอลลาร์ต่อปี', 'Yılda 710 milyar USD', '710 mld USD rocznie',
    '710 miljarder USD per år');

  L['올해 수입액'] = X(
    '本年度進口額', 'Importaciones este año', 'Importações este ano',
    'Importations cette année', 'Importe in diesem Jahr', 'Importazioni quest’anno',
    'Import dit jaar', 'Импорт в этом году', 'الواردات هذا العام',
    'इस वर्ष आयात', 'Impor tahun ini', 'Nhập khẩu năm nay',
    'การนำเข้าปีนี้', 'Bu yıl ithalat', 'Import w tym roku', 'Import i år');

  L['올해 무역수지'] = X(
    '本年度貿易差額', 'Balanza comercial este año', 'Balança comercial este ano',
    'Balance commerciale cette année', 'Handelsbilanz in diesem Jahr',
    'Bilancia commerciale quest’anno', 'Handelsbalans dit jaar',
    'Торговый баланс в этом году', 'الميزان التجاري هذا العام',
    'इस वर्ष व्यापार संतुलन', 'Neraca perdagangan tahun ini',
    'Cán cân thương mại năm nay', 'ดุลการค้าปีนี้', 'Bu yıl dış ticaret dengesi',
    'Bilans handlowy w tym roku', 'Handelsbalans i år');

  L['외환보유액'] = X(
    '外匯儲備', 'Reservas de divisas', 'Reservas cambiais',
    'Réserves de change', 'Währungsreserven', 'Riserve valutarie',
    'Deviezenreserves', 'Валютные резервы', 'احتياطيات النقد الأجنبي',
    'विदेशी मुद्रा भंडार', 'Cadangan devisa', 'Dự trữ ngoại hối',
    'ทุนสำรองระหว่างประเทศ', 'Döviz rezervleri', 'Rezerwy walutowe',
    'Valutareserv');

  L['대외순금융자산'] = X(
    '對外淨金融資產', 'Activos financieros exteriores netos',
    'Ativos financeiros externos líquidos', 'Actifs financiers extérieurs nets',
    'Nettoauslandsvermögen', 'Attività finanziarie estere nette',
    'Netto extern financieel vermogen', 'Чистые иностранные финансовые активы',
    'صافي الأصول المالية الخارجية', 'शुद्ध विदेशी वित्तीय परिसंपत्तियाँ',
    'Aset keuangan luar negeri neto', 'Tài sản tài chính ròng ở nước ngoài',
    'สินทรัพย์การเงินต่างประเทศสุทธิ', 'Net dış finansal varlıklar',
    'Aktywa zagraniczne netto', 'Nettoutlandsställning');

  L['원/달러 환율'] = X(
    '韓元/美元匯率', 'Tipo de cambio KRW/USD', 'Câmbio KRW/USD',
    'Taux de change KRW/USD', 'Wechselkurs KRW/USD', 'Cambio KRW/USD',
    'Wisselkoers KRW/USD', 'Курс вона к доллару', 'سعر صرف الوون/الدولار',
    'KRW/USD विनिमय दर', 'Kurs KRW/USD', 'Tỷ giá KRW/USD',
    'อัตราแลกเปลี่ยน KRW/USD', 'KRW/USD kuru', 'Kurs KRW/USD', 'Växelkurs KRW/USD');

  L['한국은행 기준금리'] = X(
    '韓國銀行基準利率', 'Tipo oficial del Banco de Corea',
    'Taxa básica do Banco da Coreia', 'Taux directeur de la Banque de Corée',
    'Leitzins der Bank of Korea', 'Tasso di riferimento Bank of Korea',
    'Beleidsrente Bank of Korea', 'Ключевая ставка Банка Кореи',
    'سعر الفائدة لبنك كوريا', 'बैंक ऑफ कोरिया नीति दर',
    'Suku bunga acuan Bank of Korea', 'Lãi suất cơ bản Ngân hàng Hàn Quốc',
    'อัตราดอกเบี้ยนโยบายธนาคารกลางเกาหลี', 'Kore Merkez Bankası politika faizi',
    'Stopa referencyjna Banku Korei', 'Bank of Koreas styrränta');

  L['소비자물가 상승률'] = X(
    '消費者物價漲幅', 'Inflación al consumo', 'Inflação ao consumidor',
    'Inflation des prix à la consommation', 'Verbraucherpreisinflation',
    'Inflazione al consumo', 'Consumenteninflatie', 'Инфляция потребительских цен',
    'تضخم أسعار المستهلك', 'उपभोक्ता मुद्रास्फीति', 'Inflasi konsumen',
    'Lạm phát tiêu dùng', 'อัตราเงินเฟ้อผู้บริโภค', 'Tüketici enflasyonu',
    'Inflacja konsumencka', 'Konsumentprisinflation');

  L['코스피 지수'] = X(
    'KOSPI指數', 'Índice KOSPI', 'Índice KOSPI', 'Indice KOSPI',
    'KOSPI-Index', 'Indice KOSPI', 'KOSPI-index', 'Индекс KOSPI',
    'مؤشر كوسبي', 'कॉस्पी सूचकांक', 'Indeks KOSPI', 'Chỉ số KOSPI',
    'ดัชนี KOSPI', 'KOSPI endeksi', 'Indeks KOSPI', 'KOSPI-index');

  L['국가신용등급'] = X(
    '主權信用評級', 'Calificación crediticia soberana', 'Rating soberano',
    'Notation souveraine', 'Länderrating', 'Rating sovrano',
    'Kredietbeoordeling van de staat', 'Суверенный кредитный рейтинг',
    'التصنيف الائتماني السيادي', 'सॉवरेन क्रेडिट रेटिंग',
    'Peringkat kredit negara', 'Xếp hạng tín nhiệm quốc gia',
    'อันดับความน่าเชื่อถือของประเทศ', 'Ülke kredi notu',
    'Rating kredytowy państwa', 'Statens kreditbetyg');

  L['S&P 기준'] = X(
    'S&P', 'Según S&P', 'Segundo a S&P', 'Selon S&P', 'Laut S&P', 'Secondo S&P',
    'Volgens S&P', 'По версии S&P', 'وفق ستاندرد آند بورز', 'एसएंडपी के अनुसार',
    'Menurut S&P', 'Theo S&P', 'ตาม S&P', 'S&P’ye göre', 'Według S&P', 'Enligt S&P');

  L['AA / 안정적'] = X(
    'AA / 穩定', 'AA / estable', 'AA / estável', 'AA / stable', 'AA / stabil',
    'AA / stabile', 'AA / stabiel', 'AA / стабильный', 'AA / مستقر',
    'AA / स्थिर', 'AA / stabil', 'AA / ổn định', 'AA / มีเสถียรภาพ',
    'AA / durağan', 'AA / stabilna', 'AA / stabila');

  /* ================= 인구 · 노동 ================= */

  L['명'] = X('人', ' personas', ' pessoas', ' personnes', ' Personen', ' persone',
    ' personen', ' чел.', ' نسمة', ' लोग', ' orang', ' người', ' คน', ' kişi',
    ' osób', ' personer');

  L['총인구'] = X(
    '總人口', 'Población total', 'População total', 'Population totale',
    'Gesamtbevölkerung', 'Popolazione totale', 'Totale bevolking',
    'Общая численность населения', 'إجمالي السكان', 'कुल जनसंख्या',
    'Total penduduk', 'Tổng dân số', 'ประชากรทั้งหมด', 'Toplam nüfus',
    'Ludność ogółem', 'Total befolkning');

  L['주민등록 기준 · 감소 중'] = X(
    '戶籍口徑・持續減少', 'Registro civil — en descenso',
    'Registro civil — em queda', 'Registre de résidence — en baisse',
    'Melderegister — rückläufig', 'Anagrafe — in calo',
    'Bevolkingsregister — dalend', 'По регистру — снижается',
    'حسب سجل الإقامة — في تراجع', 'निवास पंजी — घट रही',
    'Registrasi penduduk — menurun', 'Theo hộ khẩu — đang giảm',
    'ตามทะเบียนราษฎร — ลดลง', 'Nüfus kaydı — azalıyor',
    'Rejestr mieszkańców — spada', 'Folkbokföring — minskar');

  L['세대'] = X('戶', ' hogares', ' domicílios', ' ménages', ' Haushalte',
    ' famiglie', ' huishoudens', ' домохоз.', ' أسرة', ' परिवार',
    ' rumah tangga', ' hộ', ' ครัวเรือน', ' hane', ' gosp. dom.', ' hushåll');

  L['총 세대수'] = X(
    '總戶數', 'Hogares totales', 'Total de domicílios', 'Nombre total de ménages',
    'Haushalte insgesamt', 'Famiglie totali', 'Totaal huishoudens',
    'Всего домохозяйств', 'إجمالي الأسر', 'कुल परिवार',
    'Total rumah tangga', 'Tổng số hộ', 'จำนวนครัวเรือนทั้งหมด',
    'Toplam hane sayısı', 'Liczba gospodarstw domowych', 'Totalt antal hushåll');

  L['1인 가구'] = X(
    '單人戶', 'Hogares unipersonales', 'Domicílios unipessoais',
    'Ménages d’une personne', 'Einpersonenhaushalte', 'Famiglie unipersonali',
    'Eenpersoonshuishoudens', 'Домохозяйства из одного человека',
    'الأسر المكوّنة من فرد واحد', 'एकल-व्यक्ति परिवार',
    'Rumah tangga tunggal', 'Hộ độc thân', 'ครัวเรือนคนเดียว',
    'Tek kişilik haneler', 'Gospodarstwa jednoosobowe', 'Enpersonshushåll');

  L['취업자 수'] = X(
    '就業人數', 'Población ocupada', 'População ocupada', 'Personnes en emploi',
    'Erwerbstätige', 'Occupati', 'Werkenden', 'Занятые',
    'المشتغلون', 'रोजगाररत व्यक्ति', 'Penduduk bekerja', 'Số người có việc làm',
    'ผู้มีงานทำ', 'İstihdam edilenler', 'Pracujący', 'Sysselsatta');

  L['실업자 수'] = X(
    '失業人數', 'Personas desempleadas', 'Pessoas desempregadas',
    'Personnes au chômage', 'Arbeitslose', 'Disoccupati', 'Werklozen',
    'Безработные', 'العاطلون عن العمل', 'बेरोजगार व्यक्ति',
    'Penduduk menganggur', 'Số người thất nghiệp', 'ผู้ว่างงาน',
    'İşsizler', 'Bezrobotni', 'Arbetslösa');

  L['실업률'] = X(
    '失業率', 'Tasa de paro', 'Taxa de desemprego', 'Taux de chômage',
    'Arbeitslosenquote', 'Tasso di disoccupazione', 'Werkloosheidspercentage',
    'Уровень безработицы', 'معدل البطالة', 'बेरोजगारी दर',
    'Tingkat pengangguran', 'Tỷ lệ thất nghiệp', 'อัตราการว่างงาน',
    'İşsizlik oranı', 'Stopa bezrobocia', 'Arbetslöshet');

  L['올해 태어난 아기'] = X(
    '本年度出生人數', 'Nacimientos este año', 'Nascimentos este ano',
    'Naissances cette année', 'Geburten in diesem Jahr', 'Nascite quest’anno',
    'Geboorten dit jaar', 'Рождений в этом году', 'المواليد هذا العام',
    'इस वर्ष जन्म', 'Kelahiran tahun ini', 'Số trẻ sinh ra năm nay',
    'การเกิดปีนี้', 'Bu yıl doğumlar', 'Urodzenia w tym roku', 'Födda i år');

  L['연 25.5만명'] = X(
    '年25.5萬人', '255 000 al año', '255 mil por ano', '255 000 par an',
    '255 000 pro Jahr', '255 000 all’anno', '255.000 per jaar', '255 тыс. в год',
    '255 ألفًا سنويًا', '2.55 लाख प्रति वर्ष', '255.000 per tahun',
    '255.000 mỗi năm', '255,000 คนต่อปี', 'Yılda 255.000',
    '255 tys. rocznie', '255 000 per år');

  L['올해 사망자'] = X(
    '本年度死亡人數', 'Defunciones este año', 'Óbitos este ano',
    'Décès cette année', 'Sterbefälle in diesem Jahr', 'Decessi quest’anno',
    'Sterfgevallen dit jaar', 'Смертей в этом году', 'الوفيات هذا العام',
    'इस वर्ष मृत्यु', 'Kematian tahun ini', 'Số người chết năm nay',
    'การเสียชีวิตปีนี้', 'Bu yıl ölümler', 'Zgony w tym roku', 'Döda i år');

  L['올해 인구 자연감소'] = X(
    '本年度人口自然減少', 'Descenso natural de población este año',
    'Queda natural da população este ano', 'Solde naturel négatif cette année',
    'Natürlicher Bevölkerungsrückgang in diesem Jahr',
    'Calo naturale della popolazione quest’anno', 'Natuurlijke bevolkingsdaling dit jaar',
    'Естественная убыль населения', 'الانخفاض الطبيعي للسكان هذا العام',
    'इस वर्ष प्राकृतिक जनसंख्या ह्रास', 'Penurunan alami penduduk tahun ini',
    'Suy giảm dân số tự nhiên năm nay', 'ประชากรลดลงตามธรรมชาติปีนี้',
    'Bu yıl doğal nüfus azalması', 'Naturalny ubytek ludności w tym roku',
    'Naturlig befolkningsminskning i år');

  L['출생 − 사망'] = X(
    '出生−死亡', 'Nacimientos − defunciones', 'Nascimentos − óbitos',
    'Naissances − décès', 'Geburten − Sterbefälle', 'Nascite − decessi',
    'Geboorten − sterfgevallen', 'Рождения − смерти', 'المواليد − الوفيات',
    'जन्म − मृत्यु', 'Kelahiran − kematian', 'Sinh − tử',
    'เกิด − ตาย', 'Doğum − ölüm', 'Urodzenia − zgony', 'Födda − döda');

  L['합계출산율'] = X(
    '總和生育率', 'Tasa de fecundidad total', 'Taxa de fecundidade total',
    'Indice de fécondité', 'Zusammengefasste Geburtenziffer',
    'Tasso di fecondità totale', 'Totaal vruchtbaarheidscijfer',
    'Суммарный коэффициент рождаемости', 'معدل الخصوبة الكلي',
    'कुल प्रजनन दर', 'Angka kelahiran total', 'Tổng tỷ suất sinh',
    'อัตราเจริญพันธุ์รวม', 'Toplam doğurganlık hızı',
    'Współczynnik dzietności', 'Summerad fruktsamhet');

  L['세계 최저 수준'] = X(
    '全球最低水準', 'La más baja del mundo', 'A mais baixa do mundo',
    'La plus faible au monde', 'Weltweit niedrigste', 'La più bassa al mondo',
    'Laagste ter wereld', 'Самый низкий в мире', 'الأدنى في العالم',
    'विश्व में सबसे कम', 'Terendah di dunia', 'Thấp nhất thế giới',
    'ต่ำที่สุดในโลก', 'Dünyanın en düşüğü', 'Najniższy na świecie',
    'Lägst i världen');

  L['65세 이상 고령인구'] = X(
    '65歲以上人口', 'Población de 65 años o más', 'População de 65 anos ou mais',
    'Population de 65 ans et plus', 'Bevölkerung ab 65 Jahren',
    'Popolazione di 65 anni e oltre', 'Bevolking van 65 jaar en ouder',
    'Население 65 лет и старше', 'السكان 65 عامًا فأكثر',
    '65 वर्ष व अधिक जनसंख्या', 'Penduduk usia 65+', 'Dân số từ 65 tuổi',
    'ประชากรอายุ 65 ปีขึ้นไป', '65 yaş ve üstü nüfus',
    'Ludność w wieku 65+', 'Befolkning 65 år och äldre');

  L['고령인구 비율'] = X(
    '老齡人口比重', 'Proporción de mayores de 65', 'Proporção de 65 anos ou mais',
    'Part des 65 ans et plus', 'Anteil der über 65-Jährigen',
    'Quota di over 65', 'Aandeel 65-plussers', 'Доля населения 65+',
    'نسبة من هم 65 عامًا فأكثر', '65+ जनसंख्या का हिस्सा',
    'Proporsi penduduk 65+', 'Tỷ lệ dân số từ 65 tuổi',
    'สัดส่วนผู้สูงอายุ 65+', '65 yaş üstü oranı',
    'Udział osób 65+', 'Andel 65 år och äldre');

  L['20% 이상 = 초고령사회'] = X(
    '超20%即超高齡社會', 'Más del 20 % = sociedad superenvejecida',
    'Acima de 20% = sociedade superenvelhecida', 'Plus de 20 % = société hyper-âgée',
    'Über 20 % = superalte Gesellschaft', 'Oltre il 20% = società super-anziana',
    'Boven 20% = superverouderde samenleving', 'Свыше 20 % — сверхстарое общество',
    'أكثر من 20% = مجتمع فائق الشيخوخة', '20% से अधिक = अति-वृद्ध समाज',
    'Di atas 20% = masyarakat super-tua', 'Trên 20% = xã hội siêu già',
    'เกิน 20% = สังคมสูงวัยระดับสุดยอด', '%20 üzeri = süper yaşlı toplum',
    'Powyżej 20% = społeczeństwo superstare', 'Över 20 % = superåldrat samhälle');

  L['생산가능인구 (15~64세)'] = X(
    '勞動年齡人口(15~64歲)', 'Población en edad de trabajar (15-64)',
    'População em idade ativa (15-64)', 'Population en âge de travailler (15-64 ans)',
    'Bevölkerung im Erwerbsalter (15–64)', 'Popolazione in età lavorativa (15-64)',
    'Beroepsbevolking (15–64)', 'Население трудоспособного возраста (15–64)',
    'السكان في سن العمل (15-64)', 'कार्यशील आयु जनसंख्या (15-64)',
    'Penduduk usia kerja (15-64)', 'Dân số trong tuổi lao động (15-64)',
    'ประชากรวัยทำงาน (15-64 ปี)', 'Çalışma çağındaki nüfus (15-64)',
    'Ludność w wieku produkcyjnym (15-64)', 'Befolkning i arbetsför ålder (15–64)');

  L['노년부양비'] = X(
    '老年撫養比', 'Tasa de dependencia de mayores',
    'Razão de dependência de idosos', 'Taux de dépendance des personnes âgées',
    'Altenquotient', 'Indice di dipendenza degli anziani',
    'Grijze druk', 'Коэффициент demографической нагрузки пожилыми',
    'نسبة إعالة كبار السن', 'वृद्ध निर्भरता अनुपात',
    'Rasio ketergantungan lansia', 'Tỷ số phụ thuộc người già',
    'อัตราส่วนพึ่งพิงผู้สูงอายุ', 'Yaşlı bağımlılık oranı',
    'Współczynnik obciążenia demograficznego', 'Äldrekvot');

  L['생산가능인구 100명당 노인'] = X(
    '每百名勞動年齡人口', 'Mayores por cada 100 en edad de trabajar',
    'Idosos por 100 em idade ativa', 'Personnes âgées pour 100 actifs potentiels',
    'Ältere je 100 Erwerbsfähige', 'Anziani ogni 100 in età lavorativa',
    'Ouderen per 100 personen op werkende leeftijd',
    'Пожилых на 100 трудоспособных', 'كبار السن لكل 100 في سن العمل',
    'प्रति 100 कार्यशील आयु पर वृद्ध', 'Lansia per 100 usia kerja',
    'Người già trên 100 người trong tuổi lao động',
    'ผู้สูงอายุต่อประชากรวัยทำงาน 100 คน', 'Çalışma çağındaki her 100 kişiye yaşlı',
    'Osoby starsze na 100 osób w wieku produkcyjnym',
    'Äldre per 100 i arbetsför ålder');

  L['체류 외국인'] = X(
    '在韓外國人', 'Residentes extranjeros', 'Residentes estrangeiros',
    'Résidents étrangers', 'Ausländische Einwohner', 'Residenti stranieri',
    'Buitenlandse ingezetenen', 'Иностранные резиденты', 'المقيمون الأجانب',
    'विदेशी निवासी', 'Penduduk asing', 'Người nước ngoài cư trú',
    'ชาวต่างชาติที่พำนัก', 'Yabancı sakinler', 'Cudzoziemcy',
    'Utländska invånare');

  L['건'] = X('件', ' casos', ' casos', ' cas', ' Fälle', ' casi', ' gevallen',
    ' случаев', ' حالة', ' मामले', ' kasus', ' vụ', ' กรณี', ' vaka',
    ' przypadków', ' fall');

  L['올해 혼인 건수'] = X(
    '本年度結婚數', 'Matrimonios este año', 'Casamentos este ano',
    'Mariages cette année', 'Eheschließungen in diesem Jahr', 'Matrimoni quest’anno',
    'Huwelijken dit jaar', 'Браков в этом году', 'الزيجات هذا العام',
    'इस वर्ष विवाह', 'Pernikahan tahun ini', 'Số cuộc kết hôn năm nay',
    'การสมรสปีนี้', 'Bu yıl evlenmeler', 'Małżeństwa w tym roku', 'Giftermål i år');

  L['올해 이혼 건수'] = X(
    '本年度離婚數', 'Divorcios este año', 'Divórcios este ano',
    'Divorces cette année', 'Scheidungen in diesem Jahr', 'Divorzi quest’anno',
    'Echtscheidingen dit jaar', 'Разводов в этом году', 'حالات الطلاق هذا العام',
    'इस वर्ष तलाक', 'Perceraian tahun ini', 'Số vụ ly hôn năm nay',
    'การหย่าปีนี้', 'Bu yıl boşanmalar', 'Rozwody w tym roku', 'Skilsmässor i år');

  /* ================= 연금 · 복지 ================= */

  L['국민연금 적립금'] = X(
    '國民年金基金', 'Fondo de la pensión nacional', 'Fundo da previdência nacional',
    'Fonds de la pension nationale', 'Vermögen der nationalen Rentenkasse',
    'Fondo della pensione nazionale', 'Nationaal pensioenfonds',
    'Фонд национальной пенсии', 'صندوق المعاشات الوطني',
    'राष्ट्रीय पेंशन कोष', 'Dana pensiun nasional', 'Quỹ hưu trí quốc gia',
    'กองทุนบำนาญแห่งชาติ', 'Ulusal emeklilik fonu',
    'Fundusz emerytalny', 'Nationella pensionsfonden');

  L['국민연금 기금 소진 예상'] = X(
    '國民年金基金枯竭預測', 'Agotamiento previsto del fondo',
    'Esgotamento previsto do fundo', 'Épuisement prévu du fonds',
    'Erwartete Erschöpfung des Fonds', 'Esaurimento previsto del fondo',
    'Verwachte uitputting van het fonds', 'Ожидаемое исчерпание фонда',
    'النفاد المتوقع للصندوق', 'कोष समाप्ति का अनुमान',
    'Perkiraan dana habis', 'Dự kiến cạn quỹ',
    'คาดการณ์กองทุนหมด', 'Fonun tükenme beklentisi',
    'Przewidywane wyczerpanie funduszu', 'Väntad utarmning av fonden');

  L['2055년 경'] = X(
    '2055年前後', 'hacia 2055', 'por volta de 2055', 'vers 2055', 'um 2055',
    'intorno al 2055', 'rond 2055', 'около 2055 года', 'نحو عام 2055',
    'लगभग 2055', 'sekitar 2055', 'khoảng năm 2055', 'ราวปี 2055',
    '2055 civarı', 'około 2055 r.', 'omkring 2055');

  L['국민연금 가입자'] = X(
    '國民年金參保人', 'Cotizantes de la pensión nacional',
    'Contribuintes da previdência nacional', 'Cotisants à la pension nationale',
    'Beitragszahler der Rentenkasse', 'Contribuenti della pensione nazionale',
    'Premiebetalers nationaal pensioen', 'Плательщики взносов',
    'المشتركون في المعاش الوطني', 'राष्ट्रीय पेंशन अंशदाता',
    'Peserta pensiun nasional', 'Người tham gia hưu trí quốc gia',
    'ผู้ส่งเงินสมทบบำนาญแห่งชาติ', 'Ulusal emeklilik katılımcıları',
    'Płatnicy składek emerytalnych', 'Avgiftsbetalare i pensionssystemet');

  L['국민연금 수급자'] = X(
    '國民年金領取人', 'Perceptores de la pensión nacional',
    'Beneficiários da previdência nacional', 'Bénéficiaires de la pension nationale',
    'Rentenempfänger', 'Percettori della pensione nazionale',
    'Ontvangers nationaal pensioen', 'Получатели пенсии',
    'المستفيدون من المعاش الوطني', 'राष्ट्रीय पेंशन प्राप्तकर्ता',
    'Penerima pensiun nasional', 'Người hưởng hưu trí quốc gia',
    'ผู้รับบำนาญแห่งชาติ', 'Ulusal emeklilik alanlar',
    'Świadczeniobiorcy emerytalni', 'Pensionstagare');

  L['국민연금 월평균 수급액'] = X(
    '國民年金月均領取額', 'Pensión media mensual', 'Pensão média mensal',
    'Pension mensuelle moyenne', 'Durchschnittliche Monatsrente',
    'Pensione media mensile', 'Gemiddeld maandpensioen',
    'Средняя месячная пенсия', 'متوسط المعاش الشهري',
    'औसत मासिक पेंशन', 'Rata-rata pensiun bulanan',
    'Lương hưu bình quân tháng', 'บำนาญเฉลี่ยต่อเดือน',
    'Ortalama aylık emekli maaşı', 'Średnia emerytura miesięczna',
    'Genomsnittlig månadspension');

  L['국민연금 소득대체율'] = X(
    '國民年金替代率', 'Tasa de sustitución de la pensión',
    'Taxa de reposição da pensão', 'Taux de remplacement de la pension',
    'Rentenniveau (Ersatzquote)', 'Tasso di sostituzione pensionistico',
    'Vervangingsratio pensioen', 'Коэффициент замещения пенсии',
    'معدل استبدال المعاش', 'पेंशन प्रतिस्थापन दर',
    'Tingkat penggantian pensiun', 'Tỷ lệ thay thế lương hưu',
    'อัตราทดแทนรายได้ของบำนาญ', 'Emeklilik aylığı bağlama oranı',
    'Stopa zastąpienia emerytury', 'Kompensationsgrad för pension');

  L['40년 가입 기준'] = X(
    '按繳費40年計', 'Con 40 años de cotización', 'Com 40 anos de contribuição',
    'Pour 40 ans de cotisation', 'Bei 40 Beitragsjahren',
    'Con 40 anni di contributi', 'Bij 40 premiejaren',
    'При 40 годах уплаты взносов', 'بافتراض 40 عامًا من الاشتراك',
    '40 वर्ष अंशदान पर', 'Dengan 40 tahun iuran', 'Với 40 năm đóng góp',
    'กรณีส่งเงินสมทบ 40 ปี', '40 yıl prim ödemesiyle',
    'Przy 40 latach składek', 'Vid 40 avgiftsår');

  L['올해 건강보험 진료비'] = X(
    '本年度醫保醫療費', 'Gasto sanitario del seguro este año',
    'Despesa do seguro de saúde este ano', 'Dépenses de l’assurance maladie cette année',
    'Ausgaben der Krankenversicherung in diesem Jahr',
    'Spesa sanitaria assicurativa quest’anno', 'Zorgverzekeringsuitgaven dit jaar',
    'Расходы медстрахования в этом году', 'إنفاق التأمين الصحي هذا العام',
    'इस वर्ष स्वास्थ्य बीमा व्यय', 'Belanja asuransi kesehatan tahun ini',
    'Chi phí bảo hiểm y tế năm nay', 'ค่ารักษาพยาบาลประกันสุขภาพปีนี้',
    'Bu yıl sağlık sigortası harcaması', 'Wydatki ubezpieczenia zdrowotnego w tym roku',
    'Sjukförsäkringens utgifter i år');

  L['건강보험 누적 적립금'] = X(
    '醫保累計儲備金', 'Reservas del seguro de salud', 'Reservas do seguro de saúde',
    'Réserves de l’assurance maladie', 'Rücklagen der Krankenversicherung',
    'Riserve dell’assicurazione sanitaria', 'Reserves zorgverzekering',
    'Резервы медстрахования', 'احتياطيات التأمين الصحي',
    'स्वास्थ्य बीमा आरक्षित निधि', 'Cadangan asuransi kesehatan',
    'Dự trữ bảo hiểm y tế', 'เงินสำรองประกันสุขภาพ',
    'Sağlık sigortası rezervi', 'Rezerwy ubezpieczenia zdrowotnego',
    'Sjukförsäkringens reserver');

  L['감소 중'] = X(
    '持續減少', 'En descenso', 'Em queda', 'En baisse', 'Rückläufig',
    'In calo', 'Dalend', 'Сокращается', 'في تراجع', 'घट रहा',
    'Menurun', 'Đang giảm', 'กำลังลดลง', 'Azalıyor', 'Maleje', 'Minskar');

  L['올해 기초연금 지출'] = X(
    '本年度基礎養老金支出', 'Gasto en pensión básica este año',
    'Gasto com pensão básica este ano', 'Dépenses de pension de base cette année',
    'Ausgaben für die Grundrente in diesem Jahr', 'Spesa per la pensione di base quest’anno',
    'Uitgaven basispensioen dit jaar', 'Расходы на базовую пенсию',
    'إنفاق المعاش الأساسي هذا العام', 'इस वर्ष मूल पेंशन व्यय',
    'Belanja pensiun dasar tahun ini', 'Chi trợ cấp hưu cơ bản năm nay',
    'รายจ่ายบำนาญพื้นฐานปีนี้', 'Bu yıl temel emeklilik harcaması',
    'Wydatki na emeryturę podstawową w tym roku', 'Utgifter för grundpension i år');

  L['올해 공무원연금 적자 보전'] = X(
    '本年度公務員養老金補貼', 'Subvención al régimen de funcionarios este año',
    'Subsídio ao regime dos servidores este ano',
    'Subvention au régime des fonctionnaires cette année',
    'Zuschuss zur Beamtenversorgung in diesem Jahr',
    'Contributo al regime dei dipendenti pubblici quest’anno',
    'Subsidie ambtenarenpensioen dit jaar',
    'Дотация пенсиям госслужащих', 'دعم معاشات موظفي الدولة هذا العام',
    'इस वर्ष सरकारी पेंशन अनुदान', 'Subsidi pensiun ASN tahun ini',
    'Bù đắp hưu trí công chức năm nay', 'เงินอุดหนุนบำนาญข้าราชการปีนี้',
    'Bu yıl memur emekliliği desteği', 'Dotacja do emerytur urzędniczych w tym roku',
    'Subvention till statstjänstemäns pensioner i år');

  L['기초생활보장 수급자'] = X(
    '基本生活保障領取人', 'Perceptores de renta básica de subsistencia',
    'Beneficiários da renda básica de subsistência',
    'Bénéficiaires du minimum vital', 'Empfänger der Grundsicherung',
    'Beneficiari del reddito minimo', 'Ontvangers van bijstand',
    'Получатели пособия по бедности', 'مستفيدو ضمان المعيشة الأساسي',
    'मूल जीवन-निर्वाह लाभार्थी', 'Penerima jaminan hidup dasar',
    'Người hưởng trợ cấp sinh hoạt cơ bản', 'ผู้รับสวัสดิการยังชีพขั้นพื้นฐาน',
    'Temel geçim desteği alanlar', 'Beneficjenci zasiłku socjalnego',
    'Mottagare av försörjningsstöd');

  L['노인 빈곤율'] = X(
    '老年貧困率', 'Tasa de pobreza en mayores', 'Taxa de pobreza entre idosos',
    'Taux de pauvreté des seniors', 'Altersarmutsquote',
    'Tasso di povertà tra gli anziani', 'Armoedecijfer onder ouderen',
    'Уровень бедности пожилых', 'معدل فقر كبار السن',
    'वृद्ध गरीबी दर', 'Tingkat kemiskinan lansia', 'Tỷ lệ nghèo ở người già',
    'อัตราความยากจนของผู้สูงอายุ', 'Yaşlı yoksulluk oranı',
    'Stopa ubóstwa seniorów', 'Fattigdom bland äldre');

  L['OECD 최고 수준'] = X(
    'OECD最高', 'La más alta de la OCDE', 'A mais alta da OCDE',
    'La plus élevée de l’OCDE', 'Höchster Wert in der OECD',
    'La più alta dell’OCSE', 'Hoogste in de OESO', 'Самый высокий в ОЭСР',
    'الأعلى في منظمة التعاون الاقتصادي', 'ओईसीडी में सर्वाधिक',
    'Tertinggi di OECD', 'Cao nhất OECD', 'สูงที่สุดใน OECD',
    'OECD’nin en yükseği', 'Najwyższy w OECD', 'Högst i OECD');

  /* ================= 주택 · 자산 ================= */

  L['호'] = X('戶', ' viviendas', ' unidades', ' logements', ' Wohnungen',
    ' unità', ' woningen', ' единиц', ' وحدة', ' इकाइयाँ', ' unit', ' căn',
    ' ยูนิต', ' konut', ' mieszkań', ' bostäder');

  L['전국 주택 수'] = X(
    '全國住房數量', 'Viviendas en todo el país', 'Total de domicílios no país',
    'Logements dans tout le pays', 'Wohnungsbestand landesweit',
    'Abitazioni in tutto il paese', 'Woningvoorraad landelijk',
    'Жилых единиц по стране', 'إجمالي الوحدات السكنية',
    'देशभर में आवास इकाइयाँ', 'Total unit hunian nasional',
    'Tổng số nhà ở toàn quốc', 'จำนวนที่อยู่อาศัยทั้งประเทศ',
    'Ülke genelinde konut sayısı', 'Zasób mieszkaniowy w kraju',
    'Bostadsbestånd i landet');

  L['서울 아파트 평균 매매가'] = X(
    '首爾公寓平均售價', 'Precio medio de piso en Seúl',
    'Preço médio de apartamento em Seul', 'Prix moyen d’un appartement à Séoul',
    'Durchschnittspreis einer Wohnung in Seoul',
    'Prezzo medio di un appartamento a Seul', 'Gemiddelde appartementsprijs in Seoul',
    'Средняя цена квартиры в Сеуле', 'متوسط سعر الشقة في سيول',
    'सियोल में औसत अपार्टमेंट मूल्य', 'Harga rata-rata apartemen di Seoul',
    'Giá căn hộ trung bình tại Seoul', 'ราคาเฉลี่ยอพาร์ตเมนต์ในโซล',
    'Seul’de ortalama daire fiyatı', 'Średnia cena mieszkania w Seulu',
    'Genomsnittligt lägenhetspris i Seoul');

  L['전국 아파트 평균 매매가'] = X(
    '全國公寓平均售價', 'Precio medio de piso en el país',
    'Preço médio de apartamento no país', 'Prix moyen d’un appartement au niveau national',
    'Durchschnittspreis einer Wohnung landesweit',
    'Prezzo medio di un appartamento a livello nazionale',
    'Gemiddelde appartementsprijs landelijk', 'Средняя цена квартиры по стране',
    'متوسط سعر الشقة على مستوى البلاد', 'देशभर में औसत अपार्टमेंट मूल्य',
    'Harga rata-rata apartemen nasional', 'Giá căn hộ trung bình toàn quốc',
    'ราคาเฉลี่ยอพาร์ตเมนต์ทั้งประเทศ', 'Ülke genelinde ortalama daire fiyatı',
    'Średnia cena mieszkania w kraju', 'Genomsnittligt lägenhetspris i landet');

  L['서울 PIR'] = X(
    '首爾房價收入比', 'Ratio precio/ingreso en Seúl', 'Razão preço/renda em Seul',
    'Ratio prix/revenu à Séoul', 'Preis-Einkommens-Verhältnis in Seoul',
    'Rapporto prezzo/reddito a Seul', 'Prijs-inkomensverhouding in Seoul',
    'Отношение цены к доходу в Сеуле', 'نسبة السعر إلى الدخل في سيول',
    'सियोल मूल्य-आय अनुपात', 'Rasio harga terhadap pendapatan di Seoul',
    'Tỷ lệ giá nhà trên thu nhập tại Seoul', 'อัตราส่วนราคาบ้านต่อรายได้ในโซล',
    'Seul’de fiyat/gelir oranı', 'Wskaźnik cena/dochód w Seulu',
    'Pris/inkomst-kvot i Seoul');

  L['평균가 ÷ 연소득'] = X(
    '均價÷年收入', 'Precio ÷ ingreso anual', 'Preço ÷ renda anual',
    'Prix ÷ revenu annuel', 'Preis ÷ Jahreseinkommen', 'Prezzo ÷ reddito annuo',
    'Prijs ÷ jaarinkomen', 'Цена ÷ годовой доход', 'السعر ÷ الدخل السنوي',
    'मूल्य ÷ वार्षिक आय', 'Harga ÷ pendapatan tahunan', 'Giá ÷ thu nhập năm',
    'ราคา ÷ รายได้ต่อปี', 'Fiyat ÷ yıllık gelir', 'Cena ÷ dochód roczny',
    'Pris ÷ årsinkomst');

  L['자가점유율'] = X(
    '自有住房率', 'Tasa de propiedad de vivienda', 'Taxa de casa própria',
    'Taux de propriétaires occupants', 'Wohneigentumsquote',
    'Tasso di proprietà della casa', 'Eigenwoningbezit',
    'Доля собственного жилья', 'نسبة تملّك المساكن',
    'गृह स्वामित्व दर', 'Tingkat kepemilikan rumah', 'Tỷ lệ sở hữu nhà',
    'อัตราการมีบ้านเป็นของตนเอง', 'Ev sahipliği oranı',
    'Wskaźnik własności mieszkań', 'Andel ägt boende');

  L['미분양 주택'] = X(
    '未售出住房', 'Viviendas nuevas sin vender', 'Imóveis novos não vendidos',
    'Logements neufs invendus', 'Unverkaufte Neubauwohnungen',
    'Nuove abitazioni invendute', 'Onverkochte nieuwbouwwoningen',
    'Непроданное новое жильё', 'الوحدات الجديدة غير المباعة',
    'बिना बिके नए मकान', 'Rumah baru belum terjual',
    'Nhà mới chưa bán được', 'บ้านใหม่ที่ยังขายไม่ออก',
    'Satılmamış yeni konutlar', 'Niesprzedane nowe mieszkania',
    'Osålda nybyggda bostäder');

  L['가계 순자산 총액'] = X(
    '家庭淨資產總額', 'Patrimonio neto total de los hogares',
    'Patrimônio líquido total das famílias', 'Patrimoine net total des ménages',
    'Gesamtes Nettovermögen der Haushalte', 'Patrimonio netto totale delle famiglie',
    'Totaal nettovermogen huishoudens', 'Совокупные чистые активы домохозяйств',
    'إجمالي صافي ثروة الأسر', 'परिवारों की कुल शुद्ध संपत्ति',
    'Total kekayaan bersih rumah tangga', 'Tổng tài sản ròng hộ gia đình',
    'ความมั่งคั่งสุทธิรวมของครัวเรือน', 'Hanehalkı toplam net serveti',
    'Majątek netto gospodarstw domowych', 'Hushållens totala nettoförmögenhet');

  L['가계 금융자산 총액'] = X(
    '家庭金融資產總額', 'Activos financieros de los hogares',
    'Ativos financeiros das famílias', 'Actifs financiers des ménages',
    'Finanzvermögen der Haushalte', 'Attività finanziarie delle famiglie',
    'Financiële activa van huishoudens', 'Финансовые активы домохозяйств',
    'الأصول المالية للأسر', 'परिवारों की वित्तीय परिसंपत्तियाँ',
    'Aset keuangan rumah tangga', 'Tài sản tài chính hộ gia đình',
    'สินทรัพย์ทางการเงินของครัวเรือน', 'Hanehalkı finansal varlıkları',
    'Aktywa finansowe gospodarstw domowych', 'Hushållens finansiella tillgångar');

  L['1가구당 평균 순자산'] = X(
    '每戶平均淨資產', 'Patrimonio neto por hogar', 'Patrimônio líquido por domicílio',
    'Patrimoine net par ménage', 'Nettovermögen je Haushalt',
    'Patrimonio netto per famiglia', 'Nettovermogen per huishouden',
    'Чистые активы на домохозяйство', 'صافي الثروة لكل أسرة',
    'प्रति परिवार शुद्ध संपत्ति', 'Kekayaan bersih per rumah tangga',
    'Tài sản ròng mỗi hộ', 'ความมั่งคั่งสุทธิต่อครัวเรือน',
    'Hane başına net servet', 'Majątek netto na gospodarstwo domowe',
    'Nettoförmögenhet per hushåll');

  /* ================= 사회 · 삶 ================= */

  L['올해 사교육비 지출'] = X(
    '本年度課外教育支出', 'Gasto en educación privada este año',
    'Gasto com educação privada este ano', 'Dépenses de cours privés cette année',
    'Ausgaben für Nachhilfe in diesem Jahr', 'Spesa per lezioni private quest’anno',
    'Uitgaven aan bijles dit jaar', 'Расходы на частное образование',
    'الإنفاق على الدروس الخصوصية هذا العام', 'इस वर्ष निजी शिक्षा व्यय',
    'Belanja bimbingan belajar tahun ini', 'Chi phí học thêm năm nay',
    'ค่าใช้จ่ายเรียนพิเศษปีนี้', 'Bu yıl özel ders harcaması',
    'Wydatki na korepetycje w tym roku', 'Utgifter för privatundervisning i år');

  L['올해 자살 사망자'] = X(
    '本年度自殺人數', 'Suicidios este año', 'Suicídios este ano',
    'Suicides cette année', 'Suizide in diesem Jahr', 'Suicidi quest’anno',
    'Zelfdodingen dit jaar', 'Самоубийств в этом году', 'حالات الانتحار هذا العام',
    'इस वर्ष आत्महत्याएँ', 'Bunuh diri tahun ini', 'Số vụ tự tử năm nay',
    'การฆ่าตัวตายปีนี้', 'Bu yıl intiharlar', 'Samobójstwa w tym roku',
    'Självmord i år');

  L['자살률'] = X(
    '自殺率', 'Tasa de suicidio', 'Taxa de suicídio', 'Taux de suicide',
    'Suizidrate', 'Tasso di suicidio', 'Zelfdodingscijfer', 'Уровень самоубийств',
    'معدل الانتحار', 'आत्महत्या दर', 'Angka bunuh diri', 'Tỷ lệ tự tử',
    'อัตราการฆ่าตัวตาย', 'İntihar oranı', 'Wskaźnik samobójstw', 'Självmordstal');

  L['인구 10만명당 · OECD 1위'] = X(
    '每十萬人・OECD第一', 'Por 100 000 hab. — la más alta de la OCDE',
    'Por 100 mil hab. — a mais alta da OCDE',
    'Pour 100 000 hab. — la plus élevée de l’OCDE',
    'Je 100 000 Einwohner — höchste in der OECD',
    'Per 100 000 ab. — la più alta dell’OCSE',
    'Per 100.000 inwoners — hoogste in de OESO',
    'На 100 тыс. чел. — самый высокий в ОЭСР',
    'لكل 100 ألف نسمة — الأعلى في OECD',
    'प्रति 1 लाख — ओईसीडी में सर्वाधिक',
    'Per 100.000 penduduk — tertinggi di OECD',
    'Trên 100.000 dân — cao nhất OECD',
    'ต่อประชากรแสนคน — สูงสุดใน OECD',
    '100.000 kişide — OECD’nin en yükseği',
    'Na 100 tys. mieszkańców — najwyższy w OECD',
    'Per 100 000 invånare — högst i OECD');

  L['올해 교통사고 사망자'] = X(
    '本年度交通事故死亡', 'Muertes en carretera este año',
    'Mortes no trânsito este ano', 'Morts sur la route cette année',
    'Verkehrstote in diesem Jahr', 'Morti sulla strada quest’anno',
    'Verkeersdoden dit jaar', 'Погибших в ДТП в этом году',
    'وفيات حوادث الطرق هذا العام', 'इस वर्ष सड़क दुर्घटना मृत्यु',
    'Korban jiwa lalu lintas tahun ini', 'Số người chết vì tai nạn giao thông năm nay',
    'ผู้เสียชีวิตจากอุบัติเหตุจราจรปีนี้', 'Bu yıl trafik ölümleri',
    'Ofiary śmiertelne wypadków drogowych w tym roku', 'Trafikdöda i år');

  L['올해 산업재해 사망자'] = X(
    '本年度工傷死亡', 'Muertes laborales este año', 'Mortes no trabalho este ano',
    'Accidents du travail mortels cette année', 'Arbeitsunfalltote in diesem Jahr',
    'Morti sul lavoro quest’anno', 'Dodelijke arbeidsongevallen dit jaar',
    'Погибших на производстве в этом году', 'وفيات إصابات العمل هذا العام',
    'इस वर्ष कार्यस्थल मृत्यु', 'Kematian kerja tahun ini',
    'Số người chết do tai nạn lao động năm nay', 'ผู้เสียชีวิตจากอุบัติเหตุในงานปีนี้',
    'Bu yıl iş kazası ölümleri', 'Śmiertelne wypadki przy pracy w tym roku',
    'Dödsolyckor i arbetet i år');

  L['공무원 수'] = X(
    '公務員人數', 'Empleados públicos', 'Servidores públicos',
    'Agents publics', 'Beschäftigte im öffentlichen Dienst',
    'Dipendenti pubblici', 'Ambtenaren', 'Государственные служащие',
    'الموظفون العموميون', 'सरकारी कर्मचारी', 'Aparatur sipil negara',
    'Số công chức', 'ข้าราชการ', 'Kamu görevlileri', 'Urzędnicy publiczni',
    'Offentliganställda');

  L['군 병력'] = X(
    '軍隊人數', 'Efectivos militares', 'Efetivo militar', 'Effectifs militaires',
    'Militärpersonal', 'Personale militare', 'Militair personeel',
    'Военнослужащие', 'الأفراد العسكريون', 'सैन्य कर्मी',
    'Personel militer', 'Quân số', 'กำลังพลทหาร', 'Askeri personel',
    'Personel wojskowy', 'Militär personal');

  L['의사 수'] = X(
    '醫生人數', 'Número de médicos', 'Número de médicos', 'Nombre de médecins',
    'Zahl der Ärzte', 'Numero di medici', 'Aantal artsen', 'Численность врачей',
    'عدد الأطباء', 'चिकित्सकों की संख्या', 'Jumlah dokter', 'Số bác sĩ',
    'จำนวนแพทย์', 'Hekim sayısı', 'Liczba lekarzy', 'Antal läkare');

  L['최저임금 (시급)'] = X(
    '最低工資(時薪)', 'Salario mínimo (por hora)', 'Salário mínimo (por hora)',
    'Salaire minimum horaire', 'Mindestlohn (pro Stunde)',
    'Salario minimo orario', 'Minimumloon (per uur)', 'Минимальная почасовая оплата',
    'الحد الأدنى للأجر (بالساعة)', 'न्यूनतम मजदूरी (प्रति घंटा)',
    'Upah minimum (per jam)', 'Lương tối thiểu (theo giờ)',
    'ค่าแรงขั้นต่ำ (ต่อชั่วโมง)', 'Asgari ücret (saatlik)',
    'Płaca minimalna (godzinowa)', 'Minimilön (per timme)');

  L['2026년 적용'] = X(
    '2026年適用', 'Vigente en 2026', 'Vigente em 2026', 'En vigueur en 2026',
    'Gültig ab 2026', 'In vigore nel 2026', 'Geldig in 2026',
    'Действует в 2026 году', 'ساري في 2026', '2026 से लागू',
    'Berlaku 2026', 'Áp dụng năm 2026', 'มีผลปี 2026',
    '2026’da geçerli', 'Obowiązuje w 2026', 'Gäller 2026');

  L['상용근로자 월평균 임금'] = X(
    '正式員工月均工資', 'Salario mensual medio', 'Salário mensal médio',
    'Salaire mensuel moyen', 'Durchschnittlicher Monatslohn',
    'Retribuzione mensile media', 'Gemiddeld maandloon',
    'Средняя месячная зарплата', 'متوسط الأجر الشهري',
    'औसत मासिक वेतन', 'Upah bulanan rata-rata', 'Lương tháng bình quân',
    'ค่าจ้างเฉลี่ยต่อเดือน', 'Ortalama aylık ücret',
    'Przeciętne wynagrodzenie miesięczne', 'Genomsnittlig månadslön');

  L['시간'] = X('小時', ' horas', ' horas', ' heures', ' Stunden', ' ore', ' uur',
    ' часов', ' ساعة', ' घंटे', ' jam', ' giờ', ' ชม.', ' saat', ' godzin', ' timmar');

  L['연간 근로시간'] = X(
    '年工作時長', 'Horas trabajadas al año', 'Horas trabalhadas por ano',
    'Heures travaillées par an', 'Jahresarbeitszeit', 'Ore lavorate all’anno',
    'Gewerkte uren per jaar', 'Отработанных часов в год',
    'ساعات العمل السنوية', 'वार्षिक कार्य घंटे', 'Jam kerja per tahun',
    'Số giờ làm việc mỗi năm', 'ชั่วโมงทำงานต่อปี', 'Yıllık çalışma saati',
    'Roczny czas pracy', 'Årsarbetstid');

  L['OECD 평균 대비 장시간'] = X(
    '高於OECD平均', 'Largas según el estándar de la OCDE',
    'Longas para o padrão da OCDE', 'Longues au regard de la moyenne OCDE',
    'Lang im OECD-Vergleich', 'Lunghe rispetto alla media OCSE',
    'Lang naar OESO-maatstaven', 'Много по меркам ОЭСР',
    'طويلة مقارنة بمتوسط OECD', 'ओईसीडी औसत से अधिक',
    'Panjang menurut standar OECD', 'Dài so với chuẩn OECD',
    'ยาวกว่าค่าเฉลี่ย OECD', 'OECD ortalamasına göre uzun',
    'Długi jak na standardy OECD', 'Långa enligt OECD-mått');

  L['비정규직 비율'] = X(
    '非正規就業比重', 'Proporción de empleo temporal',
    'Proporção de emprego não regular', 'Part de l’emploi non permanent',
    'Anteil atypischer Beschäftigung', 'Quota di lavoro non standard',
    'Aandeel flexibele arbeid', 'Доля непостоянной занятости',
    'نسبة العمالة غير المنتظمة', 'अनियमित रोजगार का हिस्सा',
    'Proporsi pekerja tidak tetap', 'Tỷ lệ lao động phi chính thức',
    'สัดส่วนการจ้างงานไม่ประจำ', 'Düzensiz istihdam oranı',
    'Udział zatrudnienia niestandardowego', 'Andel otrygga anställningar');

})();
