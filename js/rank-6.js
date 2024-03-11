// Напишіть функцію findMissingElements, яка приймає два масиви чисел і повертає
// масив, який містить всі елементи з першого масиву, які відсутні в другому масиві.
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 4, 6];
function findMissingElements(numbers1, numbers2) {
  const array = [];
  for (const element of numbers1) {
    if (!numbers2.includes(element)) {
      array.push(element);
    }
  }
  return array;
}
console.log(findMissingElements(numbers1, numbers2));
