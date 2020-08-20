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

/*
 * Function makeNotification render notification div with the parameters:
 * order == start - generate starting div with the info how to sort table
 * order == ACS || DESC generate after sorting notification with the order
 * of sorting and witch parameter was used
 */
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

/*
 * Function that make table markup, fill header with buttons
 * Size of table body is the size of array with heroes
 */
let makeTableMarkup = () => {
  let divPlaceholder = document.getElementById(`placeholder`);
  //remove placeholder value
  divPlaceholder.innerHTML = ``;
  // start making table markup
  let table = divPlaceholder.appendChild(document.createElement(`table`))
  let thead = table.appendChild(document.createElement(`thead`));
  let tbody = table.appendChild(document.createElement(`tbody`));
  let trThead = thead.appendChild(document.createElement(`tr`));

  //make table header with buttons
  for (let i = 0; i < Object.keys(heroesList[0]).length; i++) {
    let tdTrThead = trThead.appendChild(document.createElement(`td`));
    let input = tdTrThead.appendChild(document.createElement(`input`));
    input.id = `${Object.keys(heroesList[0])[i]}Btn`;
    input.setAttribute(`type`, `button`);
    switch (i) {
      case 0:
        input.setAttribute(`onclick`, `sortTable(\'name\')`);
        input.setAttribute(`value`, `Name`);
        break;
      case 1:
        input.setAttribute(`onclick`, `sortTable(\'strength\')`);
        input.setAttribute(`value`, `Strength`);
        break;
      default:
        input.setAttribute(`onclick`, `sortTable(\'age\')`);
        input.setAttribute(`value`, `Age`);
        break;
    }
  }

  //make table body with number of row in order of array length
  for (let i = 0; i < heroesList.length; i++) {
    let trTbody = tbody.appendChild(document.c§reateElement(`tr`));
    for (let j = 0; j < Object.keys(heroesList[0]).length; j++) {
      let tdTrTbody = trTbody.appendChild(document.createElement(`td`));
    }
  }
  table.id = `heroTable`;
}

let tableFill = () => {
  let tbody = document.getElementsByTagName("tbody");
  for (let i = 0; i < tbody.rows.length; i++) {
    for (let j = 0; j < tbody.rows[i].cells.length; j++) {
      tbody.rows[i].cells[j].innerHTML = heroesList[i][j];
    }
  }
}

let makeTable = () => {
  makeNotification(`start`,);
  makeTableMarkup();
  tableFill();
}

makeTable();
