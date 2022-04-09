//Exporting modules
console.log("Exporting modules");

const productPrice = 20;
const productStocks = 100;
const shoppingUser = "pranav";

export const cart = [];
export const addToCart = function (quantity, product) {
    cart.push({ quantity, product });
    console.log(`${quantity} ${product} is been added to cart`);
}
export default function () {
    console.log("Hello this is pranav Here😉");
}
export { productPrice, productStocks, shoppingUser as customer };
