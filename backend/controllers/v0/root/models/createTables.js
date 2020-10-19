"use strict";
const { bet9ja3WayOddsTable } = require("./TABLE_MODELS");

const createDBTables = async () => {
	try {
		const table1 = await bet9ja3WayOddsTable()
	} catch(err) {
		console.log('an error occurred in the createTables file', err)
	}
	return table1;
}

module.exports.createDBTables = createDBTables;