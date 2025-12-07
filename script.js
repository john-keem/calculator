const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numeric");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const pi = document.querySelector(".pi");
const decimal = document.querySelector(".decimal");
const backspace = document.querySelector(".backspace");
const negative = document.querySelector(".negative")

let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";
let displayContent = "";
let moreOperations = false;
let noOperatorPress = true;
let piClicked = false;
let decimalClicked = false;
let negativeNum = false;

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
    if(secondNum === 0) {
      return "Error";
    }
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
  noOperatorPress = true;
  decimalClicked = false;
}

numbers.forEach(element => {
  element.addEventListener("click", () => {
    if(piClicked === true) {
      return;
    }

    displayContent += element.textContent;
    display.textContent = displayContent;
    noOperatorPress = false;
  })
})

operators.forEach(element => {
  element.addEventListener("click", () => {
    if(noOperatorPress === true) {
      return;
    }

    if(moreOperations === false) {
      firstNum = parseFloat(displayContent);
      moreOperations = true;
    }
    else if(moreOperations === true) {
      secondNum = parseFloat(displayContent);
      firstNum = operate(firstNum, operator, secondNum);
      display.textContent = firstNum;
    }

    operator = element.textContent;
    displayContent = "";
    noOperatorPress = true;
    piClicked = false;
    decimalClicked = false;

    console.log("firstNum = " + firstNum);
  })
})

equal.addEventListener("click", () => {
  if(moreOperations === true && displayContent != "") {
    secondNum = parseFloat(displayContent);
    result = operate(firstNum, operator, secondNum);
    display.textContent = result;
    clear();
  }
})

clearButton.addEventListener("click", () => {
  clear();
  display.textContent = 0;
})

pi.addEventListener("click", () => {
  firstNum = 3.14159265359;
  displayContent = "3.14159265359";
  display.textContent = displayContent;
  piClicked = true;
  noOperatorPress = false;
})

decimal.addEventListener("click", () => {
  if(decimalClicked === true) {
    return;
  }

  if(displayContent === "") {
    displayContent = "0.";
  }
  else {
    displayContent += ".";
  }

  display.textContent = displayContent;
  decimalClicked = true;
})

backspace.addEventListener("click", () => {
  if(displayContent === "") {
    return;
  }

  displayContent = displayContent.slice(0,-1);

  if(displayContent === "") {
    display.textContent = "0";
    noOperatorPress = true;
  }
  else {
    display.textContent = displayContent;
  }
})

negative.addEventListener("click", () => {
  if(negativeNum === false && displayContent != "") {
    displayContent = "-" + displayContent;
    display.textContent = displayContent;
    negativeNum = true;
  }
  else if(negativeNum === true) {
    displayContent = displayContent.slice(1);
    if(displayContent === "") {
      display.textContent = "0";
    }
    else {
      display.textContent = displayContent;
      negativeNum = false;
    }
  }
})