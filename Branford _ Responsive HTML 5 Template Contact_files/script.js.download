(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}


	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}
	
	
	var navcollapse = $('.main-menu .navigation li');
        navcollapse.hover(function() {
            $(this).children('.submenu').stop(true, false, true).slideToggle(300);
        });
	//Submenu Dropdown Toggle
	if($('.main-menu .mobile-menu li.dropdown ul').length){
		$('.main-menu .mobile-menu li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-menu .mobile-menu li.dropdown .dropdown-btn').click(function() {
			$(this).prev('ul').slideToggle(500);
		});
	}

	function stickyHeader () {
		if ($('.stricky').length) {
			var strickyScrollPos = 100;
			if($(window).scrollTop() > strickyScrollPos) {
				$('.stricky').removeClass('fadeIn animated');
		      	$('.stricky').addClass('stricky-fixed fadeInDown animated');
		      	$('.scroll-to-top').fadeIn(500);
			}
			else if($(this).scrollTop() <= strickyScrollPos) {
				$('.stricky').removeClass('stricky-fixed fadeInDown animated');
		      	$('.stricky').addClass('slideIn animated');
		      	$('.scroll-to-top').fadeOut(500);
			}
		};
	}



	// 27. Select menu 
	function selectDropdown() {
	    if ($(".selectmenu").length) {
	        $(".selectmenu").selectmenu();

	        var changeSelectMenu = function(event, item) {
	            $(this).trigger('change', item);
	        };
	        $(".selectmenu").selectmenu({ change: changeSelectMenu });
	    };
	}


	// Elements Animation
	if($('.wow').length){
		var wow = new WOW({
		mobile:       false
		});
		wow.init();
	}


	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}


	// owl-carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:75,
			nav:true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				400:{
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


	// Fact Counter
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}


	// owl-carousel
	if ($('.partnar-slider').length) {
		$('.partnar-slider').owlCarousel({
			loop:true,
			margin:60,
			nav:true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				400:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
	}


	// 4. select menu
	function selectMenu () {
		if ($('.select-menu').length) {
			$('.select-menu').selectmenu();
		};
	}


	function galleryMasonaryLayout() {
	    if ($('.masonary-layout').length) {
	        $('.masonary-layout').isotope({
	            layoutMode: 'masonry'
	        });
	    }

	    if ($('.post-filter').length) {
	        $('.post-filter li').children('span').click(function() {
	            var Self = $(this);
	            var selector = Self.parent().attr('data-filter');
	            $('.post-filter li').children('span').parent().removeClass('active');
	            Self.parent().addClass('active');


	            $('.filter-layout').isotope({
	                filter: selector,
	                animationOptions: {
	                    duration: 500,
	                    easing: 'linear',
	                    queue: false
	                }
	            });
	            return false;
	        });
	    }

	    if ($('.post-filter.has-dynamic-filter-counter').length) {
	        // var allItem = $('.single-filter-item').length;

	        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

	        activeFilterItem.each(function() {
	            var filterElement = $(this).data('filter');
	            console.log(filterElement);
	            var count = $('.gallery-content').find(filterElement).length;

	            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
	        });
	    };
	}


	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}


	// Language switcher
	function languageSwitcher() {

	    if ($("#polyglot-language-options").length) {
	        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
	            effect: 'slide',
	            animSpeed: 150,
	            testMode: true,
	            onChange: function(evt) {
	                    alert("The selected language is: " + evt.selectedItem);
	                }

	        });
	    };
	}


	//three-column-carousel
	    if ($('.three-column-carousel').length) {
			$('.three-column-carousel').owlCarousel({
			loop:true,
			margin:50,
			nav:true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
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
				1024:{
					items:3
				}
			}
		});    		
	}


	//Two Column Carousel Slider
	if ($('.two-column-carousel').length) {
		$('.two-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
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
					items:2
				},
				1024:{
					items:2
				}
			}
		});    		
	}


	//Main Slider Carousel
	if ($('.main-slider-carousel').length) {
		$('.main-slider-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}


	//Accordion Box
	if ($('.accordion-box').length) {
	        $('.accordion-box .acc-btn').on('click', function() {
	            if ($(this).hasClass('active') !== true) {
	                $('.accordion-box .acc-btn').removeClass('active');
	            }

	            if ($(this).next('.acc-content').is(':visible')) {
	                $(this).removeClass('active');
	                $(this).next('.acc-content').slideUp(500);
	            } else {
	                $(this).addClass('active');
	                $('.accordion-box .acc-content').slideUp(500);
	                $(this).next('.acc-content').slideDown(500);
	            }
	        });
	    }


	    function priceFilter () {
		if($('.range-slider-price').length){

			var priceRange = document.getElementById('range-slider-price');

			noUiSlider.create(priceRange, {
				start: [ 120, 300 ],
				limit: 600,
				behaviour: 'drag',
				connect: true,
				range: {
					'min': 120,
					'max': 600
				}
			});

			var limitFieldMin = document.getElementById('min-value-rangeslider');
			var limitFieldMax = document.getElementById('max-value-rangeslider');
			
			priceRange.noUiSlider.on('update', function( values, handle ){
				(handle ? limitFieldMax : limitFieldMin).value = values[handle];
			});
		};
	}


	//=== Cart Touch Spin ===
	function cartTouchSpin() {
	    if ($('.quantity-spinner').length) {
	        $("input.quantity-spinner").TouchSpin({
	            verticalbuttons: true
	        });
	    }
	}


	function customTabProductPageTab () {
	    if ($('.product-details-tab-title').length) {
	        var tabWrap = $('.product-details-tab-content');
	        var tabClicker = $('.product-details-tab-title ul li');
	        
	        tabWrap.children('div').hide();
	        tabWrap.children('div').eq(0).show();
	        tabClicker.on('click', function() {
	            var tabName = $(this).data('tab-name');
	            tabClicker.removeClass('active');
	            $(this).addClass('active');
	            var id = '#'+ tabName;
	            tabWrap.children('div').not(id).hide();
	            tabWrap.children('div'+id).fadeIn('500');
	            return false;
	        });        
	    }
	}



	/*	=========================================================================
	When document is Scrollig, do
	========================================================================== */

	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
			selectMenu ();
			priceFilter ();
			cartTouchSpin();
			customTabProductPageTab ();
		})(jQuery);
	});



	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		stickyHeader ();
		factCounter()
	});

	
	
	/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		languageSwitcher();
		galleryMasonaryLayout();
	});

	

})(window.jQuery);