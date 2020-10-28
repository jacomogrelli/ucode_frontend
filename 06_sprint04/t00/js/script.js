/* ************************************************************************** */
/*                                                                            */
/*   Proto-magician. sprint04. t00                                            */
/*                                                                            */
/*   By: Oleksiy Nechaiev <nechaeff@gmail.com>                                */
/*                        <t.me/losini>                                       */
/*   Created: 2020/09/27                                                      */
/*   Finished: 2020/09/29                                                     */
/*                                                                            */
/*   ucode IT academy <ucode.world>                                           */
/*   Je sues 42, nous sommes 42                                               */
/*                                                                            */
/*   Topics: JavaScript Object Prototypes inheritance                         */
/*                                                                            */
/* ************************************************************************** */

"use strict"

/*
 * Const object from ucode pdf, everytime click on buttons change prototype to
 * active object human, dog, vampire or to Object.prototype if there is no
 * prototype
 */
const magician = {
  /* Nahuya-to nado */
  _hat: './assets/images/hat.png',
  /* Function check if there is portrait link in object or return link to basic */
  _getPortrait() {
    if (this._portrait)
      return this._portrait;
    else
      return './assets/images/magician.png';
  },
  'do magic'() {
    console.log(`ABRACADABRA The prototype of ${this.name} is `);
    console.log(Object.getPrototypeOf(this));
  }
};

/* Main Object prototype, include general characteristics of object */
function Creature(name, age, species, portrait) {
  this.name = name;
  this.age = age;
  this.species = species;
  this._portrait = portrait;
}

/*
 * Prototype for Human object. Parent prototype Creature connect with method
 * call, which takes argument this and all others
 */
function Human(name, age, species, portrait, job) {
  Creature.call(this, name, age, species, portrait);
  this.job = job;
}

/* Prototype for Vampire object. */
function Vampire(name, age, species, portrait, job, title) {
  Human.call(this, name, age, species, portrait, job);
  this.title = title;
}

/* Prototype for Dog object. */
function Dog(name, age, species, portrait, color) {
  Creature.call(this, name, age, species, portrait);
  this.color = color;
}

/* Add function sayHello to magician object */
magician.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
}


/*
 * Rendering main block
 * @object - current object human, vampire, dog or Object.prototype if no
 * prototype (make "this" back to magician)
 * @button - button, that have been clicked (<button class="protoBtn"
 * onclick="changeStatus(this)">human prototype</button> for example)
 */
let applyProperties = (object, button) => {
  let properties = document.querySelector("#properties"),
    head;
  /* Apply to magician prototype of current object or back to magician if
   @object = Object.prototype */
  Object.setPrototypeOf(magician, object);
  /* Apply class active to clicked button and remove previous */
  if (button) {
    document.querySelector(".active").classList.remove("active")
    button.classList.add("active")
  }
  /* Apply current portrait with magician._getPortrait function (see description
   in magician object) */
  head = document.querySelector('#head')
    .setAttribute("src", `${magician._getPortrait()}`)
  /* Add buttons and apply onclick function to buttons 'DO MAGIC' and
     'SAY HELLO' */
  properties.innerHTML = `<button id="do-magic" onclick="magician` +
    `['do magic']()">DO MAGIC</button>`;
  if (button && button.innerHTML != 'no prototype')
    properties.innerHTML += `<button id="say-hello"` +
      `onclick="magician.sayHello()">SAY HELLO</button>`
  /* Render properties to span except _portrait */
  for (const [key, value] of Object.entries(object))
    if (key.charAt(0) !== "_")
      properties.innerHTML += `<p class="property">${key}:` +
        `<span class="propValue"> ${value}</span></p>`
}


/*
 * Function choose object for rendering depends on clicked button
 * @button - button, that have been clicked (<button class="protoBtn"
 * onclick="changeStatus(this)">human prototype</button> for example)
 */
let changeStatus = (button) => {
  /* check was button clicked */
  if (button) {
    if (button.innerHTML.charAt(0) == "h")
      applyProperties(human, button);
    else if (button.innerHTML.charAt(0) == "v")
      applyProperties(vampire, button);
    else if (button.innerHTML.charAt(0) == "d")
      applyProperties(dog, button);
    else if (button.innerHTML.charAt(0) == "n")
      applyProperties(Object.prototype, button);
  }
  /* if rendering for first time */
  else
    applyProperties(Object.prototype, button);
}

/* Huy ego znaet, spizdil, shob kak v pdf bylo */
Human.prototype = Object.create(Creature.prototype)
Vampire.prototype = Object.create(Human.prototype)
Dog.prototype = Object.create(Creature.prototype)

/* Apply constructor of current prototype to it owns */
Human.prototype.constructor = Human
Vampire.prototype.constructor = Vampire
Dog.prototype.constructor = Dog

/* let objects creat */
let human = new Human("Linda", 22, "human", './assets/images/human.png', "doctor")
let vampire = new Vampire("Vlad III", 915, "vampire", './assets/images/vampire.png', "unemployment", "count")
let dog = new Dog("Fluffy", 3, "dog", './assets/images/dog.png', "brown")

/* First rendering */
changeStatus();
