
const casual = require('casual');
const express = require('express');
const app = express();
const port = 3000;

app.get('/randomUser', (req, res)=>{

    const randomUser = {
        firstName:casual.first_name,
        lastName: casual.last_name,
        country:casual.country,
        city: casual.city,
        streetName: casual.street,
        zipCode: casual.zip()
    }
    res.send({randomUser})
})

app.get('/randomColor', (req, res)=>{
    res.send(casual.color_name)
})


app.get('/randomColors', (req, res)=>{

    const randomColors = []
    for(let i = 0; i<5; i++){
        randomColors.push(casual.color_name)
    }

    res.send(randomColors)
})


app.get('/randomPlaces', (req, res)=>{

    const randomNumber = casual.integer(from = 1, to = 5)
    const randomPlaces = []
    for(let i = 1; i<=randomNumber; i++){

        const randomPlace = {
            country: casual.country,
            city: casual.city,
            address: casual.address
        }
    
        randomPlaces.push(randomPlace)
    }

    res.send(randomPlaces)
})




app.listen(port, ()=>{
    console.log("App is listening")
})