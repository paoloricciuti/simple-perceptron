function Perceptron(){
  this.w=[];
  this.w.push(random(-1, 1));
  this.w.push(random(-1, 1));
  this.w.push(random(-1, 1));
  console.log(this.w);
  this.lr=0.1;
}

Perceptron.prototype.guess = function (input) {
  var sum=0;
  for(var i=0; i<this.w.length-1; i++){
    sum+=this.w[i]*input[i];
  }
  sum+=this.w[this.w.length-1];
  return this.sign(sum);
};

Perceptron.prototype.sign = function (value) {
  if(value>=0){
    return 1;
  }
  return -1;
};

Perceptron.prototype.train = function (input, label) {
  var g=this.guess(input);
  var err=label-g;
  for(var i=0; i<this.w.length-1; i++){
    this.w[i]+=err*input[i]*this.lr;
  }
  //this.w[this.w.length-1]+=err*this.lr;
  console.log(this.w);
};
