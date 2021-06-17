(function($) {
    'use strict';
$(window).on('load', function() { // makes sure the whole site is loaded 
            $('.spinner').fadeOut(); // will first fade out the loading animation 
            $('.preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
          })
}(jQuery));
