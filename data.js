// Автоматично сформовано на основі каталогу курсів Cisco Networking Academy
const CATEGORY_ORDER = ["Мережеві технології", "Захист інформації", "Операційні системи", "Програмування", "Штучний інтелект", "Загальноосвітні курси", "Іноземні мови"];
const COURSES = [
  {
    "name": "AP Cybersecurity",
    "hours": 150,
    "level": "Початковий",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/apcyber?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс, розроблений спільно з College Board, готує до AP-іспиту з кібербезпеки та сертифікації CCST Cybersecurity."
  },
  {
    "name": "Apply AI: Analyze Customer Reviews",
    "hours": 1,
    "level": "Початковий",
    "category": "Штучний інтелект",
    "link": "https://www.netacad.com/courses/apply-ai-analyze-customer-reviews?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Навчає застосовувати ШІ для тематичного аналізу відгуків клієнтів і перетворення даних на практичні висновки."
  },
  {
    "name": "Apply AI: Update Your Resume",
    "hours": 1,
    "level": "Початковий",
    "category": "Штучний інтелект",
    "link": "https://www.netacad.com/courses/apply-ai-update-your-resume?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Показує, як застосовувати інструменти штучного інтелекту для оновлення та покращення резюме."
  },
  {
    "name": "C Advanced",
    "hours": 30,
    "level": "Просунутий",
    "category": "Програмування",
    "link": "https://www.netacad.com/courses/c-advanced?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Поглиблений курс мови C: вказівники, структури даних, робота з файлами та складні алгоритми."
  },
  {
    "name": "C Essentials 1",
    "hours": 30,
    "level": "Початковий",
    "category": "Програмування",
    "link": "https://www.netacad.com/courses/c-essentials-1?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Базовий курс основ програмування мовою C: синтаксис, змінні, оператори, цикли."
  },
  {
    "name": "C Essentials 2",
    "hours": 30,
    "level": "Середній",
    "category": "Програмування",
    "link": "https://www.netacad.com/courses/c-essentials-2?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Продовження курсу C Essentials: функції, масиви, вказівники, робота з рядками та структурами."
  },
  {
    "name": "AP Networking",
    "hours": 150,
    "level": "Початковий",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/ap-ck-networking?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=truee",
    "desc": "Курс спільно з College Board для підготовки до AP-іспиту з мережевих технологій і сертифікації CCST Networking."
  },
  {
    "name": "Data Center Foundations",
    "hours": 15,
    "level": "Початковий",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/data-center-foundations?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Вступний курс про основи роботи центрів обробки даних: інфраструктура, сервери, зберігання даних, віртуалізація."
  },
  {
    "name": "Subnetting Mastery",
    "hours": 8,
    "level": "Середній",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/subnetting-mastery?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Практичний курс, присвячений опануванню підмереження IP-адрес (subnetting) і розрахунків масок підмережі."
  },
  {
    "name": "C++ Advanced",
    "hours": 30,
    "level": "Просунутий",
    "category": "Програмування",
    "link": "https://www.netacad.com/courses/c-plus-plus-advanced?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Поглиблене вивчення C++: об'єктно-орієнтоване програмування, шаблони, обробка виключень."
  },
  {
    "name": "C++ Essentials 1",
    "hours": 30,
    "level": "Початковий",
    "category": "Програмування",
    "link": "https://www.netacad.com/courses/c-plus-plus-essentials-1?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Основи програмування мовою C++ для початківців."
  },
  {
    "name": "C++ Essentials 2",
    "hours": 30,
    "level": "Середній",
    "category": "Програмування",
    "link": "https://www.netacad.com/courses/c-plus-plus-essentials-2?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Продовження курсу C++ Essentials: ООП, класи, об'єкти, спадкування."
  },
  {
    "name": "CCNA: Enterprise Networking, Security, and Automation",
    "hours": 70,
    "level": "Просунутий",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/ccna-enterprise-networking-security-automation?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Третій курс CCNA: масштабування мереж, безпека WAN, автоматизація мережі та SDN."
  },
  {
    "name": "CCNA: Switching, Routing, and Wireless Essentials",
    "hours": 70,
    "level": "Середній",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/ccna-switching-routing-wireless-essentials?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Другий курс CCNA: комутація, маршрутизація, VLAN, безпровідні мережі."
  },
  {
    "name": "Computer Hardware Basics",
    "hours": 15,
    "level": "Початковий",
    "category": "Операційні системи",
    "link": "https://www.netacad.com/courses/computer-hardware-basics?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Основи будови комп'ютера, апаратних компонентів та їх обслуговування."
  },
  {
    "name": "Create Digital Content, Communicate, and Collaborate Online",
    "hours": 6,
    "level": "Початковий",
    "category": "Загальноосвітні курси",
    "link": "https://www.netacad.com/courses/create-communicate-collaborate?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс цифрової грамотності про створення контенту, онлайн-комунікацію та співпрацю."
  },
  {
    "name": "Creating Compelling Reports",
    "hours": 4,
    "level": "Початковий",
    "category": "Загальноосвітні курси",
    "link": "https://www.netacad.com/courses/compelling-reports?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про створення переконливих і структурованих звітів для професійного середовища."
  },
  {
    "name": "CSS Essentials",
    "hours": 30,
    "level": "Початковий",
    "category": "Програмування",
    "link": "https://www.netacad.com/courses/css-essentials?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Основи каскадних таблиць стилів (CSS) для оформлення веб-сторінок."
  },
  {
    "name": "Cyber Threat Management",
    "hours": 15,
    "level": "Середній",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про виявлення, аналіз та реагування на кіберзагрози."
  },
  {
    "name": "CyberOps Associate",
    "hours": 70,
    "level": "Просунутий",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/cyberops-associate?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Поглиблений курс підготовки до ролі аналітика Security Operations Center (SOC) і сертифікації Cisco CyberOps Associate."
  },
  {
    "name": "Cybersecurity Essentials",
    "hours": 30,
    "level": "Середній",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/cybersecurity-essentials?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про принципи захисту мереж, даних і систем від кіберзагроз."
  },
  {
    "name": "Data Analytics Essentials",
    "hours": 20,
    "level": "Початковий",
    "category": "Штучний інтелект",
    "link": "https://www.netacad.com/courses/data-analytics-essentials?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Основи аналітики даних: збір, обробка та візуалізація даних."
  },
  {
    "name": "Data and Tools for Defense Analysts",
    "hours": 10,
    "level": "Середній",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/splunk-data-and-tools-for-defense-analysts?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про інструменти та джерела даних, які використовують аналітики захисту в SOC."
  },
  {
    "name": "Data Science Essentials with Python",
    "hours": 20,
    "level": "Початковий",
    "category": "Штучний інтелект",
    "link": "https://www.netacad.com/courses/data-science-essentials-with-python?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Проєктний курс про аналіз і візуалізацію даних за допомогою Python, Pandas і Matplotlib."
  },
  {
    "name": "Digital Awareness",
    "hours": 3,
    "level": "Початковий",
    "category": "Загальноосвітні курси",
    "link": "https://www.netacad.com/courses/digital-awareness?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Вступний курс цифрової грамотності про безпечне й ефективне використання технологій."
  },
  {
    "name": "Digital Safety and Security Awareness",
    "hours": 4,
    "level": "Початковий",
    "category": "Загальноосвітні курси",
    "link": "https://www.netacad.com/courses/digital-safety-security?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про безпечну поведінку в інтернеті та захист особистих даних."
  },
  {
    "name": "Discovering Entrepreneurship",
    "hours": 20,
    "level": "Початковий",
    "category": "Загальноосвітні курси",
    "link": "https://www.netacad.com/courses/discovering-entrepreneurship?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Перший курс серії про підприємництво: розвиток підприємницького мислення та розв'язання проблем."
  },
  {
    "name": "Endpoint Security",
    "hours": 15,
    "level": "Середній",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/endpoint-security?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про захист кінцевих пристроїв від кіберзагроз."
  },
  {
    "name": "Engaging Stakeholders for Success",
    "hours": 3,
    "level": "Початковий",
    "category": "Загальноосвітні курси",
    "link": "https://www.netacad.com/courses/engaging-stakeholders?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про визначення та ефективну взаємодію із зацікавленими сторонами проєкту."
  },
  {
    "name": "English for IT 1",
    "hours": 50,
    "level": "Середній",
    "category": "Іноземні мови",
    "link": "https://www.netacad.com/courses/english-for-it1?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс англійської мови для ІТ-фахівців на рівні B2 (частина 1)."
  },
  {
    "name": "English for IT 2",
    "hours": 50,
    "level": "Середній",
    "category": "Іноземні мови",
    "link": "https://www.netacad.com/courses/english-for-it2?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс англійської мови для ІТ-фахівців на рівні B2 (частина 2)."
  },
  {
    "name": "English for IT: Advice and Time",
    "hours": 4,
    "level": "Початковий",
    "category": "Іноземні мови",
    "link": "https://www.netacad.com/courses/english-advice-and-time?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Короткий курс англійської мови для ІТ-контексту: поради та часові конструкції."
  },
  {
    "name": "English for IT: Describing and Comparing",
    "hours": 4,
    "level": "Початковий",
    "category": "Іноземні мови",
    "link": "https://www.netacad.com/courses/english-for-it-describing-and-comparing?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс англійської мови для ІТ: опис і порівняння предметів та процесів."
  },
  {
    "name": "English for IT: Needs and Responsibilities",
    "hours": 4,
    "level": "Початковий",
    "category": "Іноземні мови",
    "link": "https://www.netacad.com/courses/english-for-it-needs-and-responsibilites?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс англійської мови для ІТ: висловлення потреб і обов'язків."
  },
  {
    "name": "English for IT: People and Quantities",
    "hours": 4,
    "level": "Початковий",
    "category": "Іноземні мови",
    "link": "https://www.netacad.com/courses/english-people-and-quantities?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс англійської мови для ІТ: лексика про людей і кількості."
  },
  {
    "name": "Ethical Hacker",
    "hours": 70,
    "level": "Просунутий",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/ethical-hacker?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про методи етичного хакінгу: тестування на проникнення й пошук вразливостей."
  },
  {
    "name": "Exploring IoT with Cisco Packet Tracer",
    "hours": 10,
    "level": "Початковий",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/exploring-iot-cisco-packet-tracer?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про моделювання пристроїв інтернету речей у симуляторі Cisco Packet Tracer."
  },
  {
    "name": "Exploring Networking with Cisco Packet Tracer",
    "hours": 10,
    "level": "Початковий",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/exploring-networking-cisco-packet-tracer?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про базові мережеві концепції з використанням симулятора Cisco Packet Tracer."
  },
  {
    "name": "Fundamentos de Linux (Linux Unhatched, ES)",
    "hours": 6,
    "level": "Початковий",
    "category": "Операційні системи",
    "link": "https://www.netacad.com/courses/fundamentos-de-linux?courseLang=es-XL&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Іспаномовна версія вступного курсу про основи операційної системи Linux."
  },
  {
    "name": "Getting Started with Cisco Packet Tracer",
    "hours": 8,
    "level": "Початковий",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/getting-started-cisco-packet-tracer?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Вступний курс роботи із симулятором мереж Cisco Packet Tracer."
  },
  {
    "name": "Hardware and Upgrade Support",
    "hours": 15,
    "level": "Середній",
    "category": "Операційні системи",
    "link": "https://www.netacad.com/courses/hardware-upgrade-support?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про діагностику, оновлення та підтримку апаратного забезпечення комп'ютерів."
  },
  {
    "name": "HTML Essentials",
    "hours": 30,
    "level": "Початковий",
    "category": "Програмування",
    "link": "https://www.netacad.com/courses/html-essentials?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Основи мови розмітки HTML для створення веб-сторінок."
  },
  {
    "name": "Industrial Cybersecurity",
    "hours": 15,
    "level": "Середній",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/industrial-cybersecurity?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про захист промислових систем керування (ICS/SCADA) від кіберзагроз."
  },
  {
    "name": "Industrial IoT and Control Systems in Energy",
    "hours": 15,
    "level": "Середній",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/industrial-iot-and-control-systems-in-energy?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про застосування промислового інтернету речей і систем керування в енергетиці."
  },
  {
    "name": "Industrial IoT and Control Systems in Manufacturing",
    "hours": 15,
    "level": "Середній",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/industrial-iot-and-control-systems-in-manufacturing?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про застосування промислового інтернету речей і систем керування у виробництві."
  },
  {
    "name": "Industrial Networking Essentials",
    "hours": 30,
    "level": "Середній",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/industrial-networking-essentials?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про основи промислових мереж і протоколів автоматизації."
  },
  {
    "name": "Introduction to Cybersecurity",
    "hours": 6,
    "level": "Початковий",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Вступний курс про основні загрози кібербезпеці для особистих даних і компаній."
  },
  {
    "name": "Introduction to Data Science",
    "hours": 8,
    "level": "Початковий",
    "category": "Штучний інтелект",
    "link": "https://www.netacad.com/courses/introduction-data-science?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Вступний курс про основні поняття науки про дані."
  },
  {
    "name": "Introduction to Greenhouse Gas Accounting for IT",
    "hours": 4,
    "level": "Початковий",
    "category": "Загальноосвітні курси",
    "link": "https://www.netacad.com/courses/introduction-to-greenhouse-gas-accounting-for-it?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про облік викидів парникових газів у контексті ІТ-індустрії."
  },
  {
    "name": "Introduction to IoT and Digital Transformation",
    "hours": 15,
    "level": "Початковий",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/introduction-iot?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Вступний курс про інтернет речей та цифрову трансформацію бізнесу."
  },
  {
    "name": "Introduction to Modern AI",
    "hours": 8,
    "level": "Початковий",
    "category": "Штучний інтелект",
    "link": "https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Вступний курс про основи сучасного штучного інтелекту та його застосування."
  },
  {
    "name": "Introduction to Splunk",
    "hours": 5,
    "level": "Початковий",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/splunk-introduction-to-splunk?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Вступний курс роботи з платформою Splunk для аналізу даних безпеки."
  },
  {
    "name": "IT Customer Support Basics",
    "hours": 10,
    "level": "Початковий",
    "category": "Операційні системи",
    "link": "https://www.netacad.com/courses/it-customer-support-basics?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про основи обслуговування клієнтів у сфері ІТ-підтримки."
  },
  {
    "name": "IT Essentials",
    "hours": 70,
    "level": "Середній",
    "category": "Операційні системи",
    "link": "https://www.netacad.com/courses/it-essentials?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про апаратне й програмне забезпечення ПК, мобільні пристрої, мережі та усунення несправностей."
  },
  {
    "name": "IT Support Essentials",
    "hours": 70,
    "level": "Середній",
    "category": "Операційні системи",
    "link": "https://www.netacad.com/courses/it-support-essentials?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про базові навички ІТ-підтримки користувачів і обладнання."
  },
  {
    "name": "JavaScript Essentials 1",
    "hours": 30,
    "level": "Початковий",
    "category": "Програмування",
    "link": "https://www.netacad.com/courses/javascript-essentials-1?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Основи програмування мовою JavaScript."
  },
  {
    "name": "JavaScript Essentials 2",
    "hours": 30,
    "level": "Середній",
    "category": "Програмування",
    "link": "https://www.netacad.com/courses/javascript-essentials-2?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Поглиблене вивчення JavaScript: DOM, асинхронність, ООП."
  },
  {
    "name": "Launching a Business Venture",
    "hours": 20,
    "level": "Початковий",
    "category": "Загальноосвітні курси",
    "link": "https://www.netacad.com/courses/business-venture?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Другий курс серії про підприємництво: запуск власного бізнесу."
  },
  {
    "name": "NDG Linux 1",
    "hours": 70,
    "level": "Середній",
    "category": "Операційні системи",
    "link": "https://www.netacad.com/courses/linux-1?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про основи адміністрування операційної системи Linux (частина 1)."
  },
  {
    "name": "NDG Linux 2",
    "hours": 70,
    "level": "Середній",
    "category": "Операційні системи",
    "link": "https://www.netacad.com/courses/linux-2?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про адміністрування Linux: користувачі, права доступу, процеси (частина 2)."
  },
  {
    "name": "Linux Essentials",
    "hours": 70,
    "level": "Початковий",
    "category": "Операційні системи",
    "link": "https://www.netacad.com/courses/linux-essentials?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про основи роботи з операційною системою Linux."
  },
  {
    "name": "Linux Unhatched",
    "hours": 6,
    "level": "Початковий",
    "category": "Операційні системи",
    "link": "https://www.netacad.com/courses/linux-unhatched?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Ігровий вступний курс про основи Linux для абсолютних початківців."
  },
  {
    "name": "Managing a Business Venture",
    "hours": 20,
    "level": "Початковий",
    "category": "Загальноосвітні курси",
    "link": "https://www.netacad.com/courses/managing-business-venture?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Третій курс серії про підприємництво: фінанси, облік, побудова команди та управління ризиками."
  },
  {
    "name": "Network Addressing and Basic Troubleshooting",
    "hours": 15,
    "level": "Початковий",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про базову адресацію в мережах та методи усунення несправностей."
  },
  {
    "name": "Network Defense",
    "hours": 15,
    "level": "Середній",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/network-defense?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про технології захисту мережі: брандмауери, VPN, системи виявлення й запобігання вторгненням."
  },
  {
    "name": "Network Support and Security",
    "hours": 20,
    "level": "Середній",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/network-support-security?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про підтримку мереж та основи мережевої безпеки."
  },
  {
    "name": "Networking Basics",
    "hours": 15,
    "level": "Початковий",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/networking-basics?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Вступний курс про принципи роботи комп'ютерних мереж."
  },
  {
    "name": "Networking Devices and Initial Configuration",
    "hours": 15,
    "level": "Початковий",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про мережеве обладнання та його початкове налаштування."
  },
  {
    "name": "Networking Essentials",
    "hours": 30,
    "level": "Початковий",
    "category": "Мережеві технології",
    "link": "https://www.netacad.com/courses/networking-essentials?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про принципи роботи мереж, пристрої, середовища передачі та протоколи."
  },
  {
    "name": "Operating Systems Basics",
    "hours": 15,
    "level": "Початковий",
    "category": "Операційні системи",
    "link": "https://www.netacad.com/courses/operating-systems-basics?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Основи роботи операційних систем Windows, Linux та мобільних ОС."
  },
  {
    "name": "Operating Systems Support",
    "hours": 15,
    "level": "Середній",
    "category": "Операційні системи",
    "link": "https://www.netacad.com/courses/operating-systems-support?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про підтримку та усунення несправностей операційних систем."
  },
  {
    "name": "Apply AI: Prompt Like an Engineer",
    "hours": 2,
    "level": "Початковий",
    "category": "Штучний інтелект",
    "link": "https://www.netacad.com/courses/apply-ai-prompt-like-engineer?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про створення ефективних запитів (промптів) до інструментів штучного інтелекту."
  },
  {
    "name": "Python Essentials 1",
    "hours": 30,
    "level": "Початковий",
    "category": "Програмування",
    "link": "https://www.netacad.com/courses/python-essentials-1?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Основи програмування мовою Python, підготовка до сертифікації PCEP."
  },
  {
    "name": "Python Essentials 2",
    "hours": 30,
    "level": "Середній",
    "category": "Програмування",
    "link": "https://www.netacad.com/courses/python-essentials-2?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Поглиблене вивчення Python: ООП, підготовка до сертифікації PCAP."
  },
  {
    "name": "Security and Connectivity Support",
    "hours": 15,
    "level": "Середній",
    "category": "Операційні системи",
    "link": "https://www.netacad.com/courses/security-connectivity-support?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про підтримку безпеки та мережевого підключення для ІТ-фахівців."
  },
  {
    "name": "Security Operations and the Defense Analyst",
    "hours": 10,
    "level": "Середній",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/splunk-security-operations-and-the-defense-analyst?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про роль аналітика захисту в центрі безпеки (SOC) з використанням Splunk."
  },
  {
    "name": "SOC Essentials: Introduction to Threat Hunting",
    "hours": 10,
    "level": "Середній",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/splunk-soc-essentials-introduction-to-threat-hunting?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про основи полювання на загрози (threat hunting) у SOC."
  },
  {
    "name": "SOC Essentials: Investigating with Splunk",
    "hours": 10,
    "level": "Середній",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/soc-essentials-investigating-with-splunk?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про розслідування інцидентів безпеки за допомогою Splunk."
  },
  {
    "name": "The Art of Investigation",
    "hours": 10,
    "level": "Середній",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/splunk-the-art-of-investigation?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про методи та мистецтво розслідування кіберінцидентів."
  },
  {
    "name": "The Cybersecurity Landscape",
    "hours": 5,
    "level": "Початковий",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/splunk-the-cybersecurity-landscape?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Вступний курс про сучасний ландшафт кіберзагроз для аналітиків захисту."
  },
  {
    "name": "Understanding Threats and Attacks",
    "hours": 10,
    "level": "Середній",
    "category": "Захист інформації",
    "link": "https://www.netacad.com/courses/splunk-understanding-threats-and-attacks?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс про типи кіберзагроз і методи атак."
  },
  {
    "name": "Using Computer and Mobile Devices",
    "hours": 4,
    "level": "Початковий",
    "category": "Загальноосвітні курси",
    "link": "https://www.netacad.com/courses/computer-mobile-devices?courseLang=en-US&deliveryType=INSTRUCTOR_LED&preview=true",
    "desc": "Курс цифрової грамотності про використання комп'ютерів і мобільних пристроїв."
  }
];
