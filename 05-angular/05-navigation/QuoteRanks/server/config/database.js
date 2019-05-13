const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsPath = path.join(__dirname, '../models');
mongoose.connect('mongodb://localhost/QuoteRank', { useCreateIndex: true, useNewUrlParser: true });

mongoose.connection.once('connected', () => console.log('Connected to Mongo DB'));
fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath, file)));
