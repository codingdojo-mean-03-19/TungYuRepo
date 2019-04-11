const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955_API_modularization', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

module.exports = require('mongoose',)