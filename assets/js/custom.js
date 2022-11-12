(function($) {
	'use strict';
	// Navbar Menu JS
	$('.scroll-btn, .navbar .navbar-nav li a').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 65
		}, 1500);
		e.preventDefault();
	});
	$('.navbar .navbar-nav li a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

	// Menu Icon JS
	$(".menu-icon").on('click', function(){
		$(".menu-icon").toggleClass("active")
	})
	$(".menu-icon").on('click', function(){
		$(".sidebar").toggleClass("active")
	})

	// Header Sticky
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar').addClass("is-sticky");
		}
		else{
			$('.navbar').removeClass("is-sticky");
		}
	});

	// Partner Slider JS
	$('.partner-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items: 2,
			},
			576:{
				items: 3,
			},
			768:{
				items: 4,
			},
			1200:{
				items: 5,
			}
		}
	});

	// Case Slider JS
	$('.case-slider').owlCarousel({
		loop: true,
		margin: 60,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>",
		],
		responsive:{
			0:{
				items: 1,
			},
			414:{
				items: 1,
			},
			576:{
				items: 2,
			},
			768:{
				items: 2,
			},
			1200:{
				items: 3,
			}
		}
	});

	// Testimonial Slider JS
	$('.testimonial-slider').owlCarousel({
		items:1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		animateOut: "slideOutDown",
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>",
		],
	});

	// Our Work Slider JS
	$('.our-work-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 60,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>",
		],
	});

	// Saas Testimonial Slider
	$('.saas-testimonial-slider').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		mouseDrag: false,
		thumbs: true,
		thumbsPrerendered: true,
		items: 1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
	});

	// Consultancy Slider JS
	$('.consultancy-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 60,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>",
		],
	});

	// Project Slider JS
	$('.project-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 20,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items: 1,
			},
			414:{
				items: 2,
			},
			576:{
				items: 2,
			},
			768:{
				items: 2,
			},
			1200:{
				items: 2,
			},
			1700:{
				items: 3,
			},
		}
	});

	// Consulting Testimonial Slider JS
	$('.consulting-testimonial-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>",
		],
	});

	// SEO Testimonial Slider JS
	$('.seo-testimonial-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>",
		],
	});

	// Portfolio Slider JS
	$('.portfolio-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 20,
		nav: false,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items: 1,
			},
			414:{
				items: 1,
			},
			576:{
				items: 2,
			},
			768:{
				items: 2,
			},
			1200:{
				items: 3,
			}
		}
	});
	
	// Go To Top JS
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});  

	// Click Event JS
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});

	// FAQ Accordion JS
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
	});

	// Tabs JS
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li').on('click', function (g) {
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
		g.preventDefault();
	});
		
	// Popup Video JS
	$('.popup-youtube, .popup-vimeo').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	// Subscribe form JS
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
		// handle the invalid form...
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} else {
			// everything looks good!
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter, #validator-newsletter-2").removeClass().addClass(msgClasses).text(msg);
	}
	
	// AJAX MailChimp JS
	$(".newsletter-form").ajaxChimp({
		url: "https://Envy Theme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Others Option For Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	// WOW JS
	new WOW().init();

	// Skill JS
	jQuery('.skill-bar').each(function() {
			jQuery(this).find('.progress-content').animate({
			width:jQuery(this).attr('data-percentage')
		},2000);
		
		jQuery(this).find('.progress-number-mark').animate(
			{left:jQuery(this).attr('data-percentage')},
		{
			duration: 2000,
			step: function(now, fx) {
				var data = Math.round(now);
				jQuery(this).find('.percent').html(data + '%');
			}
		});  
	});

	// Preloader
	jQuery(window).on('load', function(){
		jQuery(".loader").fadeOut(500);
	});
})(jQuery);
