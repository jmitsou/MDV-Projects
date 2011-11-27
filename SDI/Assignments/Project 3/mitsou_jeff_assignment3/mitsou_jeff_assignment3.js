var endTime= 10;
var onCall= "yes";
var moveCar= true;
var takeFriendHome= true;


if(endTime === 10){
	console.log("Yes it's time to go home!!!");
	}else{
	console.log("Sit there and continue to stare at the clock.");

};

function goHome() {
	if(onCall === "yes"){
	console.log("If I'm on a call.")
	console.log("I finish the call, close my programs, sign off my phone and clock out.");
	}else{
	console.log("If not I sign out of my programs and phone." + " Then clock out.");
	}
};

function walkToCar(x,y) {
if(moveCar === true){
	console.log("If I move my car.")
	console.log("Then it takes " + x + " mins to get to my car.");
	}else{
	console.log("If not it will take " + y + " mins to get to my car.");
	}
};

function carPool(){
	if(takeFriendHome === true){
	var f= "edy";
	console.log("If I take " + f + " home.")
	console.log("It will take me 35 mins to get home and I talk 295 North.");
	}else{
	console.log("It takes me 15 mins to get home and I take 95 North.");
	}
};		


function countSheep(sheep) {
	 var done = "zzzzzz";
	 console.log("Time for bed, time to count those sheep.")
	 while (sheep > 0){
		console.log(sheep + " sheep.") 
		sheep--;
		};
		console.log(done)
};	




goHome()
console.log("After I finish at my desk, I head to my car.")
walkToCar(5,10)
console.log("Now to head home.")
carPool()
countSheep(15)




