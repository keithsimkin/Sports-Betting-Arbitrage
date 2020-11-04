"use strict";
const express = require("express");
const { naijabetArber } = require("./naijabet_arber");

const server = express();
const PORT = process.env.PORT || 4002;

(async () => {

	let data = {
	    stake: '550',
	    book: 'naijabet',
	    odd: 3.74,
	    market: '1X2',
	    sport: 'Soccer',
	    country: 'Germany',
	    league: 'Bundesliga',
	    game: 'FC Augsburg vs Hertha BSC',
	    marketType: 'draw',
	    username: 'icepaigez',
	    password: 'win!freD@j0ju'
	    // username: 'test',
	    // password: 'test'
	  }

	let resp = naijabetArber(data)
	resp.then(console.log)

	server.get('/', (req, res) => {
		res.status(200).send('naijabet server')
	})

	server.listen(PORT, () => {
		console.log(`the naijabet server is listening on port ${PORT}`)
	})
})()