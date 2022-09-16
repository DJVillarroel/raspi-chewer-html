console.log('Messi');


var w = 1000;
var h = 600;
var columns;
var rows;
var scl = 20;


function setup(){
	columns = w / scl;
	rows = h / scl;
	createCanvas(windowWidth, 800, WEBGL);
}

function draw(){
	background(4, 26, 37);
	rotateX(PI/3);
	translate(-w/2,-h/2);
	for (let i = 0; i < columns; i++) {
		for (let j = 0; j < rows; j++) {
			stroke(255);
			noFill();
			rect(i*scl, j*scl, scl, scl);
		}
	}
}