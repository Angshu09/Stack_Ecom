import getCartProductFromLS from "./getCartProductsFromLS";
import toggleToast from "./toggleToast";
import updateCartValue from "./updateCartValue";

// On page load, update the cart item count using data from local storage
updateCartValue();

export default function addToCart(ele, id) {
  // Get the current list of products from local storage
  let arrOfProducts = getCartProductFromLS();

  // Select the product card using the provided ID
  const currentElement = document.querySelector(`#card${id}`);

  // Extract quantity and price from the selected card
  let qty = currentElement.querySelector(".quantity-count").innerText;
  let price = currentElement.querySelector(".current-price").innerText;

  // Remove the currency symbol (₹) from the price string
  price = price.slice(1);

  // Check if the product already exists in the cart
  let existingProdIndex = arrOfProducts.findIndex((ele) => ele.id === id);

  if (existingProdIndex >= 0) {
    if (qty == 1) {
      // If the quantity is 1, product is already in the cart with qty 1
      alert("Product already exists in the cart. To add more, increase the quantity!");
      return;
    } else {
      // Update the existing product's quantity by adding the new quantity
      arrOfProducts[existingProdIndex].qty += Number(qty);

      // Update the existing product's price by adding new total price
      arrOfProducts[existingProdIndex].price += price * qty;

      // Save the updated product list back to local storage
      localStorage.setItem("cartProducts", JSON.stringify(arrOfProducts));

      // toggle notification
      toggleToast("Product is added")

      // After adding to the cart make the quantity count 1
      currentElement.querySelector(".quantity-count").innerText = 1
      return;
    }
  }

  // Multiply price with quantity; JS auto-converts string to number
  price = price * qty;

  // Convert quantity from string to number
  qty = Number(qty);

  // Add the new product to the cart array
  arrOfProducts.push({ id, qty, price });

  // Save the updated cart array to local storage
  localStorage.setItem("cartProducts", JSON.stringify(arrOfProducts));

  // toggle notification
  toggleToast("Product is added")

  // Update the UI with the new cart total
  updateCartValue();

  // After adding to the cart make the quantity count 1
  currentElement.querySelector(".quantity-count").innerText = 1
}
