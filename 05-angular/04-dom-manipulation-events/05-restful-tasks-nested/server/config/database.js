const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelspath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/restful-nested', {
  useCreateIndex: true,
  useNewUrlParser: true,
});

mongoose.connection.once('connected', () =>
  console.log('Connected to MongoDB')
);



fs.readdirSync(modelspath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelspath, file)));

module.exports = require('mongoose');
