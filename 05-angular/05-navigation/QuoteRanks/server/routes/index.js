const catchAllRouter = require('./catch-all.route');

const router = require('express').Router();
const api = require('express').Router();

const authorRouter = require('./qouteranks.route');

router.use('/authors', authorRouter);

module.exports = api.use('/api', router).use(catchAllRouter);
