const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
let start = document.querySelector(".start")
let stop = document.querySelector(".stop")

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let changer = function(){
    let timer = setInterval(() => {
    document.body.style.backgroundColor = (colors[randomIntegerFromInterval(0, 5)])
  }, 1000);
}


  let stopFunc = function(){
    clearInterval(timer)
}
start.addEventListener("click", changer())
  stop.addEventListener("click", stopFunc())