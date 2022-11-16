class Calculator {
  constructor(calcFunc) {
    this.calculatorFunction = calcFunc; // object key - calculatorFunction, object value - calcFunc ----- {calculatorFunction: calcFunc}
  }

  calculate(number1, number2) {
    return this.calculatorFunction(number1, number2);
  }
}

////

function add(number1, number2) {
  return number1 + number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

/////

const addCalculator = new Calculator(add);
const addResult = addCalculator.calculate(10, 2);

const multiplyCalculator = new Calculator(multiply);
const multiplyResult = multiplyCalculator.calculate(10, 2);

const divideCalculator = new Calculator(divide);
const divideResult = divideCalculator.calculate(10, 2);

--------


function calculate(fn, number1, number2) {
  return fn(number1, number2);
}

function add(number1, number2) {
  return number1 + number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

/////

const addResult = calculate(add, 10, 2);

const multiplyResult = calculate(multiply, 10, 2);

const divideResult = calculate(divide, 10, 2);

console.log(addResult, multiplyResult, divideResult);

///////


function makeCalculator(fn) {
  return {
    calculate: fn,
  }
}

function add(number1, number2) {
  return number1 + number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

/////

const addCalculator = makeCalculator(add);
const addResult = addCalculator.calculate(10, 2);

const multiplyCalculator = makeCalculator(multiply);
const multiplyResult = multiplyCalculator.calculate(10, 2);

const divideCalculator = makeCalculator(divide);
const divideResult = divideCalculator.calculate(10, 2);

console.log(addResult, multiplyResult, divideResult);