"use strict"

/*
 * array for saving results of players turns
 * 0 - for empty cell
 * 1 - for X in cell
 * 2 - for O in cell
 */
let playBox = [];

/*
 * Variable that contains information about number of turns, additional
 * information is what player have to turn
 * if even = Player 1
 * if odd = Player 2
 */
let turnsCounter = 0;

/*
 * Function fill array for results with 0 when new game has been started
 */
let playBoxZeroFill = () => {
  for (let i = 0; i < 3; i++) {
    playBox[i] = []
    for (let j = 0; j < 3; j++)
      playBox[i][j] = 0;
  }
}

/*
 * Function change background colors of different blocks
 * id = 1 - when player 1 have to make turn
 * id = 2 - when player 2 have to make turn
 * id = 3 - when someone has been win
 * id = 4 - when is draw
 */
let changeBackground = (id) => {
  let player1 = document.querySelector(`#plrOneBar`);
  let player2 = document.querySelector(`#plrTwoBar`);
  let infoBar = document.querySelector(`#infoBar`);

  if (id === 1) {
    player1.style.backgroundColor = `#cd903c`;
    player2.style.backgroundColor = `#d3d3d3`;
  }
  if (id === 2) {
    player1.style.backgroundColor = `#d3d3d3`;
    player2.style.backgroundColor = `#cd903c`;
  }
  if (id === 3) {
    player1.style.backgroundColor = `#d3d3d3`;
    player2.style.backgroundColor = `#d3d3d3`;
    infoBar.style.backgroundColor = `#367533`;

  }
  if (id === 4) {
    player1.style.backgroundColor = `#d3d3d3`;
    player2.style.backgroundColor = `#d3d3d3`;
    infoBar.style.backgroundColor = `#cd903c`;
  }
}

let winDrawChecker = () => {
  //check rows for win
  for (let i = 0; playBox[i]; i++) {
    if ((playBox[i][0] === playBox[i][1] && playBox[i][0] === playBox[i][2]
      && playBox[i][0] !== 0)
      || (playBox[0][i] === playBox[1][i] && playBox[0][i] === playBox[2][i]
      && playBox[i][0] !== 0)) {
      let result = document.querySelector(`#resultInfoBar`);
      result.innerHTML = `Player ${playBox[i][0]} won!`;
      changeBackground(3);
      listener(false);
    }
  }
}

let makeTurn = (str) => {
  let divArea = document.querySelector(`#${str}`);
  let element = document.createElement(`div`);
  let turnCounterArea = document.querySelector(`#nmbrTurnCounter`);

  if (turnsCounter % 2 === 0) {
    element.className = `cross`;
    changeBackground(2);
    playBox[+str.charAt(4) - 1][+str.charAt(6) - 1] = 1;
  }
  if (turnsCounter % 2 !== 0) {
    element.className = `circle`;
    changeBackground(1);
    playBox[+str.charAt(4) - 1][+str.charAt(6) - 1] = 2;
  }
  divArea.appendChild(element);
  turnsCounter += 1;
  turnCounterArea.innerHTML = `${turnsCounter}`;
  winDrawChecker();
}

let listener = (flag) => {
  let areas = document.querySelectorAll(`.areas`);
  let reset = document.querySelector(`#gameResetBtn`)

  if (flag) {
    for (let i = 0; areas[i]; i++)
      areas[i].addEventListener(`click`, () => {
        makeTurn(areas[i].getAttribute(`id`))
      }, {once: true});
    reset.addEventListener(`click`, () => {
      window.location.reload()
    })
  } else {
    for (let i = 0; areas[i]; i++)
      areas[i].removeEventListener(`click`, () => {
        makeTurn(areas[i].getAttribute(`id`))
      });
  }
}

let intMain = () => {
  playBoxZeroFill();
  listener(true);
  changeBackground(1);
}

intMain();
