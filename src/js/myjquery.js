$(document).ready(function() {
			$('.scroll_container').on('click', function() {
				if ( $(this).hasClass('down') ) {
					var movePos = $(window).scrollTop() + $(window).height();
				}
				$('html, body').animate({
					scrollTop: movePos
				}, 800);
			});

    var scroll_top_duration = 700;

    /*** Smooth Scroll to Top ***/
    $('.scrollTop').click(function (event) {
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration
        );
    });


    /*** Floating scroll button ***/
    var duration = 500;

    $(window).scroll(function () {
        if ($(window).scrollTop() != 0) {
            $('.scrollTopWrapper').fadeIn(duration);
        } else {
            $('.scrollTopWrapper').fadeOut(duration);
        }
    });



    /*** Smooth scroling to anchor on the same page ***/
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


    /*
    * Style nav buttons when they are the current focus area,
    * on this single page website
    */
    $('a:link').removeClass('active');
    $('a:link').click(function() {
        $('a').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function () {
        $('a:link').removeClass('active');
    });




    // //** Triangle effects ***/
    // $('#triangle').mouseover(function () {
    //     $(this).animate({
    //         height: '0px'
    //     })
    // });
    //
    //
    // $('#triangle').mouseleave(function () {
    //     $(this).animate({
    //         height: '20px'
    //     })
    // });


    /*
    * Toggle transparency of the Nav:
    * transparency increased when
    * page scrolled to the top,
    * otherwise solid
    */
    $(window).scroll(function () {
        if($(window).scrollTop() !=0) {
            $('nav').css('opacity', '1');
        }else{
            $('nav').css('opacity', '0.8');
        }
    })






});