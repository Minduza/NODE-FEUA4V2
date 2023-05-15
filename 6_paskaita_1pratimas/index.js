const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// process.env tai yra objektas sukurtas is musu .env failo.

const port = process.env.PORT || 8080; // 8080 - griztamasis rysys, jeigu portas bus nerastas.

app.use(cors());
app.use(express.json());

const tickets = [];

app.get('/', (req, res) => {
  if (!tickets) {
    res.send('No tickets found');
  } else {
    res.send(tickets);
  }
});

app.post('/', (req, res) => {
  tickets.push(req.body);
  res.send(req.body);
});

app.get('/:id', (req, res) => {
  const id = req.params.id;

  const ticket = tickets.find((item) => item.id === +id);
  res.send(ticket);
});

app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
