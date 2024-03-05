function combineNames(name, first) {
  const fullName = name + " " + first;
  return fullName;
}
console.log(combineNames("James", "Stevens"));

//-------------------------------------- EXAMPLE ----------------------------------- //

function invert(array) {
  let invertedArray = [];
  for (let i = 0; i < array.length; i++) {
    let elementNumber = array[i];
    if (elementNumber > 0) {
      elementNumber = -elementNumber;
    } else if (elementNumber < 0) {
      elementNumber = Math.abs(elementNumber);
    } else if (!Boolean(elementNumber) === true) {
      elementNumber = 0;
    }
    invertedArray.push(elementNumber);
  }
  return invertedArray;
}
console.log(invert([-1, -2, -3, -4, -5]));

//-------------------------------------- EXAMPLE ----------------------------------- //

function strCount(str, letter) {
  let indexes = [];
  let namber = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      indexes.push(i);
      namber++;
    }
  }
  return namber;
}
console.log(strCount("", "l"));

//-------------------------------------- EXAMPLE ----------------------------------- //

function countPositivesSumNegatives(input) {
  let sum = 0;
  let str = "";
  let zeroNamber = "";

  for (let i = 0; i < input.length; i++) {
    let elementNumber = input[i];
    if (elementNumber < 0) {
      sum += elementNumber;
    } else if (elementNumber > 0) {
      let number = elementNumber.toString();
      str += ", " + number;
    } else {
      zeroNamber;
    }
  }
  let countPositives = (str.match(/\b\d+\b/g) || []).length;
  let expected = [countPositives, sum, zeroNamber];
  expected = expected.filter((item) => item !== "");
  return expected;
}
console.log(countPositivesSumNegatives([0]));

//-------------------------------------- EXAMPLE ----------------------------------- //

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  let positiveCount = 0;
  let negativeSum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positiveCount++;
    } else if (input[i] < 0) {
      negativeSum += input[i];
    }
  }

  return [positiveCount, negativeSum];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); // Output: [10, -65]

//-------------------------------------- EXAMPLE ----------------------------------- //

function grow(x) {
  let multiplication = 1;
  for (let i = 0; i < x.length; i++) {
    multiplication *= x[i];
  }
  return multiplication;
}
console.log(grow([4, 1, 1, 1, 4]));

//-------------------------------------- EXAMPLE ----------------------------------- //

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  for (let i = 0; i <= words.length; i++) {
    sum = pricePerWord * i;
  }
  return sum;
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

const a = [1, 2, 3];
const b = a;
console.log(a === b);
