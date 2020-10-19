"use strict";
const db = require("../../../../knex");
const { 
	bet9ja3WayOddsTable, 
	naijabet3WayOddsTable,
	bet9jaDoubleChanceOddsTable 
	} = require("./TABLE_MODELS");

const createDBTables = async () => {
	try {
		await db.raw('CREATE EXTENSION IF NOT EXISTS pg_trgm')
		const table1 = await bet9ja3WayOddsTable()
		const table2 = await naijabet3WayOddsTable()
		const table3 = await bet9jaDoubleChanceOddsTable()
		let results = [table1, table2, table3]
		return results;
	} catch(err) {
		console.log('an error occurred in the createTables file', err)
	}
}

module.exports.createDBTables = createDBTables;