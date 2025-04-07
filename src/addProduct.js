import itemToggle from "./itemToggle"; // Importing the function to handle quantity toggle
import addToCart from "./addToCart"; // Importing the function to handle adding items to the cart

export default function addProduct() {
    const products = document.querySelector('.products'); // Selecting the container where all product cards will be added
    const productTemplate = document.querySelector('.product-template'); // Selecting the HTML template for a product card

    fetch('https://fakestoreapi.com/products') // Fetching product data from the Fake Store API
    .then((res) => res.json()) // Parsing the response to JSON
    .then((data) => { 
        data.forEach((ele) => { // Looping through each product in the data
            const { category, description, id, image, rating, price, title } = ele; // Destructuring product details

            const productCard = document.importNode(productTemplate.content, true); // Creating a deep copy of the product card template

            productCard.querySelector('.product-card').setAttribute('id', `card${id}`);
            productCard.querySelector('.product-category').textContent = category;
            productCard.querySelector('.product-image').src = image;
            productCard.querySelector('.product-title').textContent = title.slice(0, 14) + "...";
            productCard.querySelector('.product-description').textContent = description.slice(0, 60) + "...";
            productCard.querySelector('.current-price').textContent = '₹ ' + price;
            productCard.querySelector('.old-price').textContent = `₹ ${price + 1000}`;
            productCard.querySelector('.rating-no').textContent = rating.rate;

            // Attach event listener to the quantity controls (increase/decrease)
            productCard.querySelector('.qty-container').addEventListener('click', (ele) => {
                itemToggle(ele, id);
            });

            // Attach event listener to the "Add to Cart" button
            productCard.querySelector('.add-to-cart').addEventListener('click', (ele) => {
                addToCart(ele, id);
            });

            // Append the populated product card to the products container
            products.append(productCard);
        });
    })
    .catch((error) => console.error('Error fetching data:', error)); // Log any errors that occur during fetch
}
