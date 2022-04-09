const shoppingCart = (function () {
    const productPrice = 20;
    const productStocks = 100;
    const shoppingUser = "pranav";

    const cart = [];
    const addToCart = function (quantity, product) {
        cart.push({ quantity, product });
        console.log(`${quantity} ${product} is added to cart`);
    }
    const Info = function (quantity, product) {
        console.log(`${quantity} ${product} is orderd from supplier`);
    }
    return { cart, addToCart, Info, shoppingUser };
})();
shoppingCart.addToCart(4, "banana");
shoppingCart.addToCart(6, "apple");
shoppingCart.Info(5, "pen");

//we can still access 'cart' due to closures concept
console.log(shoppingCart.cart);