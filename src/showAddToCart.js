import getCartProductFromLS from "./getCartProductsFromLS"
import fetchQtyFromLS from "./fetchQtyFromLS"
import removeProductFromCart from "./removeProductFromCart"
import incrementDecrement from "./incrementDecrement"
import updateCartTotal from "./updateCartTotal"

fetch('https://fakestoreapi.com/products') //fetching the API
.then((res) => res.json())
.then((data) => {
    let arrOfProducts = getCartProductFromLS()
    let filterProducts = data.filter((ele) => {
        return arrOfProducts.some((curr) => curr.id === ele.id);
    })

    // To Update add to cart product page 
    const cartItemsContainer = document.querySelector('.cartItems')
    const templateContainer = document.querySelector('.cartProductTemplate')

    function showCartProducts(){
        filterProducts.forEach((ele, index) => {
            const {category, title, price, id, image} = ele
            let cartProductClone = document.importNode(templateContainer.content, true)

            const lsData = fetchQtyFromLS(id, price);

            cartProductClone.querySelector('.cartProductCard').setAttribute('id', `cartCard${id}`)
            cartProductClone.querySelector('.cartProductBadge').textContent = index + 1
            cartProductClone.querySelector('.cartProductImage').src = image
            cartProductClone.querySelector('.cartProductImage').alt = category 
            cartProductClone.querySelector('.cartProductTitle').textContent = `${title.slice(0, 10)}...`
            cartProductClone.querySelector('.cartProductPrice').textContent =  lsData.price
            cartProductClone.querySelector('.cartProductQty').textContent =  lsData.qty

            cartProductClone.querySelector('.cartProductQuantityControls').addEventListener('click', (event) => {
                incrementDecrement(event, id, price)
            })

            cartProductClone.querySelector('.cartProductRemoveButton').addEventListener('click', () => removeProductFromCart(id))

            cartItemsContainer.appendChild(cartProductClone)


        })
    }
    showCartProducts()
})
.catch((err) => {
    console.log('Error of retrieving the Products!')
})

//Updating the cart total amount
updateCartTotal();


