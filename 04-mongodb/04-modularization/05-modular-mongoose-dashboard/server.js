const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const { PORT: port = 8000 } = process.env;
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);

app.listen(port, () => console.log(`express server listening on port ${port}`));