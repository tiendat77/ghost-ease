// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import JS
import infiniteScroll from "./infiniteScroll";


// Call the menu and infinite scroll functions
infiniteScroll();

jQuery.noConflict();

(function ($) {
    'use strict';
    $('.featured-posts').owlCarousel({
        dots: false,
        margin: 30,
        nav: true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M20.547 22.107L14.44 16l6.107-6.12L18.667 8l-8 8 8 8 1.88-1.893z"></path></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M11.453 22.107L17.56 16l-6.107-6.12L13.333 8l8 8-8 8-1.88-1.893z"></path></svg>',
        ],
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
            },
            768: {
                items: 3,
                slideBy: 3,
            },
            992: {
                items: 4,
                slideBy: 4,
            },
        },
    });
})(jQuery);