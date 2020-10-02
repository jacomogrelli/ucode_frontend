/* ----------------------------------------------------------------------- */
/*                                                                         */
/*   Upgrade human. sprint04. t02                                          */
/*                                                                         */
/*   By: Oleksiy Nechaiev <nechaeff@gmail.com>                             */
/*                        <t.me/losini>                                    */
/*   Created: 2020/10/02 14:15 (24H)                                       */
/*   Finished: unfinished                                                  */
/*                                                                         */
/*   ucode IT academy <ucode.world>                                        */
/*   Je sues 42, nous sommes 42                                            */
/*                                                                         */
/*   Topics: JavaScript Class inheritance                                  */
/*                                                                         */
/* ----------------------------------------------------------------------- */
'use strict'

class Human {
  constructor(options) {
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.gender = options.gender;
    this.age = options.age;
    this.calories = options.calories;
  }

  sleepFor() {
    console.log("I'm sleeping")
    console.log()
    console.log(this.firstName)
  }

  feed() {
    if (this.calories < 500) {
      this.calories += 200;
      document.querySelector("#calories > span").innerHTML = this.calories
    }
    else {

    }
  }
}

let person = new Human({
  firstName: 'Igor',
  lastName: 'Valentinovich',
  gender: 'male',
  age: 117,
  calories: 0,
})

let getNewValue = (target, calories) => {
  let key = target.getAttribute('id'),
    p = document.querySelector(`#${key}`),
    span = p.querySelector('span'),
    newValue = prompt(`Enter new name`)
  console.log(+newValue)
  if (newValue && newValue.length < 10) {
    if (typeof person[key] === 'number') {
      if (!isNaN(+newValue)) {
        person[key] = newValue;
        span.innerHTML = newValue;
      } else {
        alert("Incorrect input")
        return;
      }
    } else {
      person[key] = newValue;
      span.innerHTML = newValue;
    }
  } else
    alert("Incorrect input")
}

let renderProperties = () => {
  let div = document.querySelector("#properties")

  for (const [key, value] of Object.entries(person)) {
    div.insertAdjacentHTML("beforeend", `<p class="property" \
id="${key}" onclick="getNewValue(this)">${key}: <span class="propValue">\
${value}</span></p>`)
  }
}

renderProperties()
