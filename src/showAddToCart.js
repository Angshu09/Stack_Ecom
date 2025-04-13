// Importing helper functions to manage cart operations
import getCartProductFromLS from "./getCartProductsFromLS";
import fetchQtyFromLS from "./fetchQtyFromLS";
import removeProductFromCart from "./removeProductFromCart";
import incrementDecrement from "./incrementDecrement";
import updateCartTotal from "./updateCartTotal";
import updateCartValue from "./updateCartValue";

//Update the cart total item value in cart page 
updateCartValue()

// Fetching product data from the API
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    // Getting cart products stored in local storage
    let arrOfProducts = getCartProductFromLS();

    // Filtering the API products to only those present in cart
    let filterProducts = data.filter((ele) => {
      return arrOfProducts.some((curr) => curr.id === ele.id);
    });

    // Selecting the DOM elements where cart items will be displayed
    const cartItemsContainer = document.querySelector(".cartItems");
    const templateContainer = document.querySelector(".cartProductTemplate");

    // Function to display each cart product in the UI
    function showCartProducts() {
      filterProducts.forEach((ele, index) => {
        const { category, title, price, id, image } = ele;

        // Cloning the product template
        let cartProductClone = document.importNode(
          templateContainer.content,
          true
        );

        // Getting quantity and price from local storage
        const lsData = fetchQtyFromLS(id, price);

        // Populating the cloned template with product data
        cartProductClone
          .querySelector(".cartProductCard")
          .setAttribute("id", `cartCard${id}`);
        cartProductClone.querySelector(".cartProductBadge").textContent =
          index + 1;
        cartProductClone.querySelector(".cartProductImage").src = image;
        cartProductClone.querySelector(".cartProductImage").alt = category;
        cartProductClone.querySelector(
          ".cartProductTitle"
        ).textContent = `${title.slice(0, 10)}...`;
        cartProductClone.querySelector(".cartProductPrice").textContent =
          lsData.price;
        cartProductClone.querySelector(".cartProductQty").textContent =
          lsData.qty;

        // Adding event listener for increment/decrement buttons
        cartProductClone
          .querySelector(".cartProductQuantityControls")
          .addEventListener("click", (event) => {
            incrementDecrement(event, id, price);
          });

        // Adding event listener for remove button
        cartProductClone
          .querySelector(".cartProductRemoveButton")
          .addEventListener("click", () => removeProductFromCart(id));

        // Appending the populated product to the container
        cartItemsContainer.appendChild(cartProductClone);
      });
    }

    // Call the function to render cart items
    showCartProducts();
  })
  .catch((err) => {
    console.log("Error of retrieving the Products!");
  });

// Updating the total price of items in the cart
updateCartTotal();
