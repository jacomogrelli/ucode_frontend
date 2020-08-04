"use strict"

let num = Number(14)
let intbig = BigInt(190)
let str = String("lakjsdhf")
let trueFalse = Boolean(false)
let touchVoid = null
let undef = undefined
let obj = { brik: "camelCase - is shit" }
let sym = Symbol("id")
function func() {
  alert(obj)
}

alert(`num is ${typeof num}\n` +
      `intbig is ${typeof intbig}\n` +
      `str is ${typeof str}\n` +
      `trueFalse is ${typeof trueFalse}\n` +
      `touchVoid is objec.... null :)\n` +
      `undef is ${typeof undef}\n` +
      `obj is ${typeof obj}\n` +
      `sym is ${typeof sym}\n` +
      `func is ${typeof func}\n`)
