"use strict"

let total = (addCount, addPrice, curentTotal) => {
  // return +((curentTotal !== undefined) ? curentTotal + addCount *
  //   addPrice : addCount * addPrice).toFixed(2);
  let result = 0;

  if (curentTotal === undefined) {
    curentTotal = 0;
  }
  result = curentTotal + addCount * addPrice;
  result = Number.result.toFixed(2);
  return result;
}
