// Importing helper functions to get cart data and update total price
import getCartProductFromLS from "./getCartProductsFromLS";
import updateCartTotal from "./updateCartTotal";

// Function to handle quantity increment/decrement in the cart
export default function incrementDecrement(eve, id, price) {

    // Selecting the current cart product card based on its ID
    const currCartProductCard = document.querySelector(`#cartCard${id}`);
    const currCartProductCardQty = currCartProductCard.querySelector('.cartProductQty');
    const currCartProductCardPrice = currCartProductCard.querySelector('.cartProductPrice');

    // Default values for quantity and price
    let qty = 1;
    let localStoragePrice = 0;

    // Getting all cart products from local storage
    let arrOfProducts = getCartProductFromLS();

    // Finding the product in the cart based on its ID
    let existingProd = arrOfProducts.find((ele) => ele.id === id);

    // If product exists in cart, get its current quantity and price
    if (existingProd) {
        qty = existingProd.qty;
        localStoragePrice = existingProd.price;
    } else {
        // Otherwise, use the default price
        localStoragePrice = price;
    }

    // Handling the increment logic
    if (eve.target.className === 'cartProductButtonPlus') {
        if (qty < 20) {
            ++qty; // Increase quantity up to 20
        } else if (qty === 20) {
            qty = 20;
            localStoragePrice = price * 20;
        }
    }

    // Handling the decrement logic
    else if (eve.target.className === 'cartProductButtonMinus') {
        if (qty > 1) {
            --qty; // Decrease quantity but not below 1
        }
    }

    // Updating the price based on updated quantity
    localStoragePrice = price * qty;
    localStoragePrice = Number(localStoragePrice.toFixed(2)); // Ensuring 2 decimal places

    // Updating the product in the array with new qty and price
    arrOfProducts = arrOfProducts.map((ele) => {
        return ele.id === id ? { id, qty, price: localStoragePrice } : ele;
    });

    // Saving the updated cart data back to local storage
    localStorage.setItem("cartProducts", JSON.stringify(arrOfProducts));

    // Updating the UI: quantity and price display
    currCartProductCardQty.innerText = qty;
    currCartProductCardPrice.innerText = localStoragePrice;

    // Updating the overall cart total
    updateCartTotal();
}
