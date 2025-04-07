export default function itemToggle(ele, id){

    const currentElement = document.querySelector(`#card${id}`)

    const quantityCount = currentElement.querySelector('.quantity-count')

    if(ele.target.className.includes('plus')){
        if(quantityCount.textContent < 20){
            quantityCount.textContent = parseInt(quantityCount.textContent) + 1
        }
    }

    if(ele.target.className.includes('minus')){
        if(quantityCount.textContent > 1){
            quantityCount.textContent = parseInt(quantityCount.textContent) - 1
        }
    }
}