//on document.ready
//Randomize the desired score
//Randomize 4 numbers (in own var)
//Randomize 4 numbers between 1-9
//Set the value each html element to each variable (grab element id, set.value =)
//bottom score at zero
//wins and losses at zero
//


//When a crystal is clicked
//adds to score 

//if score is eqaul to random number win
//else if score is greater lose

//Each have the same onclick.
//onclick = "addtoscore(this??)
// addtoscore will add this.value to score

$(document).ready(function() {

var randomNumber = Math.floor(Math.random() * 120) + 19;
var wins = 0;
var loses = 0;
var number1 = Math.floor(Math.random() * 12) + 1;
var number2 = Math.floor(Math.random() * 12) + 1;
var number3 = Math.floor(Math.random() * 12) + 1;
var number4 = Math.floor(Math.random() * 12) + 1;
var totalScore = 0;
var image1 = $("#c1").HTML
var image2 = $("#c2").HTML
var image3 = $("#c3").HTML
var image4 = $("#c4").HTML
image1 = number1
image2 = number2
image3 = number3
image4 = number4

function windowReset () {
	randomNumber = Math.floor(Math.random() * 120) + 19;
	$("#randomScore").html("Random Number: " + randomNumber);
	number1 = Math.floor(Math.random() * 12) + 1;
	number2 = Math.floor(Math.random() * 12) + 1;
	number3 = Math.floor(Math.random() * 12) + 1;
	number4 = Math.floor(Math.random() * 12) + 1;
	totalScore = 0;
	document.querySelector("#score").innerHTML = totalScore;
}

function winOrLose (number) {
			console.log(number)
			totalScore = totalScore + number;

			document.querySelector("#score").innerHTML = totalScore; 
			
			

			if (totalScore === randomNumber) {
				wins ++;
				$("#wins").html("Wins: " + wins);
				console.log(totalScore);
				windowReset();
			}
			else if (totalScore > randomNumber) {
				console.log("you lose");
				loses ++;
				$("#loses").html("Loses: " + loses);
				windowReset();
			}

}


	$("#randomScore").append(randomNumber);






		$("#c1").on("click", function() {
			winOrLose(number1);



		})
		$("#c2").on("click", function() {
			winOrLose(number2);



		})
		$("#c3").on("click", function() {
			winOrLose(number3);

	
		})
		$("#c4").on("click", function() {
			winOrLose(number4);


		})



})





