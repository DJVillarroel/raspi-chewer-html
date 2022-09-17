console.log('Messi');


var w = 2500;
var h = 800;
var columns;
var rows;
var scl = 70;


function setup(){
	columns = w / scl;
	rows = h / scl;
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
	background(4, 26, 37);
	rotateX(PI/2.5);
	translate(-w/2,-h/2);
	for (let i = 0; i < columns; i++) {
		for (let j = 0; j < rows; j++) {
			stroke(15*j);
			noFill();
			rect(i*scl, j*scl, scl, scl);
		}
	}
}