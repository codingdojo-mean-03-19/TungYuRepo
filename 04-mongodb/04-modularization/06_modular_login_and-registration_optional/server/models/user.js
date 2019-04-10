const mongoose = require('../config/mongoose');

const { Schema } = mongoose;

    const UserSchema = new Schema({
        email: {
            type: String, 
            required: [true, 'Email can not be blank!'], 
            trim: true
        },
        first_name: {
            type: String, 
            required: [true, 'First name can not be blank!'], 
            trim: true
        },
        last_name: {
            type: String, 
            required: [true, 'Last name can not be blank!'], 
            trim: true
        },
        password: {
            type: String, 
            required: [true, 'Please create password!'], 
            trim: true
        },
        birthday: {
            type: Date, 
            required: [true, 'Birthday can not be blank!'], 
            trim: true
        },
    });

   module.exports = mongoose.model('User', UserSchema);