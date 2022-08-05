import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector("#datetime-picke");
const dataStart = document.querySelector("button[data-start]");
const spanDays = document.querySelector("span[data-days]");
const spanHourse = document.querySelector("span[data-hours]");
const spanMinutes = document.querySelector("span[data-minutes]");
const spanSeconds = document.querySelector("span[data-seconds]");

 let intervalTimer= null;


dataStart.addEventListener("click", ()=> timer.start());
dataStart.setAttribute("disabled", "true");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    intervalTimer=selectedDates[0];
    if(intervalTimer > Date.now()){
        dataStart.removeAttribute("disabled", "disabled");
    } else{
        Notiflix.Notify.failure("Please choose a date in the future");
    };
  },
};


flatpickr('#datetime-picker', options);

const timer = {
    isActive: false,
    start(){
        if (this.isActive) {
            return;
        };
        this.isActive = true;
        this.intervalTimer = setInterval(()=>{
            const deltaTime = intervalTimer-Date.now();
            if (deltaTime <= 0) {
             return;
           };
         const time = convertMs(deltaTime);
         updateClockface(time);
          console.log(time);
         },1000)
    } 
}

function updateClockface(time) {
spanDays.textContent = time.days;
spanHourse.textContent = time.hours;
spanMinutes.textContent =time.minutes;
spanSeconds.textContent = time.seconds;
}

function addLeadingZero(value){
   return String(value).padStart(2, "0");
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours =addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
