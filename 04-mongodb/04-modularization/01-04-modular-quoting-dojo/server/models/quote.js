const mongoose = require('../config/mongoose.js');

const { Schema } = mongoose;

const quoteSchema = new Schema({
    name: { type: String },
    quote: { type: String },
}, { timestamps: true});

module.exports = mongoose.model('quotes', quoteSchema);