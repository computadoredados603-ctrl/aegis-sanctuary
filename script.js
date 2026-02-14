document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    // Fecha o menu ao clicar em um link (melhoria de UX mobile)
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('active'));
    });
});