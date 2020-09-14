"use strict";
const express = require("express");
const bodyParser = require('body-parser');
require('dotenv').config();

const scrapeDataAndGetArbs = require("./controllers/v0/dbops");
const { IndexRouter } = require("./controllers/v0/index.router");

const server = express();
const PORT = process.env.PORT || 4000;

server.use(bodyParser.json());
server.use('/api/v0/', IndexRouter);



//getThreewayArbs().then(res => console.log(res.rows[0]))
//
//getThreewayArbs().then(console.log)
//checkArbs().then(console.log)




server.get('/', (req, res) => {
	res.send('/api/v0')
});

server.post('/', (req, res) => {
	res.send('/api/v0')
})

server.listen(PORT, () => {
	console.log(`the arb server is listening on port ${PORT}`)
});







