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
    poster = document.querySelector(".poster"),
    activeCategory = document.querySelector("categoty-active")
  for (let movie of set) {
    if (activeFilm.innerHTML === movie.title) {
      let div = document.querySelector(".film-info")
      div.innerHTML = `<div class="film-name"><p>${movie.title}</p>` +
        `<div id="addToFav">${movie.favorites}</div>` +
        `<div class="date"><p>${movie.date}</p></div><div class="actors">`
        for (let i of movie.actors)
          div.innerHTML += `<p>${i}<\p>`
        div.innerHTML += `</div><div class="description"><p>` +
          `${movie.description}</p></div></div>`
      break;
    }
  poster.innerHTML = `<img src="${movie.poster} alt="${movie.title}">`
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
}



renderFilmList(movies)
renderFilmInfo(movies)
