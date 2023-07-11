const buttonElement = document.getElementsByClassName('btn')[0];
const searchElement = document.getElementsByClassName('search')[0];
const inputElement = document.querySelector('.input');

buttonElement.addEventListener('click', () => {
  searchElement.classList.toggle('active');
  inputElement.focus();
});
