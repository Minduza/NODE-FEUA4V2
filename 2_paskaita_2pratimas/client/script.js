fetch("http://localhost:3000/products")
.then((resp) => resp.json())
.then((response) => {
    const productList = document.getElementById("productList");

    response.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.productName} ${product.productPrice}€`;
    productList.append(li);
 });
});



const productForm = document.querySelector('form');

productForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const product = {
        productName: e.target.productName.value,
        productPrice: e.target.productPrice.value
    }
    
    console.log(product.productName);
    console.log(product.productPrice);

    fetch("http://localhost:3000/products", { 
        method: "POST", 
        headers: {
            "Content-Type": "application/json" 
         },
        body: JSON.stringify({product}) 
    }).then(()=>location.reload())
})