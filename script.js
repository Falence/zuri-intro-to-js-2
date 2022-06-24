const operators = "+-*/";
let num1, num2, operator;

function add(a, b) { return a + b };
function subtract(a, b) { return a - b };
function multiply(a, b) { return a * b };
function divide(a, b) { return a / b };


alert("ZURI CALCULATOR.\nThis calculator performs basic arithmetic on 2 numbers.\nClick OK-->");

// get values
while (true) {
  num1 = parseFloat(prompt("Enter 1st number: "));
  if (num1 || num1 === 0) {
    break;
  }
  alert(`You did not enter a number!\nPlease Enter a number.`);
}

while (true) {
  num2 = parseFloat(prompt("Enter 2nd number: "));
  if (num2 || num2 == 0) {
    break;
  }
  alert(`You did not enter a number!\nPlease Enter a number.`);
}

while (true) {
  operator = prompt("OPERATORS: +, -, *, /\nChoose and operator:");
  if (operators.includes(operator)) {
    break;
  }
  alert(`${operator} is an invalid operator!\nPlease Enter a valid operator.`);
}


// perform operations
if (operator === "/" && num2 === 0) {
  alert("Division by 0 not possible!")
} else if (operator === "+") {
  alert(`RESULT:\n${num1} ${operator} ${num2} = ${add(num1, num2)}`);
} else if (operator === "-") {
  alert(`RESULT:\n${num1} ${operator} ${num2} = ${subtract(num1, num2)}`);
} else if (operator === "*") {
  alert(`RESULT:\n${num1} ${operator} ${num2} = ${multiply(num1, num2)}`);
} else if (operator === "/") {
  alert(`RESULT:\n${num1} ${operator} ${num2} = ${divide(num1, num2)}`);
}


