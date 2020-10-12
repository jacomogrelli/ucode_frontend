/* ----------------------------------------------------------------------- */
/*                                                                         */
/*   User profile. sprint04. t07                                           */
/*                                                                         */
/*   By: Oleksiy Nechaiev <nechaeff@gmail.com>                             */
/*                        <t.me/losini>                                    */
/*   Created: 2020/10/12 08:41 (24H)                                       */
/*   Finished: 2020/10/12 17:24 (24H)                                      */
/*                                                                         */
/*   ucode IT academy <ucode.world>                                        */
/*   Je sues 42, nous sommes 42                                            */
/*                                                                         */
/*   Topics: Proxy in JavaScript                                           */
/*                                                                         */
/* ----------------------------------------------------------------------- */
let user = {
  name: document.getElementById('name').value,
  age: document.getElementById('age').value,
  email: document.getElementById('email').value
};

/* Don't edit above this line */

/* creat new Proxy */
user = new Proxy(user, {
  /* valid new value
   * @target - Object user
   * @prop - key of object
   * @value - new value*/
  set(target, prop, value) {
    if (prop === 'age') {
      /* regexp - 'only digits from 1 to 999 and not-zero first digit */
      if (value.trim().match(/^[1-9][0-9]{0,2}$/)) {
        target[prop] = value;
        return true
      } else {
        throw new Error('Invalid age value')
      }
    }
    else if (prop === 'name') {
      /* make value to string with first uppercase letter of name and last
       * name */
      target[prop] = value
        .trim()
        .split(' ')
        .map((str) => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase())
        .join(' ')
      return true
    }
    else if (prop === 'email') {
      /* regexp - only alphanumeric letters, '.', '-', '_' with one
       * not first and not last @-symbol */
      if (value.trim().match(/^[\w.\-_]+[@]{1}[\w.\-_]+/ig)) {
        target[prop] = value;
        return true;
      } else {
        throw new Error('Invalid email value')
      }
    }
  }
})

/* Don't edit below this line */
function edit(btn) {
  btn.innerHTML = 'save';
  btn.setAttribute('onclick', 'save(this)');
  const input = document.getElementById(btn.previousElementSibling.id);
  input.removeAttribute('disabled');
}

function save(btn) {
  btn.innerHTML = 'edit';
  btn.setAttribute('onclick', 'edit(this)');
  const input = document.getElementById(btn.previousElementSibling.id);
  input.setAttribute('disabled', 'true');
  user[input.id] = document.getElementById(input.id).value;
  document.getElementById(input.id).value = user[input.id];
}
