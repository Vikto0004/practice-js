// var curve = document.getElementById("curve");
// var circle = document.getElementById("circle");

// var length = curve.getTotalLength(); // Отримуємо загальну довжину кривої
// var speed = 20; // Швидкість руху (можна змінювати)

// function moveCircleAlongCurve() {
//   var point = curve.getPointAtLength(speed);
//   console.log(point);
//   circle.setAttribute("cx", point.x);
//   circle.setAttribute("cy", point.y);

//   speed += 0.2; // Збільшуємо швидкість (можна налаштовувати)
//   if (speed >= length) {
//     speed = 0; // Перезапускаємо рух, коли досягнуто кінця кривої
//   }
// }

// setInterval(moveCircleAlongCurve, 50); // Викликаємо функцію кожні 50 мілісекунд
// //!--------------------------------------------------------------------!//
var svg = document.querySelector("svg");
var movingCircle = document.getElementById("movingCircle");

var isMouseDown = false; // Флаг, щоб перевірити, чи натиснута кнопка миші

// // Функція для оновлення позиції кола відповідно до координат миші
function moveCircle(event) {
  if (isMouseDown) {
    var mouseX = event.clientX - svg.getBoundingClientRect().left;
    var mouseY = event.clientY - svg.getBoundingClientRect().top;
    movingCircle.setAttribute("cx", mouseX);
    movingCircle.setAttribute("cy", mouseY);
  }
}

// Навішуємо обробник події на svg для слідкування за рухом миші
svg.addEventListener("mousemove", moveCircle);

// Навішуємо обробники подій на svg для відслідковування натискання та відпускання кнопки миші
svg.addEventListener("mousedown", function () {
  isMouseDown = true;
});

svg.addEventListener("mouseup", function () {
  isMouseDown = false;
});

var svgContainer = document.querySelector("#svgContainer");
var movingCircle = document.getElementById("movingCircle");
var curve = document.getElementById("curve");
const heroPriceText = document.querySelector(".hero-price-text");

var isMouseDown = false;

console.log(curve.getTotalLength());

// Функція для переміщення кола вздовж кривої
function moveCircleAlongCurve(event) {
  if (isMouseDown) {
    // console.log(event);
    const length = curve.getTotalLength();
    const currentLength =
      ((event.clientX - 8) * length) / svgContainer.viewBox.baseVal.width;
    const svgPoint = curve.getPointAtLength(currentLength);
    movingCircle.setAttribute("cx", svgPoint.x);
    movingCircle.setAttribute("cy", svgPoint.y);
    //   console.log(400 - svgPoint.y.toFixed(0));
    heroPriceText.textContent = `$${400 - svgPoint.y.toFixed(0)}`;
    // console.log(heroPriceText.textContent.replace(/\$/g, ""));
  }
}

// Навішуємо обробники подій для переміщення кола під час утримання миші
svgContainer.addEventListener("mousedown", function (event) {
  isMouseDown = true;
  moveCircleAlongCurve(event);
});

svgContainer.addEventListener("mousemove", function (event) {
  moveCircleAlongCurve(event);
});

svgContainer.addEventListener("mouseup", function () {
  isMouseDown = false;
});

// const heroTimeBtn = document.querySelectorAll(".hero-time-btn");
// console.log(heroTimeBtn);
// const addBlockSvg = (event) => {
//   for (const iterator of svgContainer) {
//     if (iterator.getAttribute("id") === event.target.textContent) {
//       iterator.classList.add("open");
//       event.target.style.background = "#6c5fbc";
//       event.target.style.color = "#fff";
//     } else {
//       iterator.classList.remove("open");
//       event.target.style.background = "#fff";
//       event.target.style.color = "#828282";
//     }
//   }
// };
// for (const element of heroTimeBtn) {
//   element.addEventListener("click", addBlockSvg);
// }
