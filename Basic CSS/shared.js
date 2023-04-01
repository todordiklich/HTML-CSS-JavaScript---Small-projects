const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan .button');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

if (selectPlanButtons) {
  selectPlanButtons.forEach((button) =>
    button.addEventListener('click', () => {
      backdrop.style.display = 'block';
      // modal.style.display = 'block';
      modal.classList.add('open');
    })
  );
}

const closeModal = () => {
  backdrop.style.display = 'none';
  if (modal) {
    // modal.style.display = 'none';
    modal.classList.remove('open');
  }
};

backdrop.addEventListener('click', () => {
  closeModal();
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', () => {
  // mobileNav.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.style.display = 'block';
});
