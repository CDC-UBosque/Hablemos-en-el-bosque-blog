/**
 * @file
 * Custom utilities.
 *
 */
 
// ---------------------------------
// Function for menu and search button
// ---------------------------------
(function ($) {
	
	$(document).ready(function(){
		
		 // Overlay background click menu 
		$( ".header .navbar#navbar-main .container .navbar-toggler" ).click(function() {
			
			$("body").toggleClass("overlay-menu");
			
			// If search box is open then close it but left body class overlay-menu
			if ($(".header .navbar#navbar-main .container .search-block").attr("style")) {
				$(".header .navbar#navbar-main .container .search-block").removeAttr("style")( "slow", function() {
				// Animation complete.
				});
			}

		});
		
		 // Open search box on click search icon 
		$( ".header .navbar#navbar-main .container .lupa-block" ).click(function() {
			
			// If search box is open then close it but left body class overlay-menu
			/*if ($(".navbar-collapse").hasClass("show")) {
				$(".navbar-collapse").removeClass("show");
			}
			
			// If search box is open then close it but left body class overlay-menu
			if ($("body").hasClass("overlay-menu")) {
				$("body").toggleClass("overlay-menu");
			}*/

			$( ".header .navbar#navbar-main .container .search-block" ).toggleClass("open");
			
			$( ".header .navbar#navbar-main .container .lupa-block" ).toggleClass("open");
			
			$( "body" ).toggleClass("open-search");
			
		});
		
		 // Close search box on X search icon 
		$( ".header .navbar#navbar-main .container .search-block .container-inline>div form fieldset label.sr-only" ).click(function() {
			
			// If search box is open then close it but left body class overlay-menu
			/*if ($(".navbar-collapse").hasClass("show")) {
				$(".navbar-collapse").removeClass("show");
			}
			
			// If search box is open then close it but left body class overlay-menu
			if ($("body").hasClass("overlay-menu")) {
				$("body").toggleClass("overlay-menu");
			}*/

			$( ".header .navbar#navbar-main .container .search-block" ).toggleClass("open");
			
			$( ".header .navbar#navbar-main .container .lupa-block" ).toggleClass("open");
			
			$( "body" ).toggleClass("open-search");
			
		});
		
	});	
	
})(jQuery);

// ---------------------------------
// Function for number of images in carousel
// ---------------------------------

// for entradas relacionadas
(function( $ ) {
$('.node--type-blog .layout-main-wrapper #main>div .sidebar .cultura-entradas-relacionadas-slider-block .content .view-contenido-relacionado .view-content .jcarousel-wrapper .jcarousel, .node--type-blog .layout-main-wrapper #main>div .sidebar div[class*="block-views-blockcontenido-relacionado-block-"] .content .view-contenido-relacionado .view-content .jcarousel-wrapper .jcarousel, .layout-sidebar-second .layout-main-wrapper #main>div .sidebar .cultura-entradas-relacionadas-slider-block .content .view-contenido-relacionado .view-content .jcarousel-wrapper .jcarousel, .layout-sidebar-second .layout-main-wrapper #main>div .sidebar div[class*="block-views-blockcontenido-relacionado-block-"] .content .view-contenido-relacionado .view-content .jcarousel-wrapper .jcarousel')
    .on('jcarousel:create jcarousel:reload', function() {
        var element = $(this),
            width = element.innerWidth();

        if (width > 951) {
            width = width / 1;
        } else if (width < 950) {
            width = width / 1;
        }

        element.jcarousel('items').css('width', width + 'px');
    })
    //.jcarousel({
        // Your configurations options
    //});
})(jQuery);

// for galeria in blog
(function( $ ) {
$('.node .field--name-field-imagen-galeria .jcarousel-wrapper .jcarousel')
    .on('jcarousel:create jcarousel:reload', function() {
        var element = $(this),
            width = element.innerWidth();

        if (width > 450) {
            width = width / 3;
        } else if (width < 449) {
            width = width / 2;
        }

        element.jcarousel('items').css('width', width + 'px');
    })
    //.jcarousel({
        // Your configurations options
    //});
})(jQuery);

(function( $ ) {
	$("article").closest("div.row").addClass("error-404");
})(jQuery);