const mongoose = require('mongoose');

const {Schema} = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Title is required"],
    minlength: [2, 'More than 1 char needed']
  },
  price: {
    type: Number,
    trim: true,
    required: [true, "Author name is required"]
  },
  image: String
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
