// Dazniausiai naudojamos aplinkos: development (pas mus), testing, preprod( versija pries galutine)
// production(galutine versija kuria mato visi klientai)

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// process.env tai yra objektas sukurtas is musu .env failo.

const port = process.env.PORT || 8080; // 8080 - griztamasis rysys, jeigu portas bus nerastas.

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('empty');
});

app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
