const puppeteer = require('puppeteer');
const fs = require("fs");
const axios = require('axios');
require('dotenv').config();

const utils = require("./utils/utils");
const naijabet = require("./scrapers/naijabet/naijabet").naijabetScraper;
//const naijabetOdds = require("./scrapers/naijabet/naijabet").extractNaijaBetOdds;
const db = require("./database/db")

//naijabet() 