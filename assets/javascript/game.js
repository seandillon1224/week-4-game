var blueRandom;
var purpleRandom;
var redRandom;
var greenRandom;
var random;
var wins = 0
var losses = 0


function reset(){
totalScore = []
blueRandom = Math.floor(Math.random() * 12) + 1 ;
purpleRandom = Math.floor(Math.random() * 12) + 1 ;
redRandom = Math.floor(Math.random() * 12) + 1 ;
greenRandom = Math.floor(Math.random() * 12) + 1 ;
random = Math.floor(Math.random() * 120) + 1 ;
$("#randomnumber").text("Match this number! : " + random)
$("#totalscore").text("Total Score: 0")
}



 // When random-button is clicked...
 function game(){
 	reset()
 	function getSum(total, num) {
    return total + num;
   }
	

      $("#blue").on("click", function() {
      	totalScore.push(blueRandom)
      	$("#totalscore").text("Total Score: " + totalScore.reduce(getSum));
      

      	if (random === (totalScore.reduce(getSum))) {
	wins++;
	$("#wins").text("Wins: " + wins)
	reset()	
}


else if (random < (totalScore.reduce(getSum))){
	losses++;
	$("#losses").text("Losses: " + losses)
	reset()
}
    });

      $("#red").on("click", function() {
      	totalScore.push(redRandom)
      	$("#totalscore").text("Total Score: " + totalScore.reduce(getSum));

      	if (random ===(totalScore.reduce(getSum))) {
	wins++;
	$("#wins").text("Wins: " + wins)
	reset()
	
}

else if (random < (totalScore.reduce(getSum))){
	losses++;
	$("#losses").text("Losses: " + losses)
	reset()
}
    });

      $("#purple").on("click", function() {
      	totalScore.push(purpleRandom)
      	$("#totalscore").text("Total Score: " + totalScore.reduce(getSum));
      	if (random === (totalScore.reduce(getSum))) {
	wins++;
	$("#wins").text("Wins: " + wins)
	reset()
	
}
else if (random < (totalScore.reduce(getSum))){
	losses++;
	$("#losses").text("Losses: " + losses)
	reset()
}
    });

      $("#green").on("click", function() {
      	totalScore.push(greenRandom)
      	$("#totalscore").text("Total Score: " + totalScore.reduce(getSum));
if (random === (totalScore.reduce(getSum))) {
	wins++;
	$("#wins").text("Wins: " + wins)
	reset()
	
}
else if (random < (totalScore.reduce(getSum))){
	losses++;
	$("#losses").text("Losses: " + losses)
	reset()
    };
})	

};

game()	