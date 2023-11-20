const slider = document.querySelector('.swiper-main');
const sliderNav = document.querySelector('.slider-nav');
const sliderTwo = document.querySelector('.swiper-text');

let mySwiperNav = new Swiper(sliderNav, {
  slidesPerView: false,
  spaceBetween: false,
  freeMode: false,
  loop: false,
  navigation: false,
  // simulateTouch: true,
  touchRatio: 0,
  multipleActiveThumbs: 'true',
});

let mySwiper = new Swiper(slider, {
  spaceBetween: 10,
  loop: 'true',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: mySwiperNav,
  },
});

let mySliderTwo = new Swiper(sliderTwo, {
  slidesToShow: 1,
  spaceBetween: 20,
  loop: 'true',
  direction: 'vertical',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: mySwiper,
  },
});
