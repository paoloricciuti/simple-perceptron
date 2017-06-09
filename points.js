function Points(){
  this.point=[];
  this.point.push(random(width));
  this.point.push(random(height));
  this.relabel();
}

Points.prototype.relabel = function(){
  if(m*this.point[0]+b>this.point[1]){
    this.label=-1;
  }else{
    this.label=1;
  }
}

Points.prototype.show = function () {
  noStroke();
  if(this.label==-1){
    fill(255);
  }else{
    fill(0);
  }
  ellipse(this.point[0],this.point[1],8,8);

};
