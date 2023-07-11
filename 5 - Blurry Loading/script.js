const loadingTextEl = document.querySelector('.loading-text');
const bgEl = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadingTextEl.innerText = `${load}%`;
  loadingTextEl.style.opacity = 1 - load / 100;

  bgEl.style.filter = `blur(${30 - load / 3.3}px)`;
}
