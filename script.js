const contactBtn = document.getElementById('contactBtn');
const email = document.getElementById('email');

contactBtn.addEventListener('click', () => {
  email.classList.toggle('hidden');
});
