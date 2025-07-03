function sum(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
sum(3,4);
subtract(10, 5);
module.exports = {
  sum,
  subtract
};
// This is a simple module that exports two functions: sum and subtract.
// The sum function takes two numbers and returns their sum.
// The subtract function takes two numbers and returns their difference.
// The module can be imported in other files to use these functions.        