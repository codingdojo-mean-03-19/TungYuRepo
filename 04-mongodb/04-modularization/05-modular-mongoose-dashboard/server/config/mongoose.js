const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

module.exports = require('mongoose');
