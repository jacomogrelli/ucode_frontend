`use strict`

const requestURL = `https://jsonplaceholder.typicode.com/users`

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    //creat new request
    const xhr = new XMLHttpRequest()
    //open url
    xhr.open(method, url)
    //set type of response to JSON
    xhr.responseType = `json`
    //set type of POST method to json (default - string)
    xhr.setRequestHeader(`Content-Type`, `application/json`)
    //if loading successful
    xhr.onload = () => {
      //if loaded with successful code, but with some mistakes
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {         // if loaded successful
        resolve(xhr.response)
      }
    }
    //if loaded with error
    xhr.onerror = () => {
      console.log(xhr.response)
    }
    //send request in JSON format
    xhr.send(JSON.stringify(body))
  })
}

//
// sendRequest(`GET`, requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.error(err))


sendRequest(`POST`, requestURL, {
  name: `Oleksii`,
  age: 26
})
  .then(data => console.log(data))
  .catch(err => console.error(err))
