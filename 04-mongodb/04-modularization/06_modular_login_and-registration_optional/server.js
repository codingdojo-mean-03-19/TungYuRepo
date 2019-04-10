const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');

const { PORT: port = 8000 } = process.env;
// const { Schema } = mongoose; //in index.js
const app = express();

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'abc',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(flash());

require('./server/config/routes.js')(app);


app.listen(port, () => console.log(`express server listening on port ${port}`));