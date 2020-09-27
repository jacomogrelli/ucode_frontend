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

function Creator (name, age, species, portrait) {
  this.name = name;
  this.age = age;
  this.species = species;
  this._portrait = portrait;
  this.sayHello = () => console.log(`Hello, my name is ${this.name}`);
}

function Human (name, age, species, portrait, job) {
  Creator.call(this, name, age, species, portrait);
  this.job = job;
}

function Dog (name, age, species, portrait, color) {
  Creator.call(this, name, age, species, portrait);
  this.color = color;
}

function Vampire (name, age, species, portrait, job, title) {
  Human.call(this, name, age, species, portrait, job);
  this.title = title;
}


