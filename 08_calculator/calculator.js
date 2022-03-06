const add = function(a, b) {
    return a + b; 
};

const subtract = function(a, b) {
  return a - b; 
};

const sum = function(array) {
  return array.reduce((sum, element) => sum + element, 0)
};

const multiply = function(array) {
  return array.reduce((multiply, element) => multiply * element, 1)
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(x) {
  let factorialOfX = 1;

  for (let i = 1; i <= x; i ++){
    factorialOfX *= i;
  }

  return factorialOfX;
};

// Do not edit below this linea
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

