const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const bodyEl = document.querySelector('body');

let intervalId = null;
let isActive = false;

btnStart.addEventListener('click', onStartBtn);
btnStop.addEventListener('click', onStopBtn);


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartBtn() {
    if (isActive) {
        return
    }
    isActive = true;
   intervalId = setInterval(() => { 
        bodyEl.setAttribute("style", `background: ${colors[randomIntegerFromInterval(0, (colors.length - 1))]}`);
   }, 1000)
}

function onStopBtn() {
    clearInterval(intervalId);
    isActive = false;
};