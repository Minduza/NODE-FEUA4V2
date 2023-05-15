/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

require('dotenv').config();

const port = process.env.PORT || 8080;
const URI = process.env.CONNECTION_STRING;
const { dbName } = process.env;
const client = new MongoClient(URI);

const app = express();

app.use(express.json());
app.use(cors());

app.get('/memberships', async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db(dbName).collection('services').find().toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/memberships', async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection('services')
      .insertOne({
        _id: new ObjectId(),
        ...req.body,
      });
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/memberships/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection('services')
      // eslint-disable-next-line quote-props
      .deleteOne({ _id: new ObjectId(id) });

    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/users/:order', async (req, res) => {
  const { order } = req.params;
  const sort = order === 'asc' ? 1 : -1;
  try {
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection('users')
      .aggregate([
        {
          $lookup: {
            from: 'services', // The name of the collection to join with
            localField: 'service_id', // The field in the current collection to join on
            foreignField: '_id', // The field in the "services" collection to join on
            as: 'membership',
          },
        },
        {
          $sort: { name: sort },
        },
        {
          $unwind: '$membership',
        },
      ])
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/users', async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection('users')
      .insertOne({
        _id: new ObjectId(),
        ...req.body,
        service_id: new ObjectId(req.body.service_id),
      });
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`App is listening port ${port}`);
});
