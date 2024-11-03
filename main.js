
//TASK TWO

const productContainer = document.getElementById('product-container');//getting element from ID
const errorMessage = document.getElementById('error-message'); //getting element from ID

fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok'); 
        }
        return response.json();
    })
    .then(data => {
        displayProducts(data);
    })
    .catch(error => {
        errorMessage.textContent = "Error Loading Contents";
        // errorMessage.style.display = "block";
        console.error('Fetch error:', error);
    });

 //TASK THREE

 function displayProducts(data) {
    data.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML =`
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>Price: $${product.price}</p>
            <p>Company: ${product.company}</p>
        `;
        productContainer.appendChild(productDiv);
    });
 }