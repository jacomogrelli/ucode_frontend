"use strict"

let multiplicationTable = () => {
  let result = "";
  let num = 4;
  let count = 0;

  while (count++ < 9)
    result += num + " * " + count + " = " + (num * count) + "\n";
  return result;
}

alert(multiplicationTable())
