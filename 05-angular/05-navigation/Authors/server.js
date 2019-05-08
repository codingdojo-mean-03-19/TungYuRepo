const body = require('body-parser');
const path = require('path');
const express = require('express');

const { PORT: port = 8000 } = process.env;
const app = express();

require('./servers/config/database');
app.use(express.static(path.join(__dirname, 'dist/Authors')));
app.use(body.urlencoded({ extended: true }))
app.use(body.json());

require('./servers/routes/author.route')(app);

app.listen(port, () => console.log(`Express server listening on port ${port}`))
