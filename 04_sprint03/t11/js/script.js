"use strict"

let cookiesCount = 0;

let addCookies = () => {
  let note = cookiesText.value.trim();
  let expDate = new Date();

  expDate.setDate(expDate.getDate() + 30)


  if (note.length === 0) {
    console.log(`It's empty. Try to input something in "Text input".`)
    return;
  }
  cookiesCount += 1;
  document.cookie = (`note=${note}; expires=${expDate.toUTCString()}; path=/`);
  console.log(document.cookie);
}
