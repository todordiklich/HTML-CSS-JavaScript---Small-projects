const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver(observerHandler, {
  threshold: 0.5,
});

//With the help of this method we can add observer to every single box, which allow us to disconnect it
// function addObserver(box) {
//   const io = new IntersectionObserver(observerHandler, {
//     threshold: 0.5,
//   });

//   io.observe(box);
// }

function observerHandler(entries, observer) {
  console.log(entries);
  entries.forEach((entry) => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  });
}

boxes.forEach((box) => observer.observe(box));

// The logic below uses regular JS functions
// const triggerBottom = (window.innerHeight / 5) * 4;

// window.addEventListener('scroll', checkBoxes);

// checkBoxes();

// function checkBoxes() {
//   boxes.forEach((box) => {
//     const boxTop = box.getBoundingClientRect().top;

//     if (boxTop < triggerBottom) {
//       box.classList.add('show');
//     } else {
//       box.classList.remove('show');
//     }
//   });
// }
