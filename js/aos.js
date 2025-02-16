document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: "ease-in-out", // Tipo de animación
      once: true, // Solo animar una vez
      mirror: false, // No volver a animar al hacer scroll hacia arriba
    });
  });
  