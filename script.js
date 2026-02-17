const revealEls = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: '0px 0px -20px 0px',
  }
);

revealEls.forEach((el) => revealOnScroll.observe(el));
