const dbPool = require('./db');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/capsules/all', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const rows = await dbPool.query('SELECT * FROM spaceData');
  return res
    .status(200)
    .send({ message: `Hello World ${JSON.stringify(rows)}` });
});

app.listen('4000');
console.log(
  `Listening on port: 4000, wait for the development server to be up...`
);
