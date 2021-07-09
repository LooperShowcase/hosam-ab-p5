function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(900, 900);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background(105, 35, 158);
  translate(width/2,height/2);
  rotate(-90);
let seconds  = second();
let hours = hour();
let min = minute();
noFill();
strokeWeight(8);
stroke(76, 201, 240);
let secondsarc = map(seconds,0,60,0,360);
arc(0,0,300,300,0,secondsarc);
stroke(72, 149, 239);
let minarc = map(min,0,60,0,360);
arc(0,0,300,280,0,minarc);
stroke(67, 97, 238);
let hourarc = map(hours,0,12,0,360);
arc(0,0,270,250,0,hourarc);

push();
strokeWeight(4)
rotate(-90);
stroke(76, 201, 240)
rotate(secondsarc);
line(0,0,0,156);
pop();

push();
rotate(-90);
strokeWeight(5);
stroke(72, 149, 239);
rotate(minarc);
line(0,0,0,150)
pop();

push();
rotate(-90);
strokeWeight(7);
stroke(67, 97, 238);
rotate(hourarc);
line(0,0,0,131)
pop();
strokeWeight(1);
textSize(30);
fill(0, 102, 153, 51);
rotate(90);
text('12', -6,-170);

textSize(30);
fill(0, 102, 153, 51);
rotate(0);
text('11', -79,-150);

textSize(30);
fill(0, 102, 153, 51);
rotate(0);
text('10', -170,-90);

textSize(30);
fill(0, 102, 153, 51);
rotate(0);
text('9', -170,-0);

textSize(30);
fill(0, 102, 153, 51);
rotate(0);
text('8', -160,90);

textSize(30);
fill(0, 102, 153, 51);
rotate(0);
text('7', -125,160);

textSize(30);
fill(0, 102, 153, 51);
rotate(0);
text('6', 0,190);

textSize(30);
fill(0, 102, 153, 51);
rotate(0);
text('5', 100,160);

textSize(30);
fill(0, 102, 153, 51);
rotate(0);
text('4',160,90);

textSize(30);
fill(0, 102, 153, 51);
rotate(0);
text('3',170,-0);

textSize(30);
fill(0, 102, 153, 51);
rotate(0);
text('2',170,-80);

textSize(30);
fill(0, 102, 153, 51);
rotate(0);
text('1',120,-140);






}
