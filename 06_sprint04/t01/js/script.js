/* ************************************************************************** */
/*                                                                            */
/*   Marvelous list. sprint04. t01                                            */
/*                                                                            */
/*   By: Oleksiy Nechaiev <nechaeff@gmail.com>                                */
/*                        <t.me/losini>                                       */
/*   Created: 2020/09/27                                                      */
/*   Finished: unfinished                                                     */
/*                                                                            */
/*   ucode IT academy <ucode.world>                                           */
/*   Je sues 42, nous sommes 42                                               */
/*                                                                            */
/*   Topics: JavaScript Classes                                               */
/*                                                                            */
/* ************************************************************************** */

import {movies, favorites} from "./movies.js";

let renderFilmInfo = (set) => {
  let activeFilm = document.querySelector(".li-active"),
    div = document.querySelector('.film-info'),
    actors = document.createElement("div")

  actors.setAttribute('class', 'actors')
  for (let movie of set)
    if (activeFilm.innerHTML === movie.title) {
      div.innerHTML = `<div class="film-name"><p>${movie.title}</p><div id="addToFav">${movie.favorites}</div></div>`
      div.innerHTML += `<div class="date"><p>${movie.date}</p></div>`
      for (let i of movie.actors) {
        actors.insertAdjacentHTML("beforeend", `<p>${i}</p>`)
      }
      div.append(actors)
      div.insertAdjacentHTML("beforeend", `</div><div class="description"><p>${movie.info}</p></div></div>`)
      div.insertAdjacentHTML('afterend', `<div class="poster"><img src="${movie.poster}" alt="${movie.title}"></div>`)
      break;
    }
}

let renderFilmList = (set) => {
  let ul = document.querySelector("ul"),
    firstLi = true;

  for (let movie of set) {
    let li = document.createElement("li")
    if (firstLi)
      li.setAttribute('class', 'li-active')
    firstLi = false
    li.innerHTML = movie.title
    ul.append(li)
  }
  renderFilmInfo(set);
}

let renderCollection = (target) => {
  document.querySelector(".category-active").classList.remove('category-active')
  target.classList.add("category-active")
  if (target.innerHTML === "All")
    renderFilmList(movies)
  else
    renderFilmList(favorites)
}

let intMain = () => {
  let btnsCollect = document.querySelector("nav");

  btnsCollect.onclick = (event) => renderCollection(event.target);
  renderFilmList(movies)
}

intMain();
