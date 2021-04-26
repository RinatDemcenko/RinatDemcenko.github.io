const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];

  let list = document.querySelector("#ingredients");

  ingredients.forEach(function(item){
      let li = document.createElement("li");
      li.textContent = item;
      
list.appendChild(li);
console.log(list);
  });
  console.log(list);