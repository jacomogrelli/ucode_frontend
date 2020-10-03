"use strict"

let triangle = (count) => {
  let result = "";

  for(let i = 1; i <= count; i++) {
    for(let j = 0; j < i; j++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}

alert(triangle(6));

