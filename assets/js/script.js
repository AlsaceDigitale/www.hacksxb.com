$(function() {
	$(window).resize(function() {
		setAspectRatio();
	});

	$(window).scroll(function() {
	    checkStickyLogo();
	});

	setAspectRatio();
	setTimeout(checkStickyLogo, 500);
});

function setAspectRatio() {
  $('iframe').each(function() {
    $(this).css('height', $(this).width() * 9/16);
  });
}

function checkStickyLogo() {
	if ( $(document).height() <= ($(window).height() + $(window).scrollTop()) + 90) {
        $(".blog-sticky-logo").addClass("isoverfooter");
    }
    else {
    	$(".blog-sticky-logo").removeClass("isoverfooter");
    }
}