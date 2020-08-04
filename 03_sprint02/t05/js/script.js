"use strict"

let str1 = "You're catnip to a girl like me. Handsome, dazed,and to die for...";
let str2 = `Laurel Hedare: "Game over."`;
let str3 = `Selina Kyle:catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you \
try to savewindsCatWOMANup dead... or deeply resentful."`;
let substr = `Catwoman`;

alert("Just string: " + str1 + "\nLength: " + str1.length + "\nCharacter \
number 5 is: " + str1[5] + "\nTo uppercase: " + str1.toUpperCase() +
  "\nConcantination in phrase: " + str1.concat(" - ", substr) + "\n[Batman \
Returns] Batman: \"I tried to save you\"\n" + str3.replace(/catwoman/ig, " "));
