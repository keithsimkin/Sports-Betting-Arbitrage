const puppeteer = require('puppeteer');
const fs = require("fs");
require('dotenv').config();

const utils = require("./utils/utils");

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


async function getProxies(url) {
	try {
		const browser = await puppeteer.launch({
			headless: false
		})
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
		return httpsProxyList;

	} catch(err) {
		console.log('error in proxy function', err)
	}
}

// let proxee = getProxies('https://free-proxy-list.net/')
// proxee.then(res => {
// 	console.log(res)
// })



