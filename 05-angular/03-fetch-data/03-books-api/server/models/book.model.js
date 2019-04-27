const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Title is required"],
    minlength: [2, 'More than 1 char needed']
  },
  author: {
    type: String,
    trim: true,
    required: [true, "Author name is required"],
    minlength: [3, 'More than 1 char needed']
  },
  pages: Number,
  year: Number,
  publisher: String
},
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('Book', bookSchema);
