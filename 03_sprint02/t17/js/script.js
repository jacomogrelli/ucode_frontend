"use strict"

let input = () => {
  let result = String(prompt("Input your first name")).toLowerCase();

  if (/^[a-z]+$/g.test(result))
    return result.charAt(0).toUpperCase() + result.slice(1);
  return 0;
}

let getName = () => {
  let firstName = input();
  let lastName = input();

  if (!firstName || !lastName) {
    alert(`Wrong input!`);
    console.log(`Wrong input!`);
    return;
  }
  console.log(`Hello, ${firstName} ${lastName}!`);
  alert(`Hello, ${firstName} ${lastName}!`);
}

getName();
