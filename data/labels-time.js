/* =============================================================
 * 지표 라벨 번역 오버레이 ⑤ — 재정 일정 · 카운트다운 · 시장금리
 * -------------------------------------------------------------
 * data/data.js 의 '재정 일정 · 남은 시간' 패널과, 국고채 금리 ·
 * 국민연금 소진 카운트다운에 쓰이는 라벨입니다.
 *
 * ★ 오버레이 키는 data.js 의 한국어 원문과 글자 하나까지 같아야 합니다.
 *   원문을 고치면 여기 키도 같이 고치십시오. 어긋나면 조용히 영어로
 *   대체되고 화면은 멀쩡해 보입니다. scripts/audit-i18n.js 로 확인하세요.
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

  /* 패널 제목 */
  L['재정 일정 · 남은 시간'] = X(
    '財政日程 · 剩餘時間',
    'Calendario fiscal · Cuenta atrás',
    'Calendário fiscal · Contagem regressiva',
    'Calendrier budgétaire · Compte à rebours',
    'Haushaltskalender · Countdown',
    'Calendario fiscale · Conto alla rovescia',
    'Begrotingskalender · Aftelling',
    'Бюджетный календарь · Обратный отсчёт',
    'الجدول المالي · العد التنازلي',
    'वित्तीय कैलेंडर · उलटी गिनती',
    'Kalender fiskal · Hitung mundur',
    'Lịch tài khóa · Đếm ngược',
    'ปฏิทินการคลัง · นับถอยหลัง',
    'Mali takvim · Geri sayım',
    'Kalendarz budżetowy · Odliczanie',
    'Budgetkalender · Nedräkning');

  /* 헌법 제54조 ② — 9월 3일 */
  L['내년 예산안 국회 제출까지'] = X(
    '距明年預算案提交國會',
    'Hasta la presentación del proyecto de presupuesto',
    'Até a apresentação da proposta orçamentária',
    'Avant le dépôt du projet de budget',
    'Bis zur Einbringung des Haushaltsentwurfs',
    'Alla presentazione del disegno di bilancio',
    'Tot indiening van de ontwerpbegroting',
    'До внесения проекта бюджета',
    'حتى تقديم مشروع الميزانية',
    'बजट विधेयक पेश होने तक',
    'Sampai pengajuan RUU anggaran',
    'Đến khi trình dự toán ngân sách',
    'จนถึงการเสนอร่างงบประมาณ',
    'Bütçe tasarısının sunulmasına',
    'Do złożenia projektu budżetu',
    'Till budgetpropositionen läggs fram');

  L['헌법 제54조 · 회계연도 개시 90일 전'] = X(
    '憲法第54條 · 會計年度開始前90日',
    'Constitución art. 54 — 90 días antes del ejercicio',
    'Constituição art. 54 — 90 dias antes do exercício',
    'Constitution art. 54 — 90 jours avant l’exercice',
    'Verfassung Art. 54 — 90 Tage vor dem Haushaltsjahr',
    'Costituzione art. 54 — 90 giorni prima dell’esercizio',
    'Grondwet art. 54 — 90 dagen voor het begrotingsjaar',
    'Конституция, ст. 54 — за 90 дней до финансового года',
    'الدستور المادة 54 — قبل 90 يومًا من السنة المالية',
    'संविधान अनुच्छेद 54 — वित्त वर्ष से 90 दिन पहले',
    'Konstitusi Pasal 54 — 90 hari sebelum tahun anggaran',
    'Hiến pháp Điều 54 — 90 ngày trước năm tài khóa',
    'รัฐธรรมนูญ มาตรา 54 — 90 วันก่อนปีงบประมาณ',
    'Anayasa md. 54 — mali yıldan 90 gün önce',
    'Konstytucja art. 54 — 90 dni przed rokiem budżetowym',
    'Grundlagen art. 54 — 90 dagar före budgetåret');

  /* 헌법 제54조 ② — 12월 2일 */
  L['국회 예산안 처리 법정기한까지'] = X(
    '距國會預算案議決法定期限',
    'Hasta el plazo legal de aprobación del presupuesto',
    'Até o prazo legal de aprovação do orçamento',
    'Avant le délai légal d’adoption du budget',
    'Bis zur gesetzlichen Frist für den Haushaltsbeschluss',
    'Al termine di legge per l’approvazione del bilancio',
    'Tot de wettelijke termijn voor vaststelling van de begroting',
    'До установленного законом срока принятия бюджета',
    'حتى الموعد القانوني لإقرار الميزانية',
    'बजट पारित करने की वैधानिक समय-सीमा तक',
    'Sampai tenggat hukum pengesahan anggaran',
    'Đến hạn luật định thông qua ngân sách',
    'จนถึงกำหนดตามกฎหมายในการอนุมัติงบประมาณ',
    'Bütçenin kabulü için yasal süreye',
    'Do ustawowego terminu uchwalenia budżetu',
    'Till lagstadgad frist för budgetbeslut');

  L['헌법 제54조 · 회계연도 개시 30일 전'] = X(
    '憲法第54條 · 會計年度開始前30日',
    'Constitución art. 54 — 30 días antes del ejercicio',
    'Constituição art. 54 — 30 dias antes do exercício',
    'Constitution art. 54 — 30 jours avant l’exercice',
    'Verfassung Art. 54 — 30 Tage vor dem Haushaltsjahr',
    'Costituzione art. 54 — 30 giorni prima dell’esercizio',
    'Grondwet art. 54 — 30 dagen voor het begrotingsjaar',
    'Конституция, ст. 54 — за 30 дней до финансового года',
    'الدستور المادة 54 — قبل 30 يومًا من السنة المالية',
    'संविधान अनुच्छेद 54 — वित्त वर्ष से 30 दिन पहले',
    'Konstitusi Pasal 54 — 30 hari sebelum tahun anggaran',
    'Hiến pháp Điều 54 — 30 ngày trước năm tài khóa',
    'รัฐธรรมนูญ มาตรา 54 — 30 วันก่อนปีงบประมาณ',
    'Anayasa md. 54 — mali yıldan 30 gün önce',
    'Konstytucja art. 54 — 30 dni przed rokiem budżetowym',
    'Grundlagen art. 54 — 30 dagar före budgetåret');

  /* 국가재정법 제2조 — 12월 31일 */
  L['올해 회계연도 종료까지'] = X(
    '距本會計年度結束',
    'Hasta el fin del ejercicio fiscal',
    'Até o fim do exercício fiscal',
    'Avant la fin de l’exercice budgétaire',
    'Bis zum Ende des Haushaltsjahres',
    'Alla fine dell’esercizio finanziario',
    'Tot het einde van het begrotingsjaar',
    'До конца финансового года',
    'حتى نهاية السنة المالية',
    'वित्त वर्ष समाप्त होने तक',
    'Sampai akhir tahun anggaran',
    'Đến hết năm tài khóa',
    'จนถึงสิ้นปีงบประมาณ',
    'Mali yılın sonuna',
    'Do końca roku budżetowego',
    'Till budgetårets slut');

  L['국가재정법 제2조 · 12월 31일'] = X(
    '國家財政法第2條 · 12月31日',
    'Ley de Finanzas Públicas art. 2 — 31 de diciembre',
    'Lei de Finanças Públicas art. 2 — 31 de dezembro',
    'Loi sur les finances publiques art. 2 — 31 décembre',
    'Staatsfinanzgesetz Art. 2 — 31. Dezember',
    'Legge sulle finanze pubbliche art. 2 — 31 dicembre',
    'Wet op de rijksfinanciën art. 2 — 31 december',
    'Закон о государственных финансах, ст. 2 — 31 декабря',
    'قانون المالية العامة المادة 2 — 31 ديسمبر',
    'राष्ट्रीय वित्त अधिनियम अनुच्छेद 2 — 31 दिसंबर',
    'UU Keuangan Negara Pasal 2 — 31 Desember',
    'Luật Tài chính quốc gia Điều 2 — 31 tháng 12',
    'พ.ร.บ. การคลังแห่งชาติ มาตรา 2 — 31 ธันวาคม',
    'Kamu Maliyesi Kanunu md. 2 — 31 Aralık',
    'Ustawa o finansach publicznych art. 2 — 31 grudnia',
    'Lagen om statens finanser art. 2 — 31 december');

  /* 사이트에서 유일하게 100% 정확한 값 */
  L['올해 경과율'] = X(
    '本年度已過',
    'Año transcurrido',
    'Ano decorrido',
    'Année écoulée',
    'Jahr vergangen',
    'Anno trascorso',
    'Jaar verstreken',
    'Год пройден',
    'نسبة انقضاء السنة',
    'वर्ष बीता',
    'Tahun berjalan',
    'Năm đã trôi qua',
    'ปีที่ผ่านไป',
    'Yılın geçen kısmı',
    'Rok upłynął',
    'Året förflutet');

  L['한국 시각 기준'] = X(
    '以韓國時間為準',
    'Hora estándar de Corea',
    'Horário padrão da Coreia',
    'Heure standard de Corée',
    'Koreanische Standardzeit',
    'Ora standard coreana',
    'Koreaanse standaardtijd',
    'По корейскому времени',
    'بتوقيت كوريا القياسي',
    'कोरिया मानक समय',
    'Waktu Standar Korea',
    'Giờ chuẩn Hàn Quốc',
    'เวลามาตรฐานเกาหลี',
    'Kore standart saati',
    'Czas koreański',
    'Koreansk standardtid');

  /* 시장금리 — 매일 갱신 */
  L['국고채 3년'] = X(
    '國債3年',
    'Bono del Tesoro a 3 años',
    'Título do Tesouro de 3 anos',
    'Obligation d’État 3 ans',
    'Staatsanleihe 3 Jahre',
    'Titolo di Stato 3 anni',
    'Staatsobligatie 3 jaar',
    'Гособлигации, 3 года',
    'سندات حكومية 3 سنوات',
    'सरकारी बॉन्ड 3 वर्ष',
    'Obligasi negara 3 tahun',
    'Trái phiếu chính phủ 3 năm',
    'พันธบัตรรัฐบาล 3 ปี',
    '3 yıllık devlet tahvili',
    'Obligacje skarbowe 3-letnie',
    'Statsobligation 3 år');

  L['국채 조달금리의 기준'] = X(
    '國債融資成本基準',
    'Referencia del coste de financiación pública',
    'Referência do custo de financiamento público',
    'Référence du coût de financement de l’État',
    'Referenz für die Finanzierungskosten des Staates',
    'Riferimento per il costo del debito pubblico',
    'Referentie voor de financieringskosten van de staat',
    'Ориентир стоимости заимствований государства',
    'مرجع تكلفة اقتراض الدولة',
    'सरकारी उधारी लागत का मानक',
    'Acuan biaya utang negara',
    'Chuẩn cho chi phí vay của Chính phủ',
    'เกณฑ์อ้างอิงต้นทุนการกู้ของรัฐ',
    'Devletin borçlanma maliyeti göstergesi',
    'Punkt odniesienia kosztu długu państwa',
    'Riktmärke för statens upplåningskostnad');

  L['국고채 10년'] = X(
    '國債10年',
    'Bono del Tesoro a 10 años',
    'Título do Tesouro de 10 anos',
    'Obligation d’État 10 ans',
    'Staatsanleihe 10 Jahre',
    'Titolo di Stato 10 anni',
    'Staatsobligatie 10 jaar',
    'Гособлигации, 10 лет',
    'سندات حكومية 10 سنوات',
    'सरकारी बॉन्ड 10 वर्ष',
    'Obligasi negara 10 tahun',
    'Trái phiếu chính phủ 10 năm',
    'พันธบัตรรัฐบาล 10 ปี',
    '10 yıllık devlet tahvili',
    'Obligacje skarbowe 10-letnie',
    'Statsobligation 10 år');

  L['장기 조달금리'] = X(
    '長期融資成本',
    'Coste de financiación a largo plazo',
    'Custo de financiamento de longo prazo',
    'Coût de financement à long terme',
    'Langfristige Finanzierungskosten',
    'Costo del debito a lungo termine',
    'Financieringskosten op lange termijn',
    'Долгосрочная стоимость заимствований',
    'تكلفة الاقتراض طويل الأجل',
    'दीर्घकालिक उधारी लागत',
    'Biaya utang jangka panjang',
    'Chi phí vay dài hạn',
    'ต้นทุนการกู้ระยะยาว',
    'Uzun vadeli borçlanma maliyeti',
    'Długoterminowy koszt długu',
    'Långfristig upplåningskostnad');

  /* '2055년' 이라는 죽은 글자 대신 남은 시간 */
  L['국민연금 기금 소진까지'] = X(
    '距國民年金基金枯竭',
    'Hasta el agotamiento del fondo de pensiones',
    'Até o esgotamento do fundo de pensões',
    'Avant l’épuisement du fonds de pension',
    'Bis zur Erschöpfung des Rentenfonds',
    'All’esaurimento del fondo pensioni',
    'Tot uitputting van het pensioenfonds',
    'До исчерпания пенсионного фонда',
    'حتى نفاد صندوق المعاشات',
    'पेंशन कोष समाप्त होने तक',
    'Sampai dana pensiun habis',
    'Đến khi quỹ hưu trí cạn kiệt',
    'จนกองทุนบำนาญหมด',
    'Emeklilik fonunun tükenmesine',
    'Do wyczerpania funduszu emerytalnego',
    'Till pensionsfonden är tömd');

  L['제5차 재정계산 · 2055년 전망'] = X(
    '第5次財政計算 · 2055年預測',
    '5.º cálculo actuarial — proyección 2055',
    '5.º cálculo atuarial — projeção 2055',
    '5e calcul actuariel — projection 2055',
    '5. versicherungsmathematische Berechnung — Projektion 2055',
    '5º calcolo attuariale — proiezione 2055',
    '5e actuariële berekening — projectie 2055',
    '5-й актуарный расчёт — прогноз на 2055 год',
    'الحساب الاكتواري الخامس — توقع 2055',
    '5वाँ बीमांकिक आकलन — 2055 का अनुमान',
    'Perhitungan aktuaria ke-5 — proyeksi 2055',
    'Tính toán tài chính lần thứ 5 — dự báo 2055',
    'การคำนวณทางคณิตศาสตร์ประกันภัยครั้งที่ 5 — คาดการณ์ปี 2055',
    '5. aktüeryal hesaplama — 2055 projeksiyonu',
    '5. wyliczenie aktuarialne — prognoza na 2055',
    '5:e aktuariella beräkningen — prognos 2055');

})();
