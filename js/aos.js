document.addEventListener("DOMContentLoaded", function () {
  // Inicializa AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });

  // Si el contenido es cargado dinámicamente, reinicia AOS
  AOS.refresh(); 
});
