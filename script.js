// ==============================
// إعداد الخطة الكاملة (عربي + إنجليزي)
// ==============================
const plan = {
    ar: [
      {
        week: "الأسبوع الأول: أساسيات JavaScript",
        days: [
          "اليوم 1-2: فهم المتغيرات وأنواع البيانات",
          "اليوم 3-4: الدوال و الـ Scope",
          "اليوم 5: الكائنات والمصفوفات",
          "اليوم 6-7: مفاهيم ES6 الحديثة"
        ],
        resources: [
          { name: "📺 دورة جافاسكربت Elzero", url: "https://www.youtube.com/playlist?list=PLDoPjvoNmBAxXTPncg0W4lhVS32LO_xtQ" },
          { name: "📺 freeCodeCamp", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg" },
          { name: "📘 JavaScript.info", url: "https://javascript.info/" }
        ]
      },
      {
        week: "الأسبوع الثاني: البيئة الحديثة + React Basics",
        days: [
          "اليوم 1-2: تثبيت Node.js وتهيئة مشروع React باستخدام Vite",
          "اليوم 3: JSX و Virtual DOM",
          "اليوم 4-5: المكونات (Function Components)",
          "اليوم 6-7: مشروع صغير (قائمة مهام)"
        ],
        resources: [
          { name: "📺 React Crash Course - Traversy", url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8" },
          { name: "📺 Net Ninja React Tutorial", url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9i0_Pn1343Oe9-Xd6Kql1wU" },
          { name: "📘 React Docs Quick Start", url: "https://react.dev/learn" }
        ]
      },
      {
        week: "الأسبوع الثالث: الحالة (State) والمقاطع (Props)",
        days: [
          "اليوم 1: فهم مفهوم الـ State في React",
          "اليوم 2-3: استخدام useState مع الأمثلة",
          "اليوم 4: تمرير البيانات باستخدام props",
          "اليوم 5-6: التعامل مع الأحداث Events",
          "اليوم 7: مشروع صغير (عداد تفاعلي أو Toggle)"
        ],
        resources: [
          { name: "📘 React useState Hook", url: "https://react.dev/reference/react/useState" },
          { name: "📺 React State & Props - Net Ninja", url: "https://www.youtube.com/watch?v=4UZrsTqkcW4" },
          { name: "📺 Traversy Media: Props & State", url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=2500s" }
        ]
      },
      {
        week: "الأسبوع الرابع: مشاريع + إدارة الحالة + النشر",
        days: [
          "اليوم 1: مراجعة useEffect (التأثيرات الجانبية)",
          "اليوم 2-3: بناء مشروع كامل (ToDo App أو Weather App)",
          "اليوم 4: تحسين المشروع وتنظيم الملفات",
          "اليوم 5: مقدمة عن Context API",
          "اليوم 6: نشر المشروع على GitHub Pages",
          "اليوم 7: مراجعة عامة واستعداد للمشاريع القادمة"
        ],
        resources: [
          { name: "📘 useEffect Documentation", url: "https://react.dev/reference/react/useEffect" },
          { name: "📺 Build React App - freeCodeCamp", url: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
          { name: "📘 Deploy React App on GitHub Pages", url: "https://create-react-app.dev/docs/deployment/#github-pages" }
        ]
      }
    ],
    en: [
      {
        week: "Week 1: JavaScript Fundamentals",
        days: [
          "Days 1–2: Variables and Data Types",
          "Days 3–4: Functions and Scope",
          "Day 5: Objects and Arrays",
          "Days 6–7: ES6 Concepts"
        ],
        resources: [
          { name: "📺 Elzero JS Course", url: "https://www.youtube.com/playlist?list=PLDoPjvoNmBAxXTPncg0W4lhVS32LO_xtQ" },
          { name: "📺 freeCodeCamp JS Full Course", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg" },
          { name: "📘 JavaScript.info Guide", url: "https://javascript.info/" }
        ]
      },
      {
        week: "Week 2: Modern Setup + React Basics",
        days: [
          "Days 1–2: Setup Node.js & React project using Vite",
          "Day 3: JSX and Virtual DOM",
          "Days 4–5: Function Components",
          "Days 6–7: Mini Project (To-Do List)"
        ],
        resources: [
          { name: "📺 React Crash Course - Traversy", url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8" },
          { name: "📺 Net Ninja React Series", url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9i0_Pn1343Oe9-Xd6Kql1wU" },
          { name: "📘 React Docs Quick Start", url: "https://react.dev/learn" }
        ]
      },
      {
        week: "Week 3: State & Props",
        days: [
          "Day 1: Understanding State in React",
          "Days 2–3: Working with useState Hook",
          "Day 4: Passing Data with Props",
          "Days 5–6: Handling Events in React",
          "Day 7: Mini Project (Interactive Counter)"
        ],
        resources: [
          { name: "📘 React useState Hook", url: "https://react.dev/reference/react/useState" },
          { name: "📺 React State & Props - Net Ninja", url: "https://www.youtube.com/watch?v=4UZrsTqkcW4" },
          { name: "📺 Traversy Media: Props & State", url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=2500s" }
        ]
      },
      {
        week: "Week 4: Projects + State Management + Deployment",
        days: [
          "Day 1: useEffect Introduction",
          "Days 2–3: Build a Full React Project (ToDo or Weather App)",
          "Day 4: Organize Components & Folders",
          "Day 5: Introduction to Context API",
          "Day 6: Deploy to GitHub Pages",
          "Day 7: Review & Next Steps"
        ],
        resources: [
          { name: "📘 useEffect Documentation", url: "https://react.dev/reference/react/useEffect" },
          { name: "📺 Build React App - freeCodeCamp", url: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
          { name: "📘 Deploy React App on GitHub Pages", url: "https://create-react-app.dev/docs/deployment/#github-pages" }
        ]
      }
    ]
  };
  
  // ==============================
  // عناصر الواجهة
  // ==============================
  const planContainer = document.getElementById("planContainer");
  const toggleLangBtn = document.getElementById("toggleLang");
  const progressCircle = document.getElementById("progressCircle");
  const progressText = document.getElementById("progressText");
  const downloadBtn = document.getElementById("downloadBtn");
  const calendarGrid = document.getElementById("calendarGrid");
  
  let currentLang = localStorage.getItem("lang") || "ar";
  let completedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
  
  renderPlan();
  renderCalendar();
  updateProgress();
  
  // ==============================
  // عرض الخطة
  // ==============================
  function renderPlan() {
    planContainer.innerHTML = "";
    document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
  
    plan[currentLang].forEach((week, i) => {
      const weekDiv = document.createElement("div");
      weekDiv.className = "week";
  
      const weekTitle = document.createElement("h2");
      weekTitle.textContent = week.week;
      weekDiv.appendChild(weekTitle);
  
      week.days.forEach((task, j) => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "day";
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const taskKey = `${currentLang}-week${i}-task${j}`;
        checkbox.checked = completedTasks[taskKey] || false;
  
        checkbox.addEventListener("change", () => {
          completedTasks[taskKey] = checkbox.checked;
          localStorage.setItem("tasks", JSON.stringify(completedTasks));
          updateProgress();
        });
  
        const label = document.createElement("label");
        label.textContent = task;
  
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(label);
        weekDiv.appendChild(taskDiv);
      });
  
      const resDiv = document.createElement("div");
      resDiv.className = "resources";
      week.resources.forEach(r => {
        const link = document.createElement("a");
        link.href = r.url;
        link.target = "_blank";
        link.textContent = r.name;
        resDiv.appendChild(link);
      });
  
      weekDiv.appendChild(resDiv);
      planContainer.appendChild(weekDiv);
    });
  }
  
  // ==============================
  // تحديث التقدّم
  // ==============================
  function updateProgress() {
    const total = document.querySelectorAll(".day input").length;
    const done = Object.values(completedTasks).filter(Boolean).length;
    const percent = Math.round((done / total) * 100) || 0;
  
    progressText.textContent = `${percent}%`;
    progressCircle.style.setProperty("--progress", percent);
  }
  
  // ==============================
  // تبديل اللغة
  // ==============================
  toggleLangBtn.addEventListener("click", () => {
    currentLang = currentLang === "ar" ? "en" : "ar";
    localStorage.setItem("lang", currentLang);
    toggleLangBtn.textContent = currentLang === "ar" ? "🌐 English" : "🌐 العربية";
    renderPlan();
    renderCalendar();
  });
  
  // ==============================
  // تحميل PDF
  // ==============================
  downloadBtn.addEventListener("click", () => {
    window.print();
  });
  
  // ==============================
  // التقويم التفاعلي
  // ==============================
  function renderCalendar() {
    calendarGrid.innerHTML = "";
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const isArabic = currentLang === "ar";
  
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
  
    const daysNames = isArabic
      ? ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
      : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    const title = document.querySelector("#calendar h2");
    const monthName = now.toLocaleString(isArabic ? "ar-EG" : "en-US", { month: "long" });
    title.textContent = `${isArabic ? "📅 تقويم التقدّم لشهر" : "📅 Progress Calendar for"} ${monthName} ${year}`;
  
    daysNames.forEach(day => {
      const head = document.createElement("div");
      head.className = "day day-head";
      head.textContent = day;
      calendarGrid.appendChild(head);
    });
  
    let startOffset = isArabic ? (firstDay === 0 ? 6 : firstDay - 1) : firstDay;
    for (let i = 0; i < startOffset; i++) {
      const empty = document.createElement("div");
      empty.className = "day empty";
      calendarGrid.appendChild(empty);
    }
  
    const savedCalendar = JSON.parse(localStorage.getItem("calendarProgress")) || {};
  
    for (let d = 1; d <= lastDate; d++) {
      const cell = document.createElement("div");
      cell.className = "day";
      cell.textContent = d;
      const key = `${year}-${month}-${d}`;
      if (savedCalendar[key]) cell.classList.add("completed");
  
      cell.addEventListener("click", () => {
        cell.classList.toggle("completed");
        savedCalendar[key] = cell.classList.contains("completed");
        localStorage.setItem("calendarProgress", JSON.stringify(savedCalendar));
      });
  
      calendarGrid.appendChild(cell);
    }
  }
  