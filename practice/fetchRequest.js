`use strict`

const requestURL = `https://jsonplaceholder.typicode.com/photos`

// function sendRequest(method, url, body = null) {
//   const headers = {
//     'Content-Type': 'application/json'
//   }
//   return fetch(url).then(response => {
//     if (response.ok) {
//       return response.json()
//     }
//     return response.json().then( error => {
//       const e = new Error("Error")
//       e.data = error
//       throw e;
//     })
//   })
// }

// let result;
//
// sendRequest(`GET`, requestURL)
//   .then(data => {
//     result = data
//     return data;
//   })
//   .then(data => console.log(result))
//
// console.log(result)



//
// sendRequest(`POST`, requestURL, {
//   name: `Oleksii`,
//   age: 26
// })
//   .then(data => console.log(data))
//   .catch(err => console.error(err))
