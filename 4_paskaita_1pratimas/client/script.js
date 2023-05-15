const lastProduct = []

fetch("http://localhost:3000/")
.then((resp) => resp.json())
.then((response) => {
    

const productForm = document.querySelector('form');

productForm.addEventListener('submit', (e)=>{
    e.preventDefault();



    const ids = response.map(object => {
        return object.id;
      });
     
    const max = Math.max(...ids);
    
    const product = {
        id: max + 1,
        name: e.target.name.value,
        category: e.target.Category.options[e.target.Category.selectedIndex].text,
        price: +e.target.price.value,
        stock: +e.target.stock.value
    }
    
    console.log(product.category);
    console.log(product.name);
    console.log(product.stock);
    console.log(product.price);

    fetch("http://localhost:3000", { 
        method: "POST", 
        headers: {
            "Content-Type": "application/json" 
         },
        body: JSON.stringify({product}) 
    }). then(()=>location.reload())
})

});