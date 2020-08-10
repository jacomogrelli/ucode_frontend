"use strict"

/*
 * Equation:x = a ^ 2 - 5 * b * c + d / 3 + e
 * Solve for x.
 */

let solver = (a, b, c, d, e) => {
  if (typeof a == "number" && typeof b == "number" && typeof c == "number"
      && typeof d == "number" && typeof e == "number")
       return (Math.pow(a, 2) - (5 * b * c) + (d / 3) + e).toFixed(2);
  return "Wrong input";
}


// console.log(solver(40, -9, 0.5, 7, 100));
// // displays 1724.83
// console.log(solver(40, "doesn't look like a number", 0.5, 7, 100));
// // displays "Wrong input"
// console.log(solver(40, -9, 0.5, 7));
// // displays "Wrong input"
