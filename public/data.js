const DATA = {
  hospital: {
    name: "El Salam Specialist Hospital",
    location: "New Cairo",
    director: { name: "Dr. Mona Khalil", role: "Operations Director" }
  },

  now: { time: "10:42", day: "Tuesday" },

  kpis: {
    inFlow: 87,
    medianEndToEndMin: 142,
    longestWait: { patient: "Ahmed M.", stage: "Lab/Imaging", min: 47 }
  },

  stages: [
    { id: "registration", name: "Registration", count: 4,  medianWaitMin: 6,  yellow: 10, red: 20 },
    { id: "triage",       name: "Triage",       count: 7,  medianWaitMin: 11, yellow: 15, red: 25 },
    { id: "consult",      name: "Consultation", count: 23, medianWaitMin: 28, yellow: 30, red: 45 },
    { id: "lab",          name: "Lab/Imaging",  count: 19, medianWaitMin: 38, yellow: 25, red: 35 },
    { id: "pharmacy",     name: "Pharmacy",     count: 12, medianWaitMin: 9,  yellow: 15, red: 25 },
    { id: "discharge",    name: "Discharge",    count: 22, medianWaitMin: 14, yellow: 15, red: 25 }
  ],

  labQueue: [
    { name: "Ahmed M.",    waitMin: 47, test: "CT abdomen",         orderedBy: "Dr. Hassan", orderedAt: "09:14" },
    { name: "Fatima A.",   waitMin: 41, test: "CT chest",           orderedBy: "Dr. Hassan", orderedAt: "09:21" },
    { name: "Omar K.",     waitMin: 33, test: "X-Ray knee",         orderedBy: "Dr. Salem",  orderedAt: "09:38" },
    { name: "Yara S.",     waitMin: 28, test: "Ultrasound abdomen", orderedBy: "Dr. Aziz",   orderedAt: "09:45" },
    { name: "Mostafa H.",  waitMin: 21, test: "MRI lumbar",         orderedBy: "Dr. Hassan", orderedAt: "09:52" },
    { name: "Layla R.",    waitMin: 18, test: "Blood panel",        orderedBy: "Dr. Aziz",   orderedAt: "09:55" },
    { name: "Karim T.",    waitMin: 12, test: "X-Ray chest",        orderedBy: "Dr. Salem",  orderedAt: "10:01" }
  ],

  patientTimeline: {
    "Ahmed M.": [
      { stage: "Arrived",       at: "08:46", durationMin: null,  ongoing: false },
      { stage: "Registration",  at: "08:46", durationMin: 4,     ongoing: false },
      { stage: "Triage",        at: "08:51", durationMin: 8,     ongoing: false },
      { stage: "Consultation",  at: "09:02", durationMin: 12,    ongoing: false },
      { stage: "Lab/Imaging",   at: "09:14", durationMin: 47,    ongoing: true,  flag: "stalled" }
    ]
  },

  history: {
    last7Days: [
      { day: "Mon", reg: 8, tri: 11, con: 28, lab: 24, pha: 9,  dis: 14 },
      { day: "Tue", reg: 7, tri: 13, con: 31, lab: 41, pha: 9,  dis: 14 },
      { day: "Wed", reg: 8, tri: 12, con: 27, lab: 22, pha: 8,  dis: 13 },
      { day: "Thu", reg: 8, tri: 12, con: 29, lab: 39, pha: 9,  dis: 14 },
      { day: "Fri", reg: 5, tri: 8,  con: 21, lab: 18, pha: 7,  dis: 11 },
      { day: "Sat", reg: 9, tri: 14, con: 30, lab: 26, pha: 10, dis: 15 },
      { day: "Sun", reg: 8, tri: 11, con: 27, lab: 23, pha: 9,  dis: 14 }
    ],
    insight: "Lab/Imaging is your bottleneck on Tuesdays and Thursdays (39-41 min median vs 22 min on other days). Suggest reviewing CT staffing on those days.",
    perDoctor: [
      { doctor: "Dr. Hassan", labOrders: 31, avgTurnaroundMin: 44 },
      { doctor: "Dr. Aziz",   labOrders: 22, avgTurnaroundMin: 26 },
      { doctor: "Dr. Salem",  labOrders: 18, avgTurnaroundMin: 21 }
    ]
  },

  integrations: [
    { name: "Vezeeta",                desc: "Patient bookings sync",         status: "connected" },
    { name: "Clinisys (Lab)",         desc: "Lab orders + imaging events",   status: "connected" },
    { name: "Hospital HIS",           desc: "Patient records + admissions",  status: "connected" },
    { name: "WhatsApp Patient Updates", desc: "Outbound delay notifications", status: "coming-q2",
      note: "Requires compliance partner (Unifonic-class) for PDPL audit trail. Phase 2." }
  ],

  thresholds: [
    { stage: "Registration", yellow: 10, red: 20 },
    { stage: "Triage",       yellow: 15, red: 25 },
    { stage: "Consultation", yellow: 30, red: 45 },
    { stage: "Lab/Imaging",  yellow: 25, red: 35 },
    { stage: "Pharmacy",     yellow: 15, red: 25 },
    { stage: "Discharge",    yellow: 15, red: 25 }
  ]
};

function stageHeat(stage) {
  if (stage.medianWaitMin >= stage.red) return "red";
  if (stage.medianWaitMin >= stage.yellow) return "yellow";
  return "green";
}

function fmtMin(n) {
  if (n == null) return "-";
  const minLabel = (typeof t === "function") ? t("time.min") : "min";
  const hourLabel = (typeof t === "function") ? t("time.hour") : "h";
  if (n < 60) return n + " " + minLabel;
  const h = Math.floor(n / 60);
  const m = n % 60;
  return h + hourLabel + " " + (m ? m + minLabel : "");
}
