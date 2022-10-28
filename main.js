let prevNum = "";
let currNum = "";
let operator = "";

//REFERENCES
const display = document.querySelector(".display");
//
//button refs
const equal = document.querySelector(".equal");
equal.addEventListener("click", calculate);

const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

numbers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
  })
);
function handleNumber(number) {
  if (currNum.length <= 11) {
    currNum += number;
    display.textContent = currNum;
  }
}
operators.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  })
);

function handleOperator(op) {
  operator = op;
  prevNum = currNum;
  currNum = "";
  display.textContent = "";
}

function calculate() {
  prevNum = Number(prevNum);
  currNum = Number(currNum);
  switch (operator) {
    case "+":
      prevNum += currNum;
      break;
    case "-":
      prevNum -= currNum;
      break;
    case "x":
      prevNum *= currNum;
      break;
    case "/":
      if (currNum <= 0) {
        prevNum = "Error can't divide by 0, dingus";
        display.textContent = prevNum;
        operator = "";
        return;
      }
      prevNum /= currNum;
      break;
  }
  prevNum.toString();
  display.textContent = prevNum;
  operator = "";
}

//resume from 21:50
