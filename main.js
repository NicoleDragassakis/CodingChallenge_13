
//TASK TWO

const productContainer = document.getElementById('product-container'); //gets the element from the DOM 

fetch('https://www.course-api.com/javascript-store-products') //fetching the data from the API
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok'); //checks in respose is ok if not then throws an error so it can be detected
        }
        return response.json();
    })
    .then(data => {
        displayProducts(data); //calls display Products
    })
    //TASK FOUR
    .catch(error => {
        console.error('Ftech operation Error:', error); //logs an error if there was a problem w the fetch operation
        productContainer.innerHTML = `<p>Failed to load contents</p>`; //displays message to user if there is an error
    });

 //TASK THREE
//function displays products dynamiclly
 function displayProducts(data) {
    data.forEach(item => { //a loop
        const product = item.fields; //access the produt data
        const productDiv = document.createElement('div'); //new div to hold the produt data
        productDiv.classList.add('product');
        //formats html 
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>Price: $${product.price}</p>
            <p>Company: ${product.company}</p>
        `;

        productContainer.appendChild(productDiv);
    });
}


