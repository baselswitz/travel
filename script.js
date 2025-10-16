// ===============================
// 1. Destination Carousel
// ===============================
const slider = document.querySelector('.destination-slider');
const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');

if (slider && leftBtn && rightBtn) {
  rightBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 320, behavior: 'smooth' });
  });
  leftBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -320, behavior: 'smooth' });
  });

  // Auto-scroll
  setInterval(() => {
    slider.scrollBy({ left: 320, behavior: 'smooth' });
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, 4000);
}

// ===============================
// 2. Smooth Scroll Animation
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// ===============================
// 3. Scroll Reveal Animation
// ===============================
const revealElements = document.querySelectorAll('.content-section, .destination-card, .video-card');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) el.classList.add('show');
    else el.classList.remove('show');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===============================
// 4. Light Fade-in Animation on Load
// ===============================
window.addEventListener('load', () => {
  document.body.classList.add('fade-in');
});
