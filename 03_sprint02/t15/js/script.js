"use strict"

let checkDivision = (beginRange, endRange) => {
  let str = "", flagEven = false, flagThree = false, flagTen = false;

  for (; +beginRange <= +endRange; beginRange = String(+beginRange + 1)) {
    str += beginRange;
    if (+beginRange % 2 === 0) {
      str += ` is even`;
      flagEven = true
    }
    if (+beginRange % 3 === 0) {
      if (flagEven)
        str += `,`;
      str += ` is multiple of 3`;
      flagThree = true;
    }
    if (+beginRange % 10 === 0) {
      if (flagEven || flagThree)
        str += `,`
      str += ` is divisible by 10`;
      flagTen = true;
    }
    if (!flagEven && !flagTen && !flagThree)
      str += ` -`;
    str += `\n`;
    flagEven = false;
    flagThree = false;
    flagTen = false;
  }
  console.log(str);
}

let intMain = () => {
  let getBegin = prompt("Input the berin of the range")
  let getEnd = prompt("Input the begin of the range")

  if (getBegin.length == 0) {
    console.log(`Default value "1" was setted up`);
    getBegin = "1";
  }
  if (getEnd.length == 0) {
    console.log(`Default value "100" was setted up`);
    getEnd = "100";
  }
  if (isNaN(getBegin) || isNaN(getEnd)) {
    console.log("Wrong input, try again");
    intMain();
  }
  if (+getBegin <= +getEnd)
    checkDivision(+getBegin, +getEnd);
}

intMain();
