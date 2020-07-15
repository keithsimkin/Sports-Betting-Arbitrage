const puppeteer = require('puppeteer');
const fs = require("fs");
const axios = require('axios');
require('dotenv').config();

const utils = require("./utils/utils");
const naijabet = require("./scrapers/naijabet/naijabet").naijabetScraper;
const naijabetOdds = require("./scrapers/naijabet/naijabet").extractNaijaBetOdds;

let teams = fs.readFileSync('./teams.txt', 'utf8')
let teamArray = JSON.parse(teams)
let germany = teamArray.filter(team => team.country === 'Germany')
let england = teamArray.filter(team => team.country === 'England')
let spain = teamArray.filter(team => team.country === 'Spain')
let france = teamArray.filter(team => team.country === 'France')
let italy = teamArray.filter(team => team.country === 'Italy')
let brazil = teamArray.filter(team => team.country === 'Brazil')
let netherlands = teamArray.filter(team => team.country === 'Netherlands')
let ukraine = teamArray.filter(team => team.country === 'Ukraine')
let portugal = teamArray.filter(team => team.country === 'Portugal')
let argentina = teamArray.filter(team => team.country === 'Argentina')
let austria = teamArray.filter(team => team.country === 'Austria')
let russia = teamArray.filter(team => team.country === 'Russia')
let greece = teamArray.filter(team => team.country === 'Greece')
let scotland = teamArray.filter(team => team.country === 'Scotland')
let czech = teamArray.filter(team => team.country === 'Czech Republic')
let estonia = teamArray.filter(team => team.country === 'Estonia')
let swiss = teamArray.filter(team => team.country === 'Switzerland')
let uae = teamArray.filter(team => team.country === 'Saudi Arabia')
let serb = teamArray.filter(team => team.country === 'Serbia')
let bulgaria = teamArray.filter(team => team.country === 'Bulgaria')
let turkey = teamArray.filter(team => team.country === 'Turkey')
let croatia = teamArray.filter(team => team.country === 'Croatia')
let egypt = teamArray.filter(team => team.country === 'Egypt')
let belgium = teamArray.filter(team => team.country === 'Belgium')
let ireland = teamArray.filter(team => team.country === 'Ireland')
let paraguay = teamArray.filter(team => team.country === 'Paraguay')
let israel = teamArray.filter(team => team.country === 'Israel')
let skorea = teamArray.filter(team => team.country === 'South Korea')
let tunis = teamArray.filter(team => team.country === 'Tunisia')
let wales = teamArray.filter(team => team.country === 'Wales')
let moldova = teamArray.filter(team => team.country === 'Moldova')
let cyprus = teamArray.filter(team => team.country === 'Cyprus')
let qatar = teamArray.filter(team => team.country === 'Qatar')
let albania = teamArray.filter(team => team.country === 'Albania')
console.log(albania)













