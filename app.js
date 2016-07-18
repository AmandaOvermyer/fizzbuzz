var userChoice = prompt ("Pick a number between 1 - 100");

{
for (var i = 1; i <=userChoice; i++) {
	if ((i % 5 === 0) && (i % 3 === 0)) {
		$('body').append("<p>fizz buzz</p>");
	}
	else if(i % 3 === 0) {
		$('body').append("<p>fizz</p>");
	} 
	else if (i % 5 === 0){
		$('body').append("<p>buzz</p>");
	}
	
	else {
		$('body').append("<p>" + i + "</p>"); 
	}
}	
};

