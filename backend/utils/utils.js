const fs = require("fs");
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')

puppeteer.use(StealthPlugin());
puppeteer.use(AdblockerPlugin({blockTrackers: true}))

//https://www.top100bookmakers.com/completelist.php

const user_agent = [
	'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
	'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:53.0) Gecko/20100101 Firefox/53.0',
	'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)',
	'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)',
	'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)',
	'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0;  Trident/5.0)',
	'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; MDDCJS)',
	'Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36'	
]

//export if/when needed
// const headers = (function() {
// 	const ua = utils.user_agent;
// 	const usr_agent = ua[Math.floor(Math.random() * (ua.length - 1))]
// 	const header = {
// 		"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
// 		"Accept-Encoding": "gzip, deflate, br",
// 		"Accept-Language": "en-US,en;q=0.9", 
// 		"User-Agent":usr_agent,
// 		"Referer":"http://www.google.com/"
// 	}
// 	const header_JSON = JSON.stringify(header)
// 	return header_JSON;
// })();

async function getProxies(url) {
	try {
		const browser = await puppeteer.launch()
		const page = await browser.newPage()
		await page.goto(url) 
		const result = await page.evaluate(() => { //result is an array of objects containing ip address data
			var heading = document.querySelectorAll(`th.sorting`)
			var rowHtml = document.querySelector('tbody').children
			let headingItems = []
			for (let i = 0; i < heading.length; i++) {
				headingItems[i] = heading[i].innerText
			}
			headingItems.shift()
			headingItems.unshift('IP')
			headingItems.pop()
			headingItems.push('lastChecked')

			let rowItem = []
			for (let i = 0; i < rowHtml.length; i++) {
				let rowText = {}
				let rowCell = rowHtml[i].cells
				for (let x = 0; x < rowCell.length; x++) {
					rowText[headingItems[x]] = rowCell[x].innerText //map each row cell item to the appropriate heading
				}
				rowItem.push(rowText)
			}

			//click to other pages for more proxies
			let tables = document.querySelector('.dataTables_info')
			let tableCountString = tables.innerText.split(" ")
			let firstTableCount = parseInt(tableCountString[3])
			let totalTableCount = parseInt(tableCountString[5])

			try {
				let nTables = totalTableCount / firstTableCount;
				for (let i = 0; i < (nTables - 1); i++) {
					let nextTable = document.querySelector('#proxylisttable_next')
					nextTable.click()

					var rowHtml = document.querySelector('tbody').children
					for (let i = 0; i < rowHtml.length; i++) {
						let rowText = {}
						let rowCell = rowHtml[i].cells
						for (let x = 0; x < rowCell.length; x++) {
							rowText[headingItems[x]] = rowCell[x].innerText 
						}
						rowItem.push(rowText)
					}
				}
			} catch (err) {
				console.log('an error occurred at the other proxy pages', err)
			}
			return rowItem;
		})
		
		//filter for only https proxies
		let httpsProxyList = result.map(item => {
		     let ip = item.IP
		     let port = item.Port
		    if (item.Https === 'yes') {
		        return `${ip}:${port}`
		    }
		})
		httpsProxyList = httpsProxyList.filter(i => i !== undefined)
		return httpsProxyList;  //sample item = '202.138.242.41:46701'

	} catch(err) {
		console.log('error in proxy function', err)
	}
}

async function testProxies() {
	let test_url = 'https://httpbin.org/ip'
	let workingProxyList = []
	try {
		let proxyList = await getProxies('https://free-proxy-list.net/')
		await proxyList.forEach(async (item) => {
			let splitItem = item.split(':')
			let host = splitItem[0]
			let port = splitItem[1]
			try {
				let testResponse = await axios({
					method: 'get',
					url: test_url, 
					proxy: {
						host: host,
						port: port
					}, 
					timeout: 5000 //5 seconds
				})
				console.log(testResponse)
			} catch (err) {
				console.log('an error occurred in the api call to test proxies', err)
			}
		})
	} catch (err) {
		console.log('an error occurred in the testProxies function', err)
	}
}


async function getTeamNames(url) {
	try {
		const browser = await puppeteer.launch({
			headless: false
		})
		const page = await browser.newPage()
		// page.on('request', async function(request) {
		//   const headers = await request.headers();
		//   console.log(headers)
		// });
		await page.goto(url, {waitUntil: 'networkidle0'})

		//all pages
		const allPageLinks = await page.$$eval('.pagination > li', listItems => {
			let links = []
			listItems.forEach(listItem => {
				links.push(listItem.firstElementChild.outerHTML)
			})
			return links;
		})

		let allTeams = []
		for (let i = 0; i < (allPageLinks.length); i++) {
			if (allPageLinks[i].includes('/ranking/world/')) {
				await page.waitForSelector(`a[href$='/ranking/world/${i + 1}']`)
				await page.$eval(`a[href$='/ranking/world/${i + 1}']`, element => element.click())
				await page.waitForSelector('tbody')
				const result = await page.$$eval('tbody tr .text-left', teams => {
					let data = []
					teams.map(team => {
						data.push(team.outerText)
					})
					return data;
				})
				allTeams.push(result)
			}
		}
		return allTeams;
		browser.close();
	} catch(err) {
		console.log('err in the function for getting the team names', err)
	}
}

//export and run this function to check for updated team names
// getTeamNames('https://footballdatabase.com/ranking').then(results => {
// 	let teams = []
// 	results.forEach(array => {
// 		array.forEach(item => {
// 			let teamData = item.split('\n')
// 			let team = teamData[0]
// 			let country = teamData[1]
// 			teams.push({team, country})
// 		})
// 	})	
// 	fs.writeFileSync('./teams.txt', JSON.stringify(teams))
// })

//script to get all teams data and populate database. Export to the entry file when needed
let teams = fs.readFileSync('./teams.txt', 'utf8')
let teamArray = JSON.parse(teams)

let countryList = []
teamArray.forEach(i => countryList.push(i.country))
let uCountry = Array.from(new Set(countryList)) //unique countries
let smallCapsCnt = uCountry.map(i => i.toLowerCase()) //this is needed to create a database table for each country
//smallCapsCnt = smallCapsCnt.map(i => i.split(" ").join("_"))
//console.log(uCountry)

//countries split into thos with single words e.g. spain and multi-words e.g united states
let multiWordo = uCountry.map(i => i.split(" ")).filter(i => i.length > 1).map(i => i.join(" ")) //the original capitalized mutliword country name from the api
let multiWord = smallCapsCnt.map(i => i.split(" ")).filter(i => i.length > 1)
let singleWord = smallCapsCnt.map(i => i.split(" ")).filter(i => i.length === 1).map(i => i.join(""))
//console.log(multiWordo)
//console.log(singleWord)

//this statement populates each single-word country's database table with the team names
singleWord.forEach(i => {
	let countryName = i[0].toUpperCase() + i.slice(1, (i.length))
	let teamList = teamArray.filter(i => i.country === countryName) //returns the clubs in this country
	//first check the database tables for each country if has not been already filled with the teams data
	teamList.map(team => {
		let countryString = team.country.toLowerCase()
		try {
			//db(countryString).insert({team: team.team}, ['team']).then(console.log)
		} catch(err) {
			//console.log('an error occurred', err)
		}
	})
})

let multiWordCountry = []
multiWord.forEach(word => {
	multiWordCountry.push(word.map(i => i[0].toUpperCase() + i.slice(1, (i.length))).join(" "))
})
//console.log(multiWordCountry)
let slimmedMultiWordCountries = multiWordCountry.filter(i => i !== 'Congo Dr' && i !== 'Saudi Arabia' && i !== 'South Korea' && i !== 'Northern Ireland' && i !== 'Bosnia And Herzegovina' && i !== 'Trinidad And Tobago' && i !== 'United Arab Emirates' && i !== 'Papua New Guinea')

//populate all multiword country table names 
slimmedMultiWordCountries.forEach(i => {
	try {
		let countryString = i.split(" ").join("_").toLowerCase()
		let teamList = teamArray.filter(team => team.country === i)
		//teamList.map(teamName => db(countryString).insert({team: teamName.team}).then(console.log))
	} catch(err) {
		//console.log('error occurred', err)
	}
})


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
let switzerland = teamArray.filter(team => team.country === 'Switzerland')
let saudiArabia = teamArray.filter(team => team.country === 'Saudi Arabia')
let serbia = teamArray.filter(team => team.country === 'Serbia')
let bulgaria = teamArray.filter(team => team.country === 'Bulgaria')
let turkey = teamArray.filter(team => team.country === 'Turkey')
let croatia = teamArray.filter(team => team.country === 'Croatia')
let egypt = teamArray.filter(team => team.country === 'Egypt')
let belgium = teamArray.filter(team => team.country === 'Belgium')
let ireland = teamArray.filter(team => team.country === 'Ireland')
let paraguay = teamArray.filter(team => team.country === 'Paraguay')
let israel = teamArray.filter(team => team.country === 'Israel')
let southKorea = teamArray.filter(team => team.country === 'South Korea')
let tunisia = teamArray.filter(team => team.country === 'Tunisia')
let wales = teamArray.filter(team => team.country === 'Wales')
let moldova = teamArray.filter(team => team.country === 'Moldova')
let cyprus = teamArray.filter(team => team.country === 'Cyprus')
let qatar = teamArray.filter(team => team.country === 'Qatar')
let albania = teamArray.filter(team => team.country === 'Albania')
let z = teamArray.filter(team => team.country === 'China PR')

// console.log(z.length)
// console.log(z)

function makeTables(array) {
	try {
		array.forEach(country => {
			db.schema.hasTable(country).then(function(exists) {
				if (!exists) {
					return db.schema.createTable(country, function(t) {
						t.increments('id').primary();
						t.string('team').unique();
					})
				}
			})
		})
	} catch(err) {
		console.log('an error occurred', err)
	}
	console.log('done')
	return;
}


function populateTables(array) {
	try {
		array.forEach(country => {
			let countryString = country[0].country.toLowerCase()
			country.forEach(i => db(countryString).insert({team: i.team}).then().catch((e) => {
				console.log('error in the inserts', e)
			}))
		})
	} catch(err) {
		console.log('an error occurred', err)
	}
	//console.log('success')
	return;
}
//populateTables(allTeams)

//observed that creating a new table with text datatype is causing the duplicates while varchar unique works but throws errors occasionally

//z.forEach(i => db('china_pr').insert({team: i.team}, ['team']).then(console.log))


//you only need to specify the column that you are altering the data type of the column
//this function changes the data type of all the team columns to prevent duplication of data
function alterType(array) {
	array.forEach(table => {
		db.schema.alterTable(table, function(t) {
			t.string('team').unique().alter()
		}).then(console.log)
	})
	return;
}

//console.log(alterType(allCountries))
//db.select().table('nigeria').then(console.log)


//throwaway scripts ======================================================
//await page.setRequestInterception(true); - put this before page.goto function
// page.on('request', async function(request) {
// 		  const headers = await request.headers();
// 		  if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet') {
// 		  	request.abort()
// 		  } else {
// 		  	request.continue()
// 		  }
// 		  console.log(headers)
// 		});

//extract the relevant odds and save in a database for arbitrage checking
 // function extractNaijaBetOdds() {
 // 	let oddsData = fs.readFileSync('./scrapers/naijabet/naijabetlocal.html', 'utf8')
 // 	try {
 // 		const document = parse(oddsData)
 // 		let test = document.querySelector('.b-bet-grid__even')
 // 		let h = []
 // 		test.childNodes.forEach(i => {
 // 			h.push(i.text)
 // 		})
 // 		console.log(h)
 // 	} catch(err) {
 // 		console.log('an error occurred in the local scrapped naijabet parser function', err)
 // 	}
 // }

exports.user_agent = user_agent;
exports.getTeamNames = getTeamNames;