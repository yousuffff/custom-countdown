const datePicker = document.querySelector('#date-picker');
const countdownForm = document.querySelector('#countdownForm');
const inputContainer = document.querySelector('#input-container');

const countdownContainer = document.querySelector('.countdown-container');
const countdownTitles = document.querySelector('#countdown-title');
const timeElementList = document.querySelectorAll('span');
const countdownBtn = document.querySelector('#button-countdown');

const completeEl = document.querySelector('#complete');
const completeTitle = document.querySelector('.complete-title');
const completeInfo = document.querySelector('#complete-info');
const completeBtn = document.querySelector('.complete-button');


// countdownContainer.hidden = true;

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const today = new Date().toISOString().split('T')[0];
datePicker.setAttribute('min', today);

inputContainer.hidden = false;


function updateDOM() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    // console.log(days, hours, minutes, seconds);
    // console.log(distance);
    if (distance < 0) {
      clearInterval(countdownActive);
      completeEl.hidden = false;
      inputContainer.hidden = true;
      countdownContainer.hidden = true;
      completeInfo.textContent = `Countdown for ${countdownTitle} finished on  ${countdownDate}`;

    } else {
      countdownTitles.textContent = `${countdownTitle}`;
      timeElementList[0].textContent = `${days}`;
      timeElementList[1].textContent = `${hours}`;
      timeElementList[2].textContent = `${minutes}`;
      timeElementList[3].textContent = `${seconds}`;

      //hiding input container
      completeEl.hidden = true;
      // completeInfo.textContent = `Countdown for ${countdownTitle} finished on${countdownDate}`;
      inputContainer.hidden = true;
      //showing countdown container
      countdownContainer.hidden = false;
    }
    // pullute countdown value

  }, 1000);
}


function updateCountdown(e) {
  e.preventDefault()
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);
  if (countdownDate === '' || countdownTitle === '') {
    alert('Please Fill all Valid Fields');
  } else {
    countdownValue = new Date(countdownDate).getTime();
    // console.log(countdownValue);
    updateDOM();
  }
}

function resetDOM() {
  clearInterval(countdownActive);
  inputContainer.hidden = false;
  countdownContainer.hidden = true;
  completeEl.hidden = true
  countdownTitle.textContent = '';
  countdownDate.textContent = '';

}

countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click', resetDOM);
completeBtn.addEventListener('click', resetDOM);