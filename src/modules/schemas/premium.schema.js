const mongoose = require('mongoose');

const premiumSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    membershipType: {
        type: String,
        enum: [
            'monthly',
            'annual'
        ],
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    expirationDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Premium', premiumSchema);