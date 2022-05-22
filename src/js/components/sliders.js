import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);

export default function () {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    const homeHeroSlider = document.querySelector('.home-hero-slider');
    homeHeroSlider && new Swiper(homeHeroSlider, {
        slidesPerView: 1,
        autoHeight: true,
        loop: true,
        // autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        speed: 700,
        breakpoints: {
            768: {
                autoHeight: false,
            }
        }
    });

    const homeAdvSlider = document.querySelector('.home-adv-slider');
    homeAdvSlider && isMobile && new Swiper(homeAdvSlider, {
        slidesPerView: 1,
        spaceBetween: 12,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        speed: 700
    });

    const testSlider = document.querySelector('.test-slider');
    testSlider && new Swiper(testSlider, {
        direction: 'horizontal',
        slidesPerView: 1,
        autoHeight: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        speed: 700,
        breakpoints: {
            992: {

            }
        },
        on: {
            slideChangeTransitionEnd: function() {

            },
        },
    });
}
