import getCartProductFromLS from "./getCartProductsFromLS"
import updateCartTotal from "./updateCartTotal";

export default function incrementDecrement(eve, id, price){
    const currCartProductCard = document.querySelector(`#cartCard${id}`)
    const currCartProductCardQty = currCartProductCard.querySelector('.cartProductQty')
    const currCartProductCardPrice = currCartProductCard.querySelector('.cartProductPrice')

    let qty = 1;
    let localStoragePrice = 0;
    
    //Getting the data from local storage 
    let arrOfProducts = getCartProductFromLS();

    let existingProd = arrOfProducts.find((ele) => ele.id === id);

    if(existingProd){
        qty = existingProd.qty;
        localStoragePrice = existingProd.price;
    }
    else{
        localStoragePrice = price;
    }

    if(eve.target.className === 'cartProductButtonPlus'){
        if(qty < 20){
            ++qty;
        }
        else if(qty === 20){
            qty = 20;
            localStoragePrice = price * 20;
        }
    }
    else if(eve.target.className === 'cartProductButtonMinus'){
        if(qty > 1){
            --qty;
        }
    }

    //Finally we need to update our actual local storage price and qty 
    localStoragePrice = price * qty ;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

     arrOfProducts = arrOfProducts.map((ele) => {
        return ele.id === id ? {id, qty, price: localStoragePrice} : ele;
    })

    localStorage.setItem("cartProducts", JSON.stringify(arrOfProducts));

    currCartProductCardQty.innerText = qty;
    currCartProductCardPrice.innerText = localStoragePrice;

    updateCartTotal()
}