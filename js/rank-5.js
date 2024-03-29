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
console.log(krazyKingBlackjack(["K", "K", "K"], 4));

//?-------------------------------------- EXAMPLE ----------------------------------- //

console.time("myCode");
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
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

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

const c = new CaesarCipher(5);
c.encode("R13VE"); // returns 'HTIJBFWX'
c.decode("W13AJ"); // returns 'WAFFLES'

//-------------------------------------- EXAMPLE ----------------------------------- //
