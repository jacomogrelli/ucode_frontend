"use strict"


let heroesList = [
  {name: 'Black Panter', strength: 66, age: 53,},
  {name: 'Captain America', strength: 79, age: 137,},
  {name: 'Captain Marvel', strength: 97, age: 26,},
  {name: 'Hulk', strength: 80, age: 49,},
  {name: 'Iron Man', strength: 88, age: 49,},
  {name: 'Spider-Man', strength: 78, age: 16,},
  {name: 'Thanos', strength: 99, age: 1000,},
  {name: 'Thor', strength: 95, age: 1000,},
  {name: 'Yon-Rogg', strength: 73, age: 52,},
]

/* Function makeNotification render notification div with the parameters:
 * order == start - generate starting div with the info how to sort table
 * order == ACS || DESC generate after sorting notification with the order
 * of sorting and witch parameter was used */
let makeNotification = (order, param) => {
  let divNotification = document.getElementById(`notification`);
  let node = document.createElement(`span`);
  if (order === `start`)
    node.innerHTML = `Click on cell to sort the column`;
  else
    node.innerHTML = `Sorting by ${param}, order: ${order}`;
  divNotification.innerHTML = ``;
  divNotification.appendChild(node);
}

let makeTableMarkup = () => {
  let divPlaceholder = document.getElementById(`placeholder`);
  let table = divPlaceholder.appendChild(document.createElement(`table`))
  let thead = table.appendChild(document.createElement(`thead`));
  let trThead = thead.appendChild(document.createElement(`tr`));

  for (let i = Object.keys(heroesList[0]).length; i > 0; i--) {
    let tdTrThead = trThead.appendChild(document.createElement(`td`));
    let input = tdTrThead.appendChild(document.createElement(`input`));
    input.id = `${Object.keys(heroesList[0])[i - 1]}Btn`;
    console.log(input);
  }
  table.id = `heroTable`;
  console.log(table);
}

let makeTable = () => {
  makeNotification(`start`,);
  makeTableMarkup();
}

makeTable();
