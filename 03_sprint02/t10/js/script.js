"use strict"

let getAnimal = () => {
  let animal = prompt("What animal is the superhero most similar to?\nInput \
usage: Max 20 symbols, only letters, no unicode no white-space, no numbers");
  if (!/^[A-Z]{1,20}$/ig.test(animal)) {
    alert("Invalid animal input, see usage");
    return null;
  }
  return animal;
}

let getGender = () => {
  let gender = prompt("Is the superhero male or female?\nInput usage: male, \
female or leave blank if unknown or other")
  if (!/^male$/i.test(gender) && !/^female$/i.test(gender) &&
    !/^$/.test(gender)) {
    alert("Invalid gender input, see usage");
    return null;
  }
  return gender;
}

let getAge = () => {
  let age = prompt("How old is superhero?\nInput usage: numbers only, max 5 \
numbers, cannot start with ")
  if (!(/^[1-9][0-9]{0,4}$/g.test(age))) {
    alert("Invalid gender input, see usage");
    return null;
  }
  return age;
}

let makeHeroName = () => {
  let animal, gender, age, suffix;

  if ((animal = getAnimal()) == null || (gender = getGender()) == null ||
    (age = getAge()) == null)
    return null;
  if (gender === `male` && +age < 18) suffix = `boy`;
  if (gender === `male` && +age > 17) suffix = `man`;
  if (gender === `female` && +age < 18) suffix = `girl`;
  if (gender === `female` && +age > 17) suffix = `woman`;
  if (gender.length == 0 && +age < 18) suffix = `kid`;
  if (gender.length == 0 && +age > 17) suffix = `hero`;
  return `The superhero name is: ${animal}-${suffix}!`
}

alert(makeHeroName());
