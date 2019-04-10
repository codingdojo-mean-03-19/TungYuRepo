const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quoting_dojo_modularizing_routes', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

module.exports = require('mongoose');