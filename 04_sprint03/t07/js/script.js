"use strict"

let correctErrors = (character) => {
  for (let i in character) {
    if (character[i].getAttribute(`class`) === undefined)
    character[i].setAttribute(`class`, `unknown`);
    if (character[i].getAttribute(`data-element`) === undefined)
      character[i].setAttribute(`data-element`, `none`);
  }
}



let rendering = () => {
  let character = document.body.getElementsByTagName(`li`);
  correctErrors(character);
  console.log(character);
  // console.log(typeof character);
  // console.log(character[0].attributes);
  // console.log((character[7].attributes.class));




}

rendering();
