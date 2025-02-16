let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
  document.documentElement.classList.add("transitioning");
  setTimeout(() => {
    document.documentElement.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
    document.documentElement.classList.remove("transitioning");
  }, 10);
};

const disableDarkmode = () => {
  document.documentElement.classList.add("transitioning");
  setTimeout(() => {
    document.documentElement.classList.remove("darkmode");
    localStorage.setItem("darkmode", "inactive");
    document.documentElement.classList.remove("transitioning");
  }, 10);
};

if (darkmode === 'active') enableDarkmode();

themeSwitch.addEventListener("click", () => {
  document.documentElement.classList.add("transitioning"); 
  setTimeout(() => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
    document.documentElement.classList.remove("transitioning"); 
  }, 50); 
});
