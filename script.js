const container = document.getElementById("container");
const langToggle = document.getElementById("langToggle");
const downloadBtn = document.getElementById("downloadBtn");
const calendarGrid = document.getElementById("calendarGrid");

let currentLang = localStorage.getItem("lang") || "ar";
let progress = JSON.parse(localStorage.getItem("progress")) || {};

const plan = {
  ar: [
    { week: "الأسبوع 1: أساسيات React", days: ["مقدمة عن React", "بيئة العمل", "المكونات (Components)", "JSX", "Props و State", "تمارين عملية", "مراجعة أسبوعية"] },
    { week: "الأسبوع 2: التفاعل مع المستخدم", days: ["الأحداث (Events)", "Forms والتحكم فيها", "قوائم وعناصر متكررة", "شرطية العرض", "تمارين تفاعلية", "مشروع مصغر", "مراجعة"] },
    { week: "الأسبوع 3: إدارة الحالة المتقدمة", days: ["رفع الحالة (Lifting State)", "مفهوم Context", "useReducer Hook", "تمارين", "تحسين الأداء", "نصائح متقدمة", "مراجعة"] },
    { week: "الأسبوع 4: React Router", days: ["المسارات", "المعاملات", "التنقل البرمجي", "Nested Routes", "مشروع مصغر", "تحسين تجربة المستخدم", "مراجعة"] },
  ],
  en: [
    { week: "Week 1: React Basics", days: ["Intro to React", "Setup Environment", "Components", "JSX", "Props & State", "Practice", "Weekly Review"] },
    { week: "Week 2: User Interaction", days: ["Events", "Forms", "Lists", "Conditional Rendering", "Practice Tasks", "Mini Project", "Review"] },
    { week: "Week 3: State Management", days: ["Lifting State", "Context API", "useReducer", "Exercises", "Performance Tips", "Advanced Notes", "Review"] },
    { week: "Week 4: React Router", days: ["Routing", "Params", "Programmatic Navigation", "Nested Routes", "Mini Project", "UX Tips", "Review"] },
  ]
};

function renderWeeks() {
  container.innerHTML = "";
  const langData = plan[currentLang];
  langToggle.textContent = currentLang === "ar" ? "🌐 English" : "🌐 العربية";
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";

  langData.forEach((week, wi) => {
    const weekCard = document.createElement("div");
    weekCard.className = "week-card";
    const title = document.createElement("div");
    title.className = "week-title";
    title.textContent = week.week;
    weekCard.appendChild(title);

    week.days.forEach((day, di) => {
      const task = document.createElement("div");
      task.className = "task";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const key = `${wi}-${di}-${currentLang}`;
      checkbox.checked = !!progress[key];
      checkbox.addEventListener("change", () => {
        progress[key] = checkbox.checked;
        localStorage.setItem("progress", JSON.stringify(progress));
      });
      const label = document.createElement("label");
      label.textContent = day;
      task.appendChild(checkbox);
      task.appendChild(label);
      weekCard.appendChild(task);
    });

    container.appendChild(weekCard);
  });
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("lang", currentLang);
  renderWeeks();
});

// ===============================
// تقويم الشهر الحالي الفعلي
// ===============================
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
  
    // عنوان التقويم
    const title = document.querySelector("#calendar h2");
    const monthName = now.toLocaleString(isArabic ? "ar-EG" : "en-US", { month: "long" });
    title.textContent = `${isArabic ? "📅 تقويم التقدم لشهر" : "📅 Progress Calendar for"} ${monthName} ${year}`;
  
    // إضافة رؤوس الأيام
    daysNames.forEach(dayName => {
      const head = document.createElement("div");
      head.className = "day day-head";
      head.textContent = dayName;
      head.style.fontWeight = "bold";
      head.style.background = "#e6f0ff";
      calendarGrid.appendChild(head);
    });
  
    // أيام فارغة قبل بداية الشهر
    let startOffset = isArabic ? (firstDay === 0 ? 6 : firstDay - 1) : firstDay;
    for (let i = 0; i < startOffset; i++) {
      const empty = document.createElement("div");
      empty.className = "day empty";
      calendarGrid.appendChild(empty);
    }
  
    // الأيام الفعلية للشهر
    const savedCalendar = JSON.parse(localStorage.getItem("calendarProgress")) || {};
  
    for (let day = 1; day <= lastDate; day++) {
      const cell = document.createElement("div");
      cell.className = "day";
      cell.textContent = day;
      const key = `${year}-${month}-${day}`;
      if (savedCalendar[key]) cell.classList.add("completed");
  
      cell.addEventListener("click", () => {
        cell.classList.toggle("completed");
        savedCalendar[key] = cell.classList.contains("completed");
        localStorage.setItem("calendarProgress", JSON.stringify(savedCalendar));
      });
  
      calendarGrid.appendChild(cell);
    }
  }
  

renderWeeks();
renderCalendar();
// ===============================
// تحميل PDF احترافي بخط Cairo + شعار React ⚛️
// ===============================
downloadBtn.addEventListener("click", async () => {
    try {
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4"
      });
  
      const isArabic = currentLang === "ar";
  
      // تحميل الخط وتحويله Base64
      const fontUrl = "Cairo-Regular.ttf";
      const response = await fetch(fontUrl);
      if (!response.ok) throw new Error("لم يتم العثور على ملف الخط Cairo-Regular.ttf");
      const fontBuffer = await response.arrayBuffer();
      const fontBase64 = btoa(
        new Uint8Array(fontBuffer).reduce((data, byte) => data + String.fromCharCode(byte), "")
      );
  
      pdf.addFileToVFS("Cairo-Regular.ttf", fontBase64);
      pdf.addFont("Cairo-Regular.ttf", "Cairo", "normal");
      pdf.setFont("Cairo");
  
      // الخلفية الزرقاء الخفيفة للصفحة الأولى
      pdf.setFillColor(245, 250, 255);
      pdf.rect(0, 0, 210, 297, "F");
  
      // شعار React (رمز ⚛️)
      pdf.setFontSize(40);
      pdf.setTextColor(11, 116, 222);
      pdf.text("⚛️", 105, 25, { align: "center" });
  
      // العنوان الرئيسي
      pdf.setFontSize(22);
      pdf.setTextColor(11, 116, 222);
      pdf.text(
        isArabic ? "خطة تعلم React (٤ أسابيع)" : "React Learning Plan (4 Weeks)",
        105,
        45,
        { align: "center" }
      );
  
      // التاريخ
      pdf.setFontSize(10);
      pdf.setTextColor(100);
      const date = new Date().toLocaleDateString(isArabic ? "ar-EG" : "en-US");
      pdf.text(`${isArabic ? "تاريخ الإنشاء:" : "Created:"} ${date}`, 105, 52, { align: "center" });
  
      // المحتوى
      let y = 65;
      pdf.setFontSize(13);
      pdf.setTextColor(0);
  
      plan[currentLang].forEach((week, i) => {
        if (y > 250) {
          pdf.addPage();
          y = 20;
        }
  
        // عنوان الأسبوع داخل مستطيل جميل
        pdf.setFillColor(11, 116, 222);
        pdf.roundedRect(10, y, 190, 10, 2, 2, "F");
        pdf.setTextColor(255);
        pdf.text(week.week, isArabic ? 195 : 15, y + 7, {
          align: isArabic ? "right" : "left",
        });
  
        y += 15;
  
        pdf.setFontSize(12);
        pdf.setTextColor(30);
  
        week.days.forEach((task) => {
          if (y > 260) {
            pdf.addPage();
            y = 20;
          }
          const textX = isArabic ? 195 : 15;
          const options = {
            align: isArabic ? "right" : "left",
            maxWidth: 180,
          };
          pdf.text(`• ${task}`, textX, y, options);
          y += 7;
        });
  
        y += 5;
      });
  
      // صفحة التقويم
      pdf.addPage();
      pdf.setFillColor(245, 248, 255);
      pdf.rect(0, 0, 210, 297, "F");
  
      pdf.setFontSize(18);
      pdf.setTextColor(11, 116, 222);
      pdf.text(
        isArabic ? "📅 تقويم التقدم" : "📅 Progress Calendar",
        105,
        20,
        { align: "center" }
      );
  
      const startX = 20, startY = 40, cellW = 25, cellH = 20;
      const now = new Date();
      const year = now.getFullYear(), month = now.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();
      const monthName = now.toLocaleString(isArabic ? "ar-EG" : "en-US", { month: "long" });
  
      pdf.setFontSize(14);
      pdf.text(`${monthName} ${year}`, 105, 32, { align: "center" });
      pdf.setDrawColor(180);
  
      // رؤوس الأيام
      const days = isArabic
        ? ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
        : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
      pdf.setFontSize(10);
      days.forEach((d, i) => {
        const x = startX + i * cellW;
        pdf.text(d, x + cellW / 2, startY - 5, { align: "center" });
      });
  
      // رسم الأيام
      let offset = isArabic ? (firstDay === 0 ? 6 : firstDay - 1) : firstDay;
      let x = startX + offset * cellW;
      let yCal = startY;
      pdf.setFontSize(12);
  
      for (let d = 1; d <= lastDate; d++) {
        pdf.rect(x, yCal, cellW, cellH);
        pdf.text(String(d), x + cellW / 2, yCal + 12, { align: "center" });
  
        x += cellW;
        if (x > startX + 6 * cellW) {
          x = startX;
          yCal += cellH;
        }
      }
  
      pdf.save(isArabic ? "خطة_تعلم_React_احترافية.pdf" : "React_Pro_Learning_Plan.pdf");
    } catch (err) {
      alert("⚠️ حدث خطأ أثناء إنشاء الملف:\n" + err.message);
      console.error(err);
    }
  });
  