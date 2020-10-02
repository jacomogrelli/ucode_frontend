/* ************************************************************************** */
/*                                                                            */
/*   Marvelous list. sprint04. t01                                            */
/*                                                                            */
/*   By: Oleksiy Nechaiev <nechaeff@gmail.com>                                */
/*                        <t.me/losini>                                       */
/*   Created: 2020/09/27                                                      */
/*   Finished: 2020/10/02 10:45 (24H)                                         */
/*                                                                            */
/*   ucode IT academy <ucode.world>                                           */
/*   Je sues 42, nous sommes 42                                               */
/*                                                                            */
/*   Topics: JavaScript Classes                                               */
/*                                                                            */
/* ************************************************************************** */
'use strict'

/* Import variables from movie.js */
import {movies, favorites} from "./movies.js";

/* Function render information about the movie
 * @set - Set of movies, favorites or movie depends on click navigation
 * bar buttons */
let renderFilmInfo = (set) => {
  let activeFilm = document.querySelector(".li-active"),
    div = document.querySelector('.film-info'),
    /* creat div for actors content before any rendering, couse all variables
     * have to be on top of the block */
    actors = document.createElement("div"),
    prevPoster = document.querySelector(".poster"),
    favButton
  /* clear previous content */
  div.innerHTML = ""
  if (prevPoster)
    prevPoster.remove()
  /* set class fo actors */
  actors.setAttribute('class', 'actors')
  /* find active movie in current Set */
  for (let movie of set)
    if (activeFilm.innerHTML === movie.title) {
      /* Append information to html block .film-info */
      div.innerHTML = `<div class="film-name"><p>${movie.title}</p><div id="addToFav">${movie.favorites}</div></div>`
      div.innerHTML += `<div class="date"><p>${movie.date}</p></div>`
      for (let i of movie.actors) {
        actors.insertAdjacentHTML("beforeend", `<p>${i}</p>`)
      }
      div.append(actors)
      div.insertAdjacentHTML("beforeend", `</div><div class="description"><p>${movie.info}</p></div></div>`)
      div.insertAdjacentHTML('afterend', `<div class="poster"><img src="${movie.poster}" alt="${movie.title}"></div>`)
      /* get favorite hurt and add event add or remove from Set favorite */
      favButton = document.querySelector('#addToFav')
      favButton.onclick = (event) => {
        if (favorites.has(movie)) {
          movie.removeFromFavorites(movie)
          /* render heart to not in favorite position */
          favButton.innerHTML = movie.favorites
          /* render film list and film info without just removed element */
          renderFilmList(set)
        } else {
          movie.addToFavorite(movie, favButton);
          favButton.innerHTML = movie.favorites
        }
      }
      break;
    }
}

let renderFilmList = (set) => {
  let ul = document.querySelector("ul"),
    /* if rendering making first time, first element of current Set will be active */
    firstLi = true;

    /* clear previous content */
  ul.innerHTML = "";
  for (let movie of set) {
    let li = document.createElement("li")
    if (firstLi)
      /* make first element active */
      li.setAttribute('class', 'li-active')
    firstLi = false //set to the false after first li
    li.innerHTML = movie.title
    ul.append(li)
  }
  /* Add event to make clicked movie name to active status */
  ul.onclick = (event) => {
    let li = event.target;
    /* remove active class in previous active element */
    document.querySelector(".li-active").classList.remove("li-active")
    li.classList.add("li-active")
    /* render information about the active movie */
    renderFilmInfo(set)
  }
  /* render information about current active movie */
  renderFilmInfo(set);
}

/* Function render all information depends on check collection (all or favs)
 * @target - clicked button on navbar (all or favorites */
let renderCollection = (target) => {
  /* Remove previous active collection */
  document.querySelector(".category-active").classList.remove('category-active')
  /* Set clicked button to active status */
  target.classList.add("category-active")
  /* Render new Set of movies and information about first */
  if (target.innerHTML === "All")
    renderFilmList(movies)
  else
    renderFilmList(favorites)
}

let intMain = () => {
  /* add event to navbar buttons */
  let btnsCollect = document.querySelector("nav");

  btnsCollect.onclick = (event) => renderCollection(event.target);
  /* First time rendering */
  renderFilmList(movies)
}

intMain();
