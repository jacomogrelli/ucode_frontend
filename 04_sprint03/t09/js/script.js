"use strict"

/*
 * array for saving results of players turns
 * 0 - for empty cell
 * 1 - for X in cell
 * 2 - for O in cell
 */
let playBox = [];

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
