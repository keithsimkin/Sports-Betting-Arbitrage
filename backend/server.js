"use strict";
const express = require("express");
const bodyParser = require('body-parser');
require('dotenv').config();

const { createDBTables }  = require("./controllers/v0/root/models/createTables");
const { IndexRouter } = require("./controllers/v0/index.router");



(async () => {
	await createDBTables().then(console.log).catch(err => console.log('an error occurred when creating tables', err))

	const server = express();
	const PORT = process.env.PORT || 4000;

	server.use(bodyParser.json());

	server.use('/api/v0/', IndexRouter);

	server.get('/', (req, res) => {
		res.send('/api/v0')
	});

	server.post('/', (req, res) => {
		res.send('/api/v0')
	})

	server.listen(PORT, () => {
		console.log(`the arb server is listening on port ${PORT}`)
	});
})()





