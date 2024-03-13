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
console.log(wordsToObject("red 1 yellow 2 black 3 white 4"));

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
console.log(numObj([118, 117, 120])); //[{'118':'v'}, {'117':'u'}, {'120':'x'}]
