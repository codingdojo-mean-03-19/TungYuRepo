const express = require('express');
const path = require('path');
// const http = require('http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public/dist/public')));

const { PORT: port = 8000 } = process.env;

app.listen(port, () => console.log(`listening on port ${port}`));