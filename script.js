let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shopingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

let shopingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shopingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    navbar.classList.remove('active');
};
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    loginForm.classList.remove('active');
};

Window.onscroll = () => {
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    pagination: {
      autoplay: {
        delay:7500,
        disableOnInteraction:false,
      },
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        
      },
      "@0.75": {
        slidesPerView: 2,
        
      },
      "@1.00": {
        slidesPerView: 3,
       
      },
      
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    pagination: {
      autoplay: {
        delay:7500,
        disableOnInteraction:false,
      },
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        
      },
      "@0.75": {
        slidesPerView: 2,
        
      },
      "@1.00": {
        slidesPerView: 3,
       
      },
      
    },
  });