let prevNum = "";
let currNum = "";
let operator = "";

//REFERENCES
const display = document.querySelector(".display");
//
//button refs
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  if (currNum != "" && prevNum != "") {
    calculate();
  }
});

window.addEventListener("keydown", handleKeyPress);
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", addDecimal);
const clear = document.querySelector(".clear");
clear.addEventListener("click", clearCalculator);
const numbers = document.querySelectorAll(".number");
numbers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
  })
);
const operators = document.querySelectorAll(".operator");
operators.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  })
);

function handleNumber(number) {
  if (currNum.length <= 11) {
    currNum += number;
    display.textContent = currNum;
  }
  console.log(
    `f=handleNumber prevNum: ${prevNum}, currNum: ${currNum}, operator: ${operator}`
  );
}

function handleOperator(op) {
  operator = op;
  if (prevNum === "") {
    prevNum = currNum;
  }
  currNum = "";
  display.textContent = "";
  console.log(
    `f=handleOperator prevNum: ${prevNum}, currNum: ${currNum}, operator: ${operator}`
  );
}

function calculate() {
  console.log(
    `f = calculate BEG prevNum: ${prevNum}, currNum: ${currNum}, operator: ${operator}`
  );
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
  prevNum = roundNumber(prevNum).toString();
  displayResult();
  console.log(
    `f = calculate END prevNum: ${prevNum}, currNum: ${currNum}, operator: ${operator}`
  );
}

function displayResult() {
  operator = "";
  currNum = "";
  display.textContent = prevNum;
}

function roundNumber(num) {
  return Math.round(num * 1000000) / 1000000;
}

function clearCalculator() {
  currNum = "";
  prevNum = "";
  operator = "";
  display.textContent = "";
}

function addDecimal() {
  if (!currNum.includes(".")) {
    currNum += ".";
    display.textContent = currNum;
  }
}

function handleKeyPress(e) {
  if (e.key >= 0 && e.key <= 9) {
    handleNumber(e.key);
  }
  if (e.key === "Enter" || (e.key === "=" && currNum != "" && prevNum != "")) {
    calculate();
  }
  if (e.key === "+" || e.key === "-" || e.key === "/") {
    handleOperator(e.key);
  }
  if (e.key === "x") {
    handleOperator("x");
  }
  if (e.key === ".") {
    addDecimal();
  }
  if (e.key === "Backspace") {
    handleDelete();
  }
}

function handleDelete() {
  if (currNum != "") {
    currNum = currNum.slice(0, -1);
    display.textContent = currNum;
  }
  if (currNum === "") {
    display.textContent = "0";
  }
  if (currNum === "" && prevNum == "" && operator === "") {
    prevNum = prevNum.slice(0, -1);
    display.textContent = prevNum;
  }
}
