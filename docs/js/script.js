$(document).ready(function() {

	$('#comment__slider').owlCarousel({
		loop: true,
		center: true,
		navText: ['<img src="img/arrowl.png">', '<img src="img/arrowr.png">'],
		items: 3,
		autoplay: true,
		autoWidth: true,
		paginationSpeed: 400,
		responsive:{
	        0:{
	            items:1,
	            nav: false,
	        },
	        600:{
	            items:1,
	        },
	        1000:{
	            items:1,
	            nav: false,
	        },
	        1200: {
	        	nav: true,
	        	items: 3,
	        }
	    }
	});

});