const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    helpseekerId: {
        type: Number,
        required: true
      },
      image: {
        data: Buffer,
        contentType: String,
      },
      status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
      },
      details: {
        type: String,
        required: true
      }
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
