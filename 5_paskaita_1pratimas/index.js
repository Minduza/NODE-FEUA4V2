const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;


app.use(cors());
app.use(express.json());

const cart = []

app.get("/cart", (req, res) => {
    if(cart.length === 0){
        res.send("Cart is empty")
    } else {
        res.send(cart);
    }
});

app.post("/cart", (req, res) => {
    const item = req.body;
    cart.push(item);
    res.send(req.body);
})

app.get("/cart/item/:id", (req,res) => {
    const id = req.params.id;
    const itemObj = cart.find(item => item.id === Number(id));
    if(itemObj === undefined){
        res.send("Item not found");
    } else {
        res.send(itemObj);
    }
})


app.listen(port, () => {

  console.log(`Server is running on the ${port}`);

});