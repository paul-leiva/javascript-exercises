const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(array) {
	let total = 0;
  for (const a of array) {
    total += a;
  }
  return total;
};

const multiply = function(array) {
  let product = 1;
  for (const a of array) {
    product *= a;
  }
  return product;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	result = 1;
  while (number > 1) {
    result *= number;
    number--;
  }
  return result;
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
