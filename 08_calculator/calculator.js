const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(sumArray) {
  if (sumArray.length) return sumArray.reduce((acc, curr) => acc + curr)
  else return 0
};

const multiply = function(multiplyArray) {
  return multiplyArray.reduce((acc, curr) => acc * curr)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(num) {
	if (num === 0) return 1 
  else {
    return num * factorial(num-1)
  }
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
