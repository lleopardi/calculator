const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return "cannot divide with zero";
  }
  const value = a / b;
  return Number.isInteger(value) ? value : value.toFixed(2);
};

const modulus = (a, b) => {
  if (b === 0) {
    return "cannot divide with zero";
  }
  return a % b;
};

const operations = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
  "%": modulus,
};

export default operations;
