import getCartProductFromLS from "./getCartProductsFromLS"; // Importing function to get cart products from local storage

export default function updateCartTotal() {
    // Get the current array of products from local storage
    let arrOfProducts = getCartProductFromLS();

    // Selecting the elements where subtotal and final total will be displayed
    const subTotal = document.querySelector('.subTotal');
    const finalTotal = document.querySelector('.finalTotal');

    // Calculating the total price of all products in the cart using reduce
    let totalSum = arrOfProducts.reduce((acc, ele) => acc += ele.price, 0);

    // Rounding the total to 2 decimal places
    totalSum = Number(totalSum.toFixed(2));

    // Updating the subtotal in the UI
    subTotal.innerText = totalSum;

    // Adding a fixed tax charge (₹40) to the subtotal to calculate the final total
    finalTotal.innerText = Number((totalSum + 40).toFixed(2));
}
