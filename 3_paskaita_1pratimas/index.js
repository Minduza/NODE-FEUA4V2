const express = require("express")
const cors = require("cors")

const PORT = 3000;

const app = express();

app.use(express.json())
app.use(cors())

const persons = [
    
]

app.get('/', (req, res)=> {
    res.send(persons)
})

app.post('/', (req, res)=> {
    persons.push(req.body.person)
    res.send(req.body)
})


app.post('/login', (req, res)=> {

    let message =""
    if(req.body.username != "" && req.body.password != ""){
        for(let i = 0; persons.length > i; i++){
            if(persons[i].email == req.body.username && persons[i].password == req.body.password ){
                message = "Sekmingai prisijungėte";
                break;
            } else {
                message = "Klaida. Blogas slaptažodis ar vartotojo vardas.";
            }
        }
    } else {
        message = "Klaida. Blogas slaptažodis ar vartotojo vardas.";
    }

    res.send({message: message})

})

app.listen(3000,()=>{
    console.log(`Server is running http://localhost:${PORT}`)
})