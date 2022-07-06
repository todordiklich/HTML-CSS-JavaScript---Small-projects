const panelElements = document.querySelectorAll('.panel');

panelElements.forEach((element) => {
  element.addEventListener('click', function (e) {
    removeActive();
    element.classList.add('active');
  });
});

function removeActive() {
  panelElements.forEach((element) => {
    element.classList.remove('active');
  });
}
