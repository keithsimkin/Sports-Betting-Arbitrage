"use strict";
const express = require("express");
const { bet9jaScraper } = require("./bet9ja");

const server = express()
const PORT = process.env.PORT || 4001;



(async () => {
	


	server.get("/", (req, res)=> {
		res.status(200).send('this is the bet9ja server endpoint')
	})

	server.listen(PORT, () => {
		console.log(`the bet9ja server is listening on port ${PORT}`)
	})
})()