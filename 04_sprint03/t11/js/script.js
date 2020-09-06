"use strict"

/*
 * Function fill the Archive block with cookies content
 */
let archiveRerender = () => {
  let textArea = document.querySelector(`#notesTextArea`);
  let cookiesArray = (document.cookie).split(`delimiter`);

  textArea.innerHTML = ``; // clear previous content of div
  cookiesText.value = ``;  // clear previous content of input block
  if (cookiesArray.length === 1) {
    // if cookies are empty - filling with empty context
    let empty = document.createElement(`span`); //
    empty.innerHTML = `[empty]`
    textArea.appendChild(empty);
    return;
  }
  // create the list of spans with the cookies content
  for (let i = 1; cookiesArray[i]; i++) {
    let span = document.createElement(`span`);
    span.innerHTML = `--> ${cookiesArray[i]}`;
    textArea.appendChild(span);
  }
}

/*
 * Function add to cookies content of input text area to one cookie separated
 * by "delimiter" string (for split string to array in archiveRerender function
 */
let addCookies = () => {
  let note = cookiesText.value.trim();
  let expDate = new Date(); // get current date
  expDate.setDate(expDate.getDate() + 30); // set exploration + 30 days

  if (note.length === 0) {
    alert(`It's empty. Try to input something in "Text input".`)
    return;
  }
  document.cookie = `${document.cookie}delimiter${note}; expires=${expDate.toUTCString()}; path=/`
  archiveRerender();
}

let clearCookies = () => {
  if (confirm(`Are you sure?`))
    document.cookie = `=2; max-age=-1; path=/`
  archiveRerender();
}

// for first filling of archive area block
archiveRerender();
