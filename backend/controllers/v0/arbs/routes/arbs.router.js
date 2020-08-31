"use strict";

const express = require("express");
const router = express.Router();
const db = require("../../../../knex");



router.get('/', (req, res) => {
	res.status(200).send('welcome to qutech')
});



exports.ArbsRouter = router;