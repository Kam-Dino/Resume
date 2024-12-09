// Тема переключения
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Объект переводов
const translations = {
    ru: {
        name: "👨‍💻 | Камолиддин",
        position: "Python Developer",
        aboutTitle: "О себе",
        aboutContent: "Краткое описание ваших навыков и достижений. Вы профессионал в своей области.",
        educationTitle: "Образование",
        educationContent: "Ваш университет и специальность.",
        experienceTitle: "Опыт работы",
        experienceContent: "Перечисление ваших мест работы и должностей.",
        skillsTitle: "Навыки",
        skillsList: ["Программирование", "Веб-дизайн", "Аналитика данных"]
    },
    en: {
        name: "👨‍💻 | Kamoliddin",
        position: "Python Developer",
        aboutTitle: "About Me",
        aboutContent: "A brief description of your skills and achievements. You are a professional in your field.",
        educationTitle: "Education",
        educationContent: "Your university and major.",
        experienceTitle: "Work Experience",
        experienceContent: "A list of your workplaces and positions.",
        skillsTitle: "Skills",
        skillsList: ["Programming", "Web Design", "Data Analytics"]
    },
    uz: {
        name: "👨‍💻 | Kamoliddin",
        position: "Python Dasturchi",
        aboutTitle: "O'zim Haqimda",
        aboutContent: "Sizning ko'nikma va yutuqlaringizning qisqacha tavsifi. Siz o'z sohangizda professionalsiz.",
        educationTitle: "Ta'lim",
        educationContent: "Sizning universitetingiz va mutaxassisligingiz.",
        experienceTitle: "Ish Tajribasi",
        experienceContent: "Sizning ish joylaringiz va lavozimlaringiz ro'yxati.",
        skillsTitle: "Ko'nikmalar",
        skillsList: ["Dasturlash", "Veb-dizayn", "Ma'lumotlar tahlili"]
    }
};

// Переключение языка
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.id.split('-')[1];
        translatePage(lang);
    });
});

function translatePage(lang) {
    if (!translations[lang]) return;

    // Перевод заголовка и позиции
    document.getElementById('name').innerText = translations[lang].name;
    document.getElementById('position').innerText = translations[lang].position;

    // Перевод секции "О себе"
    document.getElementById('about-title').innerText = translations[lang].aboutTitle;
    document.getElementById('about-content').innerText = translations[lang].aboutContent;

    // Перевод секции "Образование"
    document.getElementById('education-title').innerText = translations[lang].educationTitle;
    document.getElementById('education-content').innerText = translations[lang].educationContent;

    // Перевод секции "Опыт работы"
    document.getElementById('experience-title').innerText = translations[lang].experienceTitle;
    document.getElementById('experience-content').innerText = translations[lang].experienceContent;

    // Перевод секции "Навыки"
    document.getElementById('skills-title').innerText = translations[lang].skillsTitle;

    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = ''; // Очистка текущего списка
    translations[lang].skillsList.forEach(skill => {
        const li = document.createElement('li');
        li.innerText = skill;
        skillsList.appendChild(li);
    });
}

// Загрузка языка по умолчанию (например, русский)
translatePage('ru');