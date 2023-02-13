// make an express app to send data.json as json to localhost:3000/data

const express = require('express');
const app = express();
const cors = require('cors');
const port = '3000';
const data = require('./data.json');

app.use(cors())

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
