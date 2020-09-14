"use strict";

const express = require("express");
const router = express.Router();

const { ArbsRouter } = require("./arbs/routes/arbs.router");

router.use('/arbs', ArbsRouter);

router.get('/', (req, res) => { 
	res.send('v0');
});

router.post('/', (req, res) => {
	res.send('v0');
});

exports.IndexRouter = router;