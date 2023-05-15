const express = require("express");
const cors = require("cors");

const app = express();

const port = 3000;

const cars = ["Audi"];

app.use(cors());
app.use(express.json());

app.get("/cars", (req, res) => {
    res.send(cars);
})

app.post("/cars", (req, res)=> {
    cars.push(req.body.car)
    res.send(req.body)
})

app.listen(port, ()=>{
    console.log('Server is running')
})