#!/usr/bin/env node
const assert = require('chai').assert;
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require("./config.json").server;


const PORT = process.env.PORT || config.port;

app.use(bodyParser.json());
app.use(cors());

app.use(express.static('static'));

app.get('/hello', (req, res) => {
    res.send("Hello world!");
});


app.listen(PORT, () => console.log("listening on port", PORT));