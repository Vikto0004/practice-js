// // Є масив об'єктів з популярними фільмами і форма пошуку за назвою фільму.
// // 1. Зроби так, щоб при першому завантаженні сторінки користувач
// // бачив весь перелік фільмів (назву, рік виробництва, рейтинг і країну виробник).
// // Для рендеру розмітки використовуємо шаблонні рядки та метод insertAdjacentHTML.
// // 2. Реалізуй пошук потрібного фільму за назвою. При кліку на кнопку "Пошук" у
// // списку залишаються тільки ті фільми, котрі мають повне або часткове співпадіння
// // за назвою фільму.

// const popularMovies = [
//   {
//     title: "Avengers: Endgame",
//     year: 2019,
//     rating: 8.4,
//     country: "USA",
//   },
//   {
//     title: "Parasite",
//     year: 2019,
//     rating: 8.6,
//     country: "South Korea",
//   },
//   {
//     title: "Joker",
//     year: 2019,
//     rating: 8.5,
//     country: "USA",
//   },
//   {
//     title: "Spider-Man: Into the Spider-Verse",
//     year: 2018,
//     rating: 8.4,
//     country: "USA",
//   },
//   {
//     title: "The Irishman",
//     year: 2019,
//     rating: 7.9,
//     country: "USA",
//   },
//   {
//     title: "Knives Out",
//     year: 2019,
//     rating: 7.9,
//     country: "USA",
//   },
//   {
//     title: "Black Panther",
//     year: 2018,
//     rating: 7.3,
//     country: "USA",
//   },
//   {
//     title: "Mad Max: Fury Road",
//     year: 2015,
//     rating: 8.1,
//     country: "Australia",
//   },
// ];

// const elMovieList = document.querySelector("#movieList");
// const elSearchForm = document.querySelector("#searchForm");

// const createItemList = (arr) => {
//   const elAllItemList = arr
//     .map(
//       ({ title, year, rating, country }) =>
//         `<li>
//       <h3>Title movie: ${title}</h3>
//       <p>year: ${year}</p>
//       <p>rating: ${rating}</p>
//       <p>country: ${country}</p>
//     </li>`
//     )
//     .join("");

//   elMovieList.insertAdjacentHTML("beforeend", elAllItemList);
// };
// createItemList(popularMovies);

// elSearchForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const inputVal = elSearchForm.elements.searchInput.value.toLowerCase();
//   const elAllItemList = popularMovies.filter(({ title }) =>
//     title.toLowerCase().includes(inputVal)
//   );

//   elMovieList.innerHTML = "";
//   createItemList(elAllItemList);
// });

const elList = document.querySelector(".list");
const elNewList = document.querySelector(".new-list");
const elOpenBtn = document.querySelector(".js-open-btn");

let saveArray = [];
let counter = 0;

if (saveArray.length === 0 && localStorage.getItem("saveItem").length > 0) {
  saveArray = [...JSON.parse(localStorage.getItem("saveItem"))];
  counter = JSON.parse(localStorage.getItem("counter"));
}

const setToHistory = (event) => {
  if (event.target.nodeName !== "BUTTON") return;

  const pushItem = event.target.closest(".list-item").innerHTML;
  saveArray.push(`<li class="list-item" id="num${++counter}">${pushItem}</li>`);

  localStorage.setItem("saveItem", JSON.stringify(saveArray));
  localStorage.setItem("counter", JSON.stringify(counter));
};
elList.addEventListener("click", setToHistory);

elOpenBtn.addEventListener("click", () => {
  elNewList.innerHTML = "";
  elNewList.insertAdjacentHTML("beforeend", saveArray.join(""));

  const elBtnDel = elNewList.querySelectorAll(".delete");
  elBtnDel.forEach((element) => element.classList.add("open-delete"));
});

elNewList.addEventListener("click", (event) => {
  if (!event.target.closest(".open-delete")) return;
  const elItem = event.target.closest(".list-item");

  const newArr = saveArray.filter((element) => {
    return !element.includes(`id="${elItem.id}"`);
  });

  saveArray = newArr;
  localStorage.setItem("saveItem", JSON.stringify(newArr));
  elItem.remove();
});
