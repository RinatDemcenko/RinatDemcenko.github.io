// функционал закрытия блока
let buttons = document.querySelectorAll('.cross');

buttons.forEach(function(button){
  let block = button.parentElement
  button.addEventListener("click", function(){
    block.style.display = 'none';
});
});

// создание
let create = document.querySelector('.create');

create.onclick = function () {
    let task = document.createElement("div")
  task.classList.add("task")
  document.createElement(task)
};

// // раздвигание блока при клике
// let activetask = document.querySelectorAll('.task');
// let radio = document.querySelector('.radiobuttons');
// let cross = document.querySelector('.cross');
// let arrow = document.querySelector('.arrow');

// activetask.onclick = function () {
//   if (activetask.classList.contains("activetask") === true){
//   activetask.classList.remove("activetask")
//   radio.classList.remove("activeradiobuttons")
//   arrow.style.display = 'inline';
//   }
//  else{
//   activetask.classList.add("activetask")
//   radio.classList.add("activeradiobuttons")
//   arrow.style.display = 'none';
//  }
// };

// стрелочка
let rightarrows = document.querySelectorAll(".arrow")

rightarrows.forEach(function(rightarrow){
  rightarrow.addEventListener("click", function() {
    let outerDiv = document.querySelector('.task').parentElement;
    let innerDiv = document.querySelector('.task');
  
    if (outerDiv.nextElementSibling != null) {
      outerDiv.nextElementSibling.appendChild(outerDiv.removeChild(innerDiv));
    }
  });
});


