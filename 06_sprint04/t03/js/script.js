/* -------------------------------------------------------------------------- */
/*                                                                            */
/*   Drag'n'Drop Stones. sprint04. t03                                        */
/*                                                                            */
/*   By: Oleksiy Nechaiev <nechaeff@gmail.com>                                */
/*                        <t.me/losini>                                       */
/*   Created: 2020/10/05 11:25 (24H)                                          */
/*   Finished: 2020/10/05 18:43                                               */
/*                                                                            */
/*   ucode IT academy <ucode.world>                                           */
/*   Je sues 42, nous sommes 42                                               */
/*                                                                            */
/*   Topics: JavaScript Events                                                */
/*                                                                            */
/* -------------------------------------------------------------------------- */
'use strict'

/*====== Functions ======*/
let checkClass = (elem, attr) => elem.classList.contains(attr);

/*====== Global variables ======*/
let main = document.querySelector("main"),
  /* for current moving element turned on upper then all previous */
  zIndexCounter = 0;

/* mouse double click for making element able to move */
main.addEventListener('dblclick', (event) => {
  let div = event.target

  /* check if target has necessary class */
  if (div.classList.contains('block'))
    /* toggle add class if absent, or remove - if present */
    div.classList.toggle('active')
})

/* add main event listener */
main.onmousedown = ((event) => {
  let div = event.target

  /* if div are able to move */
  if (checkClass(div, 'active')) {
    /* get point in div that exactly was clicked  */
    let cursorX = event.clientX - div.getBoundingClientRect().left,
      cursorY = event.clientY - div.getBoundingClientRect().top,
      /* function move element to mouse current coordinates */
      moveTo = (pageX, pageY) => {
        div.style.left = pageX - cursorX + 'px'
        div.style.top = pageY - cursorY + 'px'
      },
      moveDiv = (event) => moveTo(event.pageX, event.pageY);

    div.style.opacity = '.6'
    div.style.position = 'absolute'
    div.style.zIndex = zIndexCounter
    zIndexCounter += 1
    /* stay element on cursor clicked position */
    moveTo(event.pageX, event.pageY)
    /* add event lister */
    document.addEventListener('mousemove', moveDiv)
    /* remove event after mouse up and leave only main listener */
    div.onmouseup = (() => {
      div.style.opacity = '1'
      document.removeEventListener('mousemove', moveDiv)
      div.onmouseup = null;
    })
  }
})

/* turn off HTML5 default drag'n'drop listener */
document.ondragstart = () => false;
