document.addEventListener("DOMContentLoaded", function() {
  fetch("./sections/header.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("header-container").innerHTML = data;
          inicializarNavbar(); // Llamamos a la función para que agregue los event listeners
      })
      .catch(error => console.error("Error cargando el header:", error));
});

function inicializarNavbar() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (menuToggle && navbar) {
      menuToggle.addEventListener("click", () => {
          navbar.classList.toggle("show");
      });

      document.addEventListener("click", (event) => {
          if (!navbar.contains(event.target) && event.target !== menuToggle) {
              navbar.classList.remove("show");
          }
      });
  } else {
      console.error("Navbar o botón de menú no encontrados.");
  }
}
