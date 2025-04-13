// Function to handle plus and minus button toggle for item quantity
export default function itemToggle(ele, id) {

    // Select the specific card element using the provided id
    const currentElement = document.querySelector(`#card${id}`);

    // Select the element displaying the quantity count within the card
    const quantityCount = currentElement.querySelector('.quantity-count');

    // If the clicked element has the class 'plus'
    if (ele.target.className.includes('plus')) {
        // Increase quantity only if it's less than 20
        if (quantityCount.textContent < 20) {
            quantityCount.textContent = parseInt(quantityCount.textContent) + 1;
        }
    }

    // If the clicked element has the class 'minus'
    if (ele.target.className.includes('minus')) {
        // Decrease quantity only if it's more than 1
        if (quantityCount.textContent > 1) {
            quantityCount.textContent = parseInt(quantityCount.textContent) - 1;
        }
    }
}
