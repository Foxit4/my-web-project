console.log("JS connected!");

const myProjects = [
    { id: 1, title: "Сайт-візитка", tech: "HTML/CSS" },
    { id: 2, title: "Магазин", tech: "JavaScript" },
    { id: 3, title: "Агро-Проєкт", tech: "MATLAB/JS" }
];

const list = document.querySelector('#projects-list');
if (list) {
    myProjects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = `${project.title} (${project.tech})`;
        list.appendChild(li);
    });
}

const themeBtn = document.querySelector('#theme-toggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
}

const openBtn = document.querySelector('#open-modal');
const closeBtn = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');

if (openBtn && closeBtn && modal) {
    openBtn.addEventListener('click', () => modal.classList.add('is-open'));
    closeBtn.addEventListener('click', () => modal.classList.remove('is-open'));
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal) {
        modal.classList.remove('is-open');
    }
});

const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#user-name');

if (form && nameInput) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (nameInput.value.trim().length < 2) {
            alert("Ім'я має містити щонайменше 2 символи");
        } else {
            alert("Форму відправлено! Дякую, " + nameInput.value);
            modal.classList.remove('is-open');
            form.reset();
        }
    });
}