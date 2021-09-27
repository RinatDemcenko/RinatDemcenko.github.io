const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
let start = document.querySelector(".start")
let STOP = document.querySelector(".stop")

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let timer = null

  let stopFunc = function(){
    start.removeAttribute("Disabled")
}
start.addEventListener("click", function(){
 timer = setInterval(() => {
    document.body.style.backgroundColor = (colors[randomIntegerFromInterval(0, 5)])
    start.setAttribute("Disabled", "")
  }, 1000);
})
  STOP.addEventListener("click", function(){
    clearInterval(timer)
    start.removeAttribute("Disabled")
})