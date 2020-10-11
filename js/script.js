/* ---------------------------------------------- /*
   * Preloader
   /* ---------------------------------------------- */

$(window).on('load', function () {
   $('#preloader').addClass("loaded");
});


// navbar
$('.navbar-toggler').on('click', function () {
   $('body').toggleClass('aside-open');
   $('.ham').toggleClass('active');
   $('body,html').toggleClass('overflow-hidden');
})


// gallery filter

var $portfolioContainer = $('.list-items-container');
$('#filter li').on('click', function (e) {
   e.preventDefault();
   $('#filter li').removeClass('active');
   $(this).addClass('active');
   var groupName = $(this).attr('data-group');
   $portfolioContainer.shuffle('shuffle', groupName);
});
// slider

var swipertest = new Swiper('.swiper-testimony', {
   spaceBetween: 30,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});