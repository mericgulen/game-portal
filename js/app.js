const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//* show/hide menu

const navMenu = document.querySelector('.header__nav');
const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');

openMenu.addEventListener('click', () => {
  navMenu.style.right = '0';
  openMenu.style.display = 'none';
  closeMenu.style.display = 'inline-block';
});

closeMenu.addEventListener('click', () => {
  navMenu.style.right = '-30rem';
  closeMenu.style.display = 'none';
  openMenu.style.display = 'inline-block';
});
