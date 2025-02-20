const express = require('express');
require('dotenv').config();
const { connectToDB, getData } = require('./controllers/dbController');

const port = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/blogs', async (req, res) => {
  const { id } = req.query;

  let query = {};
  if (id) {
    query.id = id;
  }

  try {
    let output = await getData(query);
    res.send(output);
  } catch (error) {
    console.log('Error:', error);
    res.status(500).send({ Error: 'An error occurred while fetching blogs' });
  }
});

app.listen(port, () => {
  connectToDB();
  console.log('server is listening on port', port);
});
