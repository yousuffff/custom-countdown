const datePicker = document.querySelector('#date-picker');
const countdownForm = document.querySelector('#countdownForm');
const inputContainer = document.querySelector('#input-container');
const title = document.querySelector('#title').value;
let countdownTitle = '';
let countdownDate = '';
const today = new Date().toISOString().split('T')[0];
datePicker.setAttribute('min', today);


countdownForm.addEventListener('submit', updateCountdown);
function updateCountdown(e) {
  e.preventDefault();
  console.log(title);
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(e);
}