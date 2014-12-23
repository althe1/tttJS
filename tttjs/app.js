window.onload = function() {

	var player = 1;
	var playerOne = "X";
	var playerTwo = "O"; 


	this.playerSwitch = function(num){
		if (player === 1) {
			playerClick(playerOne, num);
			player = 2;
		}
		else {
			playerClick(playerTwo, num);
			player = 1;
		}
	};

	this.playerClick = function(player, num){
		if(document.getElementById(num).innerHTML != "X" && document.getElementById(num).innerHTML != "O") {
			if (num) document.getElementById(num).innerHTML = player;
		}
	}
};