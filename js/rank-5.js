const koloda = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  " K",
];

function krazyKingBlackjack(deck, king) {
  const decks = {
    A: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10,
  };
  let sumA = 0;
  for (const element of deck) {
    sumA += decks[element];
  }
  if (sumA > 21) decks.K = king;
  if (sumA <= 10) decks.A = 11;
  let sumB = 0;
  for (const element of deck) {
    sumB += decks[element];
  }
  if (sumB + 10 - king <= 21 && king > 0) sumB += 10 - king;
  return sumB > 21 ? false : sumB;
}
// console.log(krazyKingBlackjack(["K", "K", "K"], 4));

//?-------------------------------------- EXAMPLE ----------------------------------- //

var a1 = ["B004", "A042", "A025", "A042", "C025"];
var a2 = ["B009", "B040", "B004", "A042", "A025", "A042"];
var a3 = ["A042", "A025", "B004"];

function idBestUsers(...arr) {
  const result = [];
  const newArr = arr.flat();
  for (const item of arr[0]) {
    const itemExistsInAllArrays = arr
      .slice(1)
      .every((subArray) => subArray.includes(item));
    if (itemExistsInAllArrays) {
      let counter = 0; //? лічильник
      while (newArr.indexOf(item) !== -1) {
        counter++;
        newArr.splice(newArr.indexOf(item), 1);
      }
      if (result.includes(counter)) {
        result[result.indexOf(counter) + 1].push(item);
        result[result.indexOf(counter) + 1].sort((a, b) => a.localeCompare(b));
      } else if (counter !== 0) result.push(counter, [item]);
    }
  }
  const newResult = [];
  for (let i = 0; i < result.length; i += 2) {
    newResult.push([result[i], result[i + 1]]);
  }
  newResult.sort((a, b) => b[0] - a[0]);
  return newResult;
}
console.log(idBestUsers(a1, a2, a3));

//-------------------------------------- EXAMPLE ----------------------------------- //

class Car {
  #price;
  static maxPrice = 50000;

  constructor(params) {
    this.#price = params.price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.maxPrice) {
      return (this.#price = newPrice);
    }
  }
}

const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

audi.price = 49000;
// console.log(audi.price); // 49000

audi.price = 51000;
// console.log(audi.price); // 49000

//-------------------------------------- EXAMPLE ----------------------------------- //

const alphabetArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

class CaesarCipher {
  constructor(number) {
    this.number = number;
  }
  encode(strEncode) {
    const arr = strEncode.toUpperCase().split("");
    const result = [];
    for (const element of arr) {
      const index = alphabetArray.indexOf(element);
      if (alphabetArray.indexOf(element) === -1) {
        result.push(element);
      } else if (this.number + index >= alphabetArray.length) {
        const newIndex = this.number - (alphabetArray.length - index);
        result.push(alphabetArray[newIndex]);
      } else {
        result.push(alphabetArray[index + this.number]);
      }
    }
    return result.join("");
  }
  decode(strDecode) {
    const arr = strDecode.split("");
    const result = [];
    for (const element of arr) {
      const index = alphabetArray.indexOf(element);
      if (alphabetArray.indexOf(element) === -1) {
        result.push(element);
      } else if (index - this.number < 0) {
        const newIndex = alphabetArray.length - (this.number - index);
        result.push(alphabetArray[newIndex]);
      } else {
        result.push(alphabetArray[index - this.number]);
      }
    }
    return result.join("");
  }
}

const w = new CaesarCipher(5);
w.encode("R13VE"); // returns 'HTIJBFWX'
w.decode("W13AJ"); // returns 'WAFFLES'

//-------------------------------------- EXAMPLE ----------------------------------- //

class Vector {
  constructor(arr) {
    this.array = arr;
  }
  add(addArr) {
    if (this.array.length === addArr.array.length) {
      const result = [];
      for (let i = 0; i < this.array.length; i++) {
        result.push(this.array[i] + addArr.array[i]);
      }
      return new Vector(result);
    } else return new Error("Arrays must have the same length.");
  }
  subtract(subtractArr) {
    if (this.array.length === subtractArr.array.length) {
      const result = [];
      for (let i = 0; i < this.array.length; i++) {
        result.push(this.array[i] - subtractArr.array[i]);
      }
      return new Vector(result);
    } else return new Error("Arrays must have the same length.");
  }
  dot(dotArr) {
    if (this.array.length === dotArr.array.length) {
      const newArray = [];
      for (let i = 0; i < this.array.length; i++) {
        newArray.push(this.array[i] * dotArr.array[i]);
      }
      const result = newArray.reduce((acc, element) => {
        return acc + element;
      }, 0);
      return new Vector(result);
    } else return new Error("Arrays must have the same length.");
  }
  norm() {
    let sumOfSquares = 0;
    for (const element of this.array) {
      sumOfSquares += element ** 2;
    }
    const magnitude = Math.sqrt(sumOfSquares);
    return magnitude;
  }
  toString() {
    return `(${this.array.join("")})`;
  }
}

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);
const sum = a.toString();
// console.log(sum);

//-------------------------------------- EXAMPLE ----------------------------------- //

//* Create the NSA object
var NSA = {};

//* Create the Person constructor
class Person {
  constructor(person) {
    this.name = person;
    this.call = function (cellphone, callee) {
      const str = `${cellphone.owner.name} texted ${callee.name} from ${person}'s phone (${cellphone.number})`;
      if (!NSA[person]) {
        NSA[person] = [str];
      } else {
        NSA[person].push(str);
      }
    };
    this.text = function (cellphone, callee) {
      const str = `${cellphone.owner.name} texted ${callee.name} from ${person}'s phone (${cellphone.number})`;
      if (!NSA[person]) {
        NSA[person] = [str];
      } else {
        NSA[person].push(str);
      }
    };
  }
}
//* Create two people
var dan = new Person("Dan");
var mark = new Person("Mark");
var viktor = new Person("Viktor");

//* Create a phone object
var phone = { owner: mark, number: "202-555-0199" };

//* Make a phone call
const res3 = mark.call(phone, viktor);
var phone = { owner: mark, number: "202-555-0199" };
mark.call(phone, dan);
var phone = { owner: mark, number: "202-555-0199" };
mark.text(phone, dan);

Object.prototype.log = function (name) {
  const uniqueValues = [...new Set(NSA[name.name])];
  if (uniqueValues.length > 0) return uniqueValues.join("\n");
  else return "No Entries";
};

console.log(NSA.log(viktor));

//-------------------------------------- EXAMPLE ----------------------------------- //

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor(params) {
    super(params.email);
    this.access = params.access;
    this.blacklistedEmails = [];
  }
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true

//-------------------------------------- EXAMPLE ----------------------------------- //
