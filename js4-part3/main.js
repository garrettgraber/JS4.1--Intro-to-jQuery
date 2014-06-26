

$('#giant-button').on('click', function () {
	console.log('Giant button has been clicked');
	
	//var popupDiv = $('div').attr('class', 'popup');
	var popupDiv = $('<div>', {class: 'popup'});
	var buttonStuff = $('<button>', {class: 'button-close', text: 'Close'});

	/*
	alert(popupDiv);
	console.log(popupDiv.attr('class'));
	*/


	popupDiv.appendTo('body');
	buttonStuff.appendTo('.popup');
	
	/*
	$('<div>', {class: 'popup'}).appendTo('body');
	*/
});

$(document).on('click', '.button-close', function () {
	console.log('button close has fired');
	var parentElement = $(this).parent();
	parentElement.remove();
});
