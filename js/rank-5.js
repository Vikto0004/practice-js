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
