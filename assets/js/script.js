$(function () {
	// Smooth page scrolling for links
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				// Adjust scrolling offset to account for section padding if the target is not the top of the page
				if (target[0].id !== 'top') {
					$('html, body').animate({
						scrollTop: target.offset().top + 90 // add 90px for section padding
					}, 1000);
				} else {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
				}
				return false;
			}
		}
	});

	// Hamburger menu event handler for smaller screen widths
	$('.hamburger').on('click', function () {
		// Hide the logo, make the nav full-width and slide open the menu
		if (!$('h1').hasClass('hidden')) {
			$('nav ul').slideToggle();
			$('.header-top > div').toggleClass('full-width');
			$('h1').toggleClass('hidden');
			$('.hero-heading-container').toggleClass('hidden');
		} else {
			// Ensure the menu slide animation is finished
			// before showing the logo and resizing the nav
			$('nav ul').slideToggle()
				.queue(function () {
					$('.hero-heading-container').toggleClass('hidden');
					$('h1').toggleClass('hidden');
					$('.header-top > div').toggleClass('full-width');
					$(this).dequeue();
				});
		}
	});
});