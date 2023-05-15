const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
res.send(users);
});


const users = [];

app.post('/', (req, res) => {

// pasirenku POST iš sąrašo
// spaudžiam "Body" skiltį
// renkames "raw", bei pasirenkam JSON iš Text (mėlynas textas)
// JSON formatas:
// {
//     "id": 2,
//     "name": "Tomas"
// }
    const user = req.body;
    users.push(user);
    res.send(req.body)

})




app.listen(port, () => {

  console.log(`Server is running on the ${port}`);

});