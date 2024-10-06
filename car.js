// Fade-in effect for the definition section
const fadeInSection = document.querySelector('.fade-in-section');

window.addEventListener('scroll', () => {
  const sectionTop = fadeInSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 150;

  if (sectionTop < triggerPoint) {
    fadeInSection.classList.add('show');
  }
});
