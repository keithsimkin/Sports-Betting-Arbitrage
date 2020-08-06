const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const randomUA = require("puppeteer-extra-plugin-anonymize-ua");

const db = require("../../database/db");
//const blockResources = require("puppeteer-extra-plugin-block-resources");
// const fs = require("fs");
// const { parse } = require("node-html-parser");

puppeteer.use(StealthPlugin());
puppeteer.use(randomUA());

//this function will make a random loop through an array index everytime it is called
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// function arrayChunks(dataArray, indexArray) {
// 	let groups = []
// 	let a = 0
// 	for (let i = 0; i < indexArray.length; i++) {
// 		let b = a + 1
// 		groups.push(dataArray.slice(indexArray[a], indexArray[b]))
// 		a++
// 	}
// 	return groups;
// }


async function naijabetScraper() {
	try {
		const browser = await puppeteer.launch({
			headless: false
		})
		const page = await browser.newPage();
		//set unlimited amount of time for the page to load
		await page.setDefaultNavigationTimeout(0);
		await page.goto('https://www.naijabet.com')
		//await page.waitFor(5000); //wait for 5 seconds for the page to load fully
		await page.waitForSelector('body');
		let allSportsLink = await page.$eval("#menu___allsports", element => {
			let allSports = Array.from(element.children)
			let soccer = allSports[0].firstElementChild
			soccer.click()
		})
		await page.waitForSelector('#leagues');
		let allLeagues = await page.$$eval("div[class=cover_leagues_cell_contry]", element => element)
		let leagueCount = allLeagues.length //an array of empty objects






		//TEST STARTS=============================================================
		let league = await page.$$eval("div[class=cover_leagues_cell_contry]", element => {
			let country = element[8].children[0].children[0].children[1].children[0]
			country.click()
		})
		//click on the selector button that takes you to the actual matches for the selected league
		await page.waitForSelector("#leagues_count_container > a");
		await page.$eval("#leagues_count_container > a", element => element.click())
		await page.waitFor(2000)
		//await page.exposeFunction("arrayChunks", arrayChunks);

		let games = await page.$eval('.events_contein', async element => {
			let headingCount = []
			for (let item of element.children) {
				headingCount.push(item.tagName)
			}

			//this returns the indexes of all headings for the league
			let headingIndex = headingCount.reduce((acc, ci, idx) => {
				if (ci === 'H1') {
					acc.push(idx)
				}
				return acc;
			}, [])
			
			let elementArray = Array.from(element.children) //converts the HTMLCollection to a regular array
			
			//split the array into logical chunks exactly as arranged on the naijabet website 
			let elementGroups = []
			let a = 0
			for (let i = 0; i < headingIndex.length; i++) {
				let b = a + 1
				elementGroups.push(elementArray.slice(headingIndex[a], headingIndex[b]))
				a++
			}
			
			let leagueHeadings = []
			let leagueGames = []
			elementGroups.forEach(group => { //group is an array of h1 and divs, group[0] is always h1
				let heading = []
				let headingData = group[0].querySelector('table > tbody > tr > td:nth-child(1) > div').children //an array of anchor tags HTMLCollection
				for (let item of headingData) {
					heading.push(item.innerText)
				}
				heading = heading.filter(i => i !== "") // e.g. [ 'Soccer', 'Sweden', 'Allsvenskan' ]
				leagueHeadings.push(heading)

				let oddsGroups = group.slice(1, ) //returns an array of divs
				let leagueGamesGroup = []

				oddsGroups.forEach(div => {
					let gamedate_markets = [] //date and markets 
					let dateAndMarkets = div.querySelector(".b-bet-grid__bets").children[1].children //contains date and markets
					for (let item of dateAndMarkets) {
						gamedate_markets.push(item.innerText)
					}
					gamedate_markets = gamedate_markets.filter(i => i !== '')

					let gameOdds = div.querySelectorAll(".b-bet-grid__bets").children
					let checkOdds = [] //select only the table rows that have odds data in the div
					for (let item of gameOdds) {
						if (item.hasAttribute("data-event_id")) {
							checkOdds.push(item)
						}
					}

					let rows = []
					if (checkOdds !== "") {
						checkOdds.forEach(row => {
							let rowData = []
							for (let item of row.children) {
								rowData.push(item.innerText)
							}
							rowData.pop()
						})
						rows.push(rowData)
					}
					leagueGamesGroup.push({gamedate_markets, rows})
				})
				leagueGames.push(leagueGamesGroup)
			})
		
			return leagueGames;
		})
		console.log(games)

		
		//db.select('*').from('naijabet_3way').then(console.log)
		
		

		//TEST ENDS======================================================






		// let indexes = []
		// for (let i = 0; i < leagueCount; i++) { 
		// 	indexes.push(i)
		// }

		//introduce randomness and pause to the looping
		// let newIndexes = shuffle(indexes)
		// for (let i = 0; i < newIndexes.length; i++) {
		// 	const league =  await page.$$eval("div[class=cover_leagues_cell_contry]", async (element, newIndexes, i) => {
		// 		let country = element[newIndexes[i]].children[0].children[0].children[1].children[0]
		// 		country.click()
		// 		// await new Promise(function(resolve) {setTimeout(resolve, 2000)});
		// 	}, newIndexes, i)
		// 	let randomTime = 1000 * Math.floor(Math.random() * 10)
		// 	await page.waitFor(randomTime)
		// 	await page.waitForSelector("#leagues_count_container > a");
		//  //click on the selector button that takes you to the actual matches for the selected league
		// 	await page.$eval("#leagues_count_container > a", element => element.click())
		// 	//wait for a few seconds before proceeding, to act human
		// 	await page.waitFor(randomTime)

		// 	let gameHeadings = await page.$$eval(".s_title_ev", elements => {
		// 	//this is an array of game headings elements to eventually return e.g. Soccer >> England >> FA Cup
		// 	let headings = []
		// 	elements.forEach(element => {
		// 		let heading = []
		// 		let headingData = element.querySelector('table > tbody > tr > td:nth-child(1) > div').children //an array of anchor tags HTML Collection
		// 		for (let item of headingData) {
		// 			if (item.innerText !== "") {
		// 				heading.push(item.innerText)
		// 			}
		// 		}
		// 		headings.push(heading)
		// 		})
		// 		return headings;
		// 	})

		// 	let gameMarkets = await page.$$eval(".b-bet-grid__bets", elements => {
		// 	let allData = []
		// 	elements.forEach(element => {
		// 		let gamedate_markets = []
		// 		let dateAndMarkets = element.children[1].children
		// 		for (let item of dateAndMarkets) {
		// 			if (item.innerText !== "") {
		// 				gamedate_markets.push(item.innerText)
		// 			}
		// 		}
		// 		gamedate_markets.pop()
		// 		allData.push({gamedate_markets})
		// 	})
		// 	return allData;
		// 	})
		
		// 	let gameOdds = await page.$$eval(".market_", elements => {
		// 	let allData = []
		// 	elements.forEach(element => {
		// 		let odds = []
		// 		for (let item of element.children) {
		// 			odds.push(item.innerText)
		// 		}
		// 		odds.pop()
		// 		allData.push({odds})
		// 	})
		// 	return allData;
		// 	})
		// } 
		
		
	} catch(err) {
		console.log('an error occurred in the naijabetScraper function', err)
	}
}



exports.naijabetScraper = naijabetScraper;

//SCRAP

// let gameHeadings = await page.$$eval(".s_title_ev", elements => {
// 			//this is an array of game headings elements to eventually return e.g. Soccer >> England >> FA Cup
// 			let headings = []
// 			elements.forEach(element => {
// 				let heading = []
// 				let headingData = element.querySelector('table > tbody > tr > td:nth-child(1) > div').children //an array of anchor tags HTML Collection
// 				for (let item of headingData) {
// 					if (item.innerText !== "") {
// 						heading.push(item.innerText)
// 					}
// 				}
// 				headings.push(heading)
// 			})
// 			return headings;
// 		})

// 		let gameMarkets = await page.$$eval(".b-bet-grid__bets", elements => {
// 			let allData = []
// 			elements.forEach(element => {
// 				let gamedate_markets = []
// 				let dateAndMarkets = element.children[1].children
// 				for (let item of dateAndMarkets) {
// 					if (item.innerText !== "") {
// 						gamedate_markets.push(item.innerText)
// 					}
// 				}
// 				gamedate_markets.pop()
// 				allData.push({gamedate_markets})
// 			})
// 			return allData;
// 		})
		
// 		let gameOdds = await page.$$eval(".market_", elements => {
// 			let allData = []
// 			elements.forEach(element => {
// 				let odds = []
// 				for (let item of element.children) {
// 					odds.push(item.innerText)
// 				}
// 				odds.pop()
// 				allData.push({odds})
// 			})
// 			return allData;
// 		})

		// console.log(gameHeadings)
		// console.log(gameMarkets)
		// console.log(gameOdds)
		//gameHeadings.forEach(array => array.shift()) //removes the first item-'Soccer' from the array and leaves the country and league