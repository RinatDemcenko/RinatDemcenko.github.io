const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", SizeChange);
function SizeChange(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
