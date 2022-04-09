//Importing modules

console.log("Importing modules");

//Approach 1
// import { addToCart, productPrice, productStocks as ps, customer } from './shoppingCart.js';
// addToCart(5, 'chocolates');
// console.log(productPrice);
// console.log(ps);
// console.log(customer);

//Approach 2
import * as myCart from './shoppingCart.js';
console.log(myCart.customer);
console.log(myCart.productPrice);
console.log(myCart.productStocks);
myCart.addToCart(5, 'apple');
myCart.addToCart(2, 'pizza');
myCart.addToCart(4, 'banana');
console.log(myCart.cart);

//we can also use named and default exports simultaniously, though we should AVOID that
// import greet, { addToCart, productPrice, productStocks as ps, customer } from './shoppingCart.js';
// import greet from './shoppingCart.js'; //from default export
// greet();