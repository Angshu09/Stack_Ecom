import getCartProductFromLS from "./getCartProductsFromLS";

export default function fetchQtyFromLS(id, price) {
    // Retrieve the list of products stored in local storage
    let arrOfProducts = getCartProductFromLS();

    // Check if a product with the given ID exists in the stored data
    let existingProd = arrOfProducts.find((ele) => ele.id === id);

    // If the product exists, return its quantity and price
    if (existingProd) { 
        return { qty: existingProd.qty, price: existingProd.price };
    }

    // If the product doesn't exist, return default quantity as 1 and the given price
    return { qty: 1, price: price };
}
