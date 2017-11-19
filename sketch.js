var myData, people = [];
var myImage;
var mycolorList = [
    "#e8d300",
    "#ee7654",
    "#eb5d3e",
    "#42a6ac",
    "#a43e90",
    "#add8d5",
]

function preload(){
	myData= loadJSON("assets/peopleinspace.json");
	myImage = loadImage('assets/jeremy-thomas-98201.jpg');
}

function setup(){
	createCanvas(800,800);
	image(myImage,0,0,800,800);    
	angleMode(DEGREES);
	// How many times draw() runs every second?
	frameRate(24);
	
	for (var i=0; i<myData.people.length; i++){
		var newAstronaut = new Astronaut(150,0,myData.people[i].careerdays,mycolorList[i]);
		people.push(newAstronaut);
    }
}

function draw(){
	translate(width/2,height/2);
	stroke(people[0].color);
	strokeWeight(5);
	noFill();
	ellipse(0,0,people[0].radius);
	// Every frame, it makes a rotation of 3 degrees
	for(i=0;i<people.length;i++){
		if(dist(400,400,mouseX,mouseY)<people[0].radius){
			rotate(frameCount*3)
			stroke(people[i].color);
			strokeWeight(5);
			noFill();
			ellipse(people[i].x,people[i].y,people[i].radius);
		}    	
	}	
}

function Astronaut(x,y,radius,color){
	this.x=x;
	this.y=y;
	this.radius=radius+50;
	this.color=color;
}