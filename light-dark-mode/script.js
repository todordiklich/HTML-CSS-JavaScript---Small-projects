const toggleSwitch = document.querySelector('input[type="checkbox"]');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');
const nav = document.getElementById('nav');

const DARK_THEME = true;
const LIGHT_THEME = false;

// Image mode
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_feeling_proud_${color}.svg`;
}

// Toggle Dark and Light Mode
function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? 'rgb(0 0 0 / 50%)'
    : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = isDark
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(0 0 0 / 50%)';

  isDark ? imageMode('dark') : imageMode('light');

  const text = toggleIcon.querySelector('.toggle-text');
  const icon = toggleIcon.querySelector('i');
  text.textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark
    ? icon.classList.replace('fa-sun', 'fa-moon')
    : icon.classList.replace('fa-moon', 'fa-sun');
}

//Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleDarkLightMode(DARK_THEME);
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleDarkLightMode(LIGHT_THEME);
    localStorage.setItem('theme', 'light');
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Apply default theme
const theme = localStorage.getItem('theme');
if (theme) {
  document.documentElement.setAttribute('data-theme', theme);

  if (theme === 'dark') {
    toggleDarkLightMode(DARK_THEME);
    toggleSwitch.checked = true;
  }
}
