var elementsWithWords = $('*:contains("question")');

$.each(elementsWithWords, function( index, value ) {
	
	value = value.innerHTML.replace("question", "butt");
	
	elementsWithWords.html(value);

});