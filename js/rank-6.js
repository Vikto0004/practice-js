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
console.log(winner(["T", "A"], ["Q", "A"]));
