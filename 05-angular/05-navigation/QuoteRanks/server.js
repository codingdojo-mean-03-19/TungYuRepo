const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const { Port: port = 8000 } = process.env;

require('./server/config/database');
app.use(express.static(path.join(__dirname, 'dist/QuoteRanks')));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(require('./server/routes'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));
