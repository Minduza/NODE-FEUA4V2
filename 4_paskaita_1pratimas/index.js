const express = require("express");
const cors = require("cors");
const data = require("./data.js")

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send(data)
})

app.get('/:category', (req, res)=>{
    const category = req.params.category;
    const filteredCategory = data.filter(item => item.category.toLowerCase() === category.toLowerCase() )
    res.send(filteredCategory)
})

app.get('/id/:id', (req, res)=>{
    const id = req.params.id;
    const filteredId = data.find(item => item.id === +id )
    res.send(filteredId)

})

app.get('/product/names', (req, res)=>{
    const productNames = data.map(item => item["name"] )
    res.send(productNames)

})

app.get('/stock/:stock', (req, res)=>{
    const stock = req.params.stock;
    const filteredStock = data.filter(item => item["stock"] < +stock)
    const products = filteredStock.map(item => {
        return { name: item.name, stock: item.stock };
    });
    res.send(products)

})

app.get('/minPrice/:min/maxPrice/:max', (req, res)=>{
    const minPrice = req.params.min;
    const maxPrice = req.params.max;
    const filteredPrice= data.filter(item => item.price >= +minPrice && item.price <= +maxPrice)

    res.send(filteredPrice)

})

app.post('/', (req, res)=> {

const product = req.body.product
data.push(product)   
res.send(req.body)
    
})




app.listen(3000, console.log(

    "App is listening"
))