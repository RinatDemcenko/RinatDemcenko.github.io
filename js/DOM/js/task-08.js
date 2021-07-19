function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let createBtn = document.querySelector(".create");
let boxes = document.querySelector("#boxes");
let deleteBtn = document.querySelector(".delete");
let input = document.querySelector(".input");
let size = 30;
createBtn.addEventListener("click", createBoxes);

function createBoxes() {
  for (let i = 0; i < input.value; i++) {
    let div = document.createElement("div");
    div.style.background =
      "rgb(" +
      getRandomInt(0, 255) +
      ", " +
      getRandomInt(0, 255) +
      ", " +
      getRandomInt(0, 255) +
      ")";

    div.style.width = size + "px";
    div.style.height = size + "px";
    boxes.appendChild(div);
    size += 10;
  }
  size = 30;
  console.log(amount);
}

deleteBtn.addEventListener("click", destroyBoxes);
// при написании delete выдаёт странную ошибку, из-за этого написал delet

function destroyBoxes() {
  let childrens = [...boxes.children];
  childrens.forEach(function (div) {
    div.remove();
  });
}
