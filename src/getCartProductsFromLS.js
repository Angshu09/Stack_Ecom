export default function getCartProductFromLS(){
    //Here we are getting the cartProducts named key value
    let cartProducts = localStorage.getItem("cartProducts")

    //if no items exists then we return an empty array 
    if(!cartProducts){
        return [];
    }

    //Here we have to parse the get item 
    cartProducts = JSON.parse(cartProducts)

    //simply return the cartProducts
    return cartProducts
}