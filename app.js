const express = require('express');
require('dotenv').config()
const app = express();
const port = 3000;

app.use(express.json());

module.exports = app;
