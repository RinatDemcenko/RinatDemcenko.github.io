let light = document.querySelector(".light");
let dark = document.querySelector(".dark");
let theme = document.querySelector(".theme");
let footertheme = document.querySelector(".footertheme");
let headertheme = document.querySelector(".headertheme");
let title = document.querySelector(".title");
let social1 = document.querySelector(".social-1");
let social2 = document.querySelector(".social-2");
let social3 = document.querySelector(".social-3");
let social4 = document.querySelector(".social-4");
let socialtitle = document.querySelector(".social-title");
let item = document.querySelector(".item");
let item2 = document.querySelector(".item2");
let logo = document.querySelector(".logo");
let to_do = document.querySelector(".to-do");
let in_progress = document.querySelector(".in-progress");
let Done = document.querySelector(".Done");
let Save = document.querySelector(".save");
let menucontainer = document.querySelector(".menu-container");
let tutoli = document.querySelector(".tutoli")
let tutop = document.querySelector(".tutop")
let line = document.querySelector(".line")

console.log(item)
let crossimg = `
<svg xmlns="http://www.w3.org/2000/svg" class = "cross" width = "34" height = "34" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
`;

Sortable.create(to_do, { group: "board" });
Sortable.create(in_progress, { group: "board" });
Sortable.create(Done, { group: "board" });

dark.addEventListener("click", function(){

  theme.classList.add("blackmain")
  footertheme.style.background = "rgba(0, 56, 255, 0.65)"
  headertheme.style.background = "rgba(0, 56, 255, 0.65)"
  title.style.color = "#fff"
  social1.style.filter = "invert(1)"
  social2.style.filter = "invert(1)"
  social3.style.filter = "invert(1)"
  social4.style.filter = "invert(1)"
  socialtitle.style.color = "#fff"
  logo.style.filter = "invert(1)"
  tutoli.style.color = "#fff"
  line.style.background = "#fff"
  tutop.style.background = "#2a2c2d"
  tutop.style.border = "2px solid blue"
  item.classList.add("blacktheme")
  item2.classList.add("blacktheme")
})

light.addEventListener("click", function(){

  theme.classList.remove("blackmain")
  footertheme.style.background = "#C8DCFF"
  headertheme.style.background = "#C8DCFF"
  title.style.color = "#000"
  social1.style.filter = "invert(0)"
  social2.style.filter = "invert(0)"
  social3.style.filter = "invert(0)"
  social4.style.filter = "invert(0)"
  socialtitle.style.color = "#000"
  logo.style.filter = "invert(0)"
  tutoli.style.color = "#000"
  line.style.background = "#000"
  tutop.style.background = "#ededed"
  tutop.style.border = " 3px solid #C8DCFF"
  item.classList.remove("blacktheme")
  item2.classList.remove("blacktheme")
})

// функционал закрытия блока
let buttons = document.querySelectorAll('.cross');

buttons.forEach(function(button){
  let block = button.parentElement
  button.addEventListener("click", function(){
    block.style.display = 'none';
});
});


// очищение инпутов
let clearInputs = function(input1,input2){
  input1.value = ""
  input2.value = ""
};





let createBUTTON = document.querySelector('.create');
let createDiv = document.querySelector('.created');
let createCard = document.querySelector('.js-form');

createBUTTON.addEventListener("click",function(){
  createDiv.style.display = "block"
});



// сохранение созданного и создание задания

const crossreset = function(){
  let newbuttons = document.querySelectorAll('.cross');
  newbuttons.forEach(function(button){
    let block = button.parentElement
    button.addEventListener("click", function(){
      block.style.display = 'none';
  });
  });
}

createCard.addEventListener("submit", addCard);
function addCard(event){
  event.preventDefault();
const FormElemens = event.currentTarget.elements;
const title = FormElemens.nameinput.value;
const description = FormElemens.descinput.value;
const priority = FormElemens.priority.value;

createDiv.style.display = "none";


createCardFunc(title,description,priority);
crossreset(buttons)
event.currentTarget.reset()
}
// функция создания
function createCardFunc(name,desc,prior){
  let task = document.createElement("li")
  task.classList.add("task")
  task.innerHTML = `<h5>${name}</h5> <p>${desc}</p> ${crossimg}`
  
  if(prior === "H"){
    task.style.border = "3px solid #ff3300";
  }
  else if(prior === "M"){
    task.style.border = "3px solid #ffd770";
  }
  else{
    task.style.border = "3px solid #666666";
  }
  
  to_do.append(task);
  
  };
  
 