let span = document.querySelector("#value")
let buttons = document.querySelectorAll("button")

const counterValue = 0
let increment = function(){
console.log("increment")
};
let decrement = function(){
    console.log("decrement")
};
buttons.forEach(function(button){
button.addEventListener("click", function(event){
    let atribute = button.getAttribute("data-action")
    if(atribute === "decrement"){
        decrement();
    }
    else if (atribute === "increment"){
        increment()
    }
})
})