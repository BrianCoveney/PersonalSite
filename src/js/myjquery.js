$(document).ready(function() {
			$('.scroll_container').on('click', function() {
				if ( $(this).hasClass('down') ) {
					var movePos = $(window).scrollTop() + $(window).height();
				}
				$('html, body').animate({
					scrollTop: movePos
				}, 1000);
			});
		});