const mongoose = require('mongoose');

const {Schema} = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Title is required"],
    minlength: [3, 'More than 3 characters needed']
  }
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Author', authorSchema);
