document.addEventListener('DOMContentLoaded', () => {
  // Theme Initialization
  const theme = localStorage.getItem('yc-theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);

  // Language Initialization
  const lang = localStorage.getItem('yc-lang') || 'es';
  applyTranslations(lang);

  // Navigation Scroll Effect
  window.addEventListener('scroll', () => {
    const navElement = document.querySelector('.yc-nav');
    if (navElement) {
      if (window.scrollY > 50) {
        navElement.classList.add('scrolled');
      } else {
        navElement.classList.remove('scrolled');
      }
    }
  });

  // Intersection Observer for Animations
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const observeElements = () => {
    document.querySelectorAll('.fade-in-up:not(.visible)').forEach(el => observer.observe(el));
  };
  
  observeElements();
  setTimeout(observeElements, 300);
});

function applyTranslations(lang) {
  if (typeof translations === 'undefined') return;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = getTranslation(lang, key);
    if (text) {
      // If the translation contains HTML, use innerHTML
      if (text.includes('<')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });
}
