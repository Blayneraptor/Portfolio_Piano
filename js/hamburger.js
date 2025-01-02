document.addEventListener('DOMContentLoaded', function() {
    const hamburgerToggle = document.getElementById('hamburger-toggle');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menuLinks = hamburgerMenu.querySelectorAll('a');

    hamburgerToggle.addEventListener('click', function() {
        if (hamburgerMenu.classList.contains('open')) {
            hamburgerMenu.classList.remove('open');
        } else {
            hamburgerMenu.classList.add('open');
        }
    });

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            hamburgerMenu.classList.remove('open');
        });
    });
});