var p;
var data=[];
var add=[];
var m;
var b;
var mInput;
var bInput;
var nOfP=200;

function setup() {
  createCanvas(200, 200);
  createP("M-value");
  mInput=createSlider(0, height, height/2);
  createP("B-value");
  bInput=createSlider(0, height, 0);
  mInput.input(updateMandB);
  bInput.input(updateMandB);
  m=1/2;
  b=0;
  p=new Perceptron();
  for(var i=0; i<nOfP; i++){
    data.push(new Points());
  }
}

function updateMandB(){
  m=mInput.value()/height;
  b=bInput.value();
  for(var i=0; i<nOfP; i++){
    data[i].relabel();
  }
}

function keyPressed(){
  for(var i=0; i<data.length; i++){
    p.train(data[i].point, data[i].label);
  }
}

function mousePressed(){
  newPoint=new Points();
  newPoint.point[0]=mouseX;
  newPoint.point[1]=mouseY;
  newPoint.label=p.guess(newPoint.point);
  add.push(newPoint);
}

function draw() {
  background(127);
  stroke(0);
  var sum=0;
  line(0,b,width,m*width+b);
  var g;
  for(var i=0; i<data.length; i++){
    data[i].show();
    g=p.guess(data[i].point);
    fill(255,0,0);
    if(g==data[i].label){
      sum++;
      fill(0, 255, 0);
    }
    ellipse(data[i].point[0],data[i].point[1],4,4);
    //p.train(data[i].point, data[i].label);
  }
  fill(0);
  rect(5,5,180,20);
  var per=((sum/data.length)*100);
  var c=lerpColor(color(255,0,0),color(0,255,0),per/100);
  fill(c);
  text("Training percentage: "+per+" %", 10, 20);
  for(var i=0; i<add.length; i++){
    add[i].show();
  }
}
