function bubbleSort(arr) {
  let len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Приклад використання
let array = [5, 3, 8, 4, 2];
console.log(bubbleSort(array)); // Output: [2, 3, 4, 5, 8]

//-------------------------------------- EXAMPLE ----------------------------------- //

function gaslighting(shirtWord, yourWord, friendsLetters) {
  const arrayShirtWord = [];
  const arrayYourWord = [];
  const arrayFriendsLetters = [];
  let number = 0;

  for (let i = 0; i < shirtWord.length; i++) {
    arrayShirtWord.push(shirtWord[i]);
  }
  for (let i = 0; i < yourWord.length; i++) {
    arrayYourWord.push(yourWord[i]);
  }
  for (let i = 0; i < friendsLetters.length; i++) {
    arrayFriendsLetters.push(friendsLetters[i]);
  }
  for (
    let i = 0;
    i < shirtWord.length || i < yourWord.length || i < friendsLetters.length;
    i++
  ) {
    if (arrayFriendsLetters.includes(arrayShirtWord[i])) {
      number++;
    } else if (arrayFriendsLetters.includes(arrayYourWord[i])) {
      return true;
    }
    if (number >= 1) {
      return arrayFriendsLetters.includes(arrayYourWord[i]) ? false : true;
    }
    if (arrayFriendsLetters[0] === undefined) {
      return false;
    }
  }

  return number === 0 ? false : true;
}
console.log(gaslighting("mqmibrslynuiy", "cpurtfwrguwlo", "qoixslpb"));

// False - означатиме, що ваш друг не може зрозуміти, що ви його дурите
// True - якщо ваш друг може зрозуміти, що ви його дурите

function filter_list(l) {
  let list = [];
  for (let i = 0; i < l.length; i++) {
    typeof l[i] === "string" ? undefined : list.push(l[i]);
  }
  return list;
}
console.log(filter_list([1, 2, "aasf", "1", 123, 123]));

function createReversedArray() {
  let argsArray = Array.from(arguments);
  return argsArray.reverse();
}
console.log(createReversedArray(12, 85, 37, 4));

//-------------------------------------- EXAMPLE ----------------------------------- //

function flickNumber(arr) {
  const array = [];
  let index = 0;
  const end = arr.indexOf("flick");
  if (end > -1) {
    const subArray = arr.slice(0, end);
    for (let i = 0; i < subArray.length; i++) {
      array.push(true);
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      array.push(true);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      index++;
      if (index % 2 === 0) {
        const end = arr.indexOf("flick", i + 1);
        if (end === -1) {
          const subArray = arr.slice(i);
          for (let indexEnd = 0; indexEnd < subArray.length; indexEnd++) {
            array.push(true);
          }
        } else {
          const subArray = arr.slice(i, end);
          for (let i = 0; i < subArray.length; i++) {
            array.push(true);
          }
        }
      } else {
        const end = arr.indexOf("flick", i + 1);
        if (end === -1) {
          const subArray = arr.slice(i);
          for (let indexEnd = 0; indexEnd < subArray.length; indexEnd++) {
            array.push(false);
          }
        } else {
          const subArray = arr.slice(i, end);
          for (let i = 0; i < subArray.length; i++) {
            array.push(false);
          }
        }
      }
    }
  }
  return array;
}
console.log(flickNumber(["bicycle", "bicycle"]));

//-------------------------------------- EXAMPLE ----------------------------------- //

function flickSwitch(arr) {
  const newArr = [];
  let switcher = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "flick") {
      newArr.push(switcher);
    } else {
      switcher = !switcher;
      newArr.push(switcher);
    }
  }
  return newArr;
}
console.log(
  flickSwitch(["nkejn", "fdjn", "lick", "flick", "lick", "lick", "flick"])
);

//-------------------------------------- EXAMPLE ----------------------------------- //

function naughtyOrNice(data) {
  const keys = Object.keys(data);
  let naughy = 0;
  let nice = 0;
  for (let i = 0; i < keys.length; i++) {
    const months = keys[i];
    const values = Object.values(data[months]);
    for (const element of values) {
      if (element === "Naughty") {
        naughy++;
      } else {
        nice++;
      }
    }
  }
  if (naughy > nice) {
    return "Naughty!";
  } else {
    return "Nice!";
  }
}
console.log(
  naughtyOrNice({
    January: {
      1: "Naughty",
      2: "Naughty",
      31: "Nice",
    },
    December: {
      1: "Nice",
      2: "Nice",
      31: "Naughty",
    },
  })
);

//-------------------------------------- EXAMPLE ----------------------------------- //

function getNiceNames(people) {
  const nicePerson = [];
  for (const person of people) {
    if (person.wasNice) {
      nicePerson.push(person.name);
    }
  }
  return nicePerson;
}
console.log(getNiceNames(["Santa", "Warrior reading this kata"]));

function getNaughtyNames(people) {
  const naughtyPerson = [];
  for (const person of people) {
    if (person.wasNice === undefined) {
    } else if (!person.wasNice) {
      naughtyPerson.push(person.name);
    }
  }
  return naughtyPerson;
}
console.log(getNaughtyNames(["Santa", "Warrior reading this kata"]));

//-------------------------------------- EXAMPLE ----------------------------------- //

function scoreThrows(radii) {
  let points = 0;
  let number = 0;
  for (const element of radii) {
    if (element > 10) {
      points += 0;
    } else if (element >= 5 && element <= 10) {
      points += 5;
    } else if (element < 5) {
      points += 10;
      number++;
      if (number === radii.length) {
        points += 100;
      }
    }
  }
  return points;
}
console.log(scoreThrows([3, 2, 3, 4]));

//-------------------------------------- EXAMPLE ----------------------------------- //

function sortList(sortBy, list) {
  const newList = [];
  const arr = [];
  const secondArr = [];
  const copySecondArr = [];
  let index = 0;
  let secondIndex = 0;
  for (const object of list) {
    for (const key in object) {
      if (key === sortBy) {
        arr.push(object[key]);
      } else {
        secondArr.push(object[key]);
        copySecondArr.push(object[key]);
      }
    }
  }
  secondArr[0] = copySecondArr[copySecondArr.length - 1];
  secondArr[secondArr.length - 1] = copySecondArr[0];
  const newArr = arr.sort((a, b) => b - a);
  for (const objects of list) {
    for (const keys in objects) {
      if (keys === sortBy) {
        objects[keys] = newArr[index++];
      } else {
        objects[keys] = secondArr[secondIndex++];
        newList.push(objects);
      }
    }
  }

  return `${newList}`;
}
console.log(
  sortList("a", [
    { a: 1, b: 3 },
    { a: 3, b: 2 },
    { a: 2, b: 40 },
    { a: 4, b: 12 },
  ])
);

//-------------------------------------- EXAMPLE ----------------------------------- //

const questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];
for (const object of questions) {
  object.usersAnswer = null;
}
console.log(questions);

//-------------------------------------- EXAMPLE ----------------------------------- //

function strCount(obj) {
  let count = 0;
  for (const value of Object.values(obj)) {
    if (typeof value === "string") count++;
    else if (typeof value === "object" && value !== null) {
      count += strCount(value);
    }
  }

  return count;
}
console.log(
  strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
    sixth: undefined,
    seventh: {},
  })
);
const arrayG = [];

//-------------------------------------- EXAMPLE ----------------------------------- //

function returnSpecifics(obj) {
  const result = [];
  for (const value of Object.values(obj)) {
    if (typeof value === "number") result.push(value);
  }
  for (const value of Object.values(obj)) {
    if (typeof value === "function") {
      const keys = Object.keys(obj).find((key) => obj[key] === value);
      result.push(keys);
    }
  }
  if (result.length === 0) result.push("The Object is Empty");
  return result;
}
console.log(returnSpecifics({})); //[10,-20,50,100,'subtract']

const a = { 1: "1", 2: "2", 3: "3" },
  b = { 3: "4", 5: "6", 6: "7", 7: "8" },
  c = { 5: "9", 8: "9", 6: "12", 23: "35" },
  o = [a, b, c];

// Функція для повторення значення n разів
function repeat(value, n) {
  return Array(n).fill(value);
}

function stonePick(arr) {
  let sticks = 0;
  let cobblestone = 0;
  let pickaxes = 0;
  for (const element of arr) {
    if (element === "Sticks") sticks++;
    else if (element === "Cobblestone") cobblestone++;
    else if (element === "Wood") sticks += 4;
  }
  let numberTheSticks = Math.floor(sticks / 2);
  let numberTheCobblestone = Math.floor(cobblestone / 3);
  if (numberTheSticks > numberTheCobblestone) pickaxes = cobblestone / 3;
  else if (numberTheSticks < numberTheCobblestone) pickaxes = sticks / 2;
  else pickaxes = numberTheSticks;
  return Math.floor(pickaxes);
}

console.log(stonePick([...repeat("Wood", 51), ...repeat("Cobblestone", 91)]));

//-------------------------------------- EXAMPLE ----------------------------------- //

function sort(items) {
  for (let i = 1; i < items.length; i++) {
    let current = items[i];
    let j = i - 1;
    while (j >= 0 && items[j] > current) {
      items[j + 1] = items[j];
      j--;
    }
    items[j + 1] = current;
  }
  return items;
}
console.log(sort([1, 3, 2, 3, 4, 1]));

//-------------------------------------- EXAMPLE ----------------------------------- //

function createPhoneNumber(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (i === 0) {
      newNumbers.push("(");
      newNumbers.push(element);
    } else if (i === 2) {
      newNumbers.push(element);
      newNumbers.push(") ");
    } else if (i === 5) {
      newNumbers.push(element);
      newNumbers.push("-");
    } else newNumbers.push(element);
  }
  return newNumbers.join("");
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//-------------------------------------- EXAMPLE ----------------------------------- //

// const people = [
//   "Easter Bunny",
//   "Tooth Fairy",
//   "Frosty the Snowman",
//   "Jack Frost",
//   "Cupid",
//   "Father Time",
// ];
// const responses = [
//   { name: "Easter Bunny", response: "declined" },
//   { name: "Jack Frost", response: "declined" },
//   { name: "Tooth Fairy", response: "accepted" },
// ];

// function getAttendees(peopleInvited, responses) {
//   const result = [];
//   const unknown = [];
//   for (const object of responses) {
//     if (object.response === "accepted") {
//       result.push(object.name);
//     } else {
//       unknown.push(object.name);
//     }
//   }
//   for (const namePerson of peopleInvited) {
//     if (!unknown.includes(namePerson) && !result.includes(namePerson)) {
//       result.push(namePerson);
//     }
//   return result;
// }

// console.log(getAttendees(people, responses));

//-------------------------------------- EXAMPLE ----------------------------------- //

// function obtainMaxNumber(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     for (let index = 0; index < arr.length; index++) {
//       if (element === arr[i + 1]) {
//         element += arr[i + 1];
//       }
//     }
//   }
// }
// console.log(obtainMaxNumber([2, 4, 8, 1, 1, 15, 15, 7, 7, 7, 7, 7, 7, 7])); // 30

//!-------------------------------------- EXAMPLE ----------------------------------- //

const getAttendees = (peopleInvited, responses) => {
  // Круто зробив
  return responses
    .filter(({ response }) => response === "accepted")
    .map(({ name }) => name)
    .concat(
      peopleInvited.filter(
        (nameInvited) =>
          !responses.map(({ name }) => name).includes(nameInvited)
      )
    );
};
console.log(
  getAttendees(
    ["Easter Bunny", "Tooth Fairy", "Frosty the Snowman", "Jack Frost"],
    [
      { name: "Easter Bunny", response: "declined" },
      { name: "Jack Frost", response: "declined" },
      { name: "Tooth Fairy", response: "accepted" },
    ]
  )
);

//?-------------------------------------- EXAMPLE ----------------------------------- //
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
const getUserEmails = (users) => {
  return users.map((element) => element).flatMap(({ email }) => email);
};
console.log(getUserEmails(users));

//-------------------------------------- EXAMPLE ----------------------------------- //

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((acc, element) => {
  return acc + element.playtime / element.gamesPlayed;
}, 0);
console.log(totalAveragePlaytimePerGame);

const calculateTotalBalance = (users) => {
  return users.reduce((acc, element) => {
    return acc + element.balance;
  }, 0);
};
console.log(calculateTotalBalance(users));

//-------------------------------------- EXAMPLE ----------------------------------- //

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter(({ rating }) => rating > MIN_BOOK_RATING)
  .map(({ author }) => author)
  .toSorted((firstStudent, secondStudent) =>
    firstStudent.localeCompare(secondStudent)
  );
console.log(names);

//-------------------------------------- EXAMPLE ----------------------------------- //

const arrayV = [3, 3, 3, 1, 4, 3, 3, 3, 0, 3];

const arrr1 = (arrayV) => {
  const result = [];
  for (let i = 0; i < arrayV.length; i += arrayV[i]) {
    result.push(arrayV[i]);
    if (arrayV[i] === 0) return false;
  }
  if (result.length < arrayV.length) return true;
};
console.log(arrr1(arrayV));

//-------------------------------------- EXAMPLE ----------------------------------- //

const whoAteWhat = [
  { name: "Billy The Beast", chickenwings: 17, hamburgers: 7, hotdogs: 8 },
  { name: "Habanero Hillary", chickenwings: 5, hamburgers: 17, hotdogs: 11 },
  { name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15 },
  { name: "Big Bob", chickenwings: 8, hamburgers: 8, hotdogs: 15 },
];

function scoreboard(whoAteWhat) {
  // your code here..
  const result = [];
  for (const iterator of whoAteWhat) {
    const obj = {};
    obj.name = iterator.name;
    obj.score =
      iterator.chickenwings * 5 +
      iterator.hamburgers * 3 +
      iterator.hotdogs * 2;
    result.push(obj);
  }
  result.sort(function (a, b) {
    if (b.score === a.score) {
      return a.name.localeCompare(b.name);
    } else {
      return b.score - a.score;
    }
  });
  return result;
}
console.log(scoreboard(whoAteWhat));
// result = [
//   { name: "Big Bob", score: 134 },
//   { name: "Billy The Beast", score: 122 },
//   { name: "Habanero Hillary", score: 98 },
//   { name: "Joey Jaws", score: 94 },
// ];
