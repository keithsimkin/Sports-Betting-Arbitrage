"use strict";
const express = require("express");
const { bet9jaScraper } = require("./bet9ja");
const { bet9jaArber } = require("./bet9ja_arber");

const server = express()
const PORT = process.env.PORT || 4001;



(async () => {

	let data = {
	    stake: '100',
	    book: 'naijabet',
	    odd: 2.92,
	    market: '1X2',
	    sport: 'Soccer',
	    country: 'Germany',
	    league: 'Bundesliga',
	    game: 'FC Augsburg vs Hertha BSC',
	    marketType: 'home',
	    // username: 'icepaigez',
	    // password: 'win!freD@j0ju'
	    username: 'test',
	    password: 'test'
	  }
	  let resp = await bet9jaArber(data).then()
	  console.log(resp)

	//await bet9jaScraper().then(console.log).catch(err => console.log('an error occurred in the bet9ja scraper', err))

	server.get("/", (req, res)=> {
		res.status(200).send('this is the bet9ja server endpoint')
	})

	server.listen(PORT, () => {
		console.log(`the bet9ja server is listening on port ${PORT}`)
	})
})()