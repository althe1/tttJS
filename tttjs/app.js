window.onload = function() {

	var player = 1;
	var playerOne = "X";
	var playerTwo = "O"; 
	var turn = false;


	this.playerSwitch = function(num){
		if (player === 1) {
			playerClick(playerOne, num);
			if(document.getElementById(num).innerHTML === "X") {
				player = 2;
			}			
			winCheckX();
			tieCheck();

		}
		else if (player === 2) {
			playerClick(playerTwo, num);
			if(document.getElementById(num).innerHTML === "O") {
				player = 1;
			}
			winCheckO();
			tieCheck();	
		}

	};

	this.playerClick = function(player, num){
		this.player = player;
		this.num = num;
		if(document.getElementById(num).innerHTML != "X" && document.getElementById(num).innerHTML != "O") {
			if(num) {
			document.getElementById(num).innerHTML = player;
			}
		}
	}

	this.winCheckX = function(){
		if((document.getElementById("num0").innerHTML === "X" && document.getElementById("num1").innerHTML === "X" && document.getElementById("num2").innerHTML === "X") || 
		(document.getElementById("num3").innerHTML === "X" && document.getElementById("num4").innerHTML === "X" && document.getElementById("num5").innerHTML === "X") || 
		(document.getElementById("num6").innerHTML === "X" && document.getElementById("num7").innerHTML === "X" && document.getElementById("num8").innerHTML === "X") || 
		(document.getElementById("num0").innerHTML === "X" && document.getElementById("num3").innerHTML === "X" && document.getElementById("num6").innerHTML === "X") || 
		(document.getElementById("num1").innerHTML === "X" && document.getElementById("num4").innerHTML === "X" && document.getElementById("num7").innerHTML === "X") || 
		(document.getElementById("num2").innerHTML === "X" && document.getElementById("num5").innerHTML === "X" && document.getElementById("num8").innerHTML === "X") || 
		(document.getElementById("num0").innerHTML === "X" && document.getElementById("num4").innerHTML === "X" && document.getElementById("num8").innerHTML === "X") || 
		(document.getElementById("num2").innerHTML === "X" && document.getElementById("num4").innerHTML === "X" && document.getElementById("num6").innerHTML === "X")) 
		{
			document.getElementById("result").innerHTML = "Player X Wins!";
			this.playerClick = null;

		}
	}

	this.winCheckO = function(){
		if((document.getElementById("num0").innerHTML === "O" && document.getElementById("num1").innerHTML === "O" && document.getElementById("num2").innerHTML === "O") || 
		(document.getElementById("num3").innerHTML === "O" && document.getElementById("num4").innerHTML === "O" && document.getElementById("num5").innerHTML === "O") || 
		(document.getElementById("num6").innerHTML === "O" && document.getElementById("num7").innerHTML === "O" && document.getElementById("num8").innerHTML === "O") || 
		(document.getElementById("num0").innerHTML === "O" && document.getElementById("num3").innerHTML === "O" && document.getElementById("num6").innerHTML === "O") || 
		(document.getElementById("num1").innerHTML === "O" && document.getElementById("num4").innerHTML === "O" && document.getElementById("num7").innerHTML === "O") || 
		(document.getElementById("num2").innerHTML === "O" && document.getElementById("num5").innerHTML === "O" && document.getElementById("num8").innerHTML === "O") || 
		(document.getElementById("num0").innerHTML === "O" && document.getElementById("num4").innerHTML === "O" && document.getElementById("num8").innerHTML === "O") || 
		(document.getElementById("num2").innerHTML === "O" && document.getElementById("num4").innerHTML === "O" && document.getElementById("num6").innerHTML === "O")) 
		{
			document.getElementById("result").innerHTML = "Player O Wins!";
			this.playerClick = null;
		}
	}

	this.tieCheck = function() {
		if (document.getElementById("result").innerHTML !== "Player O Wins!" || document.getElementById("result").innerHTML !== "Player X Wins!") {
			if ((document.getElementById("num0").innerHTML === "O" || document.getElementById("num0").innerHTML === "X") &&
				(document.getElementById("num1").innerHTML === "O" || document.getElementById("num1").innerHTML === "X") && 
				(document.getElementById("num2").innerHTML === "O" || document.getElementById("num2").innerHTML === "X") &&
				(document.getElementById("num3").innerHTML === "O" || document.getElementById("num3").innerHTML === "X") &&
				(document.getElementById("num4").innerHTML === "O" || document.getElementById("num4").innerHTML === "X") &&
				(document.getElementById("num5").innerHTML === "O" || document.getElementById("num5").innerHTML === "X") &&
				(document.getElementById("num6").innerHTML === "O" || document.getElementById("num6").innerHTML === "X") &&
				(document.getElementById("num7").innerHTML === "O" || document.getElementById("num7").innerHTML === "X") &&
				(document.getElementById("num8").innerHTML === "O" || document.getElementById("num8").innerHTML === "X")
				 ){
				document.getElementById("result").innerHTML = "Tie Game!"
			}
			
		}
	}


};