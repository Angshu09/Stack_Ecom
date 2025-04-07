export default function updateCartValue(arrOfProducts) {
  document.querySelector(".cart-no").innerText = arrOfProducts.length;
}
