'use strict'


async function getCatalog() {
  // return await fetch('../assets/catalog/catalog.json')
  //   .then(async response => {
  //     if (response.ok) {
  //       return await response.json();
  //     }
  //     return null;
  //   })
  let result = await fetch('../assets/catalog/catalog.json');

  if (result.ok) {
    let json = await result.json();
    if (json)
      return json;
  }
}

let catalog = getCatalog();

console.log(catalog);

