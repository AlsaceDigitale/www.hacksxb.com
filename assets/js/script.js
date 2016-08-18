$(function() {
	$(window).resize(function() {
		setAspectRatio();
	});

	setAspectRatio();
});

function setAspectRatio() {
  $('iframe').each(function() {
    $(this).css('height', $(this).width() * 9/16);
  });
}