document.addEventListener('DOMContentLoaded', function() {
    // 1. Установка текущего года в футере
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // 2. Добавление ресурсов
    const resources = [
        { name: "Figma", url: "https://www.figma.com" },
        { name: "Wordpress", url: "https://wordpress.com" },
        { name: "Битрикс", url: "https://bitrix24.ru" },
        { name: "Помощь по HTML/CSS/JS", url: "https://html-css-js.com" },
        { name: "Генератор цветов", url: "https://colorscheme.ru" },
        { name: "Нейросеть", url: "https://www.deepseek.com" },
        { name: "Создание теста", url: "https://onlinetestpad.com" }
    ];

    const resourcesList = document.getElementById('resourcesList');
    resources.forEach(resource => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = resource.url;
        a.textContent = resource.name;
        a.target = "_blank";
        li.appendChild(a);
        resourcesList.appendChild(li);
    });

    // 3. Добавление примеров кода
    document.getElementById('basicHtmlCode').textContent = 
`<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Мой сайт</title>
</head>
<body>
    <!-- Содержимое страницы -->
</body>
</html>`;

    document.getElementById('titleExample').textContent = 
`<h1>Главный заголовок</h1>
<h2>Подзаголовок</h2>
<h3>Меньший заголовок</h3>
<p>Это абзац текста.</p>`;

    document.getElementById('textFormattingExample').textContent = 
`<p><strong>Жирный текст</strong></p>
<p><em>Курсивный текст</em></p>
<p><u>Подчеркнутый текст</u></p>
<p><mark>Выделенный текст</mark></p>`;

    // 4. Обработка изображения
    const projectImage = document.querySelector('.project-image');
    projectImage.onerror = function() {
        this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f5f5f5"/><text x="200" y="150" font-family="Arial" font-size="16" text-anchor="middle" dominant-baseline="middle">Изображение веб-разработки</text></svg>';
        this.alt = "Изображение не загружено";
    };

    // 5. Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 6. Анимация при прокрутке
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.part, .project-section');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Инициализация анимации
    document.querySelectorAll('.part, .project-section').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Первый запуск
});
