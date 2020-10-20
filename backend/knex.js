"use strict";
const knex = require('knex');
const config = require('./config/config');

const c = config.dev

const dba = knex({ 
	client: 'pg',
	connection: {
		host: c.host,
		user: c.username,
		password: c.password,
		database: c.database
	}
})
 
module.exports = dba;  