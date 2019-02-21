$(document).ready(function() {

	$('#comment__slider').owlCarousel({
		loop: true,
		center: true,
		nav: true,
		navText: ['<img src="img/arrowl.png">', '<img src="img/arrowr.png">'],
		items: 3,
		autoplay: true,
		paginationSpeed: 400
	});

	let slider = document.getElementById('comment__slider');
	let centerElement = document.getElementsByClassName('center');
	centerElement.style.display = 'none'
	//slider.style.height = 

});