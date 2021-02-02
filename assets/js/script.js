(function($) {

	"use strict";

	/* MOBILE MENU */
	$('nav.menu').meanmenu({
		meanMenuClose: 'X',
		meanMenuCloseSize: '18px',
		meanScreenWidth: '991',
		meanExpandableChildren: true,
		meanMenuContainer: '.mobile-menu',
		onePage: true
	});
	

    /* WOW ANIMATION SETTING */
    var wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }); 

    /* HOME BANNER SLIDER */
	$('#ensign-nivoslider-1').nivoSlider({

        effect: 'boxRainReverse', // Specify sets like: 'sliceDownLeft sliceUp sliceUpLeft sliceUpDown sliceUpDownLeft fold fade random slideInRight slideInLeft boxRandom boxRain boxRainReverse boxRainGrow boxRainGrowReverse'
        slices: 15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed: 1000, // Slide transition speed
        pauseTime: 6000, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
        directionNav: true, // Next & Prev navigation
        controlNav: true, // 1,2,3... navigation
        controlNavThumbs: false, // Use thumbnails for Control Nav
        pauseOnHover: false, // Stop animation while hovering
        manualAdvance: false, // Force manual transitions
        prevText: 'Prev', // Prev directionNav text
        nextText: 'Next', // Next directionNav text
        randomStart: false, // Start on a random slide
        beforeChange: function() {}, // Triggers before a slide transition
        afterChange: function() {}, // Triggers after a slide transition
        slideshowEnd: function() {}, // Triggers after all slides have been shown
        lastSlide: function() {}, // Triggers when last slide is shown
        afterLoad: function() {} // Triggers when slider has loaded

    });
    
    /* POPUP VIDEO */  
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function(){
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title'         : this.title,
                helpers     : {  
                    title : { type : 'inside' },
                    media : {}
                },
                

                beforeShow : function(){
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });    
    }
    
    /* Video Carousel */
    if ($('.video-carousel').length > 0) {
        $('.video-carousel').owlCarousel({
            margin:30,
            loop:true,
            nav:true,
            dots: false,
            autoplay:true,
            autoplayHoverPause:true,
            smartSpeed: 1500,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        });
    }
    
    /* INSURANCE SLIDER */
    if ($('.insure-carousel').length > 0) {
        $('.insure-carousel').owlCarousel({
            margin:30,
            loop:true,
            nav:true,
            dots: false,
            autoplay:true,
            smartSpeed: 800,
    		animateIn: 'linear',
    		animateOut: 'linear',
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
            responsive:{
                0:{
                    items:3
                },
                480:{
                    items:4
                },
                600:{
                    items:4
                },
                800:{
                    items:5
                },
                1200:{
                    items:6
                }
            }
        });
    }
    
    /* TESTIMONIAL */
    if ($('.testi-carousel').length > 0) {
        $('.testi-carousel').owlCarousel({
            margin:30,
            loop:true,
            nav:true,
            dots: false,
            autoplay:true,
            autoplayHoverPause:true,
            smartSpeed: 1500,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1200:{
                    items:2
                }
            }
        });
    }

    /* WHEN DOCUMENT LOADING */
    $(window).on('load', function() {
        $('.fancybox').fancybox();
        $('select').niceSelect();
    });
    
	
})(window.jQuery);

