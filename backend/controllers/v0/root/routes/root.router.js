"use strict";

const express = require("express");
const router = express.Router();
const db = require("../../../../knex");



router.get('/', (req, res) => {
	res.status(200).send('this is the path to the root home page')
}); 

exports.RootRouter = router;