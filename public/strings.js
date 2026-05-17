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
    "callout.bottleneck.body": "Median wait is 38 minutes, 3 minutes above the red threshold. 19 patients waiting. Top contributor: Dr. Hassan's CT orders.",
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
    "history.table.title": "Lab orders by doctor, last 7 days",
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
    "settings.locale.dir.sub": "Layout uses logical CSS properties. The same files render LTR for English and RTL for Arabic, no rewrite.",
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

    "brand.tagline": "ترى ما يخفى. لحظةً بلحظة.",
    "brand.by": "من تطوير Medicena",

    "nav.live": "مباشر",
    "nav.history": "السجل",
    "nav.settings": "الإعدادات",

    "login.title": "تسجيل الدخول إلى مستشفاك",
    "login.help": "أدخل بيانات الدخول الخاصة بمستشفاك للمتابعة.",
    "login.hospital": "المستشفى",
    "login.email": "البريد الإلكتروني",
    "login.password": "كلمة المرور",
    "login.submit": "تسجيل الدخول",
    "login.note": "نسخة تجريبية. أي تسجيل دخول يفتح لوحة التحكم ببيانات افتراضية.",
    "login.footer.about": "نسخة تجريبية لاختبار مالك المنتج لدى Tactful",

    "dashboard.title": "حركة المرضى لحظةً بلحظة",
    "dashboard.now": "الآن",
    "dashboard.live": "مباشر",

    "kpi.inflow": "مرضى في المسار الآن",
    "kpi.median": "متوسط زمن المسار الكامل",
    "kpi.longest": "أطول انتظار حالياً",

    "stage.registration": "الاستقبال",
    "stage.triage": "الفرز",
    "stage.consult": "الكشف",
    "stage.lab": "المختبر والأشعة",
    "stage.pharmacy": "الصيدلية",
    "stage.discharge": "الخروج",
    "stage.waiting": "بالانتظار",

    "callout.bottleneck.title": "نقطة الاختناق الآن: المختبر والأشعة.",
    "callout.bottleneck.body": "متوسط الانتظار 38 دقيقة، أي 3 دقائق فوق الحد الأحمر. 19 مريضاً ينتظرون. السبب الأبرز: طلبات الأشعة المقطعية للدكتور حسن.",
    "callout.bottleneck.action": "تابع المختبر والأشعة ←",

    "lab.breadcrumb.live": "→ مباشر",
    "lab.title": "المختبر والأشعة",
    "lab.summary": "7 مرضى ينتظرون · متوسط 38 دقيقة · الحد 25 دقيقة",
    "lab.heat.red": "حرج",
    "lab.col.patient": "المريض",
    "lab.col.test": "الفحص",
    "lab.col.orderedBy": "طلبه",
    "lab.col.orderedAt": "وقت الطلب",
    "lab.col.waiting": "مدة الانتظار",
    "lab.flag.stalled": "متعثر",
    "lab.detail.sub": "أشعة مقطعية على البطن · طلبها د. حسن الساعة 09:14 · وصل الساعة 08:46",
    "lab.detail.flag": "متعثر في المختبر والأشعة",
    "lab.detail.note": "إجمالي الوقت في المستشفى حتى الآن: ساعة و56 دقيقة. مرحلة المختبر والأشعة وحدها استغرقت 47 دقيقة، بينما متوسط هذا النوع من الفحص 18 دقيقة فقط.",

    "history.title": "سجل نقاط الاختناق",
    "history.sub": "آخر 7 أيام · متوسط الانتظار لكل مرحلة، يوماً بيوم",
    "history.filter.label": "القسم",
    "history.filter.all": "جميع الأقسام",
    "history.filter.gen": "الباطنة",
    "history.filter.ped": "الأطفال",
    "history.filter.rad": "الأشعة",
    "history.insight.title": "تحليل",
    "history.chart.title": "متوسط الانتظار حسب المرحلة (بالدقائق)",
    "history.table.title": "طلبات المختبر حسب الطبيب، آخر 7 أيام",
    "history.table.note": "الدكتور حسن أبطأ بـ 23 دقيقة من أسرع طبيب بعده. الأمر يستحق مراجعة لأنماط طلبات الأشعة المقطعية.",
    "history.col.doctor": "الطبيب",
    "history.col.orders": "طلبات المختبر",
    "history.col.turnaround": "متوسط مدة الإنجاز",
    "history.flag.slowest": "الأبطأ",

    "settings.title": "الإعدادات",
    "settings.sub": "حدود المراحل والتكاملات",
    "settings.thresholds.title": "حدود المراحل",
    "settings.thresholds.sub": "إذا تجاوز متوسط الانتظار الحد الأحمر، تُعتبر المرحلة نقطة اختناق على الشاشة المباشرة.",
    "settings.thresholds.col.stage": "المرحلة",
    "settings.thresholds.col.yellow": "أصفر",
    "settings.thresholds.col.red": "أحمر",
    "settings.integrations.title": "التكاملات",
    "settings.integrations.sub": "بصيرة طبقة فوق أنظمتك الحالية. نقرأ البيانات منها، ولا نستبدل أي نظام.",
    "settings.integrations.connected": "متصل",
    "settings.integrations.coming": "قريباً، الربع الثاني",
    "settings.locale.title": "اللغة والاتجاه",
    "settings.locale.lang.label": "لغة الواجهة",
    "settings.locale.lang.sub": "في الإنتاج: العربية أساسية مع زر للإنجليزية. في هذه النسخة: استخدم زر اللغة في الأعلى.",
    "settings.locale.dir.label": "اتجاه القراءة",
    "settings.locale.dir.sub": "يعتمد التصميم خصائص CSS منطقية. الملفات نفسها تعمل LTR بالإنجليزية وRTL بالعربية، دون إعادة كتابة.",
    "settings.locale.dir.ltr": "من اليسار لليمين",
    "settings.locale.dir.rtl": "من اليمين لليسار",

    "time.min": "د",
    "time.hour": "س",
    "status.ongoing": "مستمر",
    "timeline.arrived": "الوصول"
  },

  eg: {
    "lang.label": "اللغة",
    "lang.en": "English",
    "lang.ar": "العربية",
    "lang.eg": "مصري",

    "brand.tagline": "تشوف اللي مش باين. لحظة بلحظة.",
    "brand.by": "تطوير Medicena",

    "nav.live": "دلوقتي",
    "nav.history": "السجل",
    "nav.settings": "الإعدادات",

    "login.title": "ادخل على لوحة مستشفاك",
    "login.help": "ادخل ببيانات الدخول بتاعت مستشفاك.",
    "login.hospital": "المستشفى",
    "login.email": "الإيميل",
    "login.password": "الباسورد",
    "login.submit": "دخول",
    "login.note": "دي نسخة تجريبية. أي تسجيل دخول هيفتح اللوحة ببيانات وهمية.",
    "login.footer.about": "نسخة تجريبية لتاسك Product Owner لـ Tactful",

    "dashboard.title": "حركة المرضى دلوقتي",
    "dashboard.now": "دلوقتي",
    "dashboard.live": "مباشر",

    "kpi.inflow": "مرضى في المسار دلوقتي",
    "kpi.median": "متوسط الوقت اللي بيقضيه المريض",
    "kpi.longest": "أطول انتظار حالياً",

    "stage.registration": "الاستقبال",
    "stage.triage": "الفرز",
    "stage.consult": "الكشف",
    "stage.lab": "المعمل والأشعة",
    "stage.pharmacy": "الصيدلية",
    "stage.discharge": "الخروج",
    "stage.waiting": "مستنيين",

    "callout.bottleneck.title": "الاختناق دلوقتي في المعمل والأشعة.",
    "callout.bottleneck.body": "متوسط الانتظار 38 دقيقة، يعني فوق الحد الأحمر بـ 3 دقايق. فيه 19 مريض مستنيين. أكبر سبب: طلبات الأشعة المقطعية بتاعت د. حسن.",
    "callout.bottleneck.action": "ادخل شوف المعمل والأشعة ←",

    "lab.breadcrumb.live": "→ مباشر",
    "lab.title": "المعمل والأشعة",
    "lab.summary": "7 مرضى مستنيين · متوسط 38 دقيقة · الحد 25 دقيقة",
    "lab.heat.red": "حرج",
    "lab.col.patient": "المريض",
    "lab.col.test": "الفحص",
    "lab.col.orderedBy": "طلبه",
    "lab.col.orderedAt": "اتطلب الساعة",
    "lab.col.waiting": "مستني من",
    "lab.flag.stalled": "عالق",
    "lab.detail.sub": "أشعة مقطعية على البطن · طلبها د. حسن الساعة 09:14 · وصل الساعة 08:46",
    "lab.detail.flag": "عالق في المعمل والأشعة",
    "lab.detail.note": "قضى في المستشفى لحد دلوقتي ساعة و56 دقيقة. المعمل والأشعة لوحدها أخدت 47 دقيقة، والمفروض ما تاخدش غير 18 دقيقة في النوع ده من الفحص.",

    "history.title": "سجل الاختناقات",
    "history.sub": "آخر 7 أيام · متوسط الانتظار لكل مرحلة، يوم بيوم",
    "history.filter.label": "القسم",
    "history.filter.all": "كل الأقسام",
    "history.filter.gen": "الباطنة",
    "history.filter.ped": "الأطفال",
    "history.filter.rad": "الأشعة",
    "history.insight.title": "اللي طلع معانا",
    "history.chart.title": "متوسط الانتظار حسب المرحلة (بالدقائق)",
    "history.table.title": "طلبات المعمل حسب الدكتور، آخر 7 أيام",
    "history.table.note": "د. حسن أبطأ بـ 23 دقيقة من أسرع دكتور بعده. يستاهل قعدة نراجع فيها أنماط طلبات الأشعة المقطعية.",
    "history.col.doctor": "الدكتور",
    "history.col.orders": "طلبات المعمل",
    "history.col.turnaround": "متوسط الإنجاز",
    "history.flag.slowest": "الأبطأ",

    "settings.title": "الإعدادات",
    "settings.sub": "حدود المراحل والتكاملات",
    "settings.thresholds.title": "حدود المراحل",
    "settings.thresholds.sub": "لو متوسط الانتظار عدّى الحد الأحمر، المرحلة بتطلع كاختناق على الشاشة المباشرة.",
    "settings.thresholds.col.stage": "المرحلة",
    "settings.thresholds.col.yellow": "أصفر",
    "settings.thresholds.col.red": "أحمر",
    "settings.integrations.title": "التكاملات",
    "settings.integrations.sub": "بصيرة بتشتغل فوق الأنظمة اللي عندك. بنقرأ منها البيانات، ومش بنستبدل حاجة.",
    "settings.integrations.connected": "متصل",
    "settings.integrations.coming": "قريب، الربع التاني",
    "settings.locale.title": "اللغة والاتجاه",
    "settings.locale.lang.label": "لغة الواجهة",
    "settings.locale.lang.sub": "في الإنتاج: عربي أساسي مع زر للإنجليزي. في النسخة دي: استعمل زر اللغة فوق.",
    "settings.locale.dir.label": "اتجاه القراءة",
    "settings.locale.dir.sub": "التصميم بيستعمل خصائص CSS منطقية. نفس الملفات بتشتغل LTR بالإنجليزي وRTL بالعربي، من غير إعادة كتابة.",
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

function getTheme() {
  const stored = (typeof localStorage !== "undefined") ? localStorage.getItem("basira_theme") : null;
  if (stored === "dark" || stored === "light") return stored;
  if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

function setTheme(mode) {
  if (mode !== "light" && mode !== "dark") return;
  localStorage.setItem("basira_theme", mode);
  applyTheme();
}

function toggleTheme() {
  setTheme(getTheme() === "dark" ? "light" : "dark");
}

function applyTheme() {
  const theme = getTheme();
  document.documentElement.setAttribute("data-theme", theme);
  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    const icon = btn.querySelector(".theme-toggle-icon");
    if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    btn.setAttribute("title", theme === "dark" ? "Light mode" : "Dark mode");
  });
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

function initialsFor(name) {
  if (!name) return "";
  const cleaned = name.replace(/[.]/g, "").split(/\s+/).filter(function (w) {
    return w && w.length > 1;
  });
  const pick = cleaned.slice(-2);
  return pick.map(function (w) { return w.charAt(0); }).join("").toUpperCase();
}
