const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');
function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}
hamburger.addEventListener('click', mobileMenu);

const navLink = document.querySelectorAll('.nav-link');

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}
navLink.forEach((n) => n.addEventListener('click', closeMenu));
