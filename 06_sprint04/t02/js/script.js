/* ----------------------------------------------------------------------- */
/*                                                                         */
/*   Upgrade human. sprint04. t02                                          */
/*                                                                         */
/*   By: Oleksiy Nechaiev <nechaeff@gmail.com>                             */
/*                        <t.me/losini>                                    */
/*   Created: 2020/10/02 14:15 (24H)                                       */
/*   Finished: 2020/10/04 00:47 (24H)                                      */
/*                                                                         */
/*   ucode IT academy <ucode.world>                                        */
/*   Je sues 42, nous sommes 42                                            */
/*                                                                         */
/*   Topics: JavaScript Class inheritance                                  */
/*                                                                         */
/* ----------------------------------------------------------------------- */
'use strict';

/*====== Functions ======*/
/* Get element by selector, returns the element
 * @id - css-style string for querySelector */
let get = (id) => document.querySelector(id);

/* Get all elements by selector, returns the array of elements
 * @id - css-style string for querySelector */
let getAll = (id) => document.querySelectorAll(id);

/* Function turning off all event listeners while person are "sleeping" and
 * turn its on after awake up
 * @events - array of elements that have any onclick-event
 * @on - onclick if need to turn off and offclick if turn on
 * @off - reverse to on variable */
let turnoffClick = (events, on, off) => {
  for (let event of events) {
    /* save to buffer value of onclick attribute */
    let onclick = event.getAttribute(on);
    /* set it to reverse attribute */
    event.setAttribute(off, onclick);
    /* remove previous attribute */
    event.removeAttribute(on);
  }
};

/* Show message in voice div
 * @interval - time while message will be showing
 * @str - message text
 * @newStr - replace msg text after delaying
 * @calories - variable for msg if not enough calories  */
let showMsg = (interval, str, newStr = '', calories) => {
  /* set new msg*/
  message.innerHTML = str;
  /* clear previous setTimeout msg delaying if it are still actual */
  clearTimeout(timerId);
  /* set delaying for new msg and save setTimeout id for it to global variable
   * if this message will be actual while new income - it will be cleared by
   * previous sting of code */
  if (!calories)
    timerId = setTimeout(() => message.innerHTML = newStr, +interval * 1000);
  else if (calories < 500)
    timerId = setTimeout(() => message.innerHTML = newStr, +interval * 1000);
  else
    timerId = setTimeout(() => message.innerHTML = '', +interval * 1000);
};

/*====== Global variables ======*/
/* Save setTimeout id */
let timerId,
    /* Get element for displaying "voice" msg of person */
    message = get('#message');

class Human {
  constructor(options) {
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.gender = options.gender;
    this.age = options.age;
    this.calories = options.calories;
  }

  sleepFor() {
    /* Get number of seconds for sleeping time from user */
    let interval = prompt("Enter the number of seconds for sleeping time");

    /* If input are correct (include just numbers) */
    if (+interval) {
      /* Get all event listeners for turning off */
      let events = getAll('[onclick]');
      turnoffClick(events, 'onclick', 'offclick');
      /* Set timeout for turning on after "sleep" delay */
      setTimeout(() => {
        turnoffClick(events, 'offclick', 'onclick');
      }, +interval * 1000);
      /* Show responding message */
      showMsg(+interval, 'I\'m sleeping', 'I\'m awake up');
    }
    /* If input are invalid (contain any symbols except numbers */
    else
      alert("Invalid value");
  }

  feed() {
    /* If not enough calories for transforming to superhero - add it */
    if (this.calories < 500) {
      this.calories += 200;
      get("#calories > span").innerHTML = this.calories;
      /* Show msg after 10 sec nom nom if not enough calories to 500 */
      showMsg(10, 'Nom nom nom', 'I\'m still hungry', this.calories);
    }
    /* If enough */
    else
      showMsg(10, 'I\'m not hungry');
  }

  /* function starts after 65 second page loading, subtract 200 calories
   * every 60 second and render the calories value to response div */
  makingHungry() {
    let calories = get('#calories > span');
    if (this.calories > 199)
      this.calories -= 200;
    else
      this.calories = 0;
    calories.innerHTML = this.calories;
  }
}

class Superhero extends Human {
  constructor(option) {
    super(option);
  }
  /* show flying msg */
  fly() {
    showMsg(10, 'I\'m flying');
  }
  /* show fighting msg */
  fightWithEvil() {
    showMsg(10, 'Khhhh-chh... Bang-g-g-g... Evil is defeated!');
  }
}

/* make new class instance Superhero */
let person = new Superhero({
  firstName: 'Igor',
  lastName: 'Valentinovich',
  gender: 'male',
  age: 117,
  calories: 0,
});

/* Function get new value of any property from user and render it to page
 * @target - value that have been clicked */
let getNewValue = (target) => {
  /* get exec property name wa clicked, id response class value */
  let key = target.getAttribute('id'),
      /* get paragraph with property */
      p = get(`#${key}`),
      /* get span with property`s value */
      span = p.querySelector('span'),
      /* get new value from user */
      newValue = prompt(`Enter new value`);

  /* if input is correct */
  if (newValue && newValue.length < 10) {
    /* if property contain number value (f.e., calories) */
    if (typeof person[key] === 'number') {
      /* if input value contains only numbers */
      if (!isNaN(+newValue)) {
        person[key] = newValue;
        span.innerHTML = newValue;
      } else {
        alert("Incorrect input");
        return;
      }
    }
    /* if property value are string */
    else {
      person[key] = newValue;
      span.innerHTML = newValue;
    }
  }
  /* if input is empty */
  else
    alert("Incorrect input");
};

/* Render properties of instance class Superhero, all property can be changed
 * by adding event listener for each element and calling function to get new
 * value from user by using prompt */
let renderProperties = () => {
  let div = document.querySelector("#properties");

  for (const [key, value] of Object.entries(person)) {
    div.insertAdjacentHTML("beforeend", `<p class="property" \
id="${key}" onclick="getNewValue(this)">${key}: <span class="propValue">\
${value}</span></p>`);
  }
};

/* Render additional methods for superhero-mode */
let turnToSuperhero = () => {
  /* check if it is enough calories for switching */
  if (person.calories > 500) {
    /* get element for adding method buttons after it */
    let turn = get("#turn");

    /* change body image */
    get('#head').setAttribute('src', './assets/images/vampire.png');
    /* add additional methods */
    turn.insertAdjacentHTML('afterend', `<br><button onclick="pers\
on.fly()">Fly</button><button onclick="person.fightWithEvil()">Fight with evil\
</button>`);
  } else
    showMsg(5, "I\'m too hungry, feed me");
};

/* fist time render default properties */
renderProperties();
/* set hungry mode by recursive calling method setTimeout */
setTimeout(() => {
  setTimeout(function run() {
    person.makingHungry();
    setTimeout(run, 60000);
  });
}, 65000);
