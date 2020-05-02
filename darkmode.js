let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#dark-mode-toggle');
let icons = document.querySelectorAll('.icon-loc')
    icons = Array.from(icons);

const enableDarkMode = () => {
    
    document.body.classList.add('darkmode');

    icons.forEach((icon)=>{     
        icon.style.background = "url('../public/icons/sem-icon.png')";
        icon.style.backgroundSize = '30px 30px';
    });
    localStorage.setItem("darkMode", "enabled");
    
};

const disableDarkMode = () => {
    
    document.body.classList.remove('darkmode');
    icons.forEach((icon)=>{     
        icon.style.background = "url('../public/icons/sem.png')";
        icon.style.backgroundSize = '30px 30px';
    });
    localStorage.setItem("darkMode", "disabled");
};

if (darkMode === 'enabled') {
    
    enableDarkMode();
}
darkModeToggle.addEventListener("click", () => {

    darkMode = localStorage.getItem("darkMode");

      if (darkMode !== "enabled") {
          enableDarkMode();
          console.log(darkMode);
      }
      else { 
          disableDarkMode();
          console.log(darkMode);
      }
});