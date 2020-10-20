 "use strict";

const express = require("express");
const router = express.Router();

const { ArbsRouter } = require("./arbs/routes/arbs.router");
const { RootRouter } = require("./root/routes/root.router");
const { AuthRouter } = require("./users/routes/auth.router");

router.use('/', RootRouter);
router.use('/arbs', ArbsRouter); 
router.use('/users', AuthRouter);


router.get('/', (req, res) => { 
	res.send('v0');
});

router.post('/', (req, res) => {
	res.send('v0');
});

exports.IndexRouter = router;