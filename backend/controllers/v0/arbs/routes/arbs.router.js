"use strict";

const express = require("express");
const router = express.Router();
const db = require("../../../../knex");



router.get('/', async (req, res) => {
	let dbarbs = await db.select("game", "game_date", "game_time", "arb_combination", "arb_received").from("allarbs").then().catch(e => console.log("an error occurred when sending arbs to the frontend in GET request", e))
	res.status(200).send(dbarbs)
}); 



exports.ArbsRouter = router;