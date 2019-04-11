const express = require('express');
const bodyParser = require('body-parser');

const { PORT: port = 8000 } = process.env;

const app = express();

app.use(bodyParser.json());

require('./server/config/routes.js')(app);


app.listen(port, () => console.log(`express server listening on port ${port}`));