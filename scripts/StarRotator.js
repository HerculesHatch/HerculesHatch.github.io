var setup = function(){
  createCanvas(400, 400);
  colorMode(HSB, 360, 215, 215, 255);
  frameRate(60);
  angleMode(RADIANS);
  ellipseMode(RADIUS);
};
/*
function hollowStar(x, y, extOutRadius, extInRadius, intOutRadius, intInRadius, numSides){
  if (numSides === 0){
    point(x, y);
    return;
  }
  numSides <<=1;
  var slice = TWO_PI/numSides;
  beginShape();
  for(var i = 0; i < numSides; ++i){
    var angle = i*slice;
    var condition = i%2===0;
    var radius = extOutRadius*(condition)+extInRadius*(!condition);
    vertex(x+radius*sin(angle), y-radius*cos(angle));
  }
  beginContour();
  for(var i = 0; i > -numSides; --i){
    var angle = i*slice;
    var condition = i%2===0;
    var radius = intOutRadius*(condition)+intInRadius*(!condition);
    vertex(x+radius*sin(angle), y-radius*cos(angle));
  }
  //ellipse(x, y, 25, 25);
  endContour();
  endShape(CLOSE);
}
var a = 0;
var angleSpeed = 0.025;
function updateAngle(angle, angleSpeed, low, high){
  return angle + angleSpeed + (high-low)*((angle<=low)-(angle>=high));
}
var distanceFromCentre = 100;
var circleRadius = 75;
function draw(){
  //background(0);
  noStroke();
  fill(220, 100, 215, 50);
  rect(-1, -1, width+2, height+2);
  a = updateAngle(a, angleSpeed, 0, TWO_PI);
  noStroke();
  translate(200, 200);
  rotate(-a);
  fill(50, 215, 215, 255);
  ellipse(distanceFromCentre*cos(-a), distanceFromCentre*sin(-a), circleRadius, circleRadius);
  rotate(2*a);
  fill(0, 0, 100, 255);
  hollowStar(0, 0, 182.5, 75, 50, 125, 5);
  resetMatrix();
}
*/