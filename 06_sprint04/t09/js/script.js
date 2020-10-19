/* ----------------------------------------------------------------------- */
/*                                                                         */
/*   Weather forecast. sprint04. t09                                       */
/*                                                                         */
/*   By: Oleksiy Nechaiev <nechaeff@gmail.com>                             */
/*                        <t.me/losini>                                    */
/*   Created: 2020/10/15 11:09 (24H)                                       */
/*   Finished: UNFINISHED                                                  */
/*                                                                         */
/*   ucode IT academy <ucode.world>                                        */
/*   Je sues 42, nous sommes 42                                            */
/*                                                                         */
/*   Topics: API Introduction                          */
/*                                                                         */
/* ----------------------------------------------------------------------- */
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

let render = (forecast) => {
  console.log(forecast)
  let date = new Date(forecast.dt * 1000)
  console.log(date)
}

let getForecast = async (lat, lng) => {
  let forecast = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=current,minutely,hourly,alerts&cnt=6&units=metric&appid=e13ffa4a7ab745bda274278988a240f6`)
    .then(response => response.json())
    .then(data => data.daily.map((day) => {
      render(day)
    }))
}

let start = async () => {
  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        getForecast(position.coords.latitude, position.coords.longitude)
      })
    } else {
      getForecast(50.45466,30.5238)
    }
    // console.log(lat, lng)
    // let forecast = await fetch('https://extreme-ip-lookup.com/json/')
    //   .then(response => response.json())
    //   .then(data => data)
    // console.log(forecast)
  } catch (e) {
    console.log('Error is' + e)
  }
}

start();
