const buttonStart = document.querySelector("button[data-start]");
const buttonStop = document.querySelector("button[data-stop]");

buttonStart.addEventListener("click",startCgangeColor);
buttonStop.addEventListener("click",stopCgangeColor);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
function startCgangeColor(){
    timerId=setInterval(()=>{
        buttonStart.setAttribute("disabled", true)
        document.body.style.backgroundColor = getRandomHexColor();
        buttonStart.disabled = true
        buttonStop.disabled = false
    },1000)
};

function stopCgangeColor(){
    clearTimeout(timerId)
        buttonStart.disabled = false
        buttonStop.disabled = true
};