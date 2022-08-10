const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

let timerId = 0;
buttonStart.addEventListener('click', startCgangeColor);
buttonStop.addEventListener('click', stopCgangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function startCgangeColor() {
  buttonStart.setAttribute('disabled', true);
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
};

function stopCgangeColor() {
  clearTimeout(timerId);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
};