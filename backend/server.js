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
		const result = await page.evaluate(() => {
			var heading = document.querySelectorAll(`th.sorting`)
			var rowHtml = document.querySelector('tbody').children
			let headingItems = []
			for (let i = 0; i < heading.length; i++) {
				headingItems[i] = heading[i].innerText
			}
			let rowItem = []
			for (let i = 0; i < rowHtml.length; i++) {
				let rowCell = rowHtml[i].cells
				let rowText = {}
				for (let x = 0; x < rowCell.length; x++) {
					rowText[headingItems[x]] = rowCell[x].innerText //map each row cell item to the appropriate heading
				}
				rowItem.push(rowText)
			}
			return rowItem;

			//click to other pages for more proxies
		})
		console.log(result)
	} catch(err) {
		console.log('error in proxy function', err)
	}
}


//getProxies('https://free-proxy-list.net/')



