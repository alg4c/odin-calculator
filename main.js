let prevNum = "";
let currNum = "";
let operator = "";

//REFERENCES
const display = document.querySelector(".display");
//
//button refs
const equal = document.querySelector(".equal");
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
  currNum += number;
  display.textContent = currNum;
}
