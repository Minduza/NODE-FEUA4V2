const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;

const names = ["Mindaugas"]

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
res.send(names);
});

app.post("/", (req, res)=>{
    const name = req.body.name;
    names.push(name);
    res.send("blabla")
})




app.listen(port, () => {

  console.log(`Server is running on the ${port}`);

});