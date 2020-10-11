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

