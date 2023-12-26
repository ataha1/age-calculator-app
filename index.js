const dayInput = document.querySelector(".day");
const dayLable = document.querySelector("#day-lable");
const dayErrorMessage = document.querySelector("#error-message-day");

const ageDay = document.querySelector(".current-age-day");
const ageMonth = document.querySelector(".current-age-month");
const ageYear = document.querySelector(".current-age-year");

const currentDate = new Date();

function handleDay() {
  const daysCnt = parseInt(dayInput.value);
  if (daysCnt !== NaN && daysCnt <= 31 && daysCnt > 0) {
    //if there is an error message hide it
    dayInput.classList = ["day"];

    //Dispaly the value
    ageDay.textContent = dayInput.value;
  } else {
    const errorMessage = "Must be a valid day";
    dayInput.classList.add("error-border");
    dayLable.classList.add("error-color");

    dayErrorMessage.textContent = errorMessage;
  }
}

function handleClick() {
  handleDay();
}
