const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    helpseekerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      image: {
        type: String,
        required: true
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

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
