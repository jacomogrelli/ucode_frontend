"use strict"

function Calculator() {
  this.res = 0;

  this.init = (num) => this.res = num;
  this.add = (num) => this.res += num;
  this.sub = (num) => this.res -= num;
  this.mul = (num) => this.res *= num;
  this.div = (num) => this.res /= num;
  this.alert = () => setTimeout(() => alert(this.res), 5000);
}

// test cases
const calc = new Calculator();

console.log(
  calc.init(2), // 2
  calc.add(2),  // 4
  calc.mul(3),  // 12
  calc.div(4),  // 3
  calc.sub(2),  // 1
);
calc.alert()    // 1
