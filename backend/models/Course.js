const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Course', CourseSchema);
