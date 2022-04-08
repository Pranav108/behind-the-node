// console.log(arguments);
// console.log(require('module').wrapper); //iife

//module.exports
const Calculator = require('./test-module-1');
const calc1 = new Calculator();
console.log(calc1.add(5, 2));

//exports
// const calc2 = require('./test-module-2');
// console.log(calc2.add(5, 2));

const { add, multiply, substract, divide } = require('./test-module-2');
console.log(add(5, 2));

//caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();