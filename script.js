// Toggle mostra/nasconde email
const contactBtn = document.getElementById('contactBtn');
const email = document.getElementById('email');
contactBtn.addEventListener('click', () => {
  email.classList.toggle('hidden');
});

// Toggle dark/light mode
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if(document.body.classList.contains('light-mode')){
    themeToggle.textContent = '🌞';
    document.body.style.background = '#e5e7eb';
    document.body.style.color = '#0f172a';
  } else {
    themeToggle.textContent = '🌙';
    document.body.style.background = '#0f172a';
    document.body.style.color = '#e5e7eb';
  }
});

// Fade-in effetti al scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });

// Hamburger menu responsive
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');
hamburger.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
