console.log("JS connected!");


async function loadPosts() {
    const loading = document.querySelector('#loading');
    const container = document.querySelector('#posts-container');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Помилка завантаження даних');
        }

        const data = await response.json();

        // Рендеримо перші 5 постів
        const html = data.slice(0, 5)
            .map(post => `
                <div class="post">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `)
            .join('');

        container.innerHTML = html;
        loading.style.display = 'none'; // Ховаємо статус завантаження

    } catch (error) {
        console.error(error);
        loading.textContent = 'Помилка завантаження даних';
        loading.style.color = 'red';
    }
}

loadPosts();


const projects = [
    { id: 1, title: "Сайт-візитка", tech: "HTML/CSS" },
    { id: 2, title: "Todo App", tech: "JavaScript" },
    { id: 3, title: "Портфоліо", tech: "HTML/CSS/JS" }
];

const projectsContainer = document.querySelector('#projects-container');
const searchInput = document.querySelector('#search-input');

function renderProjects(list) {
    if (!projectsContainer) return;
    projectsContainer.innerHTML = list.map(p => `
        <div class="project-card">
            <h3>${p.title}</h3>
            <p>${p.tech}</p>
        </div>
    `).join('');
}

renderProjects(projects);

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        const filtered = projects.filter(p => p.title.toLowerCase().includes(value));
        renderProjects(filtered);
    });
}

const themeBtn = document.querySelector('#theme-toggle');
if (themeBtn) themeBtn.addEventListener('click', () => document.body.classList.toggle('dark-theme'));

const modal = document.querySelector('#modal');
const openBtn = document.querySelector('#open-modal');
const closeBtn = document.querySelector('#close-modal');

if (openBtn && closeBtn && modal) {
    openBtn.addEventListener('click', () => modal.classList.add('is-open'));
    closeBtn.addEventListener('click', () => modal.classList.remove('is-open'));
}