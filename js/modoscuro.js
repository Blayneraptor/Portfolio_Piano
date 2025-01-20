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

 //Parte de la animacion del listado de canciones

document.addEventListener('DOMContentLoaded', () => {
  const headerItem = document.querySelector('.Header__item');
  const cancionesList = document.querySelector('.canciones-list');

  headerItem.addEventListener('mouseover', () => {
    cancionesList.classList.remove('hide');
    cancionesList.classList.add('show');
  });

  headerItem.addEventListener('mouseout', () => {
    cancionesList.classList.remove('show');
    cancionesList.classList.add('hide');

    // Esperar a que termine la animación antes de ocultar
    cancionesList.addEventListener(
      'animationend',
      () => cancionesList.classList.remove('hide'),
      { once: true }
    );
  });
});
