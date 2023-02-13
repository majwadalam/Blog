// make an express app to send data.json as json to localhost:3000/data

const express = require('express');
const app = express();
const port = '3000';
const data = require('./data.json');

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
