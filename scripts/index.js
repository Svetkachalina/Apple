import Swiper from '../lib/swiper-bundle.esm.browser.min.js';

new Swiper('.goods__block', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
    navigation: {
        nextEl: '.goods__arrow_prev',
        prevEl: '.goods__arrow_next'
    }
});


const smoothScroll = (trigger) => {
    const SPEED = 0.3;
    const scrolled = e => {
      e.preventDefault();
      const target = e.target;
  
      if (target.matches('[href^="#"]')) {
        let start = 0;
        const pageY = window.pageYOffset;
        const hash = target.getAttribute('href');
  
        if (hash === '#') return;
  
        const elem = document.querySelector(hash);
        console.log(elem);
        elem.scrollIntoView({
            behavior: 'smooth'
        });
      }
    };
    trigger.addEventListener('click', scrolled);
  };

  smoothScroll(document.querySelector('.header__navigation'));
  smoothScroll(document.querySelector('.footer__navigation'));