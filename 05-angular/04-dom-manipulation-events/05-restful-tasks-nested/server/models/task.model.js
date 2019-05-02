const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Title is required'],
    minlength: [2, 'More than 1 char needed']
  },
  description: {
    type: String,
    trim: true
  },
} , {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Task', TaskSchema);
