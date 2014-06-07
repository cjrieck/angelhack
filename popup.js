var elementsWithWords = $('*:contains("i")');
$.each(elementsWithWords, function( index, value ) {
	
	value = value.innerHTML.replace("i", "butt");
	
	elementsWithWords.html(value);

});