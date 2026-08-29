/* =============================================================
 * 지표 라벨 번역 오버레이 ③ — 남북 비교 · 연도별 추이 · 후원
 * -------------------------------------------------------------
 * 이미 labels-econ.js 에 있는 키(총인구 · 합계출산율 · 명)는
 * 오버레이가 한국어 원문으로 공유되므로 여기서 다시 넣지 않습니다.
 *
 * X() 인자 순서 (16개):
 *   zt 繁體 · es · pt · fr · de · it · nl · ru · ar · hi · id · vi · th · tr · pl · sv
 * ============================================================= */

(function () {
  var L = window.ROK_LABELS = window.ROK_LABELS || {};
  function X(zt, es, pt, fr, de, it, nl, ru, ar, hi, id, vi, th, tr, pl, sv) {
    return { zt: zt, es: es, pt: pt, fr: fr, de: de, it: it, nl: nl, ru: ru,
             ar: ar, hi: hi, id: id, vi: vi, th: th, tr: tr, pl: pl, sv: sv };
  }
  /* 언어와 무관하게 동일한 국제 단위 */
  function SAME(v) {
    return { zt: v, es: v, pt: v, fr: v, de: v, it: v, nl: v, ru: v,
             ar: v, hi: v, id: v, vi: v, th: v, tr: v, pl: v, sv: v };
  }

  /* ================= 남북 비교 : 경고문 ================= */

  L['북한은 국가채무 · 재정 총액 · 조세 통계를 공표하지 않습니다. 그래서 이 화면은 부채시계가 아니라 규모 비교표입니다. 모든 북한 수치는 추정치이며, 특히 한국은행의 북한 국민총소득은 북한의 물량 생산을 남한 가격으로 평가한 값이라 북한 내부의 실제 경제 규모와는 다릅니다. 기준 연도가 지표마다 다르므로 각 행의 연도를 함께 보십시오.'] = X(
    '朝鮮不公布國家債務、財政總額和稅收統計。因此本頁是規模對比表，而非債務時鐘。所有朝鮮數值均為估算；特別是韓國銀行的朝鮮國民總收入，是以韓國價格評估朝鮮實物產出所得，與朝鮮內部實際經濟規模不同。各指標基準年份不同，請結合每行標註的年份閱讀。',
    'Corea del Norte no publica cifras de deuda pública, gasto estatal ni recaudación. Por eso esta pantalla es una comparación de escala, no un reloj de deuda. Todas las cifras norcoreanas son estimaciones; en particular, el Banco de Corea valora la producción física del Norte a precios surcoreanos, de modo que su estimación de la RNB no refleja el tamaño real de la economía norcoreana vista desde dentro. Los años de referencia difieren según el indicador: lea cada fila junto con su año.',
    'A Coreia do Norte não publica dados de dívida pública, despesa estatal ou tributação. Por isso esta tela é uma comparação de escala, não um relógio da dívida. Todos os números norte-coreanos são estimativas; em particular, o Banco da Coreia avalia a produção física do Norte a preços sul-coreanos, de modo que sua estimativa de RNB não corresponde ao tamanho real daquela economia. Os anos de referência variam por indicador — leia cada linha com o seu ano.',
    'La Corée du Nord ne publie aucun chiffre de dette publique, de dépense de l’État ni de fiscalité. Cet écran est donc une comparaison d’échelle, pas une horloge de la dette. Tous les chiffres nord-coréens sont des estimations ; en particulier, la Banque de Corée valorise la production physique du Nord aux prix sud-coréens, de sorte que son estimation du RNB ne reflète pas la taille réelle de cette économie. Les années de référence varient selon l’indicateur — lisez chaque ligne avec son année.',
    'Nordkorea veröffentlicht keine Angaben zu Staatsschulden, Gesamtausgaben oder Steuern. Diese Ansicht ist deshalb ein Größenvergleich, keine Schuldenuhr. Alle nordkoreanischen Zahlen sind Schätzungen; insbesondere bewertet die Bank of Korea die physische Produktion des Nordens zu südkoreanischen Preisen, sodass ihre BNE-Schätzung nicht die tatsächliche Größe jener Volkswirtschaft abbildet. Die Referenzjahre unterscheiden sich je Indikator — lesen Sie jede Zeile mit ihrem Jahr.',
    'La Corea del Nord non pubblica dati su debito pubblico, spesa statale o fisco. Questa schermata è quindi un confronto di scala, non un orologio del debito. Tutte le cifre nordcoreane sono stime; in particolare la Bank of Korea valuta la produzione fisica del Nord a prezzi sudcoreani, per cui la sua stima del RNL non rappresenta la dimensione reale di quell’economia. Gli anni di riferimento variano per indicatore — leggete ogni riga con il suo anno.',
    'Noord-Korea publiceert geen cijfers over staatsschuld, overheidsuitgaven of belastingen. Dit scherm is daarom een schaalvergelijking, geen schuldklok. Alle Noord-Koreaanse cijfers zijn schattingen; met name waardeert de Bank of Korea de fysieke productie van het Noorden tegen Zuid-Koreaanse prijzen, waardoor haar bni-schatting niet de werkelijke omvang van die economie weergeeft. De referentiejaren verschillen per indicator — lees elke regel met het bijbehorende jaar.',
    'Северная Корея не публикует данные о госдолге, совокупных расходах и налогах. Поэтому этот экран — сопоставление масштабов, а не долговые часы. Все северокорейские цифры являются оценками; в частности, Банк Кореи оценивает физический выпуск Севера по южнокорейским ценам, так что его оценка ВНД не отражает реальный размер той экономики. Базовые годы различаются по показателям — читайте каждую строку вместе с её годом.',
    'كوريا الشمالية لا تنشر أرقامًا عن الدين العام أو الإنفاق الحكومي أو الضرائب. لذلك فهذه الشاشة مقارنة حجم وليست ساعة دين. كل الأرقام الكورية الشمالية تقديرية؛ وبوجه خاص يقيّم بنك كوريا الإنتاج المادي للشمال بأسعار كوريا الجنوبية، فلا يعكس تقديره للدخل القومي الحجم الفعلي لذلك الاقتصاد. تختلف سنوات الأساس بحسب المؤشر — اقرأ كل سطر مع سنته.',
    'उत्तर कोरिया राष्ट्रीय ऋण, कुल सरकारी व्यय या कराधान के आँकड़े प्रकाशित नहीं करता। इसलिए यह स्क्रीन ऋण घड़ी नहीं, बल्कि पैमाने की तुलना है। सभी उत्तर कोरियाई आँकड़े अनुमान हैं; विशेष रूप से बैंक ऑफ कोरिया उत्तर के भौतिक उत्पादन का मूल्यांकन दक्षिण कोरियाई कीमतों पर करता है, अतः उसका जीएनआई अनुमान उस अर्थव्यवस्था के वास्तविक आकार को नहीं दर्शाता। संदर्भ वर्ष संकेतक के अनुसार भिन्न हैं — प्रत्येक पंक्ति को उसके वर्ष सहित पढ़ें।',
    'Korea Utara tidak mempublikasikan angka utang negara, total belanja pemerintah, maupun perpajakan. Karena itu layar ini adalah perbandingan skala, bukan jam utang. Semua angka Korea Utara merupakan estimasi; khususnya, Bank of Korea menilai produksi fisik Korea Utara dengan harga Korea Selatan, sehingga estimasi PNB-nya tidak mencerminkan ukuran nyata perekonomian tersebut. Tahun acuan berbeda per indikator — bacalah tiap baris bersama tahunnya.',
    'Triều Tiên không công bố số liệu về nợ công, tổng chi ngân sách hay thuế. Vì vậy màn hình này là bảng so sánh quy mô, không phải đồng hồ nợ. Mọi số liệu Triều Tiên đều là ước tính; đặc biệt, Ngân hàng Hàn Quốc định giá sản lượng vật chất của Triều Tiên theo giá Hàn Quốc, nên ước tính GNI đó không phản ánh quy mô thực của nền kinh tế ấy. Năm cơ sở khác nhau theo từng chỉ tiêu — hãy đọc mỗi dòng kèm năm của nó.',
    'เกาหลีเหนือไม่เผยแพร่ตัวเลขหนี้สาธารณะ รายจ่ายภาครัฐ หรือภาษี หน้านี้จึงเป็นตารางเปรียบเทียบขนาด ไม่ใช่นาฬิกาหนี้ ตัวเลขของเกาหลีเหนือทั้งหมดเป็นการประมาณการ โดยเฉพาะธนาคารกลางเกาหลีประเมินผลผลิตจริงของเกาหลีเหนือด้วยราคาของเกาหลีใต้ ตัวเลข GNI จึงไม่สะท้อนขนาดเศรษฐกิจที่แท้จริงภายในประเทศนั้น ปีฐานแตกต่างกันในแต่ละตัวชี้วัด กรุณาอ่านแต่ละแถวพร้อมปีกำกับ',
    'Kuzey Kore kamu borcu, toplam kamu harcaması veya vergi verilerini yayımlamaz. Bu nedenle bu ekran bir borç saati değil, ölçek karşılaştırmasıdır. Tüm Kuzey Kore rakamları tahmindir; özellikle Kore Merkez Bankası, Kuzey’in fiziki üretimini Güney Kore fiyatlarıyla değerlendirir; dolayısıyla GSMH tahmini o ekonominin gerçek büyüklüğünü yansıtmaz. Referans yıllar göstergeye göre değişir — her satırı kendi yılıyla birlikte okuyun.',
    'Korea Północna nie publikuje danych o długu publicznym, łącznych wydatkach państwa ani podatkach. Dlatego ten ekran to porównanie skali, a nie zegar długu. Wszystkie liczby północnokoreańskie są szacunkami; w szczególności Bank Korei wycenia produkcję fizyczną Północy w cenach południowokoreańskich, więc jego szacunek DNB nie odzwierciedla rzeczywistej wielkości tamtej gospodarki. Lata odniesienia różnią się dla poszczególnych wskaźników — czytaj każdy wiersz wraz z jego rokiem.',
    'Nordkorea publicerar inga uppgifter om statsskuld, totala statsutgifter eller beskattning. Denna vy är därför en storleksjämförelse, inte en skuldklocka. Alla nordkoreanska siffror är uppskattningar; särskilt värderar Bank of Korea Nordkoreas fysiska produktion till sydkoreanska priser, varför BNI-uppskattningen inte speglar den ekonomins verkliga storlek. Referensåren skiljer sig mellan indikatorer — läs varje rad tillsammans med dess år.');

  /* ================= 남북 비교 : 그룹 · 지표 ================= */

  L['경제 규모'] = X('經濟規模', 'Escala económica', 'Escala econômica', 'Taille de l’économie',
    'Wirtschaftsgröße', 'Dimensione economica', 'Economische omvang', 'Масштаб экономики',
    'حجم الاقتصاد', 'आर्थिक आकार', 'Skala ekonomi', 'Quy mô kinh tế',
    'ขนาดเศรษฐกิจ', 'Ekonomik ölçek', 'Skala gospodarki', 'Ekonomins storlek');

  L['명목 국민총소득 (GNI)'] = X(
    '名義國民總收入', 'Renta nacional bruta (nominal)', 'Renda nacional bruta (nominal)',
    'Revenu national brut (nominal)', 'Bruttonationaleinkommen (nominal)',
    'Reddito nazionale lordo (nominale)', 'Bruto nationaal inkomen (nominaal)',
    'Валовой национальный доход (номинальный)', 'الدخل القومي الإجمالي (الاسمي)',
    'सकल राष्ट्रीय आय (नाममात्र)', 'Pendapatan nasional bruto (nominal)',
    'Tổng thu nhập quốc dân (danh nghĩa)', 'รายได้ประชาชาติรวม (ราคาปัจจุบัน)',
    'Gayrisafi milli gelir (nominal)', 'Dochód narodowy brutto (nominalny)',
    'Bruttonationalinkomst (nominell)');

  L['1인당 국민총소득'] = X(
    '人均國民總收入', 'RNB per cápita', 'RNB per capita', 'RNB par habitant',
    'BNE je Einwohner', 'RNL pro capite', 'Bni per hoofd', 'ВНД на душу населения',
    'نصيب الفرد من الدخل القومي', 'प्रति व्यक्ति सकल राष्ट्रीय आय',
    'PNB per kapita', 'GNI bình quân đầu người', 'GNI ต่อหัว',
    'Kişi başına GSMH', 'DNB na mieszkańca', 'BNI per capita');

  L['경제성장률'] = X(
    '經濟增長率', 'Crecimiento económico', 'Crescimento econômico',
    'Croissance économique', 'Wirtschaftswachstum', 'Crescita economica',
    'Economische groei', 'Экономический рост', 'النمو الاقتصادي',
    'आर्थिक वृद्धि दर', 'Pertumbuhan ekonomi', 'Tăng trưởng kinh tế',
    'อัตราการเติบโตทางเศรษฐกิจ', 'Ekonomik büyüme', 'Wzrost gospodarczy',
    'Ekonomisk tillväxt');

  L['무역총액'] = X(
    '貿易總額', 'Comercio total', 'Comércio total', 'Commerce total',
    'Gesamthandel', 'Interscambio totale', 'Totale handel', 'Общий товарооборот',
    'إجمالي التجارة', 'कुल व्यापार', 'Total perdagangan', 'Tổng kim ngạch thương mại',
    'มูลค่าการค้ารวม', 'Toplam ticaret', 'Obroty handlowe ogółem', 'Total handel');

  L['대중국 무역 의존도'] = X(
    '對華貿易依存度', 'Dependencia comercial de China',
    'Dependência comercial da China', 'Dépendance commerciale envers la Chine',
    'Handelsabhängigkeit von China', 'Dipendenza commerciale dalla Cina',
    'Handelsafhankelijkheid van China', 'Зависимость торговли от Китая',
    'الاعتماد التجاري على الصين', 'चीन पर व्यापार निर्भरता',
    'Ketergantungan dagang pada Tiongkok', 'Mức phụ thuộc thương mại vào Trung Quốc',
    'การพึ่งพาการค้ากับจีน', 'Çin’e ticaret bağımlılığı',
    'Zależność handlowa od Chin', 'Handelsberoende av Kina');

  L['산업 · 에너지'] = X('產業與能源', 'Industria y energía', 'Indústria e energia',
    'Industrie et énergie', 'Industrie und Energie', 'Industria ed energia',
    'Industrie en energie', 'Промышленность и энергетика', 'الصناعة والطاقة',
    'उद्योग एवं ऊर्जा', 'Industri dan energi', 'Công nghiệp và năng lượng',
    'อุตสาหกรรมและพลังงาน', 'Sanayi ve enerji', 'Przemysł i energia',
    'Industri och energi');

  L['발전설비 용량'] = X(
    '發電裝機容量', 'Capacidad de generación eléctrica',
    'Capacidade de geração elétrica', 'Capacité de production électrique',
    'Kraftwerksleistung', 'Capacità di generazione elettrica',
    'Opgesteld elektrisch vermogen', 'Установленная мощность электростанций',
    'قدرة توليد الكهرباء', 'विद्युत उत्पादन क्षमता',
    'Kapasitas pembangkit listrik', 'Công suất phát điện',
    'กำลังการผลิตไฟฟ้า', 'Elektrik kurulu gücü',
    'Moc zainstalowana elektrowni', 'Elproduktionskapacitet');

  L[' GW'] = SAME(' GW');
  L[' TWh'] = SAME(' TWh');
  L[' kg'] = SAME(' kg');

  L['연간 발전량'] = X(
    '年發電量', 'Producción eléctrica anual', 'Geração elétrica anual',
    'Production électrique annuelle', 'Jährliche Stromerzeugung',
    'Produzione elettrica annua', 'Jaarlijkse elektriciteitsproductie',
    'Годовая выработка электроэнергии', 'إنتاج الكهرباء السنوي',
    'वार्षिक विद्युत उत्पादन', 'Produksi listrik tahunan',
    'Sản lượng điện hằng năm', 'ปริมาณการผลิตไฟฟ้าต่อปี',
    'Yıllık elektrik üretimi', 'Roczna produkcja energii elektrycznej',
    'Årlig elproduktion');

  L['조강 생산량'] = X(
    '粗鋼產量', 'Producción de acero bruto', 'Produção de aço bruto',
    'Production d’acier brut', 'Rohstahlproduktion', 'Produzione di acciaio grezzo',
    'Ruwstaalproductie', 'Производство стали', 'إنتاج الصلب الخام',
    'कच्चा इस्पात उत्पादन', 'Produksi baja mentah', 'Sản lượng thép thô',
    'ผลผลิตเหล็กดิบ', 'Ham çelik üretimi', 'Produkcja stali surowej',
    'Råstålsproduktion');

  L['톤'] = X('噸', ' t', ' t', ' t', ' t', ' t', ' t', ' т', ' طن', ' टन',
    ' t', ' tấn', ' ตัน', ' t', ' t', ' t');

  L['시멘트 생산량'] = X(
    '水泥產量', 'Producción de cemento', 'Produção de cimento',
    'Production de ciment', 'Zementproduktion', 'Produzione di cemento',
    'Cementproductie', 'Производство цемента', 'إنتاج الأسمنت',
    'सीमेंट उत्पादन', 'Produksi semen', 'Sản lượng xi măng',
    'ผลผลิตปูนซีเมนต์', 'Çimento üretimi', 'Produkcja cementu',
    'Cementproduktion');

  L['자동차 생산량'] = X(
    '汽車產量', 'Producción de vehículos', 'Produção de veículos',
    'Production automobile', 'Fahrzeugproduktion', 'Produzione di autoveicoli',
    'Voertuigproductie', 'Производство автомобилей', 'إنتاج المركبات',
    'वाहन उत्पादन', 'Produksi kendaraan', 'Sản lượng ô tô',
    'ผลผลิตยานยนต์', 'Motorlu taşıt üretimi', 'Produkcja pojazdów',
    'Fordonsproduktion');

  L['대'] = X('輛', ' unidades', ' unidades', ' unités', ' Stück', ' unità',
    ' stuks', ' шт.', ' وحدة', ' इकाइयाँ', ' unit', ' chiếc', ' คัน',
    ' adet', ' szt.', ' enheter');

  L['식량'] = X('糧食', 'Alimentos', 'Alimentos', 'Alimentation', 'Nahrung',
    'Alimentazione', 'Voedsel', 'Продовольствие', 'الغذاء', 'खाद्य',
    'Pangan', 'Lương thực', 'อาหาร', 'Gıda', 'Żywność', 'Livsmedel');

  L['곡물 생산량'] = X(
    '糧食產量', 'Producción de cereales', 'Produção de grãos',
    'Production céréalière', 'Getreideproduktion', 'Produzione cerealicola',
    'Graanproductie', 'Производство зерна', 'إنتاج الحبوب',
    'अनाज उत्पादन', 'Produksi biji-bijian', 'Sản lượng ngũ cốc',
    'ผลผลิตธัญพืช', 'Tahıl üretimi', 'Produkcja zbóż', 'Spannmålsproduktion');

  L['북한이 더 많이 생산합니다'] = X(
    '朝鮮產量更高', 'Corea del Norte produce más', 'A Coreia do Norte produz mais',
    'La Corée du Nord produit davantage', 'Nordkorea produziert mehr',
    'La Corea del Nord produce di più', 'Noord-Korea produceert meer',
    'Северная Корея производит больше', 'كوريا الشمالية تنتج أكثر',
    'उत्तर कोरिया अधिक उत्पादन करता है', 'Korea Utara memproduksi lebih banyak',
    'Triều Tiên sản xuất nhiều hơn', 'เกาหลีเหนือผลิตได้มากกว่า',
    'Kuzey Kore daha çok üretiyor', 'Korea Północna produkuje więcej',
    'Nordkorea producerar mer');

  L['1인당 곡물 생산량'] = X(
    '人均糧食產量', 'Producción de cereales per cápita',
    'Produção de grãos per capita', 'Production céréalière par habitant',
    'Getreideproduktion je Einwohner', 'Produzione cerealicola pro capite',
    'Graanproductie per hoofd', 'Производство зерна на душу населения',
    'إنتاج الحبوب لكل فرد', 'प्रति व्यक्ति अनाज उत्पादन',
    'Produksi biji-bijian per kapita', 'Sản lượng ngũ cốc bình quân đầu người',
    'ผลผลิตธัญพืชต่อหัว', 'Kişi başına tahıl üretimi',
    'Produkcja zbóż na mieszkańca', 'Spannmålsproduktion per capita');

  L['남한은 곡물 대부분을 수입합니다'] = X(
    '韓國糧食大部分依賴進口', 'Corea del Sur importa la mayor parte de sus cereales',
    'A Coreia do Sul importa a maior parte de seus grãos',
    'La Corée du Sud importe l’essentiel de ses céréales',
    'Südkorea importiert den Großteil seines Getreides',
    'La Corea del Sud importa la maggior parte dei cereali',
    'Zuid-Korea importeert het meeste graan',
    'Южная Корея импортирует большую часть зерна',
    'كوريا الجنوبية تستورد معظم حبوبها',
    'दक्षिण कोरिया अपना अधिकांश अनाज आयात करता है',
    'Korea Selatan mengimpor sebagian besar biji-bijiannya',
    'Hàn Quốc nhập khẩu phần lớn ngũ cốc',
    'เกาหลีใต้นำเข้าธัญพืชเป็นส่วนใหญ่',
    'Güney Kore tahılının çoğunu ithal ediyor',
    'Korea Południowa importuje większość zboża',
    'Sydkorea importerar merparten av sin spannmål');

  L['인구 · 사회'] = X('人口與社會', 'Población y sociedad', 'População e sociedade',
    'Population et société', 'Bevölkerung und Gesellschaft', 'Popolazione e società',
    'Bevolking en samenleving', 'Население и общество', 'السكان والمجتمع',
    'जनसंख्या एवं समाज', 'Penduduk dan masyarakat', 'Dân số và xã hội',
    'ประชากรและสังคม', 'Nüfus ve toplum', 'Ludność i społeczeństwo',
    'Befolkning och samhälle');

  L['기대수명'] = X(
    '預期壽命', 'Esperanza de vida', 'Expectativa de vida', 'Espérance de vie',
    'Lebenserwartung', 'Speranza di vita', 'Levensverwachting',
    'Ожидаемая продолжительность жизни', 'متوسط العمر المتوقع',
    'जीवन प्रत्याशा', 'Angka harapan hidup', 'Tuổi thọ trung bình',
    'อายุคาดเฉลี่ย', 'Yaşam beklentisi', 'Oczekiwana długość życia',
    'Förväntad livslängd');

  L['세'] = X('歲', ' años', ' anos', ' ans', ' Jahre', ' anni', ' jaar',
    ' лет', ' سنة', ' वर्ष', ' tahun', ' tuổi', ' ปี', ' yıl', ' lat', ' år');

  L['영아사망률'] = X(
    '嬰兒死亡率', 'Mortalidad infantil', 'Mortalidade infantil',
    'Mortalité infantile', 'Säuglingssterblichkeit', 'Mortalità infantile',
    'Zuigelingensterfte', 'Младенческая смертность', 'وفيات الرضع',
    'शिशु मृत्यु दर', 'Angka kematian bayi', 'Tỷ suất tử vong trẻ sơ sinh',
    'อัตราการตายของทารก', 'Bebek ölüm oranı', 'Umieralność niemowląt',
    'Spädbarnsdödlighet');

  L['출생 1,000명당'] = X(
    '每千名活產', 'por cada 1 000 nacidos vivos', 'por 1.000 nascidos vivos',
    'pour 1 000 naissances vivantes', 'je 1 000 Lebendgeburten',
    'ogni 1.000 nati vivi', 'per 1.000 levendgeborenen',
    'на 1 000 живорождённых', 'لكل 1000 مولود حي',
    'प्रति 1,000 जीवित जन्म', 'per 1.000 kelahiran hidup',
    'trên 1.000 trẻ sinh sống', 'ต่อการเกิดมีชีพ 1,000 ราย',
    'her 1.000 canlı doğumda', 'na 1000 żywych urodzeń',
    'per 1 000 levande födda');

  L['북한이 2배 이상 높습니다'] = X(
    '朝鮮高出兩倍以上', 'Más del doble en el Norte', 'Mais que o dobro no Norte',
    'Plus du double au Nord', 'Mehr als doppelt so hoch im Norden',
    'Più del doppio al Nord', 'Meer dan het dubbele in het Noorden',
    'Более чем вдвое выше на Севере', 'أكثر من الضعف في الشمال',
    'उत्तर में दोगुने से अधिक', 'Lebih dari dua kali lipat di Utara',
    'Cao hơn gấp đôi ở miền Bắc', 'สูงกว่าสองเท่าในเกาหลีเหนือ',
    'Kuzey’de iki katından fazla', 'Ponad dwukrotnie wyżej na Północy',
    'Mer än dubbelt så högt i Nord');

  L['도시화율'] = X(
    '城市化率', 'Tasa de urbanización', 'Taxa de urbanização',
    'Taux d’urbanisation', 'Urbanisierungsgrad', 'Tasso di urbanizzazione',
    'Verstedelijkingsgraad', 'Уровень урбанизации', 'معدل التحضر',
    'शहरीकरण दर', 'Tingkat urbanisasi', 'Tỷ lệ đô thị hóa',
    'อัตราการเป็นเมือง', 'Kentleşme oranı', 'Wskaźnik urbanizacji',
    'Urbaniseringsgrad');

  L['이동전화 가입자'] = X(
    '移動電話用戶', 'Líneas móviles', 'Assinantes móveis',
    'Abonnés mobiles', 'Mobilfunkanschlüsse', 'Abbonati mobili',
    'Mobiele abonnees', 'Абоненты мобильной связи', 'مشتركو الهاتف المحمول',
    'मोबाइल ग्राहक', 'Pelanggan seluler', 'Thuê bao di động',
    'ผู้ใช้บริการโทรศัพท์มือถือ', 'Mobil abone sayısı',
    'Abonenci komórkowi', 'Mobilabonnemang');

  L['국방'] = X('國防', 'Defensa', 'Defesa', 'Défense', 'Verteidigung', 'Difesa',
    'Defensie', 'Оборона', 'الدفاع', 'रक्षा', 'Pertahanan', 'Quốc phòng',
    'กลาโหม', 'Savunma', 'Obrona', 'Försvar');

  L['상비 병력'] = X(
    '現役兵力', 'Efectivos militares en activo', 'Efetivo militar ativo',
    'Militaires d’active', 'Aktives Militärpersonal', 'Personale militare attivo',
    'Actief militair personeel', 'Военнослужащие в строю',
    'الأفراد العسكريون العاملون', 'सक्रिय सैन्य कर्मी',
    'Personel militer aktif', 'Quân thường trực',
    'กำลังพลประจำการ', 'Muvazzaf askeri personel',
    'Żołnierze służby czynnej', 'Aktiv militär personal');

  L['북한이 2.8배 많습니다'] = X(
    '朝鮮多2.8倍', '2,8× más en el Norte', '2,8× maior no Norte',
    '2,8 fois plus au Nord', '2,8-mal größer im Norden', '2,8 volte maggiore al Nord',
    '2,8× groter in het Noorden', 'В 2,8 раза больше на Севере',
    'أكبر بـ2.8 مرة في الشمال', 'उत्तर में 2.8 गुना अधिक',
    '2,8× lebih besar di Utara', 'Lớn gấp 2,8 lần ở miền Bắc',
    'มากกว่า 2.8 เท่าในเกาหลีเหนือ', 'Kuzey’de 2,8 kat fazla',
    '2,8× więcej na Północy', '2,8 gånger fler i Nord');

  L['인구 100명당 군인'] = X(
    '每百人軍人數', 'Militares por cada 100 habitantes',
    'Militares por 100 habitantes', 'Militaires pour 100 habitants',
    'Soldaten je 100 Einwohner', 'Militari ogni 100 abitanti',
    'Militairen per 100 inwoners', 'Военных на 100 человек',
    'جنود لكل 100 نسمة', 'प्रति 100 व्यक्ति सैनिक',
    'Tentara per 100 penduduk', 'Quân nhân trên 100 dân',
    'ทหารต่อประชากร 100 คน', '100 kişiye düşen asker',
    'Żołnierze na 100 mieszkańców', 'Soldater per 100 invånare');

  /* ================= 연도별 추이 ================= */

  L['조원'] = X('萬億韓元', 'bill. KRW', 'tri KRW', 'Md KRW', 'Bio. KRW',
    'mila mld KRW', 'bln KRW', 'трлн вон', 'تريليون وون', 'खरब वॉन',
    'triliun KRW', 'nghìn tỷ KRW', 'ล้านล้านวอน', 'trilyon KRW',
    'bln KRW', 'biljoner KRW');

  L['만명'] = X('萬人', '10 000 pers.', '10 mil pess.', '10 000 pers.',
    '10 000 Pers.', '10.000 pers.', '10.000 pers.', '10 тыс. чел.',
    '10 آلاف نسمة', '10 हजार लोग', '10 ribu orang', '10 nghìn người',
    'หมื่นคน', '10 bin kişi', '10 tys. osób', '10 000 pers.');

  L['국가채무 (D1) 잔액'] = X(
    '國家債務(D1)餘額', 'Deuda pública (D1) viva', 'Estoque da dívida pública (D1)',
    'Encours de la dette publique (D1)', 'Ausstehende Staatsschulden (D1)',
    'Debito pubblico (D1) in essere', 'Uitstaande staatsschuld (D1)',
    'Госдолг (D1), остаток', 'رصيد الدين العام (D1)',
    'बकाया राष्ट्रीय ऋण (D1)', 'Saldo utang negara (D1)',
    'Dư nợ công (D1)', 'ยอดหนี้สาธารณะคงค้าง (D1)',
    'Kamu borcu (D1) stoku', 'Stan długu publicznego (D1)',
    'Utestående statsskuld (D1)');

  L['명목 GDP'] = X('名義GDP', 'PIB nominal', 'PIB nominal', 'PIB nominal',
    'Nominales BIP', 'PIL nominale', 'Nominaal bbp', 'Номинальный ВВП',
    'الناتج المحلي الاسمي', 'नाममात्र जीडीपी', 'PDB nominal', 'GDP danh nghĩa',
    'GDP ราคาปัจจุบัน', 'Nominal GSYH', 'Nominalny PKB', 'Nominell BNP');

  L['가계부채 (가계신용) 잔액'] = X(
    '家庭債務(家庭信貸)餘額', 'Deuda viva de los hogares',
    'Estoque da dívida das famílias', 'Encours de la dette des ménages',
    'Ausstehende Haushaltsschulden', 'Debito delle famiglie in essere',
    'Uitstaande huishoudschuld', 'Долг домохозяйств, остаток',
    'رصيد ديون الأسر', 'बकाया घरेलू ऋण', 'Saldo utang rumah tangga',
    'Dư nợ hộ gia đình', 'ยอดหนี้ครัวเรือนคงค้าง',
    'Hanehalkı borç stoku', 'Stan zadłużenia gospodarstw domowych',
    'Utestående hushållsskuld');

  L['총인구 (주민등록)'] = X(
    '總人口(戶籍)', 'Población total (registro)', 'População total (registro)',
    'Population totale (registre)', 'Gesamtbevölkerung (Melderegister)',
    'Popolazione totale (anagrafe)', 'Totale bevolking (register)',
    'Общая численность (по регистру)', 'إجمالي السكان (سجل الإقامة)',
    'कुल जनसंख्या (निवास पंजी)', 'Total penduduk (registrasi)',
    'Tổng dân số (hộ khẩu)', 'ประชากรทั้งหมด (ทะเบียนราษฎร)',
    'Toplam nüfus (kayıt)', 'Ludność ogółem (rejestr)',
    'Total befolkning (folkbokföring)');

  L['출생아 수'] = X(
    '出生人數', 'Nacimientos anuales', 'Nascimentos anuais',
    'Naissances annuelles', 'Geburten pro Jahr', 'Nascite annue',
    'Geboorten per jaar', 'Число рождений за год', 'المواليد السنوية',
    'वार्षिक जन्म', 'Kelahiran tahunan', 'Số trẻ sinh hằng năm',
    'จำนวนการเกิดต่อปี', 'Yıllık doğumlar', 'Urodzenia roczne',
    'Antal födda per år');

  /* ---- 대통령 ---- */
  var PRES = {
    '김대중': ['金大中', 'Кім', 'كيم داي جونغ', 'किम दे-जुंग', 'คิม แด-จุง', 'Kim Dae-jung'],
    '노무현': ['盧武鉉', '', 'نو مو هيون', 'रो मू-ह्यून', 'โน มู-ฮยอน', 'Roh Moo-hyun'],
    '이명박': ['李明博', '', 'لي ميونغ باك', 'ली म्युंग-बाक', 'อี มยอง-บัก', 'Lee Myung-bak'],
    '박근혜': ['朴槿惠', '', 'بارك كون هيه', 'पार्क ग्यून-हे', 'พัก กึน-ฮเย', 'Park Geun-hye'],
    '문재인': ['文在寅', '', 'مون جاي إن', 'मून जे-इन', 'มุน แช-อิน', 'Moon Jae-in'],
    '윤석열': ['尹錫悅', '', 'يون سوك يول', 'यून सुक-योल', 'ยุน ซอก-ยอล', 'Yoon Suk-yeol'],
    '이재명': ['李在明', '', 'لي جاي ميونغ', 'ली जे-म्युंग', 'อี แช-มยอง', 'Lee Jae-myung']
  };
  var RU = { '김대중': 'Ким Дэ Чжун', '노무현': 'Но Му Хён', '이명박': 'Ли Мён Бак',
             '박근혜': 'Пак Кын Хе', '문재인': 'Мун Чжэ Ин', '윤석열': 'Юн Сок Ёль',
             '이재명': 'Ли Чжэ Мён' };
  Object.keys(PRES).forEach(function (k) {
    var p = PRES[k], latin = p[5];
    L[k] = X(p[0], latin, latin, latin, latin, latin, latin, RU[k],
             p[2], p[3], latin, latin, p[4], latin, latin, latin);
  });

  /* ---- 임기 ---- */
  function TERM(zt, m1, y1, m2, y2) {
    /* 월 약어를 언어별로 붙여 임기 구간을 만든다 */
    var M = {
      es: ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'],
      pt: ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'],
      fr: ['janv.','févr.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.'],
      de: ['Jan.','Feb.','März','Apr.','Mai','Juni','Juli','Aug.','Sep.','Okt.','Nov.','Dez.'],
      it: ['gen','feb','mar','apr','mag','giu','lug','ago','set','ott','nov','dic'],
      nl: ['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec'],
      ru: ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'],
      ar: ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],
      hi: ['जन','फ़र','मार्च','अप्रैल','मई','जून','जुल','अग','सित','अक्तू','नव','दिस'],
      id: ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'],
      th: ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
      tr: ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'],
      pl: ['sty','lut','mar','kwi','maj','cze','lip','sie','wrz','paź','lis','gru'],
      sv: ['jan','feb','mar','apr','maj','jun','jul','aug','sep','okt','nov','dec']
    };
    var o = { zt: zt };
    Object.keys(M).forEach(function (l) {
      var a = M[l][m1 - 1] + ' ' + y1;
      o[l] = y2 ? a + ' – ' + M[l][m2 - 1] + ' ' + y2 : a + ' –';
    });
    o.vi = y2 ? m1 + '/' + y1 + ' – ' + m2 + '/' + y2 : m1 + '/' + y1 + ' –';
    return o;
  }

  L['1998.2 ~ 2003.2'] = TERM('1998.2～2003.2', 2, 1998, 2, 2003);
  L['2003.2 ~ 2008.2'] = TERM('2003.2～2008.2', 2, 2003, 2, 2008);
  L['2008.2 ~ 2013.2'] = TERM('2008.2～2013.2', 2, 2008, 2, 2013);
  L['2013.2 ~ 2017.3'] = TERM('2013.2～2017.3', 2, 2013, 3, 2017);
  L['2017.5 ~ 2022.5'] = TERM('2017.5～2022.5', 5, 2017, 5, 2022);
  L['2022.5 ~ 2025.4'] = TERM('2022.5～2025.4', 5, 2022, 4, 2025);
  L['2025.6 ~']        = TERM('2025.6～',        6, 2025, 0, 0);

  L['탄핵으로 임기 중단'] = X(
    '因彈劾中斷任期', 'Destituido por juicio político', 'Removido por impeachment',
    'Destitué par procédure d’impeachment', 'Durch Amtsenthebung beendet',
    'Rimosso per impeachment', 'Afgezet via impeachment',
    'Отстранён в порядке импичмента', 'أُقيل عبر المساءلة',
    'महाभियोग से पदच्युत', 'Dimakzulkan', 'Bị phế truất qua luận tội',
    'ถูกถอดถอนจากตำแหน่ง', 'Azil ile görevden alındı',
    'Usunięty w wyniku impeachmentu', 'Avsatt genom riksrätt');

  /* ================= 후원 · 광고 ================= */

  L['대한민국 부채시계 운영자'] = X(
    '大韓民國債務時鐘 營運者', 'Editor del Reloj de la Deuda de Corea',
    'Editor do Relógio da Dívida da Coreia', 'Éditeur de l’Horloge de la dette coréenne',
    'Betreiber der Korea-Schuldenuhr', 'Gestore dell’Orologio del debito coreano',
    'Beheerder van de Korea Schuldklok', 'Оператор «Долговых часов Кореи»',
    'مشغّل ساعة الدين الكورية', 'कोरिया ऋण घड़ी संचालक',
    'Pengelola Jam Utang Korea', 'Người vận hành Đồng hồ nợ Hàn Quốc',
    'ผู้ดูแลนาฬิกาหนี้เกาหลี', 'Kore Borç Saati işletmecisi',
    'Operator Zegara Długu Korei', 'Utgivare av Koreas skuldklocka');

  L['광고'] = X('廣告', 'Publicidad', 'Publicidade', 'Publicité', 'Werbung',
    'Pubblicità', 'Advertenties', 'Реклама', 'الإعلانات', 'विज्ञापन',
    'Iklan', 'Quảng cáo', 'โฆษณา', 'Reklam', 'Reklamy', 'Annonser');

  L['쿠키 사용 안내'] = X(
    'Cookie 使用說明', 'Aviso sobre cookies', 'Aviso sobre cookies',
    'Information sur les cookies', 'Hinweis zu Cookies', 'Informativa sui cookie',
    'Cookiemelding', 'Уведомление о cookie', 'إشعار ملفات تعريف الارتباط',
    'कुकी सूचना', 'Pemberitahuan cookie', 'Thông báo về cookie',
    'ประกาศการใช้คุกกี้', 'Çerez bildirimi', 'Informacja o plikach cookie',
    'Cookie-information');

  L['이 사이트는 운영비를 충당하기 위해 구글 애드센스 광고를 게재합니다. 광고 제공사는 쿠키와 유사 기술로 맞춤 광고를 표시할 수 있습니다. ‘거부’를 선택하면 맞춤형이 아닌 일반 광고만 표시됩니다. 어느 쪽을 선택하든 이 사이트가 직접 여러분의 개인정보를 수집하는 일은 없습니다.'] = X(
    '本網站刊登 Google AdSense 廣告以支應營運費用。廣告商可能使用 Cookie 及類似技術顯示個人化廣告。選擇「拒絕」則僅顯示非個人化的一般廣告。無論您如何選擇，本網站都不會直接收集您的個人資料。',
    'Este sitio muestra anuncios de Google AdSense para cubrir sus costes. Los proveedores de publicidad pueden usar cookies y tecnologías similares para mostrar anuncios personalizados. Si elige «Rechazar», solo verá anuncios genéricos no personalizados. En cualquier caso, este sitio no recopila directamente sus datos personales.',
    'Este site exibe anúncios do Google AdSense para cobrir seus custos. Os fornecedores de publicidade podem usar cookies e tecnologias semelhantes para exibir anúncios personalizados. Ao escolher «Recusar», você verá apenas anúncios genéricos. De todo modo, este site não coleta diretamente seus dados pessoais.',
    'Ce site affiche des annonces Google AdSense pour couvrir ses frais. Les régies publicitaires peuvent utiliser des cookies et technologies similaires pour diffuser des annonces personnalisées. En choisissant « Refuser », vous ne verrez que des annonces génériques. Dans tous les cas, ce site ne collecte pas directement vos données personnelles.',
    'Diese Website zeigt Google-AdSense-Anzeigen, um die Betriebskosten zu decken. Werbeanbieter können Cookies und ähnliche Technologien für personalisierte Werbung einsetzen. Bei „Ablehnen“ werden nur allgemeine, nicht personalisierte Anzeigen ausgespielt. In beiden Fällen erhebt diese Website Ihre personenbezogenen Daten nicht selbst.',
    'Questo sito mostra annunci Google AdSense per coprire i costi di gestione. I fornitori pubblicitari possono usare cookie e tecnologie simili per mostrare annunci personalizzati. Scegliendo «Rifiuta» vedrai solo annunci generici. In ogni caso, questo sito non raccoglie direttamente i tuoi dati personali.',
    'Deze site toont Google AdSense-advertenties om de kosten te dekken. Advertentieaanbieders kunnen cookies en vergelijkbare technieken gebruiken voor gepersonaliseerde advertenties. Kiest u «Weigeren», dan ziet u alleen algemene advertenties. In beide gevallen verzamelt deze site zelf geen persoonsgegevens.',
    'Этот сайт показывает рекламу Google AdSense для покрытия расходов. Рекламные поставщики могут использовать cookie и схожие технологии для персонализированной рекламы. При выборе «Отклонить» будет показываться только общая, неперсонализированная реклама. В любом случае сайт не собирает ваши персональные данные напрямую.',
    'يعرض هذا الموقع إعلانات Google AdSense لتغطية تكاليف التشغيل. قد يستخدم مزوّدو الإعلانات ملفات تعريف الارتباط وتقنيات مشابهة لعرض إعلانات مخصصة. عند اختيار «رفض» ستظهر إعلانات عامة غير مخصصة فقط. في كل الأحوال لا يجمع هذا الموقع بياناتك الشخصية مباشرة.',
    'यह साइट संचालन लागत के लिए Google AdSense विज्ञापन दिखाती है। विज्ञापन प्रदाता वैयक्तिकृत विज्ञापनों हेतु कुकीज़ व समान तकनीकों का उपयोग कर सकते हैं। «अस्वीकार» चुनने पर केवल सामान्य विज्ञापन दिखेंगे। किसी भी स्थिति में यह साइट स्वयं आपकी व्यक्तिगत जानकारी एकत्र नहीं करती।',
    'Situs ini menayangkan iklan Google AdSense untuk menutup biaya operasional. Penyedia iklan dapat memakai cookie dan teknologi serupa untuk iklan yang dipersonalisasi. Jika memilih «Tolak», hanya iklan umum yang ditampilkan. Bagaimanapun, situs ini tidak mengumpulkan data pribadi Anda secara langsung.',
    'Trang này hiển thị quảng cáo Google AdSense để trang trải chi phí vận hành. Nhà cung cấp quảng cáo có thể dùng cookie và công nghệ tương tự để hiển thị quảng cáo cá nhân hóa. Nếu chọn «Từ chối», bạn chỉ thấy quảng cáo chung. Dù chọn cách nào, trang này không trực tiếp thu thập dữ liệu cá nhân của bạn.',
    'เว็บไซต์นี้แสดงโฆษณา Google AdSense เพื่อครอบคลุมค่าดำเนินการ ผู้ให้บริการโฆษณาอาจใช้คุกกี้และเทคโนโลยีที่คล้ายกันเพื่อแสดงโฆษณาเฉพาะบุคคล หากเลือก «ปฏิเสธ» จะแสดงเฉพาะโฆษณาทั่วไป ไม่ว่าเลือกแบบใด เว็บไซต์นี้ไม่ได้เก็บข้อมูลส่วนบุคคลของคุณโดยตรง',
    'Bu site işletme giderlerini karşılamak için Google AdSense reklamları gösterir. Reklam sağlayıcıları kişiselleştirilmiş reklamlar için çerez ve benzeri teknolojiler kullanabilir. «Reddet» seçilirse yalnızca genel, kişiselleştirilmemiş reklamlar gösterilir. Her durumda bu site kişisel verilerinizi doğrudan toplamaz.',
    'Ta witryna wyświetla reklamy Google AdSense, aby pokryć koszty działania. Dostawcy reklam mogą używać plików cookie i podobnych technologii do reklam spersonalizowanych. Po wybraniu «Odrzuć» zobaczysz wyłącznie reklamy ogólne. W obu przypadkach witryna nie zbiera bezpośrednio Twoich danych osobowych.',
    'Denna webbplats visar Google AdSense-annonser för att täcka driftkostnader. Annonsleverantörer kan använda cookies och liknande teknik för personanpassade annonser. Väljer du ”Avvisa” visas endast allmänna annonser. Oavsett val samlar denna webbplats inte in dina personuppgifter direkt.');

  L['동의'] = X('同意', 'Aceptar', 'Aceitar', 'Accepter', 'Zustimmen', 'Accetta',
    'Akkoord', 'Принять', 'موافقة', 'स्वीकार', 'Setuju', 'Đồng ý',
    'ยอมรับ', 'Kabul et', 'Akceptuj', 'Godkänn');

  L['거부'] = X('拒絕', 'Rechazar', 'Recusar', 'Refuser', 'Ablehnen', 'Rifiuta',
    'Weigeren', 'Отклонить', 'رفض', 'अस्वीकार', 'Tolak', 'Từ chối',
    'ปฏิเสธ', 'Reddet', 'Odrzuć', 'Avvisa');

  L['개인정보처리방침'] = X('隱私權政策', 'Política de privacidad',
    'Política de privacidade', 'Politique de confidentialité', 'Datenschutzerklärung',
    'Informativa sulla privacy', 'Privacybeleid', 'Политика конфиденциальности',
    'سياسة الخصوصية', 'गोपनीयता नीति', 'Kebijakan privasi',
    'Chính sách bảo mật', 'นโยบายความเป็นส่วนตัว', 'Gizlilik politikası',
    'Polityka prywatności', 'Integritetspolicy');

  L['이용약관'] = X('使用條款', 'Términos de uso', 'Termos de uso',
    'Conditions d’utilisation', 'Nutzungsbedingungen', 'Termini di utilizzo',
    'Gebruiksvoorwaarden', 'Условия использования', 'شروط الاستخدام',
    'उपयोग की शर्तें', 'Ketentuan penggunaan', 'Điều khoản sử dụng',
    'ข้อกำหนดการใช้งาน', 'Kullanım koşulları', 'Warunki korzystania',
    'Användarvillkor');

  L['후원하기'] = X('支持我們', 'Apoyar', 'Apoiar', 'Soutenir', 'Unterstützen',
    'Sostieni', 'Steunen', 'Поддержать', 'ادعمنا', 'सहयोग करें',
    'Dukung', 'Ủng hộ', 'สนับสนุน', 'Destek ol', 'Wesprzyj', 'Stöd oss');

  L['이 사이트를 후원해 주세요'] = X(
    '請支持本網站', 'Apoye este sitio', 'Apoie este site', 'Soutenez ce site',
    'Unterstützen Sie diese Website', 'Sostieni questo sito',
    'Steun deze website', 'Поддержите этот сайт', 'ادعم هذا الموقع',
    'इस साइट का सहयोग करें', 'Dukung situs ini', 'Hãy ủng hộ trang này',
    'สนับสนุนเว็บไซต์นี้', 'Bu siteye destek olun', 'Wesprzyj tę stronę',
    'Stöd den här webbplatsen');

  L['대한민국 부채시계는 광고 수익과 여러분의 후원으로 운영되는 독립 프로젝트입니다. 후원금은 도메인·호스팅 비용과 통계 갱신 작업에 쓰입니다.'] = X(
    '大韓民國債務時鐘是靠廣告收入與各位支持營運的獨立專案。捐款用於網域、主機費用及統計更新作業。',
    'El Reloj de la Deuda de Corea es un proyecto independiente financiado con publicidad y con su apoyo. Las aportaciones cubren el dominio, el alojamiento y el trabajo de actualización de las estadísticas.',
    'O Relógio da Dívida da Coreia é um projeto independente financiado por publicidade e pelo seu apoio. As contribuições cobrem domínio, hospedagem e o trabalho de atualização das estatísticas.',
    'L’Horloge de la dette coréenne est un projet indépendant financé par la publicité et par votre soutien. Les dons couvrent le nom de domaine, l’hébergement et le travail de mise à jour des statistiques.',
    'Die Korea-Schuldenuhr ist ein unabhängiges Projekt, finanziert durch Werbung und Ihre Unterstützung. Die Beiträge decken Domain, Hosting und die Aktualisierung der Statistiken.',
    'L’Orologio del debito coreano è un progetto indipendente finanziato dalla pubblicità e dal vostro sostegno. I contributi coprono dominio, hosting e l’aggiornamento delle statistiche.',
    'De Korea Schuldklok is een onafhankelijk project, gefinancierd door advertenties en uw steun. Bijdragen dekken domein, hosting en het bijwerken van de statistieken.',
    '«Долговые часы Кореи» — независимый проект, финансируемый рекламой и вашей поддержкой. Взносы покрывают домен, хостинг и работу по обновлению статистики.',
    'ساعة الدين الكورية مشروع مستقل يُموَّل بالإعلانات وبدعمكم. تغطي التبرعات تكاليف النطاق والاستضافة وأعمال تحديث الإحصاءات.',
    'कोरिया ऋण घड़ी एक स्वतंत्र परियोजना है, जो विज्ञापन और आपके सहयोग से चलती है। योगदान डोमेन, होस्टिंग और आँकड़े अद्यतन करने के कार्य में लगता है।',
    'Jam Utang Korea adalah proyek independen yang didanai iklan dan dukungan Anda. Kontribusi digunakan untuk domain, hosting, dan pekerjaan pembaruan statistik.',
    'Đồng hồ nợ Hàn Quốc là dự án độc lập, được tài trợ bằng quảng cáo và sự ủng hộ của bạn. Đóng góp dùng cho tên miền, lưu trữ và công việc cập nhật số liệu.',
    'นาฬิกาหนี้เกาหลีเป็นโครงการอิสระที่ได้รับทุนจากโฆษณาและการสนับสนุนของคุณ เงินสนับสนุนใช้สำหรับโดเมน โฮสติ้ง และงานปรับปรุงสถิติ',
    'Kore Borç Saati, reklam gelirleri ve desteğinizle yürüyen bağımsız bir projedir. Katkılar alan adı, barındırma ve istatistik güncelleme işlerine harcanır.',
    'Zegar Długu Korei to niezależny projekt finansowany z reklam i Państwa wsparcia. Wpłaty pokrywają domenę, hosting i pracę nad aktualizacją statystyk.',
    'Koreas skuldklocka är ett oberoende projekt som finansieras av annonser och ditt stöd. Bidragen täcker domän, drift och arbetet med att uppdatera statistiken.');

  L['왜 광고도 받고 후원도 받나요? 광고 수익만으로는 통계 갱신에 드는 시간을 감당하기 어렵고, 후원만으로는 안정적이지 않기 때문입니다. 후원해 주셔도 광고가 사라지지는 않습니다 — 로그인 없는 정적 사이트라 방문자별로 광고를 끌 방법이 없습니다. 이 점을 미리 밝혀 둡니다.'] = X(
    '為何同時接受廣告與捐款？因為僅靠廣告收入難以支應更新統計所需的時間，僅靠捐款又不夠穩定。即使您捐款，廣告也不會消失——本站是無需登入的靜態網站，無法針對個別訪客關閉廣告。特此事先說明。',
    '¿Por qué anuncios y donaciones a la vez? Porque la publicidad sola no cubre el tiempo que exige actualizar las estadísticas, y las donaciones solas no son estables. Donar no elimina los anuncios: al ser un sitio estático sin inicio de sesión, no hay forma de desactivarlos por visitante. Lo advertimos de antemano.',
    'Por que anúncios e doações ao mesmo tempo? Porque só a publicidade não cobre o tempo necessário para atualizar as estatísticas, e só as doações não são estáveis. Doar não remove os anúncios: por ser um site estático sem login, não há como desativá-los por visitante. Informamos de antemão.',
    'Pourquoi à la fois de la publicité et des dons ? Parce que la publicité seule ne couvre pas le temps nécessaire à la mise à jour des statistiques, et que les dons seuls ne sont pas stables. Faire un don ne supprime pas les annonces : le site étant statique et sans connexion, il n’existe aucun moyen de les désactiver par visiteur. Nous le précisons d’emblée.',
    'Warum Werbung und Spenden zugleich? Weil Werbeerlöse allein den Aufwand für die Aktualisierung der Statistiken nicht decken und Spenden allein nicht verlässlich sind. Eine Spende entfernt die Werbung nicht: Da es sich um eine statische Website ohne Login handelt, lässt sie sich nicht pro Besucher abschalten. Das sei vorab gesagt.',
    'Perché sia pubblicità sia donazioni? Perché la sola pubblicità non copre il tempo necessario ad aggiornare le statistiche e le sole donazioni non sono stabili. Donare non elimina gli annunci: essendo un sito statico senza login, non è possibile disattivarli per singolo visitatore. Lo diciamo in anticipo.',
    'Waarom zowel advertenties als donaties? Omdat advertentie-inkomsten alleen de tijd voor het bijwerken van de statistieken niet dekken en donaties alleen niet stabiel zijn. Doneren verwijdert de advertenties niet: het is een statische site zonder login, dus per bezoeker uitschakelen kan niet. Dat melden we vooraf.',
    'Почему и реклама, и пожертвования? Потому что одной рекламы не хватает на время, необходимое для обновления статистики, а одни пожертвования нестабильны. Пожертвование не убирает рекламу: это статический сайт без входа в аккаунт, отключить её для отдельного посетителя невозможно. Предупреждаем заранее.',
    'لماذا الإعلانات والتبرعات معًا؟ لأن عائد الإعلانات وحده لا يغطي الوقت اللازم لتحديث الإحصاءات، والتبرعات وحدها غير مستقرة. التبرع لا يزيل الإعلانات؛ فالموقع ثابت وبلا تسجيل دخول، ولا سبيل لإيقافها لكل زائر على حدة. ننوّه بذلك مسبقًا.',
    'विज्ञापन और सहयोग दोनों क्यों? क्योंकि केवल विज्ञापन आय से आँकड़े अद्यतन करने में लगने वाला समय पूरा नहीं होता, और केवल सहयोग स्थिर नहीं है। सहयोग करने पर भी विज्ञापन नहीं हटते — यह बिना लॉगिन वाली स्थिर साइट है, अतः प्रति आगंतुक विज्ञापन बंद करना संभव नहीं। यह पहले ही स्पष्ट कर देते हैं।',
    'Mengapa iklan sekaligus donasi? Karena pendapatan iklan saja tidak menutup waktu yang dibutuhkan untuk memperbarui statistik, dan donasi saja tidak stabil. Berdonasi tidak menghilangkan iklan — ini situs statis tanpa login, sehingga iklan tidak dapat dimatikan per pengunjung. Kami sampaikan sejak awal.',
    'Vì sao vừa nhận quảng cáo vừa nhận ủng hộ? Vì chỉ riêng doanh thu quảng cáo không đủ bù thời gian cập nhật số liệu, còn chỉ dựa vào ủng hộ thì không ổn định. Ủng hộ không làm mất quảng cáo — đây là trang tĩnh không đăng nhập nên không thể tắt quảng cáo theo từng người xem. Xin nói rõ trước.',
    'ทำไมจึงรับทั้งโฆษณาและเงินสนับสนุน? เพราะรายได้จากโฆษณาอย่างเดียวไม่พอกับเวลาที่ใช้ปรับปรุงสถิติ และการสนับสนุนอย่างเดียวก็ไม่มั่นคง การสนับสนุนไม่ได้ทำให้โฆษณาหายไป เพราะเป็นเว็บไซต์แบบสแตติกที่ไม่มีการเข้าสู่ระบบ จึงไม่สามารถปิดโฆษณาเป็นรายบุคคลได้ ขอแจ้งให้ทราบล่วงหน้า',
    'Neden hem reklam hem bağış? Çünkü yalnızca reklam geliri istatistikleri güncellemek için gereken zamanı karşılamıyor, yalnızca bağış ise istikrarlı değil. Bağış yapmanız reklamları kaldırmaz — burası girişsiz, statik bir site olduğundan reklamlar ziyaretçi bazında kapatılamaz. Bunu peşinen belirtiyoruz.',
    'Dlaczego zarazem reklamy i wsparcie? Ponieważ same przychody z reklam nie pokrywają czasu potrzebnego na aktualizację statystyk, a samo wsparcie nie jest stabilne. Wpłata nie usuwa reklam — to statyczna strona bez logowania, więc nie da się ich wyłączyć dla pojedynczego odwiedzającego. Mówimy o tym z góry.',
    'Varför både annonser och stöd? För att enbart annonsintäkter inte täcker tiden som krävs för att uppdatera statistiken, och enbart gåvor inte är stabila. Att bidra tar inte bort annonserna — det är en statisk webbplats utan inloggning, så de kan inte stängas av per besökare. Detta sägs i förväg.');

  L['후원은 대가나 반대급부가 없는 자발적 지원이며, 세법상 기부금영수증은 발급되지 않습니다. 결제는 각 외부 서비스에서 처리되고 이 사이트는 결제 정보에 접근하지 않습니다.'] = X(
    '捐款屬自願性支持，不附帶任何對價或回報，且不開立稅務用捐贈收據。付款由各外部服務處理，本網站不會接觸付款資訊。',
    'La aportación es un apoyo voluntario sin contraprestación y no da derecho a recibo fiscal. Los pagos se tramitan en servicios externos y este sitio no accede a los datos de pago.',
    'A contribuição é um apoio voluntário sem contrapartida e não gera recibo fiscal. Os pagamentos são processados por serviços externos e este site não acessa os dados de pagamento.',
    'Le don est un soutien volontaire sans contrepartie et ne donne pas droit à un reçu fiscal. Les paiements sont traités par des services externes ; ce site n’accède pas aux données de paiement.',
    'Die Zuwendung ist eine freiwillige Unterstützung ohne Gegenleistung; eine steuerliche Spendenbescheinigung wird nicht ausgestellt. Zahlungen werden von externen Diensten abgewickelt; diese Website hat keinen Zugriff auf Zahlungsdaten.',
    'Il contributo è un sostegno volontario senza controprestazione e non dà diritto a ricevuta fiscale. I pagamenti sono gestiti da servizi esterni e questo sito non accede ai dati di pagamento.',
    'De bijdrage is vrijwillige steun zonder tegenprestatie en geeft geen recht op een fiscaal attest. Betalingen verlopen via externe diensten; deze site heeft geen toegang tot betaalgegevens.',
    'Пожертвование — добровольная поддержка без встречного предоставления; налоговая квитанция не выдаётся. Платежи обрабатывают внешние сервисы, сайт не имеет доступа к платёжным данным.',
    'التبرع دعم طوعي دون مقابل، ولا يُصدر عنه إيصال ضريبي. تُعالَج المدفوعات عبر خدمات خارجية، ولا يطّلع هذا الموقع على بيانات الدفع.',
    'योगदान बिना किसी प्रतिफल के स्वैच्छिक सहयोग है और इसके लिए कर-रसीद जारी नहीं होती। भुगतान बाहरी सेवाओं द्वारा संसाधित होते हैं और यह साइट भुगतान जानकारी तक नहीं पहुँचती।',
    'Kontribusi adalah dukungan sukarela tanpa imbalan dan tidak menerbitkan bukti potong pajak. Pembayaran diproses oleh layanan eksternal dan situs ini tidak mengakses data pembayaran.',
    'Khoản ủng hộ là hỗ trợ tự nguyện, không có đối ứng và không cấp biên lai thuế. Thanh toán do dịch vụ bên ngoài xử lý; trang này không truy cập thông tin thanh toán.',
    'การสนับสนุนเป็นความช่วยเหลือโดยสมัครใจ ไม่มีสิ่งตอบแทน และไม่ออกใบเสร็จเพื่อลดหย่อนภาษี การชำระเงินดำเนินการโดยบริการภายนอก เว็บไซต์นี้ไม่เข้าถึงข้อมูลการชำระเงิน',
    'Katkı, karşılıksız gönüllü bir destektir ve vergi makbuzu düzenlenmez. Ödemeler dış hizmetlerce işlenir; bu site ödeme bilgilerine erişmez.',
    'Wpłata jest dobrowolnym wsparciem bez świadczenia wzajemnego i nie uprawnia do zaświadczenia podatkowego. Płatności obsługują usługi zewnętrzne; strona nie ma dostępu do danych płatniczych.',
    'Bidraget är frivilligt stöd utan motprestation och ger inget skattekvitto. Betalningar hanteras av externa tjänster och denna webbplats har ingen tillgång till betalningsuppgifter.');

  L['토스 송금'] = X('Toss 匯款', 'Transferencia Toss', 'Transferência Toss',
    'Virement Toss', 'Toss-Überweisung', 'Bonifico Toss', 'Toss-overboeking',
    'Перевод через Toss', 'تحويل عبر Toss', 'Toss ट्रांसफर',
    'Transfer Toss', 'Chuyển khoản Toss', 'โอนผ่าน Toss', 'Toss havalesi',
    'Przelew Toss', 'Toss-överföring');

  L['국내 계좌 · 수수료 없음'] = X(
    '國內帳戶・免手續費', 'Cuenta nacional, sin comisión', 'Conta nacional, sem taxa',
    'Compte domestique, sans frais', 'Inländisches Konto, gebührenfrei',
    'Conto nazionale, senza commissioni', 'Binnenlandse rekening, geen kosten',
    'Внутренний счёт, без комиссии', 'حساب محلي بدون رسوم',
    'घरेलू खाता, बिना शुल्क', 'Rekening domestik, tanpa biaya',
    'Tài khoản trong nước, miễn phí', 'บัญชีในประเทศ ไม่มีค่าธรรมเนียม',
    'Yurt içi hesap, ücretsiz', 'Konto krajowe, bez prowizji',
    'Inhemskt konto, avgiftsfritt');

  L['카카오톡 송금'] = X('KakaoTalk 匯款', 'Transferencia por KakaoTalk',
    'Transferência via KakaoTalk', 'Virement via KakaoTalk',
    'Überweisung via KakaoTalk', 'Bonifico via KakaoTalk',
    'Overboeking via KakaoTalk', 'Перевод через KakaoTalk',
    'تحويل عبر كاكاو توك', 'KakaoTalk से ट्रांसफर',
    'Transfer via KakaoTalk', 'Chuyển khoản qua KakaoTalk',
    'โอนผ่าน KakaoTalk', 'KakaoTalk ile havale',
    'Przelew przez KakaoTalk', 'Överföring via KakaoTalk');

  L['해외 카드 · 1회 또는 정기'] = X(
    '海外信用卡・單次或定期', 'Tarjeta internacional, puntual o recurrente',
    'Cartão internacional, único ou recorrente',
    'Carte internationale, ponctuel ou récurrent',
    'Auslandskarte, einmalig oder wiederkehrend',
    'Carta estera, una tantum o ricorrente',
    'Buitenlandse kaart, eenmalig of periodiek',
    'Зарубежная карта, разово или регулярно',
    'بطاقة دولية، مرة واحدة أو دورية',
    'विदेशी कार्ड, एकमुश्त या नियमित',
    'Kartu luar negeri, sekali atau berkala',
    'Thẻ quốc tế, một lần hoặc định kỳ',
    'บัตรต่างประเทศ ครั้งเดียวหรือรายเดือน',
    'Yurt dışı kart, tek seferlik veya düzenli',
    'Karta zagraniczna, jednorazowo lub cyklicznie',
    'Utländskt kort, engångs eller återkommande');

  L['해외 후원'] = X('海外支持', 'Apoyo internacional', 'Apoio internacional',
    'Soutien international', 'Unterstützung aus dem Ausland',
    'Sostegno dall’estero', 'Steun uit het buitenland', 'Поддержка из-за рубежа',
    'دعم دولي', 'अंतरराष्ट्रीय सहयोग', 'Dukungan internasional',
    'Ủng hộ từ nước ngoài', 'สนับสนุนจากต่างประเทศ', 'Yurt dışından destek',
    'Wsparcie zagraniczne', 'Stöd från utlandet');

  L['매월 정기 후원'] = X('每月定期支持', 'Apoyo mensual recurrente',
    'Apoio mensal recorrente', 'Soutien mensuel récurrent',
    'Monatliche Dauerunterstützung', 'Sostegno mensile ricorrente',
    'Maandelijkse steun', 'Ежемесячная поддержка', 'دعم شهري متكرر',
    'मासिक नियमित सहयोग', 'Dukungan bulanan rutin', 'Ủng hộ hằng tháng',
    'สนับสนุนรายเดือน', 'Aylık düzenli destek', 'Comiesięczne wsparcie',
    'Månatligt stöd');

  L['한국 정산 불가'] = X(
    '不支援韓國結算', 'No disponible para liquidación en Corea',
    'Sem liquidação para a Coreia', 'Règlement en Corée non disponible',
    'Auszahlung nach Korea nicht möglich', 'Liquidazione in Corea non disponibile',
    'Uitbetaling in Korea niet mogelijk', 'Выплаты в Корею недоступны',
    'التسوية في كوريا غير متاحة', 'कोरिया में निपटान उपलब्ध नहीं',
    'Pencairan ke Korea tidak tersedia', 'Không thanh toán về Hàn Quốc',
    'ไม่รองรับการรับเงินในเกาหลี', 'Kore’ye ödeme yapılamıyor',
    'Rozliczenie w Korei niedostępne', 'Utbetalning till Korea ej möjlig');

  L['무통장 입금'] = X('銀行轉帳', 'Transferencia bancaria', 'Transferência bancária',
    'Virement bancaire', 'Banküberweisung', 'Bonifico bancario',
    'Bankoverschrijving', 'Банковский перевод', 'تحويل بنكي',
    'बैंक हस्तांतरण', 'Transfer bank', 'Chuyển khoản ngân hàng',
    'โอนเงินผ่านธนาคาร', 'Banka havalesi', 'Przelew bankowy', 'Banköverföring');

  L['○○은행'] = X('○○銀行', 'Banco ○○', 'Banco ○○', 'Banque ○○', 'Bank ○○',
    'Banca ○○', 'Bank ○○', 'Банк ○○', 'بنك ○○', '○○ बैंक',
    'Bank ○○', 'Ngân hàng ○○', 'ธนาคาร ○○', '○○ Bankası', 'Bank ○○', '○○ Bank');

  L['예금주명'] = X('戶名', 'Titular de la cuenta', 'Titular da conta',
    'Titulaire du compte', 'Kontoinhaber', 'Intestatario del conto',
    'Rekeninghouder', 'Владелец счёта', 'اسم صاحب الحساب',
    'खाताधारक का नाम', 'Nama pemilik rekening', 'Chủ tài khoản',
    'ชื่อบัญชี', 'Hesap sahibi', 'Właściciel konta', 'Kontoinnehavare');

  L['복사'] = X('複製', 'Copiar', 'Copiar', 'Copier', 'Kopieren', 'Copia',
    'Kopiëren', 'Копировать', 'نسخ', 'कॉपी', 'Salin', 'Sao chép',
    'คัดลอก', 'Kopyala', 'Kopiuj', 'Kopiera');

  L['복사됨'] = X('已複製', 'Copiado', 'Copiado', 'Copié', 'Kopiert', 'Copiato',
    'Gekopieerd', 'Скопировано', 'تم النسخ', 'कॉपी हो गया', 'Tersalin',
    'Đã sao chép', 'คัดลอกแล้ว', 'Kopyalandı', 'Skopiowano', 'Kopierat');

  L['문의'] = X('聯絡我們', 'Contacto', 'Contato', 'Contact', 'Kontakt',
    'Contatti', 'Contact', 'Контакты', 'اتصل بنا', 'संपर्क',
    'Kontak', 'Liên hệ', 'ติดต่อ', 'İletişim', 'Kontakt', 'Kontakt');

  L['닫기'] = X('關閉', 'Cerrar', 'Fechar', 'Fermer', 'Schließen', 'Chiudi',
    'Sluiten', 'Закрыть', 'إغلاق', 'बंद करें', 'Tutup', 'Đóng',
    'ปิด', 'Kapat', 'Zamknij', 'Stäng');

  L['부채시계로 돌아가기'] = X('返回債務時鐘', 'Volver al reloj de la deuda',
    'Voltar ao relógio da dívida', 'Retour à l’horloge de la dette',
    'Zurück zur Schuldenuhr', 'Torna all’orologio del debito',
    'Terug naar de schuldklok', 'Вернуться к долговым часам',
    'العودة إلى ساعة الدين', 'ऋण घड़ी पर लौटें', 'Kembali ke jam utang',
    'Quay lại đồng hồ nợ', 'กลับไปที่นาฬิกาหนี้', 'Borç saatine dön',
    'Powrót do zegara długu', 'Tillbaka till skuldklockan');

  /* 브랜드명 — 언어와 무관하게 그대로 쓴다 (한국어만 한글 표기) */
  L['카카오페이']      = SAME('KakaoPay');
  L['Ko-fi']           = SAME('Ko-fi');
  L['PayPal']          = SAME('PayPal');
  L['GitHub Sponsors'] = SAME('GitHub Sponsors');
  L['Buy Me a Coffee'] = SAME('Buy Me a Coffee');

})();
