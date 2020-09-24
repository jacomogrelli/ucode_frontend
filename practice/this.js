'use strict'

//lection
// https://www.youtube.com/watch?v=UGapN-hrekw&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

function hello() {
  console.log('Hello', this)
}

const person = {
  name: 'Oleksiy',
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo : function () {
    console.log(`Name is ${this.name}`)
  }

}

const lena = {
  name: 'Lena',
  age: 23
}

person.logInfo()
person.logInfo.bind(lena)()
