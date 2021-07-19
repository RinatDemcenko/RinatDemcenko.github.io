let checkinput = document.querySelector("#validation-input");

checkinput.addEventListener("blur", check);

const limitation = checkinput.dataset.length;
console.log(limitation);

function check() {
  if (checkinput.value.length == limitation) {
    checkinput.classList.remove("none");
    checkinput.classList.remove("invalid");
    checkinput.classList.add("valid");
    console.log(checkinput);
  } else if (checkinput.value.length != limitation) {
    checkinput.classList.remove("none");
    checkinput.classList.remove("invalid");
    checkinput.classList.add("invalid");
    console.log(checkinput);
  }
}
