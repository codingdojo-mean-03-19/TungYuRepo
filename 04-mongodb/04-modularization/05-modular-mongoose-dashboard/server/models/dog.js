const mongoose = require('../config/mongoose.js');

const { Schema } = mongoose;

const DogSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Name can not be blank'],
        trim: true
    }, 
    age: {type: Number}, 
    weight: {type: Number}
});

module.exports = mongoose.model('Dogs', DogSchema);