"use strict";
const express = require("express");
const { naijabetArber } = require("./naijabet_arber");

const server = express();
const PORT = process.env.PORT || 4002;

(async () => {

	server.get('/', (req, res) => {
		res.status(200).send('naijabet server')
	})

	server.listen(PORT, () => {
		console.log(`the naijabet server is listening on port ${PORT}`)
	})
})()