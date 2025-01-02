document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    if (!modeToggle) {
        console.error('El botón de modo oscuro no se encuentra en el DOM.');
        return;
    }

    modeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            modeToggle.textContent = '☀️';
        } else {
            modeToggle.textContent = '🌙';
        }
    });
});