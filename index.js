const express = require("express");
const app = express();
require('dotenv').config();
const{ PORT } = process.env;

const port = PORT || 8000;

app.listen(port, () => console.log(`App now running on port: ${port}`));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})


app.get('/about', (req, res) => {
  res.sendFile(__dirname + "/about.html")
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + "/contact.html")
})
