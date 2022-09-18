import Swiper from '../lib/swiper-bundle.esm.browser.min.js';

//dropdown

new SimpleBar(document.querySelector('.country__list'), {
    classNames: {
        scrollbar: 'country__scrollbar',
        track: 'country__track'
    }
});

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
    },
    // отключить клики на кнопки в слайде
    preventClicks: true,   
    a11y: false,
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

//modal

const productMore = document.querySelectorAll('.product__more');
const modal = document.querySelector('.modal');

productMore.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.add('modal_open')
    });
});

modal.addEventListener('click', (target) => {
    if (target === modal) {
        modal.classList.remove('modal_open');
    }
});

//lift the label text

const formPlaceholder = document.querySelectorAll('.form__placeholder');
const formInput = document.querySelectorAll('.form__input');

formInput.forEach((input, i) => {
    input.addEventListener('focus', () => {
        formPlaceholder[i].classList.add('form__placeholder_active');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            formPlaceholder[i].classList.remove('form__placeholder_active');
        }
    });
});

//dropdown

const countryBtn = document.querySelector('.country__btn');
const countryWrapper = document.querySelector('.country__wrapper');

countryBtn.addEventListener('click', () => {
    countryWrapper.classList.toggle('country__wrapper_open');
});

countryWrapper.addEventListener('click', ({target}) => {
    if (target.classList.contains('country__choise')) {
        countryWrapper.classList.remove('country__wrapper_open');
    }
});

// currency

const dataCurrency = {};
const formatCurrency = (value, currency) => {
    return new Intl.NumberFormat('EU', {
        style: 'currency',
        currency,
        maximumFractionDigits: 2,
    }).format(value)
};

const showPrice = (currency = 'USD') => {
    const priceElems = document.querySelectorAll('[data-price]');
    priceElems.forEach(elem => {
        elem.textContent = formatCurrency(elem.dataset.price, currency);
    });
};

showPrice();