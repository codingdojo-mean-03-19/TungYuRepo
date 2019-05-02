const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { PORT:port = 8000} = process.env;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist/restful-tasks-nested')));

require('./server/config/database');
require('./server/routes/task.route')(app);

app.listen(port, ()=> console.log(`Express server listening on port ${port}`));
