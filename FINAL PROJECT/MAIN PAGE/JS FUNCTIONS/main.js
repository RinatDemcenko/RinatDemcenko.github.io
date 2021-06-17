let btntheme = document.getElementById("switchMode");
let linktheme = document.getElementById("theme");

btntheme.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "styles/styles.css";
    let darkTheme = "styles/dark-mode.css";

    let currTheme = linktheme.getAttribute("href");
    let theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    linktheme.setAttribute("href", currTheme);
}

let to_do = document.querySelector(".to-do");
let in_progress = document.querySelector(".in-progress");
let Done = document.querySelector(".Done");
let Save = document.querySelector(".save");
let crossimg = `
<svg xmlns="http://www.w3.org/2000/svg" class = "cross" width = "34" height = "34" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
`;
Sortable.create(to_do, { group: "board" });
Sortable.create(in_progress, { group: "board" });
Sortable.create(Done, { group: "board" });
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
  
 