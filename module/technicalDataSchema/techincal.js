const mongoose = require('mongoose');

const technicalSchema = new mongoose.Schema({
    userName: String,
    password: String,
    userType: { type: String, default: 'Technical' },
    fullName: String,
    address: String,
    phoneNumber: String,
    yearsOfExperience: Number,
    qualifications: String,
    ratingAverage: Number
  });
  

const Technical = mongoose.model('Technical', technicalSchema);

module.exports = Technical;