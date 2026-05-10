const STRINGS = {
  en: {
    "lang.label": "Language",
    "lang.en": "English",
    "lang.ar": "العربية",
    "lang.eg": "مصري",

    "brand.tagline": "Patient flow you can actually see.",
    "brand.by": "by Medicena",

    "nav.live": "Live",
    "nav.history": "History",
    "nav.settings": "Settings",

    "login.title": "Sign in to your hospital",
    "login.help": "Use your hospital credentials to continue.",
    "login.hospital": "Hospital",
    "login.email": "Email",
    "login.password": "Password",
    "login.submit": "Sign in",
    "login.note": "Demo build. Any sign-in opens the dashboard with mock data.",
    "login.footer.about": "Demo build for Tactful PO take-home",

    "dashboard.title": "Live patient flow",
    "dashboard.now": "Now",
    "dashboard.live": "Live",

    "kpi.inflow": "Patients in flow now",
    "kpi.median": "Median end-to-end time",
    "kpi.longest": "Longest wait",

    "stage.registration": "Registration",
    "stage.triage": "Triage",
    "stage.consult": "Consultation",
    "stage.lab": "Lab/Imaging",
    "stage.pharmacy": "Pharmacy",
    "stage.discharge": "Discharge",
    "stage.waiting": "waiting",

    "callout.bottleneck.title": "Lab/Imaging is your bottleneck right now.",
    "callout.bottleneck.body": "Median wait is 38 minutes — 13 minutes above the threshold. 19 patients waiting. Top contributor: Dr. Hassan's CT orders.",
    "callout.bottleneck.action": "Investigate Lab/Imaging →",

    "lab.breadcrumb.live": "← Live",
    "lab.title": "Lab/Imaging",
    "lab.summary": "7 patients waiting · 38 min median · threshold 25 min",
    "lab.heat.red": "Red",
    "lab.col.patient": "Patient",
    "lab.col.test": "Test",
    "lab.col.orderedBy": "Ordered by",
    "lab.col.orderedAt": "Ordered at",
    "lab.col.waiting": "Waiting",
    "lab.flag.stalled": "stalled",
    "lab.detail.sub": "CT abdomen · ordered by Dr. Hassan at 09:14 · arrived 08:46",
    "lab.detail.flag": "Stalled in Lab/Imaging",
    "lab.detail.note": "Total time in hospital so far: 1h 56m. Lab/Imaging step alone: 47 min (avg for this test type: 18 min).",

    "history.title": "Bottleneck history",
    "history.sub": "Last 7 days · median wait per stage, per day",
    "history.filter.label": "Department",
    "history.filter.all": "All departments",
    "history.filter.gen": "General Medicine",
    "history.filter.ped": "Pediatrics",
    "history.filter.rad": "Radiology",
    "history.insight.title": "Insight",
    "history.chart.title": "Median wait by stage (minutes)",
    "history.table.title": "Lab orders by doctor — last 7 days",
    "history.table.note": "Dr. Hassan averages 23 min above the next-fastest doctor. Worth a conversation about CT order patterns.",
    "history.col.doctor": "Doctor",
    "history.col.orders": "Lab orders",
    "history.col.turnaround": "Avg turnaround",
    "history.flag.slowest": "slowest",

    "settings.title": "Settings",
    "settings.sub": "Stage thresholds and integrations",
    "settings.thresholds.title": "Stage thresholds",
    "settings.thresholds.sub": "Median wait above the red threshold marks a stage as a bottleneck on the Live view.",
    "settings.thresholds.col.stage": "Stage",
    "settings.thresholds.col.yellow": "Yellow",
    "settings.thresholds.col.red": "Red",
    "settings.integrations.title": "Integrations",
    "settings.integrations.sub": "Basira sits on top of your existing systems. We pull data; we don't replace them.",
    "settings.integrations.connected": "Connected",
    "settings.integrations.coming": "Coming Q2",
    "settings.locale.title": "Localisation",
    "settings.locale.lang.label": "Interface language",
    "settings.locale.lang.sub": "Production: Arabic-first with English toggle. Demo: switch using the Language toggle in the header.",
    "settings.locale.dir.label": "Reading direction",
    "settings.locale.dir.sub": "Layout uses logical CSS properties. The same files render LTR for English and RTL for Arabic — no rewrite.",
    "settings.locale.dir.ltr": "LTR",
    "settings.locale.dir.rtl": "RTL",

    "time.min": "min",
    "time.hour": "h",
    "status.ongoing": "ongoing",
    "timeline.arrived": "Arrived"
  },

  ar: {
    "lang.label": "اللغة",
    "lang.en": "English",
    "lang.ar": "العربية",
    "lang.eg": "مصري",

    "brand.tagline": "تدفق المرضى كما لم تَرَه من قبل.",
    "brand.by": "من Medicena",

    "nav.live": "الآن",
    "nav.history": "السجل",
    "nav.settings": "الإعدادات",

    "login.title": "تسجيل الدخول إلى مستشفاك",
    "login.help": "استخدم بيانات اعتماد المستشفى للمتابعة.",
    "login.hospital": "المستشفى",
    "login.email": "البريد الإلكتروني",
    "login.password": "كلمة المرور",
    "login.submit": "تسجيل الدخول",
    "login.note": "نسخة تجريبية. أي تسجيل دخول يفتح لوحة التحكم ببيانات تجريبية.",
    "login.footer.about": "نسخة تجريبية لاختبار مالك المنتج لدى Tactful",

    "dashboard.title": "تدفق المرضى المباشر",
    "dashboard.now": "الآن",
    "dashboard.live": "مباشر",

    "kpi.inflow": "المرضى في المسار الآن",
    "kpi.median": "متوسط الوقت من البداية للنهاية",
    "kpi.longest": "أطول انتظار",

    "stage.registration": "الاستقبال",
    "stage.triage": "الفرز",
    "stage.consult": "الكشف",
    "stage.lab": "المختبر/الأشعة",
    "stage.pharmacy": "الصيدلية",
    "stage.discharge": "الخروج",
    "stage.waiting": "في الانتظار",

    "callout.bottleneck.title": "المختبر/الأشعة هو عنق الزجاجة الآن.",
    "callout.bottleneck.body": "متوسط الانتظار 38 دقيقة — أعلى من الحد بـ 13 دقيقة. 19 مريضاً في الانتظار. السبب الأكبر: طلبات الأشعة المقطعية للدكتور حسن.",
    "callout.bottleneck.action": "افحص المختبر/الأشعة ←",

    "lab.breadcrumb.live": "→ الآن",
    "lab.title": "المختبر/الأشعة",
    "lab.summary": "7 مرضى في الانتظار · متوسط 38 دقيقة · الحد 25 دقيقة",
    "lab.heat.red": "حرج",
    "lab.col.patient": "المريض",
    "lab.col.test": "الفحص",
    "lab.col.orderedBy": "بطلب من",
    "lab.col.orderedAt": "وقت الطلب",
    "lab.col.waiting": "وقت الانتظار",
    "lab.flag.stalled": "متوقف",
    "lab.detail.sub": "أشعة مقطعية على البطن · بطلب من د. حسن في 09:14 · وصل في 08:46",
    "lab.detail.flag": "متوقف في المختبر/الأشعة",
    "lab.detail.note": "إجمالي الوقت في المستشفى حتى الآن: ساعة و56 دقيقة. خطوة المختبر/الأشعة وحدها: 47 دقيقة (المتوسط لهذا النوع من الفحص: 18 دقيقة).",

    "history.title": "سجل عناق الزجاجة",
    "history.sub": "آخر 7 أيام · متوسط الانتظار لكل مرحلة، لكل يوم",
    "history.filter.label": "القسم",
    "history.filter.all": "كل الأقسام",
    "history.filter.gen": "الباطنة",
    "history.filter.ped": "الأطفال",
    "history.filter.rad": "الأشعة",
    "history.insight.title": "ملاحظة",
    "history.chart.title": "متوسط الانتظار حسب المرحلة (بالدقائق)",
    "history.table.title": "طلبات المختبر حسب الطبيب — آخر 7 أيام",
    "history.table.note": "الدكتور حسن أبطأ بـ 23 دقيقة من أسرع طبيب بعده. يستحق نقاشاً حول أنماط طلبات الأشعة المقطعية.",
    "history.col.doctor": "الطبيب",
    "history.col.orders": "طلبات المختبر",
    "history.col.turnaround": "متوسط مدة الإنجاز",
    "history.flag.slowest": "الأبطأ",

    "settings.title": "الإعدادات",
    "settings.sub": "حدود المراحل والتكاملات",
    "settings.thresholds.title": "حدود المراحل",
    "settings.thresholds.sub": "متوسط الانتظار فوق الحد الأحمر يضع المرحلة كعنق زجاجة على شاشة الآن.",
    "settings.thresholds.col.stage": "المرحلة",
    "settings.thresholds.col.yellow": "أصفر",
    "settings.thresholds.col.red": "أحمر",
    "settings.integrations.title": "التكاملات",
    "settings.integrations.sub": "بصيرة تعمل فوق أنظمتك الحالية. نقرأ البيانات؛ لا نستبدل أي نظام.",
    "settings.integrations.connected": "متصل",
    "settings.integrations.coming": "قريباً (الربع الثاني)",
    "settings.locale.title": "التوطين",
    "settings.locale.lang.label": "لغة الواجهة",
    "settings.locale.lang.sub": "الإنتاج: عربي أولاً مع تبديل للإنجليزية. هذه النسخة: استخدم زر اللغة في الأعلى.",
    "settings.locale.dir.label": "اتجاه القراءة",
    "settings.locale.dir.sub": "التصميم يستخدم خصائص CSS منطقية. الملفات نفسها تظهر من اليسار لليمين بالإنجليزية ومن اليمين لليسار بالعربية — بدون إعادة كتابة.",
    "settings.locale.dir.ltr": "من اليسار لليمين",
    "settings.locale.dir.rtl": "من اليمين لليسار",

    "time.min": "د",
    "time.hour": "س",
    "status.ongoing": "مستمر",
    "timeline.arrived": "وصل"
  },

  eg: {
    "lang.label": "اللغة",
    "lang.en": "English",
    "lang.ar": "العربية",
    "lang.eg": "مصري",

    "brand.tagline": "تدفق المرضى اللي تقدر تشوفه فعلاً.",
    "brand.by": "من Medicena",

    "nav.live": "دلوقتي",
    "nav.history": "السجل",
    "nav.settings": "الإعدادات",

    "login.title": "ادخل على مستشفاك",
    "login.help": "ادخل ببيانات المستشفى بتاعتك.",
    "login.hospital": "المستشفى",
    "login.email": "الإيميل",
    "login.password": "الباسورد",
    "login.submit": "ادخل",
    "login.note": "ده نسخة تجريبية. أي تسجيل دخول هيفتح اللوحة ببيانات وهمية.",
    "login.footer.about": "نسخة تجريبية لتاسك Tactful PO",

    "dashboard.title": "تدفق المرضى دلوقتي",
    "dashboard.now": "دلوقتي",
    "dashboard.live": "مباشر",

    "kpi.inflow": "مرضى في المسار دلوقتي",
    "kpi.median": "متوسط الوقت من الأول للآخر",
    "kpi.longest": "أطول انتظار",

    "stage.registration": "الاستقبال",
    "stage.triage": "الفرز",
    "stage.consult": "الكشف",
    "stage.lab": "المعمل/الأشعة",
    "stage.pharmacy": "الصيدلية",
    "stage.discharge": "الخروج",
    "stage.waiting": "مستنيين",

    "callout.bottleneck.title": "المعمل/الأشعة هو الاختناق دلوقتي.",
    "callout.bottleneck.body": "متوسط الانتظار 38 دقيقة — أكتر من الحد بـ 13 دقيقة. 19 مريض مستنيين. السبب الأساسي: طلبات الأشعة المقطعية بتاعت د. حسن.",
    "callout.bottleneck.action": "بُص على المعمل/الأشعة ←",

    "lab.breadcrumb.live": "→ دلوقتي",
    "lab.title": "المعمل/الأشعة",
    "lab.summary": "7 مرضى مستنيين · متوسط 38 دقيقة · الحد 25 دقيقة",
    "lab.heat.red": "أحمر",
    "lab.col.patient": "المريض",
    "lab.col.test": "الفحص",
    "lab.col.orderedBy": "طلبه",
    "lab.col.orderedAt": "اتطلب الساعة",
    "lab.col.waiting": "مستني",
    "lab.flag.stalled": "واقف",
    "lab.detail.sub": "أشعة مقطعية على البطن · طلبها د. حسن الساعة 09:14 · وصل 08:46",
    "lab.detail.flag": "واقف في المعمل/الأشعة",
    "lab.detail.note": "الوقت اللي قضاه في المستشفى لحد دلوقتي: ساعة و56 دقيقة. خطوة المعمل/الأشعة لوحدها: 47 دقيقة (المتوسط للنوع ده من الفحوصات: 18 دقيقة).",

    "history.title": "سجل الاختناقات",
    "history.sub": "آخر 7 أيام · متوسط الانتظار لكل مرحلة في كل يوم",
    "history.filter.label": "القسم",
    "history.filter.all": "كل الأقسام",
    "history.filter.gen": "الباطنة",
    "history.filter.ped": "الأطفال",
    "history.filter.rad": "الأشعة",
    "history.insight.title": "اللي لاحظناه",
    "history.chart.title": "متوسط الانتظار حسب المرحلة (بالدقائق)",
    "history.table.title": "طلبات المعمل حسب الدكتور — آخر 7 أيام",
    "history.table.note": "د. حسن أبطأ بـ 23 دقيقة من أسرع دكتور بعده. يستاهل نتكلم في موضوع طلبات الأشعة المقطعية.",
    "history.col.doctor": "الدكتور",
    "history.col.orders": "طلبات المعمل",
    "history.col.turnaround": "متوسط الإنجاز",
    "history.flag.slowest": "الأبطأ",

    "settings.title": "الإعدادات",
    "settings.sub": "حدود المراحل والتكاملات",
    "settings.thresholds.title": "حدود المراحل",
    "settings.thresholds.sub": "متوسط الانتظار فوق الحد الأحمر بيخلي المرحلة دي اختناق على شاشة دلوقتي.",
    "settings.thresholds.col.stage": "المرحلة",
    "settings.thresholds.col.yellow": "أصفر",
    "settings.thresholds.col.red": "أحمر",
    "settings.integrations.title": "التكاملات",
    "settings.integrations.sub": "بصيرة بتشتغل فوق الأنظمة اللي عندك. بنقرأ البيانات، مش بنغير حاجة.",
    "settings.integrations.connected": "متصل",
    "settings.integrations.coming": "قريب (الربع التاني)",
    "settings.locale.title": "اللغة والاتجاه",
    "settings.locale.lang.label": "لغة الواجهة",
    "settings.locale.lang.sub": "في الإنتاج: عربي بالأساس مع زر للإنجليزي. في النسخة دي: استعمل زر اللغة فوق.",
    "settings.locale.dir.label": "اتجاه القراءة",
    "settings.locale.dir.sub": "التصميم بيستعمل خصائص CSS منطقية. نفس الملفات بتشتغل من الشمال لليمين بالإنجليزي ومن اليمين للشمال بالعربي — من غير إعادة كتابة.",
    "settings.locale.dir.ltr": "من الشمال لليمين",
    "settings.locale.dir.rtl": "من اليمين للشمال",

    "time.min": "د",
    "time.hour": "س",
    "status.ongoing": "لسه شغال",
    "timeline.arrived": "وصل"
  }
};

const STAGE_KEYS = ["registration", "triage", "consult", "lab", "pharmacy", "discharge"];
const STAGE_KEY_BY_ID = {
  registration: "stage.registration",
  triage: "stage.triage",
  consult: "stage.consult",
  lab: "stage.lab",
  pharmacy: "stage.pharmacy",
  discharge: "stage.discharge"
};

function getLang() {
  const stored = (typeof localStorage !== "undefined") ? localStorage.getItem("basira_lang") : null;
  return (stored && STRINGS[stored]) ? stored : "en";
}

function setLang(code) {
  if (!STRINGS[code]) return;
  localStorage.setItem("basira_lang", code);
  applyLang();
}

function t(key) {
  const lang = getLang();
  return (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.en[key] || key;
}

function applyLang() {
  const lang = getLang();
  const dir = (lang === "en") ? "ltr" : "rtl";
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", dir);

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
    const spec = el.getAttribute("data-i18n-attr");
    spec.split(";").forEach(function (pair) {
      const [attr, key] = pair.split(":").map(function (s) { return s.trim(); });
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });

  document.querySelectorAll(".lang-toggle-btn").forEach(function (btn) {
    btn.classList.toggle("lang-toggle-active", btn.dataset.lang === lang);
  });

  if (typeof onLangApplied === "function") onLangApplied(lang);
}
