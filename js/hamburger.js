document.addEventListener('DOMContentLoaded', function() {
    const hamburgerToggle = document.getElementById('hamburger-toggle');
    const hamburgerMenu = document.getElementById('hamburger-menu');

    hamburgerToggle.addEventListener('click', function() {
        if (hamburgerMenu.style.display === 'block') {
            hamburgerMenu.style.display = 'none';
        } else {
            hamburgerMenu.style.display = 'block';
        }
    });
});