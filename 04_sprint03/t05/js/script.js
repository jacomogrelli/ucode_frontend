"use strict"

const calc = newCalculator();

console.log(
  calc
    .init(2)
    .add(2)
    .mul(3)
    .div(4)
    .sub(2)
    .result // 1
);
calc.alert()
