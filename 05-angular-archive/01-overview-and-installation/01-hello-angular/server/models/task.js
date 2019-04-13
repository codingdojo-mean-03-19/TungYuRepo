const moongose = require('../config/database.js');

const { Schema } = moongose;

const TaskSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    completed: {
        type: Boolean, 
        default: false,
        trim: true
    }
},{timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = moongose.model('Tasks', TaskSchema)