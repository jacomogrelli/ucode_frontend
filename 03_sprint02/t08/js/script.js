"use strict"

let getNumber = () => {
  let userInput = prompt(`Input number from 1 to 4`);

  switch(userInput) {
    case "1":
      userInput = +userInput * 2 / `a`;
      alert(userInput);
      break;
    case "2":
      userInput = (+userInput - +userInput) / 0;
      alert(userInput);
      break;
    case "3":
      userInput *= Infinity;
      alert(userInput);
      break;
    case "4":
      userInput *= 400000000;
      alert(userInput == Infinity);
      break;
    default:
      alert("Invalid number, usage 1, 2, 3, 4");
      getNumber();
  }
}

getNumber()
