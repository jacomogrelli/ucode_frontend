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

let firstTime = true;

function Creature(name, age, species, portrait) {
  this.name = name;
  this.age = age;
  this.species = species;
  this._portrait = portrait;
  this.sayHello = () => console.log(`Hello, my name is ${this.name}`);
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

let applyProperties = (object, button) => {
  // let properties = document.querySelector("#properties"),
  //     head;
  //
  // if (firstTime) {
  //   document.querySelector()
  // }
  // console.log(object);
}

let changeStatus = (button) => {
  switch (button.innerHTML.charAt(0)) {
    case "h":
      applyProperties(human, button);
      break;
    case "v":
      applyProperties(vampire, button);
      break;
    case "d":
      applyProperties(dog, button);
      break;
    case "n":
    default:
      applyProperties(undefined, button);
      break;
  }
}


let human = new Human("Linda", 22, "human", './assets/images/human.png', "doctor")
let vampire = new Vampire("Vlad III", 915, "vampire", './assets/images/vampire.png', "unemployment", "count")
let dog = new Dog("Fluffy", 3, "dog", './assets/images/dog.png', "brown")


// changeStatus()

