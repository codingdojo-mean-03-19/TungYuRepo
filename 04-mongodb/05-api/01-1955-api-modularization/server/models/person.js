const mongoose = require('../config/mongoose.js');

const { Schema } = mongoose;

const PeopleSchema = new Schema({
    name: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('People', PeopleSchema);