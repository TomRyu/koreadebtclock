/* =============================================================
 * 지표 라벨 번역 오버레이 ① — 국가 부채 · 세금 · 지출
 * -------------------------------------------------------------
 * data/labels.js 의 window.ROK_LABELS 에 덧붙입니다(병합).
 * 키는 data/data.js 의 I() 첫 인자, 즉 한국어 원문 그대로입니다.
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

  /* ================= 국가 부채 ================= */

  L['국가채무 (D1)'] = X(
    '國家債務 (D1)', 'Deuda pública (D1)', 'Dívida pública (D1)', 'Dette publique (D1)',
    'Staatsschulden (D1)', 'Debito pubblico (D1)', 'Staatsschuld (D1)', 'Госдолг (D1)',
    'الدين العام (D1)', 'राष्ट्रीय ऋण (D1)', 'Utang negara (D1)', 'Nợ công (D1)',
    'หนี้สาธารณะ (D1)', 'Kamu borcu (D1)', 'Dług publiczny (D1)', 'Statsskuld (D1)');

  L['중앙정부 + 지방정부'] = X(
    '中央政府＋地方政府', 'Gobierno central + local', 'Governo central + local',
    'État central + collectivités', 'Zentral- und Kommunalregierung', 'Governo centrale + locale',
    'Centrale en lokale overheid', 'Центральное и местное правительство',
    'الحكومة المركزية والمحلية', 'केंद्र + स्थानीय सरकार', 'Pemerintah pusat + daerah',
    'Chính phủ trung ương + địa phương', 'รัฐบาลกลาง + ท้องถิ่น', 'Merkezi + yerel yönetim',
    'Rząd centralny + samorządy', 'Central och lokal förvaltning');

  L['일반정부 부채 (D2)'] = X(
    '一般政府債務 (D2)', 'Deuda de las AA.PP. (D2)', 'Dívida das administrações públicas (D2)',
    'Dette des administrations publiques (D2)', 'Schulden des Gesamtstaats (D2)',
    'Debito delle amministrazioni pubbliche (D2)', 'Overheidsschuld (D2)',
    'Долг сектора госуправления (D2)', 'دين الحكومة العامة (D2)', 'सामान्य सरकारी ऋण (D2)',
    'Utang pemerintah umum (D2)', 'Nợ chính phủ chung (D2)', 'หนี้รัฐบาลทั่วไป (D2)',
    'Genel yönetim borcu (D2)', 'Dług sektora instytucji rządowych (D2)',
    'Offentlig sektors skuld (D2)');

  L['국제 비교 기준'] = X(
    '國際比較基準', 'Base de comparación internacional', 'Base de comparação internacional',
    'Base de comparaison internationale', 'Internationale Vergleichsbasis',
    'Base per il confronto internazionale', 'Basis voor internationale vergelijking',
    'Международная сопоставимая база', 'أساس المقارنة الدولية', 'अंतरराष्ट्रीय तुलना आधार',
    'Basis perbandingan internasional', 'Cơ sở so sánh quốc tế', 'เกณฑ์เปรียบเทียบสากล',
    'Uluslararası karşılaştırma esası', 'Podstawa porównań międzynarodowych',
    'Internationell jämförelsegrund');

  L['공공부문 부채 (D3)'] = X(
    '公共部門債務 (D3)', 'Deuda del sector público (D3)', 'Dívida do setor público (D3)',
    'Dette du secteur public (D3)', 'Schulden des öffentlichen Sektors (D3)',
    'Debito del settore pubblico (D3)', 'Schuld van de publieke sector (D3)',
    'Долг государственного сектора (D3)', 'دين القطاع العام (D3)', 'सार्वजनिक क्षेत्र ऋण (D3)',
    'Utang sektor publik (D3)', 'Nợ khu vực công (D3)', 'หนี้ภาครัฐ (D3)',
    'Kamu kesimi borcu (D3)', 'Dług sektora publicznego (D3)', 'Offentliga sektorns skuld (D3)');

  L['비금융공기업 포함'] = X(
    '含非金融公營企業', 'Incluye empresas públicas no financieras',
    'Inclui estatais não financeiras', 'Y compris entreprises publiques non financières',
    'Inkl. nichtfinanzieller Staatsbetriebe', 'Incluse le imprese pubbliche non finanziarie',
    'Incl. niet-financiële staatsbedrijven', 'Включая нефинансовые госпредприятия',
    'يشمل الشركات العامة غير المالية', 'गैर-वित्तीय सरकारी उपक्रम शामिल',
    'Termasuk BUMN nonkeuangan', 'Gồm doanh nghiệp nhà nước phi tài chính',
    'รวมรัฐวิสาหกิจที่ไม่ใช่สถาบันการเงิน', 'Finansal olmayan KİT’ler dahil',
    'Łącznie z niefinansowymi spółkami Skarbu Państwa', 'Inkl. icke-finansiella statliga bolag');

  L['국가부채 총계'] = X(
    '國家負債總計', 'Pasivos totales del Estado', 'Passivo total do Estado',
    'Passif total de l’État', 'Gesamtverbindlichkeiten des Staates',
    'Passività totali dello Stato', 'Totale verplichtingen van de staat',
    'Совокупные обязательства государства', 'إجمالي التزامات الدولة', 'कुल सरकारी देनदारियाँ',
    'Total kewajiban negara', 'Tổng nợ phải trả của nhà nước', 'หนี้สินรวมของรัฐ',
    'Toplam devlet yükümlülükleri', 'Zobowiązania państwa ogółem', 'Statens totala skulder');

  L['재무제표 기준 (발생주의)'] = X(
    '財務報表基準(權責發生制)', 'Base contable de devengo', 'Regime de competência',
    'Comptabilité d’exercice', 'Periodengerechte Rechnungslegung',
    'Contabilità per competenza', 'Op transactiebasis', 'По методу начисления',
    'أساس الاستحقاق المحاسبي', 'उपचय लेखांकन आधार', 'Basis akrual', 'Cơ sở dồn tích',
    'เกณฑ์คงค้าง', 'Tahakkuk esaslı muhasebe', 'Ujęcie memoriałowe',
    'Bokföringsmässiga grunder');

  L['국고채 발행잔액'] = X(
    '國庫債發行餘額', 'Bonos del Tesoro en circulación', 'Títulos do Tesouro em circulação',
    'Encours des obligations d’État', 'Ausstehende Staatsanleihen',
    'Titoli di Stato in circolazione', 'Uitstaande staatsobligaties',
    'Гособлигации в обращении', 'سندات الخزانة القائمة', 'बकाया सरकारी बॉन्ड',
    'Obligasi negara beredar', 'Trái phiếu chính phủ đang lưu hành',
    'พันธบัตรรัฐบาลคงค้าง', 'Dolaşımdaki devlet tahvilleri',
    'Obligacje skarbowe w obiegu', 'Utestående statsobligationer');

  L['1가구당 국가채무'] = X(
    '每戶國家債務', 'Deuda pública por hogar', 'Dívida pública por domicílio',
    'Dette publique par ménage', 'Staatsschuld je Haushalt', 'Debito pubblico per famiglia',
    'Staatsschuld per huishouden', 'Госдолг на домохозяйство', 'الدين العام لكل أسرة',
    'प्रति परिवार राष्ट्रीय ऋण', 'Utang negara per rumah tangga', 'Nợ công trên mỗi hộ',
    'หนี้สาธารณะต่อครัวเรือน', 'Hane başına kamu borcu', 'Dług publiczny na gospodarstwo',
    'Statsskuld per hushåll');

  L['국가채무 / GDP'] = X(
    '國家債務 / GDP', 'Deuda pública / PIB', 'Dívida pública / PIB', 'Dette publique / PIB',
    'Staatsschulden / BIP', 'Debito pubblico / PIL', 'Staatsschuld / bbp', 'Госдолг / ВВП',
    'الدين العام / الناتج المحلي', 'राष्ट्रीय ऋण / जीडीपी', 'Utang negara / PDB',
    'Nợ công / GDP', 'หนี้สาธารณะ / GDP', 'Kamu borcu / GSYH', 'Dług publiczny / PKB',
    'Statsskuld / BNP');

  L['2019년 37.6% → 지속 상승'] = X(
    '2019年37.6%→持續上升', '37,6 % en 2019, sigue subiendo', '37,6% em 2019, ainda subindo',
    '37,6 % en 2019, en hausse continue', '2019: 37,6 %, weiter steigend',
    '37,6% nel 2019, in continua crescita', '37,6% in 2019, blijft stijgen',
    '37,6% в 2019 г., продолжает расти', '37.6% في 2019 وما زال يرتفع',
    '2019 में 37.6%, लगातार बढ़ रहा', '37,6% pada 2019, terus naik',
    '37,6% năm 2019, vẫn tăng', '37.6% ในปี 2019 และยังเพิ่มขึ้น',
    '2019’da %37,6, artmaya devam ediyor', '37,6% w 2019 r., wciąż rośnie',
    '37,6 % 2019, fortsätter stiga');

  L['일반정부 부채 / GDP'] = X(
    '一般政府債務 / GDP', 'Deuda de las AA.PP. / PIB', 'Dívida das adm. públicas / PIB',
    'Dette des adm. publiques / PIB', 'Gesamtstaatliche Schulden / BIP',
    'Debito delle AA.PP. / PIL', 'Overheidsschuld / bbp', 'Долг госуправления / ВВП',
    'دين الحكومة العامة / الناتج', 'सामान्य सरकारी ऋण / जीडीपी', 'Utang pemerintah umum / PDB',
    'Nợ chính phủ chung / GDP', 'หนี้รัฐบาลทั่วไป / GDP', 'Genel yönetim borcu / GSYH',
    'Dług instytucji rządowych / PKB', 'Offentlig sektors skuld / BNP');

  L['오늘 늘어난 국가채무'] = X(
    '今日新增國家債務', 'Deuda añadida hoy', 'Dívida acrescida hoje',
    'Dette ajoutée aujourd’hui', 'Heute hinzugekommene Schulden', 'Debito aggiunto oggi',
    'Schuld erbij vandaag', 'Прирост долга за сегодня', 'الدين المضاف اليوم',
    'आज बढ़ा ऋण', 'Utang bertambah hari ini', 'Nợ tăng thêm hôm nay',
    'หนี้ที่เพิ่มวันนี้', 'Bugün eklenen borç', 'Dług przyrosły dziś',
    'Skuld tillkommen idag');

  L['자정 이후 누적'] = X(
    '自午夜起累計', 'Desde medianoche (KST)', 'Desde a meia-noite (KST)',
    'Depuis minuit (KST)', 'Seit Mitternacht (KST)', 'Da mezzanotte (KST)',
    'Sinds middernacht (KST)', 'С полуночи (KST)', 'منذ منتصف الليل (بتوقيت كوريا)',
    'आधी रात (KST) से', 'Sejak tengah malam (KST)', 'Từ nửa đêm (KST)',
    'ตั้งแต่เที่ยงคืน (KST)', 'Gece yarısından beri (KST)', 'Od północy (KST)',
    'Sedan midnatt (KST)');

  L['1초당 국가채무 증가'] = X(
    '每秒債務增長', 'Deuda por segundo', 'Dívida por segundo', 'Dette par seconde',
    'Schuldenzuwachs pro Sekunde', 'Debito al secondo', 'Schuldgroei per seconde',
    'Прирост долга в секунду', 'الدين لكل ثانية', 'प्रति सेकंड ऋण वृद्धि',
    'Utang per detik', 'Nợ tăng mỗi giây', 'หนี้เพิ่มต่อวินาที', 'Saniyede borç artışı',
    'Przyrost długu na sekundę', 'Skuldökning per sekund');

  L['올해 국채 이자 지출'] = X(
    '本年度國債利息支出', 'Intereses de la deuda este año', 'Juros da dívida este ano',
    'Intérêts de la dette cette année', 'Zinsausgaben in diesem Jahr',
    'Interessi sul debito quest’anno', 'Rentelasten dit jaar',
    'Проценты по долгу в этом году', 'فوائد الدين هذا العام', 'इस वर्ष ऋण ब्याज',
    'Bunga utang tahun ini', 'Lãi nợ công năm nay', 'ดอกเบี้ยหนี้ปีนี้',
    'Bu yıl borç faizi', 'Odsetki od długu w tym roku', 'Räntor på skulden i år');

  L['연 30.5조원 · 줄일 수 없는 고정비'] = X(
    '年30.5兆韓元・無法削減的固定支出',
    '30,5 bill. KRW/año — coste fijo ineludible',
    '30,5 tri KRW/ano — custo fixo inevitável',
    '30 500 Md KRW/an — charge fixe incompressible',
    '30,5 Bio. KRW/Jahr — nicht kürzbare Fixkosten',
    '30,5 mila mld KRW/anno — costo fisso incomprimibile',
    '30,5 bln KRW/jaar — onvermijdelijke vaste last',
    '30,5 трлн вон в год — несокращаемые расходы',
    '30.5 تريليون وون سنويًا — تكلفة ثابتة لا تُخفَّض',
    '30.5 खरब वॉन/वर्ष — अपरिहार्य निश्चित लागत',
    'KRW 30,5 triliun/tahun — biaya tetap tak terhindarkan',
    '30,5 nghìn tỷ KRW/năm — chi phí cố định không thể cắt',
    '30.5 ล้านล้านวอน/ปี — ค่าใช้จ่ายคงที่ที่ลดไม่ได้',
    'Yılda 30,5 trilyon KRW — kısılamayan sabit gider',
    '30,5 bln KRW rocznie — koszt stały nie do obcięcia',
    '30,5 biljoner KRW/år — oundviklig fast kostnad');

  L['국민 1인당 국채 이자'] = X(
    '人均國債利息', 'Intereses por habitante', 'Juros por habitante',
    'Intérêts par habitant', 'Zinsen je Einwohner', 'Interessi per abitante',
    'Rente per inwoner', 'Проценты на человека', 'الفوائد لكل مواطن',
    'प्रति व्यक्ति ब्याज', 'Bunga per penduduk', 'Lãi trên đầu người',
    'ดอกเบี้ยต่อคน', 'Kişi başına faiz', 'Odsetki na mieszkańca', 'Räntor per invånare');

  L['연간'] = X(
    '每年', 'al año', 'por ano', 'par an', 'pro Jahr', 'all’anno', 'per jaar', 'в год',
    'سنويًا', 'प्रति वर्ष', 'per tahun', 'mỗi năm', 'ต่อปี', 'yıllık', 'rocznie', 'per år');

  L['1초당 국채 이자'] = X(
    '每秒國債利息', 'Intereses por segundo', 'Juros por segundo', 'Intérêts par seconde',
    'Zinsen pro Sekunde', 'Interessi al secondo', 'Rente per seconde',
    'Проценты в секунду', 'الفوائد لكل ثانية', 'प्रति सेकंड ब्याज',
    'Bunga per detik', 'Lãi mỗi giây', 'ดอกเบี้ยต่อวินาที', 'Saniyede faiz',
    'Odsetki na sekundę', 'Räntor per sekund');

  L['국채 이자 / 국세수입'] = X(
    '國債利息佔國稅收入', 'Intereses / recaudación estatal',
    'Juros / receita tributária federal', 'Intérêts / recettes fiscales de l’État',
    'Zinsen / Steuereinnahmen des Bundes', 'Interessi / entrate fiscali statali',
    'Rente / rijksbelastinginkomsten', 'Проценты / налоговые доходы',
    'الفوائد / الإيرادات الضريبية', 'ब्याज / राष्ट्रीय कर राजस्व',
    'Bunga / penerimaan pajak negara', 'Lãi / thu thuế quốc gia',
    'ดอกเบี้ย / รายได้ภาษีของรัฐ', 'Faiz / merkezi vergi geliri',
    'Odsetki / dochody podatkowe państwa', 'Räntor / statliga skatteintäkter');

  L['세금 100원 중 이자로 나가는 몫'] = X(
    '每100元稅收中用於付息的部分',
    'De cada 100 wones de impuestos, esto va a intereses',
    'De cada 100 wons de imposto, isto vai para juros',
    'Sur 100 wons d’impôt, part versée en intérêts',
    'Von je 100 Won Steuern gehen so viel an Zinsen',
    'Su ogni 100 won di tasse, quota che va agli interessi',
    'Van elke 100 won belasting gaat dit naar rente',
    'Из каждых 100 вон налогов уходит на проценты',
    'من كل 100 وون ضرائب يذهب هذا للفوائد',
    'प्रत्येक 100 वॉन कर में से ब्याज का हिस्सा',
    'Dari tiap 100 won pajak, sekian untuk bunga',
    'Trong mỗi 100 won thuế, phần trả lãi',
    'ในทุก 100 วอนของภาษี ส่วนที่จ่ายดอกเบี้ย',
    'Her 100 won vergiden faize giden pay',
    'Z każdych 100 wonów podatku tyle idzie na odsetki',
    'Av varje 100 won i skatt går detta till räntor');

  L['공무원·군인 연금충당부채'] = X(
    '公務員・軍人退休金負債', 'Obligaciones de pensiones públicas',
    'Obrigações de pensões públicas', 'Engagements de retraite publics',
    'Pensionsverpflichtungen des Staates', 'Obbligazioni pensionistiche pubbliche',
    'Pensioenverplichtingen overheid', 'Пенсионные обязательства государства',
    'التزامات معاشات القطاع العام', 'सरकारी पेंशन देनदारियाँ',
    'Kewajiban pensiun aparatur negara', 'Nghĩa vụ hưu trí công',
    'ภาระบำนาญภาครัฐ', 'Kamu emeklilik yükümlülükleri',
    'Zobowiązania emerytalne państwa', 'Statens pensionsåtaganden');

  L['미래 연금지급 추정액'] = X(
    '未來退休金支付估算', 'Pagos futuros estimados', 'Pagamentos futuros estimados',
    'Versements futurs estimés', 'Geschätzte künftige Auszahlungen',
    'Pagamenti futuri stimati', 'Geraamde toekomstige uitkeringen',
    'Оценка будущих выплат', 'المدفوعات المستقبلية المقدرة',
    'अनुमानित भावी भुगतान', 'Perkiraan pembayaran mendatang',
    'Ước tính chi trả tương lai', 'ประมาณการจ่ายในอนาคต',
    'Tahmini gelecek ödemeler', 'Szacowane przyszłe wypłaty',
    'Uppskattade framtida utbetalningar');

  /* ================= 재정 수입 · 세금 ================= */

  L['연 415조원 목표'] = X(
    '年度目標415兆韓元', 'Objetivo: 415 bill. KRW/año', 'Meta: 415 tri KRW/ano',
    'Objectif : 415 000 Md KRW/an', 'Ziel: 415 Bio. KRW/Jahr',
    'Obiettivo: 415 mila mld KRW/anno', 'Doel: 415 bln KRW/jaar',
    'Цель: 415 трлн вон в год', 'الهدف: 415 تريليون وون سنويًا',
    'लक्ष्य: 415 खरब वॉन/वर्ष', 'Target: KRW 415 triliun/tahun',
    'Mục tiêu: 415 nghìn tỷ KRW/năm', 'เป้าหมาย 415 ล้านล้านวอน/ปี',
    'Hedef: yılda 415 trilyon KRW', 'Cel: 415 bln KRW rocznie',
    'Mål: 415 biljoner KRW/år');

  L['올해 지방세 수입'] = X(
    '本年度地方稅收入', 'Impuestos locales este año', 'Impostos locais este ano',
    'Impôts locaux cette année', 'Kommunale Steuern in diesem Jahr',
    'Imposte locali quest’anno', 'Lokale belastingen dit jaar',
    'Местные налоги в этом году', 'الضرائب المحلية هذا العام',
    'इस वर्ष स्थानीय कर', 'Pajak daerah tahun ini', 'Thuế địa phương năm nay',
    'ภาษีท้องถิ่นปีนี้', 'Bu yıl yerel vergiler', 'Podatki lokalne w tym roku',
    'Kommunala skatter i år');

  L['올해 소득세'] = X(
    '本年度個人所得稅', 'IRPF este año', 'Imposto de renda este ano',
    'Impôt sur le revenu cette année', 'Einkommensteuer in diesem Jahr',
    'IRPEF quest’anno', 'Inkomstenbelasting dit jaar', 'НДФЛ в этом году',
    'ضريبة الدخل هذا العام', 'इस वर्ष आयकर', 'Pajak penghasilan tahun ini',
    'Thuế thu nhập cá nhân năm nay', 'ภาษีเงินได้บุคคลปีนี้',
    'Bu yıl gelir vergisi', 'Podatek dochodowy w tym roku', 'Inkomstskatt i år');

  L['올해 법인세'] = X(
    '本年度企業所得稅', 'Impuesto de sociedades este año', 'IRPJ este ano',
    'Impôt sur les sociétés cette année', 'Körperschaftsteuer in diesem Jahr',
    'IRES quest’anno', 'Vennootschapsbelasting dit jaar', 'Налог на прибыль в этом году',
    'ضريبة الشركات هذا العام', 'इस वर्ष निगम कर', 'Pajak badan tahun ini',
    'Thuế thu nhập doanh nghiệp năm nay', 'ภาษีนิติบุคคลปีนี้',
    'Bu yıl kurumlar vergisi', 'CIT w tym roku', 'Bolagsskatt i år');

  L['올해 부가가치세'] = X(
    '本年度增值稅', 'IVA este año', 'IVA este ano', 'TVA cette année',
    'Mehrwertsteuer in diesem Jahr', 'IVA quest’anno', 'Btw dit jaar', 'НДС в этом году',
    'ضريبة القيمة المضافة هذا العام', 'इस वर्ष वैट', 'PPN tahun ini',
    'Thuế GTGT năm nay', 'ภาษีมูลค่าเพิ่มปีนี้', 'Bu yıl KDV', 'VAT w tym roku', 'Moms i år');

  L['올해 상속·증여세'] = X(
    '本年度遺產贈與稅', 'Sucesiones y donaciones este año',
    'Herança e doações este ano', 'Droits de succession et donation cette année',
    'Erbschaft- und Schenkungsteuer in diesem Jahr', 'Successioni e donazioni quest’anno',
    'Erf- en schenkbelasting dit jaar', 'Налог на наследство и дарение в этом году',
    'ضريبة الميراث والهبات هذا العام', 'इस वर्ष विरासत एवं उपहार कर',
    'Pajak waris & hibah tahun ini', 'Thuế thừa kế và quà tặng năm nay',
    'ภาษีมรดกและการให้ปีนี้', 'Bu yıl veraset ve intikal vergisi',
    'Podatek od spadków i darowizn w tym roku', 'Arvs- och gåvoskatt i år');

  L['올해 종합부동산세'] = X(
    '本年度綜合不動產稅', 'Impuesto integral sobre inmuebles este año',
    'Imposto integral sobre imóveis este ano', 'Impôt global sur la propriété cette année',
    'Umfassende Immobiliensteuer in diesem Jahr', 'Imposta patrimoniale immobiliare quest’anno',
    'Integrale onroerendgoedbelasting dit jaar', 'Комплексный налог на недвижимость в этом году',
    'الضريبة العقارية الشاملة هذا العام', 'इस वर्ष समग्र संपत्ति कर',
    'Pajak properti komprehensif tahun ini', 'Thuế bất động sản tổng hợp năm nay',
    'ภาษีอสังหาริมทรัพย์รวมปีนี้', 'Bu yıl kapsamlı emlak vergisi',
    'Kompleksowy podatek od nieruchomości w tym roku', 'Samlad fastighetsskatt i år');

  L['올해 관세'] = X(
    '本年度關稅', 'Aranceles este año', 'Direitos aduaneiros este ano',
    'Droits de douane cette année', 'Zölle in diesem Jahr', 'Dazi doganali quest’anno',
    'Invoerrechten dit jaar', 'Таможенные пошлины в этом году', 'الرسوم الجمركية هذا العام',
    'इस वर्ष सीमा शुल्क', 'Bea masuk tahun ini', 'Thuế hải quan năm nay',
    'ภาษีศุลกากรปีนี้', 'Bu yıl gümrük vergileri', 'Cła w tym roku', 'Tullavgifter i år');

  L['올해 4대보험료 수입'] = X(
    '本年度社保繳費收入', 'Cotizaciones sociales este año',
    'Contribuições sociais este ano', 'Cotisations sociales cette année',
    'Sozialbeiträge in diesem Jahr', 'Contributi sociali quest’anno',
    'Sociale premies dit jaar', 'Страховые взносы в этом году',
    'اشتراكات التأمين الاجتماعي هذا العام', 'इस वर्ष सामाजिक बीमा अंशदान',
    'Iuran jaminan sosial tahun ini', 'Đóng góp bảo hiểm xã hội năm nay',
    'เงินสมทบประกันสังคมปีนี้', 'Bu yıl sosyal sigorta primleri',
    'Składki na ubezpieczenia społeczne w tym roku', 'Sociala avgifter i år');

  L['연간 총조세'] = X(
    '年度稅收總額', 'Impuestos totales anuales', 'Impostos totais anuais',
    'Recettes fiscales annuelles totales', 'Gesamtsteueraufkommen pro Jahr',
    'Gettito fiscale annuo totale', 'Totale belastingen per jaar',
    'Совокупные налоги за год', 'إجمالي الضرائب السنوية', 'कुल वार्षिक कर',
    'Total pajak tahunan', 'Tổng thuế hằng năm', 'ภาษีรวมต่อปี',
    'Yıllık toplam vergi', 'Podatki ogółem rocznie', 'Totala skatter per år');

  L['국세 + 지방세'] = X(
    '國稅＋地方稅', 'Estatales + locales', 'Federais + locais', 'État + collectivités',
    'Bundes- und Kommunalsteuern', 'Statali + locali', 'Rijk + lokaal',
    'Государственные + местные', 'الوطنية + المحلية', 'राष्ट्रीय + स्थानीय',
    'Pusat + daerah', 'Trung ương + địa phương', 'ส่วนกลาง + ท้องถิ่น',
    'Merkezi + yerel', 'Państwowe + lokalne', 'Statliga + kommunala');

  L['국민 1인당 조세부담액'] = X(
    '人均稅負', 'Carga fiscal por habitante', 'Carga tributária por habitante',
    'Charge fiscale par habitant', 'Steuerlast je Einwohner',
    'Carico fiscale per abitante', 'Belastingdruk per inwoner',
    'Налоговая нагрузка на человека', 'العبء الضريبي لكل مواطن',
    'प्रति व्यक्ति कर भार', 'Beban pajak per penduduk', 'Gánh nặng thuế đầu người',
    'ภาระภาษีต่อคน', 'Kişi başına vergi yükü', 'Obciążenie podatkowe na mieszkańca',
    'Skattebörda per invånare');

  L['조세부담률'] = X(
    '稅收佔GDP比重', 'Presión fiscal (impuestos / PIB)', 'Carga tributária (impostos / PIB)',
    'Taux de prélèvements fiscaux', 'Steuerquote', 'Pressione fiscale',
    'Belastingquote', 'Налоговая нагрузка к ВВП', 'نسبة الضرائب إلى الناتج',
    'कर / जीडीपी अनुपात', 'Rasio pajak terhadap PDB', 'Tỷ lệ thuế trên GDP',
    'สัดส่วนภาษีต่อ GDP', 'Vergi yükü oranı', 'Udział podatków w PKB',
    'Skattekvot');

  L['국민부담률'] = X(
    '國民負擔率', 'Presión fiscal total (con cotizaciones)',
    'Carga total (impostos + contribuições)', 'Taux de prélèvements obligatoires',
    'Abgabenquote', 'Pressione fiscale complessiva', 'Collectieve lastendruk',
    'Совокупная фискальная нагрузка', 'إجمالي العبء الضريبي والاجتماعي',
    'कुल कर एवं सामाजिक भार', 'Total beban pajak & jaminan sosial',
    'Tổng gánh nặng thuế và bảo hiểm', 'ภาระภาษีและประกันสังคมรวม',
    'Toplam vergi ve prim yükü', 'Łączne obciążenia fiskalne',
    'Total skatte- och avgiftskvot');

  L['조세 + 사회보장기여금'] = X(
    '稅收＋社保繳費', 'Impuestos + cotizaciones sociales',
    'Impostos + contribuições sociais', 'Impôts + cotisations sociales',
    'Steuern + Sozialbeiträge', 'Imposte + contributi sociali',
    'Belastingen + sociale premies', 'Налоги + страховые взносы',
    'الضرائب + اشتراكات التأمين', 'कर + सामाजिक अंशदान',
    'Pajak + iuran jaminan sosial', 'Thuế + đóng góp an sinh',
    'ภาษี + เงินสมทบประกันสังคม', 'Vergiler + sosyal primler',
    'Podatki + składki społeczne', 'Skatter + sociala avgifter');

  /* ================= 나라 살림 · 지출 ================= */

  L['올해 정부 예산 (총지출)'] = X(
    '本年度政府預算(總支出)', 'Presupuesto del Estado este año',
    'Orçamento do governo este ano', 'Budget de l’État cette année',
    'Staatshaushalt in diesem Jahr', 'Bilancio dello Stato quest’anno',
    'Rijksbegroting dit jaar', 'Госбюджет на этот год', 'ميزانية الحكومة هذا العام',
    'इस वर्ष सरकारी बजट', 'Anggaran pemerintah tahun ini',
    'Ngân sách chính phủ năm nay', 'งบประมาณรัฐบาลปีนี้',
    'Bu yıl devlet bütçesi', 'Budżet państwa w tym roku', 'Statsbudget i år');

  L['2026년 확정 예산 총액'] = X(
    '2026年度確定預算總額', 'Presupuesto aprobado 2026', 'Orçamento aprovado de 2026',
    'Budget voté pour 2026', 'Verabschiedeter Haushalt 2026',
    'Bilancio approvato 2026', 'Vastgestelde begroting 2026',
    'Утверждённый бюджет 2026 г.', 'الميزانية المعتمدة لعام 2026',
    '2026 का स्वीकृत बजट', 'Anggaran 2026 yang disahkan',
    'Ngân sách 2026 đã thông qua', 'งบประมาณปี 2026 ที่ผ่านความเห็นชอบ',
    '2026 onaylı bütçe', 'Uchwalony budżet na 2026', 'Antagen budget 2026');

  L['올해 집행된 예산'] = X(
    '本年度已執行預算', 'Presupuesto ejecutado hasta hoy',
    'Orçamento executado até agora', 'Budget exécuté à ce jour',
    'Bisher verausgabter Haushalt', 'Bilancio speso finora',
    'Tot nu toe besteed budget', 'Израсходовано бюджета',
    'الميزانية المنفقة حتى الآن', 'अब तक व्ययित बजट',
    'Anggaran terpakai sejauh ini', 'Ngân sách đã chi đến nay',
    'งบที่ใช้ไปแล้ว', 'Şimdiye kadar harcanan bütçe',
    'Budżet wydany dotychczas', 'Hittills använd budget');

  L['1월 1일 이후 누적 (연간 균등 배분 가정)'] = X(
    '自1月1日累計(假設全年均勻支出)',
    'Desde el 1 de enero — supone gasto uniforme durante el año',
    'Desde 1º de janeiro — assume gasto uniforme no ano',
    'Depuis le 1er janvier — dépense supposée uniforme sur l’année',
    'Seit 1. Januar — gleichmäßige Verteilung über das Jahr unterstellt',
    'Dal 1° gennaio — spesa ipotizzata uniforme nell’anno',
    'Sinds 1 januari — gelijkmatige besteding aangenomen',
    'С 1 января — предполагается равномерное расходование',
    'منذ 1 يناير — بافتراض إنفاق منتظم على مدار العام',
    '1 जनवरी से — वर्ष भर समान व्यय मानकर',
    'Sejak 1 Januari — asumsi belanja merata sepanjang tahun',
    'Từ 1/1 — giả định chi đều trong năm',
    'ตั้งแต่ 1 ม.ค. — สมมติใช้จ่ายเท่ากันทั้งปี',
    '1 Ocak’tan beri — yıl boyunca eşit harcama varsayımı',
    'Od 1 stycznia — przy założeniu równomiernych wydatków',
    'Sedan 1 januari — antar jämn förbrukning över året');

  L['올해 남은 예산'] = X(
    '本年度剩餘預算', 'Presupuesto restante este año', 'Orçamento restante este ano',
    'Budget restant cette année', 'Verbleibender Haushalt in diesem Jahr',
    'Bilancio residuo quest’anno', 'Resterend budget dit jaar',
    'Остаток бюджета на этот год', 'الميزانية المتبقية هذا العام',
    'इस वर्ष शेष बजट', 'Sisa anggaran tahun ini', 'Ngân sách còn lại năm nay',
    'งบคงเหลือปีนี้', 'Bu yıl kalan bütçe', 'Pozostały budżet w tym roku',
    'Återstående budget i år');

  L['배'] = X('倍', '×', '×', '×', '×', '×', '×', '×', '×', '×', '×', 'lần', 'เท่า', 'kat', '×', '×');

  L['국가채무 / 1년 예산'] = X(
    '國家債務 / 一年預算', 'Deuda pública / presupuesto anual',
    'Dívida pública / orçamento anual', 'Dette publique / budget annuel',
    'Staatsschulden / Jahreshaushalt', 'Debito pubblico / bilancio annuale',
    'Staatsschuld / jaarbegroting', 'Госдолг / годовой бюджет',
    'الدين العام / الميزانية السنوية', 'राष्ट्रीय ऋण / वार्षिक बजट',
    'Utang negara / anggaran tahunan', 'Nợ công / ngân sách một năm',
    'หนี้สาธารณะ / งบประมาณหนึ่งปี', 'Kamu borcu / yıllık bütçe',
    'Dług publiczny / budżet roczny', 'Statsskuld / årsbudget');

  L['나랏빚이 1년 예산의 몇 배인가'] = X(
    '國債相當於一年預算的幾倍',
    'La deuda equivale a cuántos presupuestos anuales',
    'A dívida equivale a quantos orçamentos anuais',
    'La dette représente combien de budgets annuels',
    'Wie viele Jahreshaushalte die Schulden ausmachen',
    'A quanti bilanci annuali equivale il debito',
    'Hoeveel jaarbegrotingen de schuld bedraagt',
    'Скольким годовым бюджетам равен долг',
    'كم ميزانية سنوية يعادل الدين',
    'ऋण कितने वार्षिक बजट के बराबर है',
    'Utang setara berapa anggaran tahunan',
    'Nợ bằng bao nhiêu lần ngân sách một năm',
    'หนี้เท่ากับงบประมาณกี่ปี',
    'Borç kaç yıllık bütçeye eşit',
    'Ilu rocznym budżetom odpowiada dług',
    'Hur många årsbudgetar skulden motsvarar');

  L['올해 관리재정수지 적자'] = X(
    '本年度管理財政赤字', 'Déficit fiscal gestionado este año',
    'Déficit fiscal gerido este ano', 'Déficit budgétaire géré cette année',
    'Verwaltetes Haushaltsdefizit in diesem Jahr', 'Disavanzo gestito quest’anno',
    'Beheerd begrotingstekort dit jaar', 'Управляемый дефицит в этом году',
    'العجز المالي المُدار هذا العام', 'इस वर्ष प्रबंधित राजकोषीय घाटा',
    'Defisit fiskal terkelola tahun ini', 'Thâm hụt tài khóa quản lý năm nay',
    'ขาดดุลการคลังที่บริหารปีนี้', 'Bu yıl yönetilen bütçe açığı',
    'Zarządzany deficyt w tym roku', 'Hanterat budgetunderskott i år');

  L['GDP 대비 약 -4.0%'] = X(
    '約佔GDP -4.0%', 'Alrededor del −4,0 % del PIB', 'Cerca de −4,0% do PIB',
    'Environ −4,0 % du PIB', 'Rund −4,0 % des BIP', 'Circa −4,0% del PIL',
    'Ongeveer −4,0% van het bbp', 'Около −4,0 % ВВП', 'نحو −4.0% من الناتج المحلي',
    'जीडीपी का लगभग −4.0%', 'Sekitar −4,0% dari PDB', 'Khoảng −4,0% GDP',
    'ประมาณ −4.0% ของ GDP', 'GSYH’nin yaklaşık %−4,0’ü', 'Około −4,0% PKB',
    'Cirka −4,0 % av BNP');

  L['올해 통합재정수지 적자'] = X(
    '本年度綜合財政赤字', 'Déficit fiscal consolidado este año',
    'Déficit fiscal consolidado este ano', 'Déficit budgétaire consolidé cette année',
    'Konsolidiertes Haushaltsdefizit in diesem Jahr', 'Disavanzo consolidato quest’anno',
    'Geconsolideerd tekort dit jaar', 'Консолидированный дефицит в этом году',
    'العجز المالي الموحد هذا العام', 'इस वर्ष समेकित राजकोषीय घाटा',
    'Defisit fiskal konsolidasi tahun ini', 'Thâm hụt tài khóa hợp nhất năm nay',
    'ขาดดุลการคลังรวมปีนี้', 'Bu yıl konsolide bütçe açığı',
    'Skonsolidowany deficyt w tym roku', 'Konsoliderat underskott i år');

  L['올해 보건·복지·고용'] = X(
    '本年度衛生福利就業', 'Sanidad, bienestar y empleo este año',
    'Saúde, assistência e emprego este ano', 'Santé, protection sociale et emploi cette année',
    'Gesundheit, Soziales und Arbeit in diesem Jahr', 'Sanità, welfare e lavoro quest’anno',
    'Zorg, welzijn en werk dit jaar', 'Здравоохранение, соцзащита и занятость',
    'الصحة والرعاية والتوظيف هذا العام', 'इस वर्ष स्वास्थ्य, कल्याण व रोजगार',
    'Kesehatan, kesejahteraan & tenaga kerja tahun ini',
    'Y tế, phúc lợi và việc làm năm nay', 'สาธารณสุข สวัสดิการ และแรงงานปีนี้',
    'Bu yıl sağlık, refah ve istihdam', 'Zdrowie, opieka i zatrudnienie w tym roku',
    'Hälsa, välfärd och arbete i år');

  L['연 268조원 · 최대 항목'] = X(
    '年268兆韓元・最大項目', '268 bill. KRW — la mayor partida',
    '268 tri KRW — a maior rubrica', '268 000 Md KRW — premier poste',
    '268 Bio. KRW — größter Posten', '268 mila mld KRW — voce maggiore',
    '268 bln KRW — grootste post', '268 трлн вон — крупнейшая статья',
    '268 تريليون وون — أكبر بند', '268 खरब वॉन — सबसे बड़ी मद',
    'KRW 268 triliun — pos terbesar', '268 nghìn tỷ KRW — khoản lớn nhất',
    '268 ล้านล้านวอน — รายการใหญ่สุด', '268 trilyon KRW — en büyük kalem',
    '268 bln KRW — największa pozycja', '268 biljoner KRW — största posten');

  L['올해 교육'] = X(
    '本年度教育', 'Educación este año', 'Educação este ano', 'Éducation cette année',
    'Bildung in diesem Jahr', 'Istruzione quest’anno', 'Onderwijs dit jaar',
    'Образование в этом году', 'التعليم هذا العام', 'इस वर्ष शिक्षा',
    'Pendidikan tahun ini', 'Giáo dục năm nay', 'การศึกษาปีนี้',
    'Bu yıl eğitim', 'Edukacja w tym roku', 'Utbildning i år');

  L['올해 국방'] = X(
    '本年度國防', 'Defensa este año', 'Defesa este ano', 'Défense cette année',
    'Verteidigung in diesem Jahr', 'Difesa quest’anno', 'Defensie dit jaar',
    'Оборона в этом году', 'الدفاع هذا العام', 'इस वर्ष रक्षा',
    'Pertahanan tahun ini', 'Quốc phòng năm nay', 'กลาโหมปีนี้',
    'Bu yıl savunma', 'Obrona w tym roku', 'Försvar i år');

  L['올해 R&D'] = X(
    '本年度研發', 'I+D este año', 'P&D este ano', 'R&D cette année',
    'F&E in diesem Jahr', 'R&S quest’anno', 'R&D dit jaar', 'НИОКР в этом году',
    'البحث والتطوير هذا العام', 'इस वर्ष अनुसंधान एवं विकास', 'Litbang tahun ini',
    'R&D năm nay', 'วิจัยและพัฒนาปีนี้', 'Bu yıl Ar-Ge', 'B+R w tym roku', 'FoU i år');

  L['올해 SOC'] = X(
    '本年度基礎設施', 'Infraestructuras este año', 'Infraestrutura este ano',
    'Infrastructures cette année', 'Infrastruktur in diesem Jahr',
    'Infrastrutture quest’anno', 'Infrastructuur dit jaar', 'Инфраструктура в этом году',
    'البنية التحتية هذا العام', 'इस वर्ष अवसंरचना', 'Infrastruktur tahun ini',
    'Hạ tầng năm nay', 'โครงสร้างพื้นฐานปีนี้', 'Bu yıl altyapı',
    'Infrastruktura w tym roku', 'Infrastruktur i år');

  L['올해 지방교부세·교육교부금'] = X(
    '本年度地方與教育轉移支付', 'Transferencias a regiones y educación',
    'Transferências a governos locais e educação', 'Dotations aux collectivités et à l’éducation',
    'Zuweisungen an Kommunen und Bildung', 'Trasferimenti a enti locali e istruzione',
    'Uitkeringen aan gemeenten en onderwijs', 'Трансферты регионам и на образование',
    'التحويلات للحكم المحلي والتعليم', 'स्थानीय व शिक्षा अनुदान',
    'Transfer ke daerah & pendidikan', 'Trợ cấp địa phương và giáo dục',
    'เงินอุดหนุนท้องถิ่นและการศึกษา', 'Yerel yönetim ve eğitim payları',
    'Subwencje dla samorządów i oświaty', 'Bidrag till kommuner och utbildning');

  L['올해 산업·중소기업·에너지'] = X(
    '本年度產業中小企業能源', 'Industria, pymes y energía este año',
    'Indústria, PMEs e energia este ano', 'Industrie, PME et énergie cette année',
    'Industrie, KMU und Energie in diesem Jahr', 'Industria, PMI ed energia quest’anno',
    'Industrie, mkb en energie dit jaar', 'Промышленность, МСП и энергетика',
    'الصناعة والمشاريع الصغيرة والطاقة', 'इस वर्ष उद्योग, एमएसएमई व ऊर्जा',
    'Industri, UKM & energi tahun ini', 'Công nghiệp, DNNVV và năng lượng năm nay',
    'อุตสาหกรรม SME และพลังงานปีนี้', 'Bu yıl sanayi, KOBİ ve enerji',
    'Przemysł, MŚP i energia w tym roku', 'Industri, småföretag och energi i år');

  L['올해 농림·수산·식품'] = X(
    '本年度農林水產食品', 'Agricultura, pesca y alimentación este año',
    'Agricultura, pesca e alimentos este ano', 'Agriculture, pêche et alimentation cette année',
    'Land-, Forstwirtschaft und Fischerei in diesem Jahr',
    'Agricoltura, pesca e alimentazione quest’anno', 'Landbouw, visserij en voedsel dit jaar',
    'Сельское хозяйство и рыболовство', 'الزراعة والغابات ومصايد الأسماك',
    'इस वर्ष कृषि, वानिकी व मत्स्य', 'Pertanian, perikanan & pangan tahun ini',
    'Nông lâm thủy sản và thực phẩm năm nay', 'เกษตร ป่าไม้ ประมง และอาหารปีนี้',
    'Bu yıl tarım, ormancılık ve balıkçılık', 'Rolnictwo, leśnictwo i rybołówstwo w tym roku',
    'Jordbruk, skogsbruk och fiske i år');

  L['올해 공공질서·안전'] = X(
    '本年度公共秩序與安全', 'Orden público y seguridad este año',
    'Ordem pública e segurança este ano', 'Ordre public et sécurité cette année',
    'Öffentliche Ordnung und Sicherheit in diesem Jahr',
    'Ordine pubblico e sicurezza quest’anno', 'Openbare orde en veiligheid dit jaar',
    'Общественный порядок и безопасность', 'النظام العام والسلامة هذا العام',
    'इस वर्ष लोक व्यवस्था व सुरक्षा', 'Ketertiban umum & keamanan tahun ini',
    'Trật tự công cộng và an toàn năm nay', 'ความสงบเรียบร้อยและความปลอดภัยปีนี้',
    'Bu yıl kamu düzeni ve güvenlik', 'Porządek publiczny i bezpieczeństwo w tym roku',
    'Allmän ordning och säkerhet i år');

  L['국민 1인당 정부지출'] = X(
    '人均政府支出', 'Gasto público por habitante', 'Gasto público por habitante',
    'Dépense publique par habitant', 'Staatsausgaben je Einwohner',
    'Spesa pubblica per abitante', 'Overheidsuitgaven per inwoner',
    'Госрасходы на человека', 'الإنفاق الحكومي لكل مواطن',
    'प्रति व्यक्ति सरकारी व्यय', 'Belanja pemerintah per penduduk',
    'Chi tiêu chính phủ đầu người', 'รายจ่ายภาครัฐต่อคน',
    'Kişi başına kamu harcaması', 'Wydatki publiczne na mieszkańca',
    'Offentliga utgifter per invånare');

})();
