//-------------------------------------- EXAMPLE ----------------------------------- //

function wordsToObject(input) {
  const array = input.split(" ");
  const wordsObjectArr = [];
  for (let i = 0; i < array.length; i += 2) {
    const element = array[i];
    wordsObjectArr.push([element, array[i + 1]]);
  }

  const objects = [];

  for (const [value, id] of wordsObjectArr) {
    const obj = {};
    obj["name"] = value;
    obj["id"] = id;
    objects.push(obj);
  }
  return objects;
}
// console.log(wordsToObject("red 1 yellow 2 black 3 white 4"));

//-------------------------------------- EXAMPLE ----------------------------------- //

function numObj(s) {
  const objects = [];
  const arr = [];
  for (const element of s) {
    arr.push([element]);
  }
  for (const keys of arr) {
    const obj = {};
    obj[keys] = String.fromCharCode(keys);
    objects.push(obj);
  }
  return objects;
}
// console.log(numObj([118, 117, 120])); //[{'118':'v'}, {'117':'u'}, {'120':'x'}]

//-------------------------------------- EXAMPLE ----------------------------------- //

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    this.potions.price;
  },
};
atTheOldToad.addPotion("nvj");
// console.log(newPotion);

//-------------------------------------- EXAMPLE ----------------------------------- //

function winner(deckSteve, deckJosh) {
  const deck = {
    A: 14,
    K: 13,
    Q: 12,
    J: 11,
    T: 10,
    9: 9,
    8: 8,
    7: 7,
    6: 6,
    5: 5,
    4: 4,
    3: 3,
    2: 2,
  };
  let deckStevePoints = 0;
  let deckJoshPoints = 0;
  for (let i = 0; i < deckSteve.length; i++) {
    let valueDeckSteve = 0;
    let valueDeckJosh = 0;
    for (const keySteve in deck) {
      if (keySteve === deckSteve[i]) valueDeckSteve = deck[keySteve];
    }
    for (const keyJosh in deck) {
      if (keyJosh === deckJosh[i]) valueDeckJosh = deck[keyJosh];
    }
    if (valueDeckSteve > valueDeckJosh) deckStevePoints++;
    else if (valueDeckSteve < valueDeckJosh) deckJoshPoints++;
  }
  if (deckStevePoints > deckJoshPoints) {
    return `Steve wins ${deckStevePoints} to ${deckJoshPoints}`;
  } else if (deckStevePoints < deckJoshPoints) {
    return `Josh wins ${deckJoshPoints} to ${deckStevePoints}`;
  } else return "Tie";
}
// console.log(winner(["T", "A"], ["Q", "A"]));

//-------------------------------------- EXAMPLE ----------------------------------- //

function digitalRoot(n) {
  const array = n.toString().split("");
  for (let index = 0; index < array.length; index) {
    let result = 0;
    for (const element of array) {
      result += parseInt(element);
    }
    array.splice(0, array.length);
    const newArray = result.toString().split("");
    for (const iterator of newArray) {
      array.push(iterator);
    }
    if (array.length === 1) return parseInt(array.join());
  }
}
// console.log(digitalRoot(966503));

//-------------------------------------- EXAMPLE ----------------------------------- //

// function latestClock(a, b, c, d) {
//   const clocks = [a, b, c, d];
//   const hourse = [];
//   const minute = [];
//   for (let i = 0; i < clocks.length; i++) {
//     let elementA = clocks[i];
//     for (let index = 0; index < clocks.length; index++) {
//       const elementB = clocks[index];
//       if (index !== i) {
//         let numberClock = parseInt(`${elementA}${elementB}`);
//       }
//       if (numberClock < 24) {
//         hourse.push(numberClock);
//       } else if (numberClock < 60) {
//         minute.push(numberClock);
//       }
//     }
//   }
//   return hourse;
// }
// console.log(latestClock(9, 1, 2, 5)); //"21:59";

// const s = 2;
// console.log(typeof parseInt(`${s}`));

//-------------------------------------- EXAMPLE ----------------------------------- //
const arr = [
  ["B004", "A042", "A025", "A042", "C025"],
  ["B009", "B040", "B004", "A042", "A025", "A042"],
  ["A042", "A025", "B004"],
];
const item = "A042"; // Припустимо, що ви шукаєте цей елемент

// Починаємо перевірку з другого масиву
const itemExistsInAllArrays = arr
  .slice(1)
  .every((subArray) => subArray.includes(item));

// console.log(itemExistsInAllArrays); // Виведе true або false в залежності від того, чи є item в усіх підмасивах, крім першого

//-------------------------------------- EXAMPLE ----------------------------------- //

class Lamp {
  constructor(color) {
    this.color = color;
    this.on = false;
  }
  toggleSwitch() {
    this.on ? (this.on = false) : (this.on = true);
  }
  state() {
    if (!this.on) return "The lamp is off.";
    else return "The lamp is on.";
  }
}

// const a = new Lamp(b);
// const b = new Lamp("Blue1");

// myLamp.toggleSwitch();
// console.log(myLamp.state());

//-------------------------------------- EXAMPLE ----------------------------------- //

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
const andy = new Student("Andy", 0, 4, 0);
const stephen = new Student("Stephen", 0, 6, 0);
// const eric = new Student("Eric", 0, 4, 0);
// const david = new Student("David", 0, 4, 0);
function mostMoney(students) {
  const newStudentsObj = [];
  for (const element of students) {
    let money = element.fives * 5 + element.tens * 10 + element.twenties * 20;
    newStudentsObj.push({ name: element.name, money: money });
  }
  const result = newStudentsObj.reduce((acc, obj) => {
    return acc.money > obj.money ? acc : obj;
  }, 0);
  const result2 = newStudentsObj.every(
    ({ money }) => money === newStudentsObj[0].money
  );
  return result2 && students.length !== 1 ? "all" : result.name;
}
// console.log(mostMoney([andy, stephen]));

//-------------------------------------- EXAMPLE ----------------------------------- //

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

class SubstitutionCipher {
  constructor(abc1, abc2) {
    this.abc1 = abc1.split("");
    this.abc2 = abc2.split("");
  }
  encode(params) {
    const paramsArr = params.split("");
    const result = [];
    for (let i = 0; i < paramsArr.length; i++) {
      const firstIndex = this.abc1.indexOf(paramsArr[i]);
      if (firstIndex === -1) result.push(paramsArr[i]);
      else result.push(this.abc2[firstIndex]);
    }
    return result.join("");
  }
  decode(params) {
    const paramsArr = params.split("");
    const result = [];
    for (let i = 0; i < paramsArr.length; i++) {
      const firstIndex = this.abc2.indexOf(paramsArr[i]);
      if (firstIndex === -1) result.push(paramsArr[i]);
      else result.push(this.abc1[firstIndex]);
    }
    return result.join("");
  }
}

var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("a&c"); // => "eta"
sub.decode("qxz"); // => "xyz"

//-------------------------------------- EXAMPLE ----------------------------------- //

const numbers = [1, 2, 3, 4, 5];
Array.prototype.square = function () {
  return this.map((element) => element * element);
};
Array.prototype.cube = function () {
  return this.map((element) => Math.pow(element, 3));
};
Array.prototype.average = function () {
  let sum = 0;
  this.map((element) => (sum += element));
  return sum / this.length;
};
Array.prototype.sum = function () {
  let sum = 0;
  this.map((element) => (sum += element));
  return sum;
};
Array.prototype.even = function () {
  return this.filter((element) => element % 2 === 0);
};
Array.prototype.odd = function () {
  return this.filter((element) => element % 2 !== 0);
};

numbers.square(); // must return [1, 4, 9, 16, 25]
numbers.cube(); // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum(); // must return 15
numbers.even(); // must return [2, 4]
numbers.odd(); // must return [1, 3, 5]

//-------------------------------------- EXAMPLE ----------------------------------- //

const arrB = [1, 2, 33, 4, 1, 1, 3, 4, 4];
for (let i = 0; i < arrB.length; i++) {
  const element = arrB[i];
  if (element === 4) {
    arrB.splice(i, 1);
    return console.log(arrB);
  }
}
console.log(arrB);

const abj = {
  1: "value1",
  2: "value2",
  3: "value3",
  4: "value4",
  5: "value5",
};
