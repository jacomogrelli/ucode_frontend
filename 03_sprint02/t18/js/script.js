"use strict"

let sortMethod = (a, b) => {
  if (a > b)
    return 1;
  if (a === b)
    return 0;
  return -1;
}

let sortEvenOdd = (arr) => {
  let length = arr.length;
  let evenCount = 0;

  if (!arr) {
    // check that all elements are Numbers
    arr.forEach(element => {
      if (typeof element != "number")
        console.log(`Wrong ${element} element`);
      return;
    });
    // replace even elements in the left part and odd in the right
    for (let i = 0; i < length; i++) {
      if (arr[i] % 2 === 0) { //if even - element stay on it naitive place
        evenCount++;
        continue;
      }
      // if odd - replace with last element
      [arr[i], arr[length - 1]] = [arr[length - 1], arr[i]];
      length--; //couse last elemet are odd
      i--; //couse have to check new element, that was swaped from last position
    }
    // sort first [0 - lenth] even elements
    for (let i = 0; i < length - 1; i++)
      if (arr[i] > arr[i + 1])
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    // sort last [lenth - null] odd elemets
    for (let i = length; arr[i + 1]; i++)
      if (arr[i] > arr[i + 1])
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
}

// const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
// sortEvenOdd(arr);
// console.log(arr); // (12) [2, 6, 8, 8, 10, 1, 1, 3, 5, 7, 11, 15]

// trohalska magic
function sortEvenOdd(arr) {
 arr.sort(function(a, b) {
   return a % 2 - b % 2 || a - b;
});
}
