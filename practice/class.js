// class Animal {
//   static type = "ANIMAL"
//
//   constructor(options) {
//     this.name = options.name
//     this.age = options.age
//     this.hasTail = options.hasTail
//   }
//
//   voice() {
//     console.log("kajlsdhflaksdjf")
//   }
//
// }
//
// class Cat extends Animal {
//   constructor(options) {
//     super(options)
//     this.color = options.color
//   }
//
//   voice() {
//     super.voice()
//     console.log('I am cat')
//   }
//   get ageInfo() {
//     return this.age * 7
//   }
//
//   set ageInfo (newAge) {
//     this.age = newAge
//   }
// }
//
// const cat = new Cat({
//   name: 'Animal',
//   age: 10,
//   hasTail: true,
//   color: "black"
// })
//
// // const animal = new Animal({
// //   name: 'Animal',
// //   age: 5,
// //   hasTail: true
// // })


class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  hide() {
    this.$el.style.display = "none"
  }

  show() {
    this.$el.style.display = "block"
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = options.size + "px"
    this.$el.style.background = options.color
  }
}


class Circle extends Box {
  constructor(options) {
    super(options);
    this.$el.style.borderRadius = options.borderRadius
  }
}

const box1 = new Circle({
  selector: '#box1',
  size: 100,
  color: 'red',
  borderRadius: '50%'
})
