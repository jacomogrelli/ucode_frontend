"use strict"

async function catalog() {
  let result;
  let json = fetch(`../assets/catalog/catalog.json`)
    .then(response => response.json())
    .then(data => result = data.catalog)
  return Promise.resolve(result).then(() => {
    console.log(result);
    return result;
  })
}

let pageReload = () => window.location.reload();

let catalogRender = () => {

}
catalog();
