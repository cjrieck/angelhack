
var elementsWithWords = $('*:contains("question")');

$.each(elementsWithWords, function( index, value ) {
	
	value = value.innerHTML.replace("question", "butt");
	
	elementsWithWords.html(value);

});
var audio = new Audio('baasheep1.wav');
audio.play();
