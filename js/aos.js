document.addEventListener("DOMContentLoaded", function () {

  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: false,
    mirror: false
  });

  AOS.refresh();

  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden"); 
        entry.target.classList.add("aos-animate"); 
        AOS.refresh(); 
      } else {
        entry.target.classList.add("hidden"); 
        entry.target.classList.remove("aos-animate"); 
      }
    });
  }, {
    threshold: 0.2 
  });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});
