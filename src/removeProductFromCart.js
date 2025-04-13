import getCartProductFromLS from "./getCartProductsFromLS"; // Importing function to get products from local storage
import updateCartTotal from "./updateCartTotal";
import toggleToast from "./toggleToast";
import updateCartValue from "./updateCartValue";

export default function removeProductFromCart(id) {
  // Retrieve the list of products stored in local storage
  let arrOfProducts = getCartProductFromLS();

  // Filter out the product with the given ID (i.e., remove it)
  arrOfProducts = arrOfProducts.filter((ele) => ele.id != id);

  // Save the updated product list back to local storage
  localStorage.setItem("cartProducts", JSON.stringify(arrOfProducts));

  // Select the product card in the DOM that needs to be removed
  const removableCard = document.querySelector(`#cartCard${id}`);

  // If the card exists in the DOM, remove it
  if (removableCard) {
    removableCard.remove();
    toggleToast("Product is removed");
  }

  //update cart total amount after removing
  updateCartTotal();

  //Update the cart total item value in cart page
  updateCartValue();
}
