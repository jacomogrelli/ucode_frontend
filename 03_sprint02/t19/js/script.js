"use strict"

let checkBrackets = (str) => {
  let result = 0, current = 0;

  if (typeof str === "string") {
    for (let i = 0; str[i]; i++) {
      if (str.charAt(i) === `(`)
        current++;
      if (str.charAt(i) === `)`)
        current ? current-- : result++;
    }
    return current + result;
  }
  return -1;
}

// console.log(checkBrackets('1)()(())2(()')); // 2
