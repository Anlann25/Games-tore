let menu = document.querySelector('.menu-icons');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
  navbar.classList.toggle('active');
  menu.classList.toggle('move');
  bell.classList.remove('active');
};

let bell = document.querySelector('.notificacao');

document.querySelector('#bell-icon').onclick = () => {
  bell.classList.toggle('active');
};

var swiper = new Swiper('.trend-content', {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: 'swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 13,
    },
    1326: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

window.onscroll = function() {mufunction()};
