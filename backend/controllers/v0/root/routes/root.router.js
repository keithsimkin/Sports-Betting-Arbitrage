"use strict";

const express = require("express");
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const router = express.Router();
//const db = require("../../../../knex");

router.use(csrfProtection);


router.get('/', (req, res) => {
	res.send({ csrfToken: req.csrfToken() })
}); 

exports.RootRouter = router;   