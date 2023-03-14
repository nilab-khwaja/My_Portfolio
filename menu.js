const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');
function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}
hamburger.addEventListener('click', mobileMenu);
function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((n) => n.addEventListener('click', closeMenu));