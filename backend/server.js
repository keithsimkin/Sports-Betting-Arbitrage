const puppeteer = require('puppeteer');
const fs = require("fs");
const axios = require('axios');
require('dotenv').config();

const utils = require("./utils/utils");
const naijabet = require("./scrapers/naijabet/naijabet").naijabetScraper;
//const db = require("./database/db")

//select all from table where game equals game, filtered by time, return most recent
//naijabet().then(console.log) 
//naijabet() 



//db('naijabet_3way').where('game', 'Malmo FF vs Orebro SK').then(console.log)