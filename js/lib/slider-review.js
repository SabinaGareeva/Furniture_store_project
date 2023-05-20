const swiper2 = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".review__slider-pagination",
  },
});

const swiper3 = new Swiper(".swiper-change", {
  // slidesPerView: 5,
  // spaceBetween: 100,
  pagination: {
    el: ".change__slider-pagination",
    type: "fraction",
  },
  scrollbar: {
    el: ".change__slider-scrollbar",
    //  hide: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 5,
      spaceBetween: 100,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 60,
    }
  }
});
// бургер меню
const burger = document.querySelector('.burger-menu'); // кнопка бургер меню
const menuList = document.querySelector('#menu'); // меню

burger.addEventListener('click', () => {
  menuList.classList.toggle('active');
})