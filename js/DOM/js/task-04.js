let span = document.querySelector("#value");
let buttons = document.querySelectorAll("button");
let number = 1;
let counterValue = 0;
let increment = function () {
  counterValue = counterValue + 1;
  span.innerHTML = counterValue;
};
let decrement = function () {
  counterValue = counterValue - 1;
  span.innerHTML = counterValue;
};
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    let atribute = button.getAttribute("data-action");
    if (atribute === "decrement") {
      decrement();
    } else if (atribute === "increment") {
      increment();
    }
  });
});
