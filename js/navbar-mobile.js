document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
  
    if (menuToggle && navbar) {
      menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('show');
      });
  
      document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target) && event.target !== menuToggle) {
          navbar.classList.remove('show');
        }
      });
    }
  });
  