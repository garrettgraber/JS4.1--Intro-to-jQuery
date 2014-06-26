

$('.little-button').on('click', function() {
	console.log('Button pressed');
	$('body').append('<p>Text added to the body</p>');
});

$('.button2').on('click', function() {
	$('body').append('<h1>Header added to the body</h1>');
});

$('.button3').on('click', function() {
	console.log('button3 has fired');

	var listAdded = $('<ul>').attr('class', 'list-main').appendTo('body');

	
	for ( var i = 1; i < 4; i++) {
		var listElement = $('<li>').attr('class', 'list-element').text("List item: " + i).appendTo(listAdded);
	}
});