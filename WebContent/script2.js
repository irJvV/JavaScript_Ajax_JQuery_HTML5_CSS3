/**
 * Javacript file by Joost van Veen
 */
function Point(x,y){
	this.x = x;
	this.y = y;
}

function MoveON(){
	var answer = confirm("Ready to move on ?");
	if (answer) window.location = "http://google.com";
}