var document_height = $(document).height();
var window_height = $(window).height();

$(function() {
	$(window).resize(function() {
		setAspectRatio();
		document_height = $(document).height();
		window_height = $(window).height();
	});

	$(window).scroll(function() {
	    checkStickyLogo();
	});

	setAspectRatio();
	checkStickyLogo();
});

function setAspectRatio() {
  $('iframe').each(function() {
    $(this).css('height', $(this).width() * 9/16);
  });
}

function checkStickyLogo() {
	if ( document_height <= (window_height + $(window).scrollTop()) + 90) {
        $(".blog-sticky-logo").addClass("isoverfooter");
    }
    else {
    	$(".blog-sticky-logo").removeClass("isoverfooter");
    }
}