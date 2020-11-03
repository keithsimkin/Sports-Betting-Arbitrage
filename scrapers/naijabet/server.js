"use strict";
const express = require("express");
const { naijabetArber } = require("./naijabet_arber");

const server = express();
const PORT = process.env.PORT || 4002;

(async () => {

	let data = {
	    stake: '421.1',
	    book: 'naijabet',
	    odd: 2.7,
	    market: '1X2',
	    sport: 'Soccer',
	    country: 'South Africa ',
	    league: 'National First Division',
	    game: 'TS Sporting vs Moroka Swallows FC',
	    marketType: 'away',
	    username: 'naijabetluthor',
	    password: 'naijabetluthor'
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