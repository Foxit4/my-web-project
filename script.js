console.log("JS connected!");

// 1. Дані (Частина 2)
const projects = [
    { id: 1, title: "Сайт-візитка", tech: "HTML/CSS" },
    { id: 2, title: "Todo App", tech: "JavaScript" },
    { id: 3, title: "Портфоліо", tech: "HTML/CSS/JS" },
    { id: 4, title: "Агро-Проєкт", tech: "MATLAB/JS" },
    { id: 5, title: "Магазин", tech: "React" }
];

const container = document.querySelector('#projects-container');
const searchInput = document.querySelector('#search-input');

// 2. Функція створення HTML через шаблонні рядки (Частина 2)
function createProjectCard(project) {
    return `
        <article class="project-card">
            <h3>${project.title}</h3>
            <p>Технології: ${project.tech}</p>
        </article>
    `;
}

// 3. Функція рендерингу через MAP (Частина 4)
function renderProjects(list) {
    if (!container) return;
    
    // Створюємо HTML і вставляємо в контейнер
    container.innerHTML = list.map(project => createProjectCard(project)).join('');
}

// Початковий запуск
renderProjects(projects);

// 4. Пошук/Фільтрація (Частина 5)
if (searchInput) {
    searchInput.addEventListener('input', () => {
        const value = searchInput.value.toLowerCase();
        
        const filtered = projects.filter(project => 
            project.title.toLowerCase().includes(value) || 
            project.tech.toLowerCase().includes(value)
        );
        
        renderProjects(filtered);
    });
}

// --- Попередній функціонал (Тема та Модалка) ---

const themeBtn = document.querySelector('#theme-toggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => document.body.classList.toggle('dark-theme'));
}

const openBtn = document.querySelector('#open-modal');
const closeBtn = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');

if (openBtn && closeBtn && modal) {
    openBtn.addEventListener('click', () => modal.classList.add('is-open'));
    closeBtn.addEventListener('click', () => modal.classList.remove('is-open'));
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal) modal.classList.remove('is-open');
});

const form = document.querySelector('#contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.querySelector('#user-name');
        if (nameInput.value.trim().length < 2) {
            alert("Ім'я занадто коротке");
        } else {
            alert(`Дякую, ${nameInput.value}! Форму відправлено.`);
            modal.classList.remove('is-open');
            form.reset();
        }
    });
}