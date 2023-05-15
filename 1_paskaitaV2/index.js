const express = require("express"); // epxpress modulio importavimas
const app = express();  // aplikacios sukūrimas
const port = 3000; // porto(kanalo) skaičius


// routas (kelias)  route/path
//get - grąžink duomenis
app.get("/", (req, res) => {
    // req -request(kas ateina išorės), res- response(kas ateina iš vidaus)
    res.send("Mano vardas yra Tomas") // send metodas išsiunčia duomenis
});

app.get("/today", (req, res) => {

    res.send(new Date().toDateString());
    
    });

app.get("/user", (req, res) => {
    const user = {
        name: "Mindaugas",
        surname: "Purvis",
        age: 24
    };
    res.send(user);
})

// serverio paleidimas
app.listen(port, () => {
    console.log(`Server is listening in port ${port}`);
});


