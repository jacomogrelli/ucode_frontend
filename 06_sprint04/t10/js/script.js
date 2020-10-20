/* -------------------------------------------------------------------------- */
/*                                                                            */
/*   Super-stats. sprint04. t10                                               */
/*                                                                            */
/*   By: Oleksiy Nechaiev <nechaeff@gmail.com>                                */
/*                        <t.me/losini>                                       */
/*   Created: 2020/10/20 10:44 (24H)                                          */
/*   Finished: UNFINISHED                                         */
/*                                                                            */
/*   ucode IT academy <ucode.world>                                           */
/*   Je sues 42, nous sommes 42                                               */
/*                                                                            */
/*   Topics: API Introduction                                                 */
/*                                                                            */
/* -------------------------------------------------------------------------- */
'use strict'
/*====== Functions ======*/
/* get element by selector, returns the element
 * @id - css-style string for querySelector */
let get = (id) => document.querySelector(id);
/* create element with class, insert text inside if exists
 * @tag - type of element
 * @clas - class of element
 * @text - text, that must be included to element */
let createWithClass = (tag, clas, text) => {
  let div = document.createElement(tag)

  div.classList.add(clas)
  if (text)
    div.innerHTML = text
  return div
}

/*====== Variables ======*/
/* bypass Superhero API protection from requests from localhost */
const cors = 'https://cors-proxy.htmldriven.com/?url='
/* Superhero API key and URL */
const apiKey = '764357004142176/'
const apiUrl = 'https://superheroapi.com/api/'
/* array with superheroes preparing to compare */
let results = {}
let toCompare = new Set()

let addToCompare = (event) => {
  let btn = event.target
  let compareCount = +compare.value.match(/\d+/gm)

  if (compareCount < 21) {
    toCompare.add(results[btn.getAttribute('id')])
    compare.value = compare.value.replace(/\d+/gm, `${compareCount + 1}`)
    btn.remove()
  } else {
    alert('Max count to compare is 20 heroes')
  }
}

let renderSearchResults = (heroes) => {
  let block = get('#searchResultsBtns')

  searchResults.style.display = 'block'
  block.innerHTML = ''
  console.log('test')
  heroes.map(hero => {
    block.insertAdjacentHTML('beforeend', `<input type="button" \
value="${hero.name}. ${hero.biography['full-name']}" id="${hero.id}">`)
  })
  block.removeEventListener('click', addToCompare)
  block.addEventListener('click', addToCompare)
}

let makeRandomRequest = () => {
  let id = Math.round(Math.random() * (731 - 1 + 1))

  fetch(`${cors}${apiUrl}${apiKey}${id}`)
    .then(response => response.json())
    .then(data => renderSearchResults(data))
}

let makeSearchRequest = () => {
  fetch(`${cors}${apiUrl}${apiKey}search/${requestValue.value}`)
    .then(response => response.json())
    .then(data => {
      if (data.response === 'error')
        alert(data.error)
      else {
        results = {}
        data.results.map(hero => results[`${hero.id}`] = hero)
        renderSearchResults(data.results)
        requestValue.value = ''
      }
    })
}
