let debounce = require('lodash.debounce');
import { alert, notice, info, success, error } from '@pnotify/core';
const searchInput = document.querySelector(".search")
console.log(searchInput)
import { fetchcountries } from "./fetchCountries";
import currentTemplate from "../src/templates/country.hbs"
import countriesTemplate from "../src/templates/countries.hbs"

const result = document.querySelector('.result');


function verifyResponse(response){
    console.log(response.length)

    if(response.length === 1){
        renderCurrent(response)
        return
    }
    
    if(response.length <= 10 && response.length > 1){
        renderCountryList(response)
        return
    }
    if(response.length === undefined){
        error({
            text:
          "0 countries found",
        })
        result.innerHTML = ""
        return
    }
        error({
            text:
          "too many countries found",
        })
        result.innerHTML = ""

        return
    }

function Check(){
if (searchInput.value === ""){
    return
}

fetchcountries(searchInput.value).then(response => verifyResponse(response)) 

}

searchInput.addEventListener("input", debounce(Check, 1000))


function renderCurrent(current){
    
    const currentHTML = currentTemplate(current)
    result.innerHTML = currentHTML
}

function renderCountryList(current){
    
    const currentHTML = countriesTemplate(current)
    result.innerHTML = currentHTML
}



