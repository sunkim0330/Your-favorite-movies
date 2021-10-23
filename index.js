const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

const { API_KEY } = require('./config.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, (error) => {
  if (error) {
    console.log(`failed to connect to server port: ${PORT}`);
  } else {
    console.log(`connected to the server at ${PORT}`);
  }
});