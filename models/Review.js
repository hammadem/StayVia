const mongoose = require ('mongoose');
const User = require ('./User');

const reviewSchema = new mongoose.Schema ({
    comment: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    datePosted: {
        type: Date,
        default: Date.now(),
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

const Review = mongoose.model ('Review',reviewSchema);

module.exports = Review;