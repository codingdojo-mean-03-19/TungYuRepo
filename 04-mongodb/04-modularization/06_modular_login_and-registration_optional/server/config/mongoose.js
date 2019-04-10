const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/login_and_registration_modularized', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

module.exports = require('mongoose');