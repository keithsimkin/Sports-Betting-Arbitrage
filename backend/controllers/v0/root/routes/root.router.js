"use strict";
const express = require("express");
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const router = express.Router();
//const db = require("../../../../knex");


router.get('/', csrfProtection, (req, res) => {
	res.send({ csrfToken: req.csrfToken() })
}); 

exports.RootRouter = router;      