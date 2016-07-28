
$(document).ready(function(){
	
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  		/* New Section for Global Var, NEw game funtions
  		random number section, Guess counter and start a new 
  		game */

	 var number;
  	 var guess;
  	 var previousGuess;

  	 function newGame(){
  	 	$("#feedback").html("<h3>Make your Guess!</h3>");
  	 	randomNumber();
  	 	guessCount = 0;
  	 	$("#count").text(guessCount);
  	 	$("#guessList li").remove();
  	 }

  	 function randomNumber(){
  	 	number = Math.floor((Math.random() * 100) + 1);
  	 	console.log("Random Number: " + number);
  	 }

  	 function guessCounter(count){
  	 	$("#count").text(guessCount);
  	 }

  	 $(".button").click(function(event){
  	 	checkNumber();
  	 	$("#userGuess").val("");
  	 });

  	 	/* submit user guess and Validate user guess */

  	 function checkNumber(){
    var guess = $("#userGuess").val();
    if (isNaN(guess)){
      $("#feedback").html("<h3>Numbers only please!</h3>");
    } else if (guess === ""){
      $("#feedback").html("<h3>Make your Guess!</h3>");
    } else if (guess === " "){
      $("#feedback").html("<h3>Make your Guess!</h3>");
    } else if (guess < 0 || guess > 100){
      $("#feedback").html("<h3>Enter a number between 1 and 100!</h3>");
    } else {
      userNumber();
    }
  }


  	$("#count").val($("#count").val() + 1);
  	
  	function userNumber(){
    var guess = $("#userGuess").val();
    var previousGuess = Math.abs(number - guess);
    console.log("User Guessed: " + guess);

    $("#guessList").append("<li>" + guess + "</li>");

    guessCount++;
    guessCounter(guessCount);

    event.preventDefault();

    if (number - guess == 0){
      $("#feedback").html("<h3>You won!</h3>");
    }	else if (Math.abs(number - guess) <= 25 ) {
      $("#feedback").html("<h3>You're getting hot!</h3>");
      if (Math.abs(previousGuess - guess) < 25) {
        $("#feedback").html("<h3>Keep going!</h3>");
      }
      else {
        $("#feedback").html("<h3>You're going the wrong way!</h3>");
      }
    } 
    else {
      if (previousGuess >= guess) {
        $("#feedback").html("<h3>You're getting warmer...</h3>");
      } else {
        $("#feedback").html("<h3>You're getting colder...</h3>");
      }
    }
  }

});



