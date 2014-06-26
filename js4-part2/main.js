


$("p").on('mouseover', function() {
	$(this).css('color', 'pink');
});

$("p").on('mouseleave', function() {
	$(this).css('color', 'black');
});

$('h2').on('mouseover', function() {
	headingText = $(this).text();
	var headingText = headingText + '!';
	$(this).text(headingText);
});

$('a').on('click', function() {
	var loadPage = window.confirm('Load link?');
	if (loadPage === false) {
		$(this).remove();
		return false;
	}
});