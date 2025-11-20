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
  else if(operator === "*") {
    return multiplication(firstNum, secondNum);
  }
  else if(operator === "/") {
    return division(firstNum, secondNum);
  }
}

let firstNum = 0;
let secondNum = 0;
let operator = "+";