/* ----------------------------------------------------------------------- */
/*                                                                         */
/*   Chat with J.A.R.V.I.S.. sprint04. t06                                 */
/*                                                                         */
/*   By: Oleksiy Nechaiev <nechaeff@gmail.com>                             */
/*                        <t.me/losini>                                    */
/*   Created: 2020/10/08 18:21 (24H)                                       */
/*   Finished: UNFINISHED                                                  */
/*                                                                         */
/*   ucode IT academy <ucode.world>                                        */
/*   Je sues 42, nous sommes 42                                            */
/*                                                                         */
/*   Topics: Generator                                                     */
/*                                                                         */
/* ----------------------------------------------------------------------- */
'use strict'

/*====== Function ======*/
/* get element by selector, returns the element
 * @id - css-style string for querySelector */
let get = (id) => document.querySelector(id);

document.querySelector('.msgBox').scrollTop = 9999999;

function* replies() {
  yield 'Hello, I am J.A.R.V.I.S.';
  yield 'I believe I\'ve already said it, but, sure, hello again!';
  yield 'You are malfunctioning';
  yield 'I believe your intentions to be hostile.';
  while (true)
    yield 'I will not respond to that.';
}

let addMsg = (event, msg) => {

}

let addListeners = () => {
  let key = get('.send')

  key.addEventListener('click', () => {
    console.log('asdf')})
  document.addEventListener('keypress', (key) => {
    if (key.key === 'Enter')
    console.log('rabotaet')
  })
}

addListeners()
