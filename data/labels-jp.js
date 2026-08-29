/* =============================================================
 * 지표 라벨 번역 오버레이 ⑤ — 한일 비교
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

  /* ---- 부채시계 본체에서 새로 추가된 문구 ---- */
  L['국제비교는 이 지표로'] = X(
    '國際比較用此指標', 'Indicador usado para comparación internacional',
    'Indicador usado em comparações internacionais',
    'Indicateur retenu pour les comparaisons internationales',
    'Kennzahl für internationale Vergleiche',
    'Indicatore usato per i confronti internazionali',
    'Maatstaf voor internationale vergelijking',
    'Показатель для международных сопоставлений',
    'المؤشر المستخدم للمقارنة الدولية', 'अंतरराष्ट्रीय तुलना का संकेतक',
    'Indikator untuk perbandingan internasional', 'Chỉ tiêu dùng để so sánh quốc tế',
    'ตัวชี้วัดที่ใช้เปรียบเทียบระหว่างประเทศ', 'Uluslararası karşılaştırmada kullanılan gösterge',
    'Wskaźnik do porównań międzynarodowych', 'Mått för internationella jämförelser');

  /* ---- 화면 경고문 ---- */
  L['일본에는 이미 여러 부채시계가 있습니다. 이 화면은 그것을 옮겨온 것이 아니라, 두 나라를 같은 정의로 나란히 놓은 비교표입니다. 한국의 국가채무(D1)와 일본의 보통국채 잔액은 포괄 범위가 다르므로, 국제비교는 일반정부 총부채 행을 보십시오. 한국 값은 이 사이트 부채시계와 같은 기준값에서 계산하고, 일본 값은 IMF 자료를 씁니다. IMF 는 2026년 4월부터 일본의 총부채 정의를 연결 액면가 기준으로 바꿔, 예전에 인용되던 250% 안팎의 수치와는 이어지지 않습니다. 원화와 엔화의 금액 배율은 환율에 따라 흔들리므로, GDP 대비와 1인당 지표를 먼저 보십시오. 기준 연도는 지표마다 다릅니다.'] = X(
    '日本已有多個債務時鐘。本頁並非移植它們，而是以相同定義將兩國並列的比較表。韓國的國家債務(D1)與日本的普通國債餘額涵蓋範圍不同，國際比較請看一般政府總債務一行。韓國數值以本站債務時鐘的同一基準值計算，日本數值採用IMF資料。IMF自2026年4月起將日本總債務定義改為合併面值基準，與過去引用的約250%數字並不銜接。韓元與日圓的金額倍率會隨匯率波動，請優先參考GDP佔比與人均指標。基準年份因指標而異。',
    'Japón ya cuenta con varios relojes de la deuda. Esta pantalla no los reproduce: pone ambos países lado a lado bajo las mismas definiciones. La deuda D1 de Corea y el saldo de bonos ordinarios de Japón tienen perímetros distintos, así que para comparar países use la fila de deuda bruta de las AA.PP. Los valores coreanos se calculan con los mismos datos base que el reloj de este sitio; los japoneses proceden del FMI. Desde abril de 2026 el FMI cambió la definición de deuda bruta japonesa a valor nominal consolidado, por lo que no enlaza con las cifras del 250 % que se citaban antes. La razón entre importes en wones y yenes oscila con el tipo de cambio: mire primero los indicadores sobre PIB y per cápita. Los años de referencia difieren según el indicador.',
    'O Japão já possui vários relógios da dívida. Esta tela não os reproduz: coloca os dois países lado a lado sob as mesmas definições. A dívida D1 da Coreia e o saldo de títulos ordinários do Japão têm perímetros diferentes; para comparar países, veja a linha da dívida bruta das administrações públicas. Os valores coreanos são calculados com os mesmos dados base do relógio deste site; os japoneses vêm do FMI. Desde abril de 2026 o FMI mudou a definição da dívida bruta japonesa para valor nominal consolidado, de modo que não se liga aos cerca de 250% citados antes. A razão entre valores em wons e ienes oscila com o câmbio: veja primeiro os indicadores sobre PIB e per capita. Os anos de referência variam por indicador.',
    'Le Japon dispose déjà de plusieurs horloges de la dette. Cet écran ne les reprend pas : il place les deux pays côte à côte selon les mêmes définitions. La dette D1 coréenne et l’encours des obligations ordinaires japonaises n’ont pas le même périmètre ; pour comparer les pays, reportez-vous à la ligne de dette brute des administrations publiques. Les valeurs coréennes sont calculées à partir des mêmes données de base que l’horloge de ce site ; les valeurs japonaises proviennent du FMI. Depuis avril 2026, le FMI a changé la définition de la dette brute japonaise pour une valeur nominale consolidée : elle ne se raccorde donc pas aux quelque 250 % cités auparavant. Le rapport entre montants en wons et en yens fluctue avec le change : regardez d’abord les ratios au PIB et par habitant. Les années de référence varient selon l’indicateur.',
    'In Japan gibt es bereits mehrere Schuldenuhren. Diese Ansicht übernimmt sie nicht, sondern stellt beide Länder nach denselben Definitionen nebeneinander. Koreas Schulden (D1) und Japans Bestand gewöhnlicher Staatsanleihen haben unterschiedliche Abgrenzungen; für Ländervergleiche nutzen Sie die Zeile der gesamtstaatlichen Bruttoschulden. Die koreanischen Werte werden aus denselben Basisdaten wie die Uhr dieser Website berechnet, die japanischen stammen vom IWF. Seit April 2026 stellt der IWF Japans Bruttoschulden auf konsolidierte Nennwerte um; die früher zitierten rund 250 % lassen sich daher nicht fortschreiben. Das Verhältnis der Won- und Yen-Beträge schwankt mit dem Wechselkurs — sehen Sie zuerst auf die BIP- und Pro-Kopf-Kennzahlen. Die Referenzjahre unterscheiden sich je Indikator.',
    'Il Giappone ha già diversi orologi del debito. Questa schermata non li riproduce: affianca i due paesi secondo le stesse definizioni. Il debito D1 coreano e lo stock di titoli ordinari giapponesi hanno perimetri diversi; per i confronti tra paesi usate la riga del debito lordo delle amministrazioni pubbliche. I valori coreani sono calcolati dagli stessi dati base dell’orologio di questo sito; quelli giapponesi provengono dall’FMI. Da aprile 2026 l’FMI ha cambiato la definizione del debito lordo giapponese passando al valore nominale consolidato, perciò non si collega al circa 250% citato in passato. Il rapporto tra importi in won e yen oscilla con il cambio: guardate prima gli indicatori sul PIL e pro capite. Gli anni di riferimento variano per indicatore.',
    'Japan heeft al meerdere schuldklokken. Dit scherm neemt die niet over, maar zet beide landen naast elkaar volgens dezelfde definities. De Koreaanse D1-schuld en de Japanse gewone staatsobligaties hebben een verschillende afbakening; gebruik voor landenvergelijking de regel met bruto overheidsschuld. De Koreaanse waarden komen uit dezelfde basisgegevens als de klok op deze site; de Japanse komen van het IMF. Sinds april 2026 hanteert het IMF voor de Japanse brutoschuld geconsolideerde nominale waarde, waardoor die niet aansluit op de eerder geciteerde circa 250%. De verhouding tussen won- en yenbedragen schommelt met de wisselkoers: kijk eerst naar de bbp- en per-hoofdmaatstaven. De referentiejaren verschillen per indicator.',
    'В Японии уже существует несколько долговых часов. Этот экран их не копирует, а ставит обе страны рядом по одинаковым определениям. Корейский долг D1 и японский объём обычных гособлигаций охватывают разное; для межстрановых сравнений смотрите строку валового долга сектора госуправления. Корейские значения рассчитаны по тем же базовым данным, что и часы этого сайта, японские взяты у МВФ. С апреля 2026 года МВФ перешёл к консолидированной номинальной оценке валового долга Японии, поэтому она не стыкуется с ранее цитировавшимися примерно 250 %. Соотношение сумм в вонах и иенах колеблется вместе с курсом — смотрите сначала показатели к ВВП и на душу населения. Базовые годы различаются по показателям.',
    'توجد في اليابان بالفعل عدة ساعات دين. هذه الشاشة لا تنقلها، بل تضع البلدين جنبًا إلى جنب وفق التعريفات نفسها. يختلف نطاق الدين الكوري (D1) عن رصيد السندات الحكومية العادية في اليابان، لذا استخدم صف الدين الإجمالي للحكومة العامة عند المقارنة الدولية. تُحسب القيم الكورية من البيانات الأساسية نفسها المستخدمة في ساعة هذا الموقع، بينما تأتي القيم اليابانية من صندوق النقد الدولي. ومنذ أبريل 2026 غيّر الصندوق تعريف الدين الإجمالي الياباني إلى القيمة الاسمية الموحدة، فلم يعد متصلًا برقم 250% الذي كان يُستشهد به سابقًا. تتذبذب نسبة المبالغ بالوون والين تبعًا لسعر الصرف، لذا انظر أولًا إلى المؤشرات نسبةً إلى الناتج المحلي وللفرد. تختلف سنوات الأساس بحسب المؤشر.',
    'जापान में पहले से कई ऋण घड़ियाँ हैं। यह स्क्रीन उन्हें दोहराती नहीं, बल्कि दोनों देशों को समान परिभाषाओं के साथ साथ-साथ रखती है। कोरिया का D1 ऋण और जापान के सामान्य सरकारी बॉन्ड का दायरा अलग है, इसलिए अंतरराष्ट्रीय तुलना के लिए सामान्य सरकारी सकल ऋण वाली पंक्ति देखें। कोरियाई मान इसी साइट की ऋण घड़ी के समान आधार आँकड़ों से गणना किए जाते हैं, जबकि जापानी मान IMF से लिए गए हैं। अप्रैल 2026 से IMF ने जापान के सकल ऋण की परिभाषा समेकित अंकित मूल्य में बदल दी, अतः यह पहले उद्धृत लगभग 250% से नहीं जुड़ता। वॉन और येन की राशियों का अनुपात विनिमय दर के साथ बदलता है, इसलिए पहले जीडीपी-अनुपात और प्रति-व्यक्ति संकेतक देखें। संदर्भ वर्ष संकेतक के अनुसार भिन्न हैं।',
    'Jepang sudah memiliki beberapa jam utang. Layar ini bukan menyalinnya, melainkan menyandingkan kedua negara dengan definisi yang sama. Utang D1 Korea dan saldo obligasi negara biasa Jepang memiliki cakupan berbeda, jadi untuk perbandingan antarnegara lihatlah baris utang bruto pemerintah umum. Nilai Korea dihitung dari data dasar yang sama dengan jam di situs ini, sedangkan nilai Jepang berasal dari IMF. Sejak April 2026 IMF mengubah definisi utang bruto Jepang menjadi nilai nominal terkonsolidasi, sehingga tidak nyambung dengan angka sekitar 250% yang dulu dikutip. Rasio jumlah dalam won dan yen berayun mengikuti kurs, maka lihatlah dulu indikator terhadap PDB dan per kapita. Tahun acuan berbeda untuk tiap indikator.',
    'Nhật Bản đã có nhiều đồng hồ nợ. Màn hình này không sao chép chúng mà đặt hai nước cạnh nhau theo cùng một định nghĩa. Nợ D1 của Hàn Quốc và dư nợ trái phiếu chính phủ thông thường của Nhật Bản có phạm vi khác nhau, nên khi so sánh quốc tế hãy xem dòng tổng nợ chính phủ chung. Giá trị Hàn Quốc được tính từ cùng dữ liệu cơ sở với đồng hồ của trang này, còn giá trị Nhật Bản lấy từ IMF. Từ tháng 4/2026, IMF đổi định nghĩa tổng nợ Nhật Bản sang mệnh giá hợp nhất, nên không nối tiếp với con số khoảng 250% từng được trích dẫn. Tỷ lệ giữa số tiền won và yên dao động theo tỷ giá, vì vậy hãy xem trước các chỉ tiêu trên GDP và bình quân đầu người. Năm cơ sở khác nhau theo từng chỉ tiêu.',
    'ญี่ปุ่นมีนาฬิกาหนี้อยู่แล้วหลายแห่ง หน้านี้ไม่ได้ลอกแบบมา แต่วางสองประเทศเคียงกันด้วยนิยามเดียวกัน หนี้ D1 ของเกาหลีกับยอดพันธบัตรรัฐบาลทั่วไปของญี่ปุ่นมีขอบเขตต่างกัน การเปรียบเทียบระหว่างประเทศจึงควรดูแถวหนี้รวมของรัฐบาลทั่วไป ค่าของเกาหลีคำนวณจากข้อมูลฐานชุดเดียวกับนาฬิกาหนี้ของเว็บนี้ ส่วนค่าของญี่ปุ่นใช้ข้อมูล IMF ตั้งแต่เมษายน 2026 IMF เปลี่ยนนิยามหนี้รวมของญี่ปุ่นเป็นมูลค่าที่ตราไว้แบบรวมกิจการ จึงไม่ต่อเนื่องกับตัวเลขราว 250% ที่เคยถูกอ้างอิง อัตราส่วนจำนวนเงินวอนกับเยนผันผวนตามอัตราแลกเปลี่ยน จึงควรดูตัวชี้วัดต่อ GDP และต่อหัวก่อน ปีฐานแตกต่างกันในแต่ละตัวชี้วัด',
    'Japonya’da halihazırda birkaç borç saati var. Bu ekran onları aktarmıyor; iki ülkeyi aynı tanımlarla yan yana koyuyor. Kore’nin D1 borcu ile Japonya’nın olağan devlet tahvili stoku farklı kapsamlara sahiptir; ülke karşılaştırması için genel yönetim brüt borcu satırına bakın. Kore değerleri bu sitedeki borç saatiyle aynı temel verilerden hesaplanır, Japonya değerleri ise IMF’den alınır. IMF, Nisan 2026’dan itibaren Japonya’nın brüt borç tanımını konsolide nominal değere çevirdi; bu nedenle eskiden anılan %250 civarındaki rakamla sürekli değildir. Won ve yen tutarlarının oranı kura göre dalgalanır; önce GSYH’ye oran ve kişi başı göstergelere bakın. Referans yıllar göstergeye göre değişir.',
    'W Japonii działa już kilka zegarów długu. Ten ekran ich nie powiela — zestawia oba kraje według tych samych definicji. Koreański dług D1 i japoński stan zwykłych obligacji skarbowych mają różny zakres, więc do porównań międzynarodowych używaj wiersza długu brutto sektora instytucji rządowych. Wartości koreańskie liczone są z tych samych danych bazowych co zegar na tej stronie, japońskie pochodzą z MFW. Od kwietnia 2026 MFW zmienił definicję japońskiego długu brutto na skonsolidowaną wartość nominalną, więc nie łączy się ona z przytaczanymi wcześniej około 250%. Stosunek kwot w wonach i jenach waha się wraz z kursem — patrz najpierw na wskaźniki do PKB i na mieszkańca. Lata odniesienia różnią się dla poszczególnych wskaźników.',
    'Japan har redan flera skuldklockor. Denna vy kopierar dem inte utan ställer båda länderna sida vid sida med samma definitioner. Koreas D1-skuld och Japans stock av ordinarie statsobligationer har olika avgränsning; använd raden för offentlig sektors bruttoskuld vid landjämförelser. De koreanska värdena beräknas från samma basdata som klockan på denna webbplats, medan de japanska hämtas från IMF. Sedan april 2026 har IMF lagt om Japans bruttoskuld till konsoliderat nominellt värde, varför den inte hänger ihop med de cirka 250 % som tidigare citerades. Förhållandet mellan belopp i won och yen svänger med växelkursen — se först på måtten mot BNP och per capita. Referensåren skiljer sig mellan indikatorer.');

  /* ---- 그룹 ---- */
  L['나라빚'] = X('國家欠債', 'Deuda del país', 'Dívida do país', 'Dette du pays',
    'Schulden des Staates', 'Debito del paese', 'Schuld van het land',
    'Долг страны', 'دين الدولة', 'देश का ऋण', 'Utang negara', 'Nợ quốc gia',
    'หนี้ของประเทศ', 'Ülkenin borcu', 'Dług kraju', 'Landets skuld');

  L['나라 살림'] = X('國家財政', 'Finanzas públicas', 'Finanças públicas',
    'Finances publiques', 'Staatsfinanzen', 'Finanza pubblica', 'Overheidsfinanciën',
    'Государственные финансы', 'المالية العامة', 'सरकारी वित्त',
    'Keuangan negara', 'Tài chính công', 'การคลังของรัฐ', 'Kamu maliyesi',
    'Finanse publiczne', 'Statsfinanser');

  L['가계 · 인구'] = X('家庭與人口', 'Hogares y población', 'Famílias e população',
    'Ménages et population', 'Haushalte und Bevölkerung', 'Famiglie e popolazione',
    'Huishoudens en bevolking', 'Домохозяйства и население', 'الأسر والسكان',
    'परिवार एवं जनसंख्या', 'Rumah tangga dan penduduk', 'Hộ gia đình và dân số',
    'ครัวเรือนและประชากร', 'Haneler ve nüfus', 'Gospodarstwa domowe i ludność',
    'Hushåll och befolkning');

  L['한국은 일본을 몇 년 뒤에서 따라가는가'] = X(
    '韓國落後日本幾年', '¿Cuántos años va Corea por detrás de Japón?',
    'Quantos anos a Coreia está atrás do Japão', 'De combien d’années la Corée suit-elle le Japon',
    'Wie viele Jahre folgt Korea Japan hinterher', 'Di quanti anni la Corea segue il Giappone',
    'Hoeveel jaar loopt Korea achter Japan aan', 'На сколько лет Корея отстаёт от Японии',
    'بكم سنة تتبع كوريا اليابان', 'कोरिया जापान से कितने वर्ष पीछे है',
    'Berapa tahun Korea tertinggal dari Jepang', 'Hàn Quốc đi sau Nhật Bản bao nhiêu năm',
    'เกาหลีตามหลังญี่ปุ่นกี่ปี', 'Kore Japonya’yı kaç yıl geriden takip ediyor',
    'O ile lat Korea podąża za Japonią', 'Hur många år ligger Korea efter Japan');

  /* ---- 지표 ---- */
  L['일반정부 총부채 / GDP'] = X(
    '一般政府總債務 / GDP', 'Deuda bruta de las AA.PP. / PIB',
    'Dívida bruta das adm. públicas / PIB', 'Dette brute des adm. publiques / PIB',
    'Bruttoschulden des Gesamtstaats / BIP', 'Debito lordo delle AA.PP. / PIL',
    'Bruto overheidsschuld / bbp', 'Валовой долг госуправления / ВВП',
    'إجمالي دين الحكومة العامة / الناتج', 'सामान्य सरकारी सकल ऋण / जीडीपी',
    'Utang bruto pemerintah umum / PDB', 'Tổng nợ chính phủ chung / GDP',
    'หนี้รวมรัฐบาลทั่วไป / GDP', 'Genel yönetim brüt borcu / GSYH',
    'Dług brutto sektora rządowego / PKB', 'Offentlig sektors bruttoskuld / BNP');

  L['국제비교는 이 행으로 — 일반정부 부채 기준'] = X(
    '國際比較請看此列 — 一般政府債務口徑',
    'Use esta fila para comparar países — base: deuda de las AA.PP.',
    'Use esta linha para comparar países — base: dívida das adm. públicas',
    'Utilisez cette ligne pour comparer les pays — base : dette des adm. publiques',
    'Für Ländervergleiche diese Zeile verwenden — Basis: gesamtstaatliche Schulden',
    'Per confronti tra paesi usare questa riga — base: debito delle AA.PP.',
    'Gebruik deze regel voor landenvergelijking — basis: overheidsschuld',
    'Для сравнения стран используйте эту строку — база: долг госуправления',
    'استخدم هذا الصف للمقارنة بين الدول — الأساس: دين الحكومة العامة',
    'देशों की तुलना हेतु यह पंक्ति देखें — आधार: सामान्य सरकारी ऋण',
    'Gunakan baris ini untuk perbandingan antarnegara — basis: utang pemerintah umum',
    'Dùng dòng này để so sánh giữa các nước — cơ sở: nợ chính phủ chung',
    'ใช้แถวนี้เปรียบเทียบระหว่างประเทศ — ฐาน: หนี้รัฐบาลทั่วไป',
    'Ülke karşılaştırması için bu satırı kullanın — esas: genel yönetim borcu',
    'Do porównań między krajami użyj tego wiersza — podstawa: dług sektora rządowego',
    'Använd denna rad för landjämförelser — grund: offentlig sektors skuld');

  L['국내 기준 국가채무'] = X(
    '國內口徑國家債務', 'Deuda pública (definición nacional)',
    'Dívida pública (definição nacional)', 'Dette publique (définition nationale)',
    'Staatsschulden (nationale Abgrenzung)', 'Debito pubblico (definizione nazionale)',
    'Staatsschuld (nationale definitie)', 'Госдолг (национальное определение)',
    'الدين العام (التعريف المحلي)', 'राष्ट्रीय ऋण (घरेलू परिभाषा)',
    'Utang negara (definisi domestik)', 'Nợ công (định nghĩa trong nước)',
    'หนี้สาธารณะ (นิยามในประเทศ)', 'Kamu borcu (ulusal tanım)',
    'Dług publiczny (definicja krajowa)', 'Statsskuld (nationell definition)');

  L['한국 국가채무(D1) · 일본 보통국채 잔액 — 범위가 다릅니다'] = X(
    '韓國國家債務(D1)·日本普通國債餘額 — 範圍不同',
    'Corea: deuda D1 · Japón: bonos ordinarios del Estado — los perímetros difieren',
    'Coreia: dívida D1 · Japão: títulos públicos ordinários — os perímetros diferem',
    'Corée : dette D1 · Japon : obligations d’État ordinaires — les périmètres diffèrent',
    'Korea: Schulden D1 · Japan: gewöhnliche Staatsanleihen — unterschiedliche Abgrenzung',
    'Corea: debito D1 · Giappone: titoli di Stato ordinari — perimetri diversi',
    'Korea: schuld D1 · Japan: gewone staatsobligaties — verschillende afbakening',
    'Корея: долг D1 · Япония: обычные гособлигации — охват различается',
    'كوريا: الدين D1 · اليابان: السندات الحكومية العادية — النطاق مختلف',
    'कोरिया: ऋण D1 · जापान: सामान्य सरकारी बॉन्ड — दायरा भिन्न है',
    'Korea: utang D1 · Jepang: obligasi negara biasa — cakupannya berbeda',
    'Hàn Quốc: nợ D1 · Nhật Bản: trái phiếu chính phủ thông thường — phạm vi khác nhau',
    'เกาหลี: หนี้ D1 · ญี่ปุ่น: พันธบัตรรัฐบาลทั่วไป — ขอบเขตต่างกัน',
    'Kore: D1 borcu · Japonya: olağan devlet tahvilleri — kapsamlar farklı',
    'Korea: dług D1 · Japonia: zwykłe obligacje skarbowe — zakresy się różnią',
    'Korea: skuld D1 · Japan: ordinarie statsobligationer — omfattningen skiljer sig');

  L['국내 기준 국가채무 / GDP'] = X(
    '國內口徑國家債務 / GDP', 'Deuda pública (def. nacional) / PIB',
    'Dívida pública (def. nacional) / PIB', 'Dette publique (déf. nationale) / PIB',
    'Staatsschulden (national) / BIP', 'Debito pubblico (def. nazionale) / PIL',
    'Staatsschuld (nationaal) / bbp', 'Госдолг (нац. определение) / ВВП',
    'الدين العام (محلي) / الناتج', 'राष्ट्रीय ऋण (घरेलू) / जीडीपी',
    'Utang negara (domestik) / PDB', 'Nợ công (trong nước) / GDP',
    'หนี้สาธารณะ (ในประเทศ) / GDP', 'Kamu borcu (ulusal) / GSYH',
    'Dług publiczny (krajowy) / PKB', 'Statsskuld (nationell) / BNP');

  L['이자 지출 / 정부 지출'] = X(
    '利息支出佔政府支出', 'Intereses / gasto público',
    'Juros / despesa pública', 'Intérêts / dépenses publiques',
    'Zinsausgaben / Staatsausgaben', 'Interessi / spesa pubblica',
    'Rentelasten / overheidsuitgaven', 'Проценты / госрасходы',
    'الفوائد / الإنفاق الحكومي', 'ब्याज / सरकारी व्यय',
    'Bunga / belanja pemerintah', 'Lãi vay / chi tiêu chính phủ',
    'ดอกเบี้ย / รายจ่ายภาครัฐ', 'Faiz / kamu harcaması',
    'Odsetki / wydatki publiczne', 'Räntor / offentliga utgifter');

  L['세금을 걷어 이자부터 내는 비중'] = X(
    '稅收中優先支付利息的比重',
    'Parte del gasto que se va en intereses antes que en nada',
    'Parcela da despesa que vai para juros antes de tudo',
    'Part des dépenses absorbée par les intérêts avant tout le reste',
    'Anteil der Ausgaben, der vor allem anderen in Zinsen fließt',
    'Quota della spesa che va agli interessi prima di ogni altra cosa',
    'Deel van de uitgaven dat eerst naar rente gaat',
    'Доля расходов, уходящая на проценты прежде всего остального',
    'حصة الإنفاق التي تذهب للفوائد قبل أي شيء آخر',
    'व्यय का वह हिस्सा जो सबसे पहले ब्याज में जाता है',
    'Porsi belanja yang lebih dulu habis untuk bunga',
    'Phần chi tiêu phải trả lãi trước tiên',
    'สัดส่วนรายจ่ายที่ต้องจ่ายดอกเบี้ยก่อนสิ่งอื่น',
    'Harcamaların her şeyden önce faize giden payı',
    'Część wydatków pochłaniana przez odsetki przed wszystkim innym',
    'Andel av utgifterna som går till räntor före allt annat');

  L['정부 지출 규모'] = X(
    '政府支出規模', 'Volumen del gasto público', 'Volume da despesa pública',
    'Volume des dépenses publiques', 'Umfang der Staatsausgaben',
    'Volume della spesa pubblica', 'Omvang van de overheidsuitgaven',
    'Объём госрасходов', 'حجم الإنفاق الحكومي', 'सरकारी व्यय का आकार',
    'Besaran belanja pemerintah', 'Quy mô chi tiêu chính phủ',
    'ขนาดรายจ่ายภาครัฐ', 'Kamu harcamasının büyüklüğü',
    'Wielkość wydatków publicznych', 'Omfattning av offentliga utgifter');

  L['한국은 총지출, 일본은 일반회계 세출'] = X(
    '韓國為總支出，日本為一般會計歲出',
    'Corea: gasto total · Japón: cuenta general', 'Coreia: despesa total · Japão: conta geral',
    'Corée : dépenses totales · Japon : compte général',
    'Korea: Gesamtausgaben · Japan: allgemeiner Haushalt',
    'Corea: spesa totale · Giappone: conto generale',
    'Korea: totale uitgaven · Japan: algemene rekening',
    'Корея: совокупные расходы · Япония: общий счёт',
    'كوريا: الإنفاق الكلي · اليابان: الحساب العام',
    'कोरिया: कुल व्यय · जापान: सामान्य लेखा',
    'Korea: total belanja · Jepang: rekening umum',
    'Hàn Quốc: tổng chi · Nhật Bản: tài khoản chung',
    'เกาหลี: รายจ่ายรวม · ญี่ปุ่น: บัญชีทั่วไป',
    'Kore: toplam harcama · Japonya: genel hesap',
    'Korea: wydatki ogółem · Japonia: rachunek ogólny',
    'Korea: totala utgifter · Japan: allmänna kontot');

  L['조세 + 사회보장기여금 ÷ GDP · OECD 기준'] = X(
    '稅收＋社保繳費÷GDP・OECD口徑',
    'Impuestos + cotizaciones ÷ PIB · criterio OCDE',
    'Impostos + contribuições ÷ PIB · critério OCDE',
    'Impôts + cotisations ÷ PIB · définition OCDE',
    'Steuern + Sozialbeiträge ÷ BIP · OECD-Abgrenzung',
    'Imposte + contributi ÷ PIL · criterio OCSE',
    'Belastingen + premies ÷ bbp · OESO-definitie',
    'Налоги + взносы ÷ ВВП · критерий ОЭСР',
    'الضرائب + الاشتراكات ÷ الناتج · معيار OECD',
    'कर + अंशदान ÷ जीडीपी · ओईसीडी मानक',
    'Pajak + iuran ÷ PDB · kriteria OECD',
    'Thuế + đóng góp ÷ GDP · chuẩn OECD',
    'ภาษี + เงินสมทบ ÷ GDP · เกณฑ์ OECD',
    'Vergiler + primler ÷ GSYH · OECD ölçütü',
    'Podatki + składki ÷ PKB · kryterium OECD',
    'Skatter + avgifter ÷ BNP · OECD-definition');

  L['이 지표는 한국이 훨씬 높습니다'] = X(
    '此指標韓國高出許多', 'Corea está muy por encima en este indicador',
    'A Coreia está muito acima neste indicador',
    'La Corée est nettement au-dessus sur cet indicateur',
    'Bei dieser Kennzahl liegt Korea deutlich höher',
    'Su questo indicatore la Corea è molto più alta',
    'Op deze maatstaf ligt Korea veel hoger',
    'По этому показателю Корея намного выше',
    'كوريا أعلى بكثير في هذا المؤشر',
    'इस संकेतक में कोरिया कहीं अधिक ऊँचा है',
    'Pada indikator ini Korea jauh lebih tinggi',
    'Ở chỉ tiêu này Hàn Quốc cao hơn nhiều',
    'ตัวชี้วัดนี้เกาหลีสูงกว่ามาก',
    'Bu göstergede Kore çok daha yüksek',
    'W tym wskaźniku Korea jest znacznie wyżej',
    'På detta mått ligger Korea betydligt högre');

  L['고령인구 비율 (65세 이상)'] = X(
    '老齡人口比重(65歲以上)', 'Proporción de 65 años o más',
    'Proporção de 65 anos ou mais', 'Part des 65 ans et plus',
    'Anteil der 65-Jährigen und Älteren', 'Quota di 65 anni e oltre',
    'Aandeel 65-plussers', 'Доля населения 65 лет и старше',
    'نسبة من هم 65 عامًا فأكثر', '65 वर्ष व अधिक का अनुपात',
    'Proporsi penduduk 65 tahun ke atas', 'Tỷ lệ dân số từ 65 tuổi trở lên',
    'สัดส่วนประชากรอายุ 65 ปีขึ้นไป', '65 yaş ve üstü oranı',
    'Udział osób w wieku 65+', 'Andel 65 år och äldre');

  L['한국이 지금의 일본에 이르는 데 20년쯤 남았습니다'] = X(
    '韓國約需20年才會達到日本現在的水準',
    'A Corea le faltan unos 20 años para llegar al Japón de hoy',
    'Faltam cerca de 20 anos para a Coreia chegar ao Japão de hoje',
    'Il reste environ 20 ans à la Corée pour atteindre le Japon d’aujourd’hui',
    'Korea braucht noch rund 20 Jahre bis zum heutigen Japan',
    'Alla Corea mancano circa 20 anni per arrivare al Giappone di oggi',
    'Korea heeft nog zo’n 20 jaar tot het Japan van nu',
    'Корее осталось около 20 лет до сегодняшней Японии',
    'يتبقى لكوريا نحو 20 عامًا لتبلغ اليابان اليوم',
    'कोरिया को आज के जापान तक पहुँचने में लगभग 20 वर्ष शेष हैं',
    'Korea butuh sekitar 20 tahun lagi untuk mencapai Jepang saat ini',
    'Hàn Quốc còn khoảng 20 năm nữa mới tới mức Nhật Bản hiện nay',
    'เกาหลีเหลืออีกราว 20 ปีจะถึงระดับญี่ปุ่นวันนี้',
    'Kore’nin bugünkü Japonya’ya ulaşmasına yaklaşık 20 yıl var',
    'Korei zostało około 20 lat do dzisiejszej Japonii',
    'Korea har cirka 20 år kvar till dagens Japan');

  L['일본이 1.5배 높습니다'] = X(
    '日本高出1.5倍', '1,5× más alto en Japón', '1,5× maior no Japão',
    '1,5 fois plus élevé au Japon', '1,5-mal höher in Japan',
    '1,5 volte più alto in Giappone', '1,5× hoger in Japan',
    'В 1,5 раза выше в Японии', 'أعلى بـ1.5 مرة في اليابان',
    'जापान में 1.5 गुना अधिक', '1,5× lebih tinggi di Jepang',
    'Cao hơn 1,5 lần ở Nhật Bản', 'สูงกว่า 1.5 เท่าในญี่ปุ่น',
    'Japonya’da 1,5 kat yüksek', '1,5× wyżej w Japonii',
    '1,5 gånger högre i Japan');

  L['고령인구 비율 20% 도달'] = X(
    '老齡人口比重達20%', 'Llegada al 20 % de mayores de 65',
    'Chegada aos 20% de idosos', 'Franchissement du seuil de 20 % de 65 ans et plus',
    'Erreichen von 20 % Anteil 65+', 'Raggiungimento del 20% di over 65',
    'Bereiken van 20% 65-plussers', 'Достижение доли 65+ в 20 %',
    'بلوغ نسبة 20% لمن هم 65 فأكثر', '65+ जनसंख्या 20% तक पहुँचना',
    'Mencapai 20% penduduk 65+', 'Đạt tỷ lệ 20% dân số từ 65 tuổi',
    'ถึงจุดที่ผู้สูงอายุ 65+ ครบ 20%', '%20 yaşlı nüfus oranına ulaşma',
    'Osiągnięcie 20% osób 65+', 'När andelen 65+ nådde 20 %');

  L['한국이 19년 뒤에 같은 지점을 지났습니다'] = X(
    '韓國在19年後越過同一節點',
    'Corea pasó por el mismo punto 19 años después',
    'A Coreia passou pelo mesmo ponto 19 anos depois',
    'La Corée a franchi le même seuil 19 ans plus tard',
    'Korea passierte denselben Punkt 19 Jahre später',
    'La Corea ha superato lo stesso punto 19 anni dopo',
    'Korea passeerde hetzelfde punt 19 jaar later',
    'Корея прошла ту же точку 19 лет спустя',
    'تجاوزت كوريا النقطة نفسها بعد 19 عامًا',
    'कोरिया ने वही बिंदु 19 वर्ष बाद पार किया',
    'Korea melewati titik yang sama 19 tahun kemudian',
    'Hàn Quốc vượt qua cùng mốc đó sau 19 năm',
    'เกาหลีผ่านจุดเดียวกันในอีก 19 ปีถัดมา',
    'Kore aynı noktayı 19 yıl sonra geçti',
    'Korea minęła ten sam punkt 19 lat później',
    'Korea passerade samma punkt 19 år senare');

  L['년'] = X('年', ' años', ' anos', ' ans', ' Jahre', ' anni', ' jaar',
    ' лет', ' سنة', ' वर्ष', ' tahun', ' năm', ' ปี', ' yıl', ' lat', ' år');

  L['한국이 19년 늦게 도달'] = X(
    '韓國晚19年達到', 'Corea llegó 19 años más tarde', 'A Coreia chegou 19 anos depois',
    'La Corée est arrivée 19 ans plus tard', 'Korea erreichte es 19 Jahre später',
    'La Corea è arrivata 19 anni dopo', 'Korea bereikte het 19 jaar later',
    'Корея достигла на 19 лет позже', 'وصلت كوريا متأخرة 19 عامًا',
    'कोरिया 19 वर्ष देर से पहुँचा', 'Korea mencapainya 19 tahun kemudian',
    'Hàn Quốc đạt tới muộn hơn 19 năm', 'เกาหลีถึงช้ากว่า 19 ปี',
    'Kore 19 yıl geç ulaştı', 'Korea osiągnęła to 19 lat później',
    'Korea nådde dit 19 år senare');

  L['총인구 정점'] = X(
    '總人口高峰', 'Pico de población', 'Pico populacional', 'Pic de population',
    'Bevölkerungshöhepunkt', 'Picco demografico', 'Bevolkingspiek',
    'Пик численности населения', 'ذروة عدد السكان', 'जनसंख्या शिखर',
    'Puncak populasi', 'Đỉnh dân số', 'จุดสูงสุดของประชากร',
    'Nüfus zirvesi', 'Szczyt liczby ludności', 'Befolkningstopp');

  L['두 나라 모두 이미 지났습니다'] = X(
    '兩國皆已越過', 'Ambos países ya lo han pasado', 'Ambos os países já passaram',
    'Les deux pays l’ont déjà dépassé', 'Beide Länder haben ihn bereits überschritten',
    'Entrambi i paesi l’hanno già superato', 'Beide landen zijn er al voorbij',
    'Обе страны его уже прошли', 'كلا البلدين تجاوزها بالفعل',
    'दोनों देश इसे पार कर चुके हैं', 'Kedua negara sudah melewatinya',
    'Cả hai nước đều đã đi qua', 'ทั้งสองประเทศผ่านจุดนี้ไปแล้ว',
    'Her iki ülke de bunu çoktan geçti', 'Oba kraje już go minęły',
    'Båda länderna har redan passerat den');

  L['한국이 12년 늦게 정점'] = X(
    '韓國晚12年達峰', 'Corea alcanzó su pico 12 años después',
    'A Coreia atingiu o pico 12 anos depois', 'La Corée a culminé 12 ans plus tard',
    'Korea erreichte den Höhepunkt 12 Jahre später',
    'La Corea ha toccato il picco 12 anni dopo', 'Korea piekte 12 jaar later',
    'Корея достигла пика на 12 лет позже', 'بلغت كوريا الذروة متأخرة 12 عامًا',
    'कोरिया का शिखर 12 वर्ष बाद आया', 'Korea mencapai puncak 12 tahun kemudian',
    'Hàn Quốc đạt đỉnh muộn hơn 12 năm', 'เกาหลีถึงจุดสูงสุดช้ากว่า 12 ปี',
    'Kore zirveye 12 yıl geç ulaştı', 'Korea osiągnęła szczyt 12 lat później',
    'Korea nådde toppen 12 år senare');

})();
