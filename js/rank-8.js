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

//-------------------------------------- EXAMPLE ----------------------------------- //

function calculateTotalPrice(order) {
  let sum = 0;
  for (let i = 0; i < order.length; i++) {
    const element = order[i];
    sum += element;
  }
  return sum;
}
// console.log(calculateTotalPrice([12, 85, 37, 4]));

function checkStorage(storage, item) {
  const storageSearch = storage.map((storag) => storag.toLowerCase());
  if (storageSearch.includes(item.toLowerCase())) {
    return `${item.toLowerCase()} is available to order!`;
  } else {
    return "Sorry! We are out of stock!";
  }
}

console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));

function getCommonElements(array1, array2) {
  const couple = [];
  for (let i = 0; i < array1.length && i < array2.length; i++) {
    const element = array1[i];
    if (array2.includes(element)) {
      couple.push(element);
    }
  }
  return couple;
}
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]

function calculateTotalPrice(order) {
  let sum = 0;
  for (const array of order) {
    sum += array;
  }
  return sum;
}
// console.log(calculateTotalPrice([4, 3, 2]));

//-------------------------------------- EXAMPLE ----------------------------------- //

function countSheeps(sheep) {
  let number = 0;
  for (const element of sheep) {
    element === true ? number++ : (number += 0);
  }
  return number;
}
console.log(countSheeps([undefined, null, false, true]));

//-------------------------------------- EXAMPLE ----------------------------------- //

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  const totalValues = [];
  for (const product of products) {
    if (product[propName]) {
      totalValues.push(product[propName]);
    }
  }
  return totalValues;
}
console.log(getAllPropValues("category"));

//-------------------------------------- EXAMPLE ----------------------------------- //

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
console.log(animal({ name: "dog", legs: 4, color: "white" }));

//-------------------------------------- EXAMPLE ----------------------------------- //
