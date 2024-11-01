
//TASK TWO
function fetchProductDetails(){
fetch( https://www.course-api.com/javascript-store-products )
    .then(response => {
        if (!response.ok){
            throw new Error('Network response is not ok' + response.statusText);
        }
        return response.json(); //check network response
    })
    .then(products => {
        displayProducts(products); //function to display products if successful.
    })
    .catch(error => { //for catching the error
        console.error('Error', error);
        document.getElementById('product-container')
    });

}

function displayProducts(products) {
    const container = document.getElementById('product-container');
}