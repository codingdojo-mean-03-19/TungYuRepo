const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hello_angular', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

module.exports = require('mongoose');