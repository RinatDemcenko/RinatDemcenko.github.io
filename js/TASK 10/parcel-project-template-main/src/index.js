import json from './menu.json';
import template from "../templates/plate.hbs";

const menuElement = template(json)
let container = document.querySelector(".menu")
let switchTheme = document.querySelector(".theme-switch__toggle")
console.log(switchTheme)

const themeSwtch = function(theme){
    document.body.classList.remove("dark-theme", "light-theme");
    document.body.classList.add(theme);
}

document.addEventListener("DOMContentLoaded", () => {
    switchTheme.addEventListener("change", function() {
        let currentTheme = "light-theme"
        if(document.body.classList.contains("dark-theme") === true){
            themeSwtch("light-theme");
            currentTheme = "light-theme"          
        }
        else{themeSwtch("dark-theme");
        currentTheme = "dark-theme"
    }   
    localStorage.setItem("theme", currentTheme);

    });
    const savedTheme = localStorage.getItem("theme");
if(savedTheme === "dark-theme"){
    switchTheme.setAttribute("checked", true)
}
    themeSwtch(savedTheme);
 });



container.insertAdjacentHTML("beforeend", menuElement)
