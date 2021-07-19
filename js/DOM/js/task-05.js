let input = document.querySelector("#name-input");
let name = document.querySelector("#name-output");
let form = document.querySelector(".form");
input.addEventListener("input", Change);
function Change() {
  name.textContent = input.value;
}
