const inputDay = document.querySelector(".day");
const inputMonth = document.querySelector(".month");
const inputYear = document.querySelector(".year");

const errMsgDay = document.querySelector("#error-message-day");
const errMsgMonth = document.querySelector("#error-message-month");
const errMsgYear = document.querySelector("#error-message-year");

const outputDay = document.querySelector(".current-age-day");
const outputMonth = document.querySelector(".current-age-month");
const outputYear = document.querySelector(".current-age-year");

function isValidInput(input, datePart, errMsg, upperBound, inputLength) {
  let message = "";
  let flag = true;
  if (input.value === "") {
    message = "This field is required";
    flag = false;
  } else if (
    input.value.length !== inputLength ||
    parseInt(input.value) === NaN ||
    parseInt(input.value) > upperBound ||
    parseInt(input.value) < 1
  ) {
    message = "Must be a valid " + datePart;
    flag = false;
  }
  if (flag === false) {
    input.classList.add("error-border");
    errMsg.textContent = message;
  } else {
    input.classList.remove("error-border");
    errMsg.textContent = "";
  }
  return flag;
}

function clearDate() {
  outputDay.textContent = "--";
  outputMonth.textContent = "--";
  outputYear.textContent = "--";
}

function doSomething() {
  //do whatever you want here
}

function displayDatePart(output, counter) {
  for (let count = 0; count <= counter; count++) {
    setTimeout(() => {
      output.textContent = count;
    }, count * 50);
  }
}

function handleClick() {
  //day error messages
  const validDay = isValidInput(inputDay, "Day", errMsgDay, 31, 2);
  const validMonth = isValidInput(inputMonth, "Month", errMsgMonth, 12, 2);
  const validYear = isValidInput(inputYear, "Year", errMsgYear, 5000, 4);

  if (!validDay || !validMonth || !validYear) {
    clearDate();
    return;
  }

  const dayOfBirth = inputDay.value;
  const monthOfBirth = inputMonth.value;
  const yearOfBirth = inputYear.value;
  const currentDate = new Date();
  const birthDate = new Date(
    monthOfBirth + "/" + dayOfBirth + "/" + yearOfBirth
  );
  if (isNaN(birthDate)) {
    const message = "Must be a valid date";
    inputDay.classList.add("error-border");
    inputMonth.classList.add("error-border");
    inputYear.classList.add("error-border");
    errMsgDay.textContent = message;
    clearDate();
    return;
  }
  if (currentDate < birthDate) {
    const message = "Must be in the past";
    inputDay.classList.add("error-border");
    inputMonth.classList.add("error-border");
    inputYear.classList.add("error-border");
    errMsgYear.textContent = message;
    clearDate();
    return;
  }
  if (validDay && validMonth && validYear && isNaN(birthDate) === false) {
    errMsgDay.textContent = "";
    errMsgMonth.textContent = "";
    errMsgYear.textContent = "";

    inputDay.classList.remove("error-border");
    inputMonth.classList.remove("error-border");
    inputYear.classList.remove("error-border");

    //Calculate current age
    let differenceInTime = currentDate.getTime() - birthDate.getTime();
    let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    let years = Math.floor(differenceInDays / 365.25);
    let months = Math.floor((differenceInDays % 365.25) / 30);
    let days = Math.floor((differenceInDays % 365.25) % 30);

    //Display current age
    displayDatePart(outputDay, days);
    displayDatePart(outputMonth, months);
    displayDatePart(outputYear, years);
  }
}
