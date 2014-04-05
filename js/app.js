var random = "";
var guessCount = 0;

var newGame = function() {
	guessCount = 0;
	$("#count").html(guessCount);
	$("#guessList").empty();
    $("#feedback").text("Make your Guess!");
    $("#feedback").removeClass();
    $("#count").html(guessCount);
	$("#userGuess").val('');

	/*Return a random number between 1 and 100 */
	randNum = Math.floor((Math.random()*100)+1);
	//$(".game").fadeIn(1000);
	return randNum;
}
$(document).ready(function(){
	random = newGame();
	/*--- Display information box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	/*--- Hide information box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(function(){
    	random = newGame();
  	});
  	$("form").submit(function(event) {
  		var message = "";
  		var diffClass = "";
  		var guess = +$("#userGuess").val();
  		var difference = 0;
    	if (isNaN(guess) || guess > 100 || guess < 1) {
    		alert("Please enter a valid number from 1 to 100")
    	} else {
    		 $("#count").html(++guessCount);
    		 $("#guessList").append("<li>"+guess+"</li>");
    		difference = Math.abs(random - guess);
    		if (difference > 50) { // Ice cold
    			message = "Ice cold";
    		} else if (difference >= 30 && difference <= 50) { // Cold
				message = "Cold";
    		} else if (difference >= 20 && difference <= 30) { // Warm
				message = "Warm";
    		} else if (difference >= 10 && difference <= 20) { // Hot
				message = "Hot";
    		} else if ( difference >= 1 && difference <= 10) { // Very hot
				message = "Very hot";
    		} else { // Match
				message = "Match!!";
    		}
    		$("#feedback").fadeIn("slow", function() {
    			diffClass = message.split(" ").join("").toLowerCase(); 
    			$(this).text(message);
    			$(this).removeClass();
    			$(this).addClass(diffClass);
			});
    	}
    	event.preventDefault();
  	});
});