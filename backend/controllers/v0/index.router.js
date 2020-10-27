 "use strict";

const express = require("express");
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const cookieParser = require('cookie-parser');

const router = express.Router();

const { ArbsRouter } = require("./arbs/routes/arbs.router");
const { RootRouter } = require("./root/routes/root.router");
const { AuthRouter } = require("./users/routes/auth.router");
const { BookieRouter } = require("./bookie_logins/routes/logins.router");

router.use(cookieParser());
router.use(csrfProtection);

router.use('/', RootRouter);
router.use('/arbs', ArbsRouter); 
router.use('/users', AuthRouter);
router.use('/bookies', BookieRouter);


router.get('/', (req, res) => { 
	res.send('v0'); 
});

router.post('/', (req, res) => {
	res.send('v0');
});

exports.IndexRouter = router;