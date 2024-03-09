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
