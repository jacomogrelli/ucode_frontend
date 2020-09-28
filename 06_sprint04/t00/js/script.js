"use strict"

const magician = {
  _hat: './assets/images/hat.png',
  _getPortrait() {
    if (this._portrait) return this._portrait;
    else return './assets/images/magician.png';
  },
  'do magic'() {
    console.log(`ABRACADABRA The prototype of ${this.name} is `);
    console.log(Object.getPrototypeOf(this));
  }
};

function Creature(name, age, species, portrait) {
  this.name = name;
  this.age = age;
  this.species = species;
  this._portrait = portrait;
  // this.sayHello = () => console.log(`Hello, my name is ${this.name}`);
}

function Human(name, age, species, portrait, job) {
  Creature.call(this, name, age, species, portrait);
  this.job = job;
}

function Vampire(name, age, species, portrait, job, title) {
  Human.call(this, name, age, species, portrait, job);
  this.title = title;
}

function Dog(name, age, species, portrait, color) {
  Creature.call(this, name, age, species, portrait);
  this.color = color;
}

let sayHello = () => {
  this.sayHello = () => console.log(`Hello, my name is ${this.name}`);
}

let applyProperties = (object, button) => {
  let properties = document.querySelector("#properties"),
    fullBlock = document.querySelector(".magician"),
    head;
  Object.setPrototypeOf(magician, object);
  head = document.querySelector('#head').setAttribute("src", `${magician._getPortrait()}`)
  properties.innerHTML = `<button id="do-magic" onclick="magician['do magic']()">DO MAGIC</button>`;
  if (button && button.innerHTML != 'no prototype') {
    properties.innerHTML += `<button id="say-hello" onclick="">SAY HELLO</button>`
  }
}

let changeStatus = (button) => {
  if (button) {
    if (button.innerHTML.charAt(0) == "h")
      applyProperties(human, button);
    else if (button.innerHTML.charAt(0) == "v")
      applyProperties(vampire, button);
    else if (button.innerHTML.charAt(0) == "d")
      applyProperties(dog, button);
    else if (button.innerHTML.charAt(0) == "n")
      applyProperties(Object.prototype, button);
  } else
    applyProperties(Object.prototype, button);
}

Human.prototype = Object.create(Creature.prototype)
Vampire.prototype = Object.create(Creature.prototype)
Dog.prototype = Object.create(Creature.prototype)

Human.prototype.constructor = Human
Vampire.prototype.constructor = Vampire
Dog.prototype.constructor = Dog


let human = new Human("Linda", 22, "human", './assets/images/human.png', "doctor")
let vampire = new Vampire("Vlad III", 915, "vampire", './assets/images/vampire.png', "unemployment", "count")
let dog = new Dog("Fluffy", 3, "dog", './assets/images/dog.png', "brown")

changeStatus();
