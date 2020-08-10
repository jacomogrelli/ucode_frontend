"use strict"

let total = (addCount, addPrice, curentTotal) => {
  // ninja-style
  return +((curentTotal !== undefined) ? curentTotal + addCount *
    addPrice : addCount * addPrice).toFixed(2);

  //regular-style
  // let result = 0;

  // if (curentTotal === undefined) {
  //   curentTotal = 0;
  // }
  // result = curentTotal + addCount * addPrice;
  // result = Number.result.toFixed(2);
  // return result;
}


// let sum = total(1, 0.1);
// sum= total(1, 0.2, sum);
// sum= total(1, 0.78, sum);
// console.log(sum); // will return 1.08
