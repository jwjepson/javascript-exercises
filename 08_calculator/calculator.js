const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  const sum = array.reduce((total, num) => {
    return total + num;
  }, 0);
  return sum };

const multiply = function(array) {
  const multi = array.reduce((total, num) => {
    return total * num;
  }, 1);
  return multi };

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
