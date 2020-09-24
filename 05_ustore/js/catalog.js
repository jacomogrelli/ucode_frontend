'use strict'

let getCatalog = () => {
  let result = fetch('../assets/catalog.json')
    .then(response => response.json())
    .then(data => result = data)
    // {
    //   (response.ok) ? response.json() : null
    // })
  console.log(result);
  return Response.resolve(result)
    .then(result => result)
    ;
}

// let getCatalog = fetch('../assets/catalog.json')
//   .then(response => response.json())

let catalog;

getCatalog()
  .then(data => catalog = data);

console.log(catalog);

