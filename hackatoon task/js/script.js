let counter = 0;
let fullcards = document.querySelector(".cards")
let card1 = document.querySelector("#question1")
let card2 = document.querySelector("#question2")
let card3 = document.querySelector("#question3")
let card4 = document.querySelector("#question4")
let card5 = document.querySelector("#question5")
let card6 = document.querySelector("#question6")
let card7 = document.querySelector("#question7")
let card8 = document.querySelector("#question8")
let card9 = document.querySelector("#question9")
let card10 = document.querySelector("#question10")



let answers = document.querySelectorAll(".answer")
let cards = document.querySelectorAll(".card")


    
answers.forEach(function(answer){
    answer.addEventListener("click",function(){
        answer.parentNode.style.display = "none"
        answer.style.background = "#fff"
        answer.style.border = "3px solid #fff"

if(answer.classList.contains("write") == true){
    counter = counter+=1
    console.log(counter)
    
}
else{

}
if (card1.getAttribute("id") === "question1"){
    card2.style.display = "block"
    console.log("lol")
}
else if (card2.getAttribute("id") === "question2"){
    card3.style.display = "block"
}
else if(card3.getAttribute("id") === "question3"){
    card4.style.display = "block"
}
else if(card4.getAttribute("id") === "question4"){
    card5.style.display = "block"
}
else if(card5.getAttribute("id") === "question5"){
    card6.style.display = "block"
}
else if(card6.getAttribute("id") === "question6"){
    card7.style.display = "block"
}
else if(card7.getAttribute("id") === "question7"){
    card8.style.display = "block"
}
else if (card8.getAttribute("id") === "question8"){
    card9.style.display = "block"
}
else if (card9.getAttribute("id") === "question9"){
    card10.style.display = "block"
}
else{

}
    })

        















  





    })
    let finalbuts = document.querySelectorAll(".final")
    let topresult =  document.querySelector(".top")
    let normalresult =  document.querySelector(".normal")
    let minresult =  document.querySelector(".min")
    finalbuts.forEach(function(final){
    final.addEventListener("click", function(){
    if(counter === 10){
        card1.style.display = "none"
        card2.style.display = "none"
        card3.style.display = "none"
        card4.style.display = "none"
        card5.style.display = "none"
        card6.style.display = "none"
        card7.style.display = "none"
        card8.style.display = "none"
        card9.style.display = "none"
        card10.style.display = "none"
        topresult.style.display = "block"
        
    }
    else if(counter > 8 && counter < 10){
        card1.style.display = "none"
        card2.style.display = "none"
        card3.style.display = "none"
        card4.style.display = "none"
        card5.style.display = "none"
        card6.style.display = "none"
        card7.style.display = "none"
        card8.style.display = "none"
        card9.style.display = "none"
        card10.style.display = "none"
        normalresult.style.display = "block"
    }
    else if(counter < 8){
        card1.style.display = "none"
        card2.style.display = "none"
        card3.style.display = "none"
        card4.style.display = "none"
        card5.style.display = "none"
        card6.style.display = "none"
        card7.style.display = "none"
        card8.style.display = "none"
        card9.style.display = "none"
        card10.style.display = "none"
        minresult.style.display = "block"
    }
    })
    })