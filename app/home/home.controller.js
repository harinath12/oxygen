hmapp.controller('homeController', homeController);

homeController.$inject = ['$rootScope', '$scope', '$state', 'ApiService', '$window', '$timeout', '$interval'];

function homeController  ($rootScope, $scope, $state, ApiService, $window, $timeout, $interval) {

    $scope.home_data = {};


    ApiService.videos().then(function(res){
        $scope.home_data = res.data;

        $timeout(function(){
            AOS.init({});

    /* Video Carousel */
    if ($('.image-carousel').length > 0) {
        $('.image-carousel').owlCarousel({
            margin:30,
            loop:true,
            nav:true,
            dots: false,
            autoplay:true,
            autoplayHoverPause:true,
            smartSpeed: 1500,
            /*navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],*/
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
                    items:2
                },
                1200:{
                    items:2
                }
            }
        });
    }
    if ($('.testi-carousel').length > 0) {
        $('.testi-carousel').owlCarousel({
            margin:30,
            loop:true,
            nav:true,
            dots: false,
            autoplay:true,
            autoplayHoverPause:true,
            smartSpeed: 1500,
            /*navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],*/
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
                    items:1
                }
            }
        });
    }
    if ($('.shop-carousel').length > 0) {
            $('.shop-carousel').owlCarousel({
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
                    575:{
                        items:2
                    },
                    600:{
                        items:2
                    },
                    800:{
                        items:2
                    },
                    1200:{
                        items:3
                    }
                }
            });
        }
    /* POPUP VIDEO */  
    /*if ($(".video-btn").length) {
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
    }*/
        }, 1000);
    });


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


    
}