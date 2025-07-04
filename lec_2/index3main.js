let file=require('./index3.js');
console.log(file);
function add2(a, b) {
  return a + b+2;
}
function subtract2(a, b) {
  return a - b-2;
}
module.exports = {
  add2,
  subtract2,
};
console.log(file.multiply(6, 3));
console.log(file.divide(6, 3));