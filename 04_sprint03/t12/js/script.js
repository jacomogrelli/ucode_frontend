"use strict"

/*
 * Function fill the Archive block with storage content
 */
let archiveRerender = () => {
  let textArea = document.querySelector(`#notesTextArea`);
//
  textArea.innerHTML = ``; // clear previous content of div
  cookiesText.value = ``;  // clear previous content of input block
  if (localStorage.getItem(`notesCounter`) === `0`) {
    // if localStorage are empty - filling with empty context
    let empty = document.createElement(`span`); //
    empty.innerHTML = `[empty]`
    textArea.appendChild(empty);
    return;
  }
  // create the list of spans with the localStorage content
  for (let i = 0; i < localStorage.length; i++) {
    let span = document.createElement(`span`);
    let key = localStorage.key(i);
    if (key === `notesCounter`)
      continue;
    span.innerHTML = `--> ${localStorage.getItem(key)}`;
    textArea.appendChild(span);
  }
}

let ifSmall = (n) => {return n = n < 10 ? `0${n}` : n};

let getFormattedDate = () => {
  let d = new Date;
  return ' [' + ifSmall(d.getDate()) + '.' + ifSmall(d.getMonth() + 1) + '.'
    + (d.getFullYear() - 2000) + ', ' + ifSmall(d.getHours()) + ':'
    + ifSmall(d.getMinutes()) + ':' + ifSmall(d.getSeconds()) + ']';
}

/*
 * Function add to storage content of input text area
 */
let addToStorage = () => {
  let note = cookiesText.value.trim();
  let curDate = new Date(); // get current date

  if (note.length === 0) {
    alert(`It's empty. Try to input something in "Text input".`)
    return;
  }
  localStorage.setItem(`notesCounter`, `${+localStorage.getItem(`notesCounter`) + 1}`);
  localStorage.setItem(`note${localStorage.getItem(`notesCounter`)}`,
    `${note} ${getFormattedDate()}`);
  archiveRerender();
}

let clearFromStorage = () => {
  if (confirm(`Are you sure?`)) {
    localStorage.clear();
    localStorage.setItem(`notesCounter`, `0`)
  }
  archiveRerender();
}

let intMain = () => {
  if (!localStorage.getItem(`notesCounter`))
    localStorage.setItem(`notesCounter`, `0`)
  // for first filling of archive area block
  archiveRerender();
}

intMain();
