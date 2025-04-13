import getCartProductFromLS from "./getCartProductsFromLS";

export default function updateCartValue() {
  //Getting the array of products from local storage
  const arrOfProducts = getCartProductFromLS();

  //update the cart value to th array of products length 
  document.querySelector(".cart-no").innerText = arrOfProducts.length;
}
