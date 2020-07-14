const puppeteer = require('puppeteer');
const fs = require("fs");
const axios = require('axios');
require('dotenv').config();

const utils = require("./utils/utils");
const naijabet = require("./scrapers/naijabet/naijabet").naijabetScraper;
const naijabetOdds = require("./scrapers/naijabet/naijabet").extractNaijaBetOdds;

const headers = (function() {
	const ua = utils.user_agent;
	const usr_agent = ua[Math.floor(Math.random() * (ua.length - 1))]
	const header = {
		"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"Accept-Encoding": "gzip, deflate, br",
		"Accept-Language": "en-US,en;q=0.9", 
		"User-Agent":usr_agent,
		"Referer":"http://www.google.com/"
	}
	const header_JSON = JSON.stringify(header)
	return header_JSON;
})();

const teamNames = utils.getTeamNames
//teamNames('https://footballdatabase.com/ranking').then(console.log)
//naijabetOdds()











