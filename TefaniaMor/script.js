document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('backgroundAudio');
  audio.play().catch(error => {
    console.log('Autoplay was prevented:', error);
  });

  document.getElementById('likeButton').addEventListener('click', function() {
    const content = document.querySelector('.content');
    const newContent = document.querySelector('.new-content');

    // Añadir clase para efecto de desvanecimiento
    content.classList.add('fade-out');

    // Esperar a que termine la transición
    setTimeout(() => {
      content.style.display = 'none';
      newContent.classList.remove('hidden');
      newContent.classList.add('fade-in');
    }, 1000); // Duración de la transición en milisegundos
  });
});

// Intenta reproducir el audio cuando la página se cargue
window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('backgroundAudio');
  
  // Verifica si ya hubo interacción del usuario
  if(localStorage.getItem('userInteracted') === 'true') {
    audio.play().catch(error => console.log('Autoplay no permitido'));
  }
  
  // Guarda la interacción del usuario al hacer clic en cualquier parte de la página
  document.addEventListener('click', () => {
    localStorage.setItem('userInteracted', 'true');
    audio.play();
  });
  
  // Reinicia el audio cuando termine (por el atributo loop esto no sería necesario)
  audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    audio.play();
  });
});