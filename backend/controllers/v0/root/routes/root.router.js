"use strict";
const express = require("express");
const router = express.Router();
//const db = require("../../../../knex");


router.get('/', (req, res) => {
	res.send({ csrfToken: req.csrfToken() })
	//res.status(200).send('homebase')
}); 

exports.RootRouter = router;   