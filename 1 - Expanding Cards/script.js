const panelElements = document.querySelectorAll('.panel');

fetch('https://picsum.photos/v2/list?page=2&limit=5')
  .then((res) => res.json())
  .then((data) => {
    panelElements.forEach((panel, index) => {
      panel.style.backgroundImage = `url(${data[index].download_url})`;
      console.log(`${data[index].url}`);
    });
  });

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
