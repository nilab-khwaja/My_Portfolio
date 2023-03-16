const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error-msg');

error.style.display = 'none';

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    error.style.display = 'block';
    error.innerHTML = 'please be sure that you entered correct email';
  }
});