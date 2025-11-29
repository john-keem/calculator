const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numeric");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";
let displayContent = "";
let moreOperations = false;

function addition(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtraction(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiplication(firstNum, secondNum) {
  return firstNum * secondNum;
}

function division(firstNum, secondNum) {
  return firstNum / secondNum;
}

function operate(firstNum, operator, secondNum) {
  if(operator === "+") {
    return addition(firstNum, secondNum);
  }
  else if(operator === "-") {
    return subtraction(firstNum, secondNum);
  }
  else if(operator === "×") {
    return multiplication(firstNum, secondNum);
  }
  else if(operator === "÷") {
    return division(firstNum, secondNum);
  }
}

function clear() {
  firstNum = "";
  secondNum = "";
  operator = "";
  result = "";
  displayContent = "";
  moreOperations = false;
}

numbers.forEach(element => {
  element.addEventListener("click", () => {
    displayContent += element.textContent;
    display.textContent = displayContent;
  })
})

operators.forEach(element => {
  element.addEventListener("click", () => {
    if(moreOperations === false) {
      firstNum = parseInt(displayContent);
      moreOperations = true;
    }
    else if(moreOperations === true) {
      secondNum = parseInt(displayContent);
      firstNum = operate(firstNum, operator, secondNum);
      display.textContent = firstNum;
    }

    operator = element.textContent;
    displayContent = "";

    console.log("firstNum = " + firstNum);
    console.log("operator = " + operator);
  })
})

equal.addEventListener("click", () => {
  secondNum = parseInt(displayContent);
  result = operate(firstNum, operator, secondNum);
  display.textContent = result;
  clear();
})

clearButton.addEventListener("click", () => {
  clear();
  display.textContent = 0;
})