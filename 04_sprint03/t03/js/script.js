"use strict"

// function that delete duplicates in array
let delDup = (arr) => arr.filter((v, i) => arr.indexOf(v) === i);

// function that delete extra spaces in the string and split array to string
let delExtraSpaces = (str, wrds = " ") => {
  ((str += ' ' + wrds).trim()).split(/\s+/);
}

let addWords = (obj, wrds = " ") => {
  if (obj) {
    let arr = delExtraSpaces(obj.words, wrds);
    obj.words = (delDup(arr)).join(` `);
  }
}

let removeWords = (obj, wrds = "") => {
  if (obj) {
    let arr_obj = delDup(delExtraSpaces(obj.words));
    let arr_wrds = delDup(delExtraSpaces(wrds))
    arr_wrds.forEach(element => {
      (arr_obj.indexOf(element) === -1)
      ? 0 :arr_obj.splice(0, arr_obj.indexOf(element))
    });
    console.log(arr_obj, arr_wrds);

    // obj.words = (delDup(arr)).join(` `);
  }
}

const obj = {
  words: '  newspapers newspapers  books magazines'
};

// // test cases
// console.log(obj); // {words: "newspapers newspapers  books magazines"}
addWords(obj, 'radio newspapers');
console.log(obj); // {words: "newspapers books magazines radio"}
removeWords(obj, 'newspapers   radio');
// console.log(obj); // {words: "books magazines"}
// changeWords(obj, 'books radio  magazines', 'tv internet');
// console.log(obj); // {words: "tv internet"}
