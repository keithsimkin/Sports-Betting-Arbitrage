"use strict";

const db = require("../../../../knex");

//threeway table models
async function bet9ja3WayOddsTable() {
	return await db.schema.hasTable('bet9ja_3way').then(exists => {
		if (!exists) {
			return db.schema.createTable('bet9ja_3way', t => {
				t.increments("id");
				t.timestamp("date_copied").defaultTo(db.fn.now());
				t.string("country").notNullable();
				t.string("league").notNullable();
				t.string("game_date").notNullable();
				t.string("game_time").notNullable();
				t.string("game_code").notNullable();
				t.string("game").notNullable();
				t.string("home_odds").notNullable();
				t.string("draw_odds").notNullable();
				t.string("away_odds").notNullable();
			}).then(() => db.raw(`CREATE INDEX CONCURRENTLY bet9ja_3way_gin ON bet9ja_3way USING gin(game gin_trgm_ops)`))
		}
	})
}

module.exports.bet9ja3WayOddsTable = bet9ja3WayOddsTable;

async function naijabet3WayOddsTable() {
	return await db.schema.hasTable('naijabet_3way').then(exists => {
		if (!exists) {
			return db.schema.createTable('naijabet_3way', t => {
				t.increments("id");
				t.timestamp("date_copied").defaultTo(db.fn.now());
				t.string("country").notNullable();
				t.string("league").notNullable();
				t.string("game_date").notNullable();
				t.string("game_time").notNullable();
				t.string("game").notNullable();
				t.string("home_odds").notNullable();
				t.string("draw_odds").notNullable();
				t.string("away_odds").notNullable();
			}).then(() => db.raw(`CREATE INDEX CONCURRENTLY naijabet_3way_gin ON naijabet_3way USING gin(game gin_trgm_ops)`))
		}
	})
}
module.exports.naijabet3WayOddsTable = naijabet3WayOddsTable;
// //doublechance table models
async function bet9jaDoubleChanceOddsTable() {
	return await db.schema.hasTable('bet9ja_doublechance').then(exists => {
		if (!exists) {
			return db.schema.createTable('bet9ja_doublechance', t => {
				t.increments("id");
				t.timestamp("date_copied").defaultTo(db.fn.now());
				t.string("country").notNullable();
				t.string("league").notNullable();
				t.string("game_date").notNullable();
				t.string("game_time").notNullable();
				t.string("game_code").notNullable();
				t.string("game").notNullable();
				t.string("home_draw").notNullable();
				t.string("either_win").notNullable();
				t.string("away_draw").notNullable();
			}).then(() => db.raw(`CREATE INDEX CONCURRENTLY bet9ja_doublechance_gin ON bet9ja_doublechance USING gin(game gin_trgm_ops)`))
		}
	})
}

module.exports.bet9jaDoubleChanceOddsTable = bet9jaDoubleChanceOddsTable;

async function naijabetDoubleChanceOddsTable() {
	return await db.schema.hasTable('naijabet_doublechance').then(exists => {
		if (!exists) {
			return db.schema.createTable('naijabet_doublechance', t => {
				t.increments("id");
				t.timestamp("date_copied").defaultTo(db.fn.now());
				t.string("country").notNullable();
				t.string("league").notNullable();
				t.string("game_date").notNullable();
				t.string("game_time").notNullable();
				t.string("game").notNullable();
				t.string("home_draw").notNullable();
				t.string("either_win").notNullable();
				t.string("away_draw").notNullable();
			}).then(() => db.raw(`CREATE INDEX CONCURRENTLY naijabet_doublechance_gin ON naijabet_doublechance USING gin(game gin_trgm_ops)`))
		}
	})
}

// //Handicaps
// //Over or Under 2.5
async function bet9jaOU25OddsTable() {
	return await db.schema.hasTable('bet9ja_ou2p5').then(exists => {
		if (!exists) {
			return db.schema.createTable('bet9ja_ou2p5', t => {
				t.increments("id");
				t.timestamp("date_copied").defaultTo(db.fn.now());
				t.string("country").notNullable();
				t.string("league").notNullable();
				t.string("game_date").notNullable();
				t.string("game_time").notNullable();
				t.string("game_code").notNullable();
				t.string("game").notNullable();
				t.string("over_2p5").notNullable();
				t.string("under_2p5").notNullable();
			}).then(() => db.raw(`CREATE INDEX CONCURRENTLY bet9ja_ou2p5_gin ON bet9ja_ou2p5 USING gin(game gin_trgm_ops)`))
		}
	})
}




