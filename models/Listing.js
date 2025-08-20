const mongoose = require ('mongoose');
const Review = require ('./Review');
const User = require ('./User');

const listingSchema = new mongoose.Schema ({
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1570563234994-a7a7be1e01a5?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        filename: {
            type: String,
            default: "Default",
        },
    },
    price: {
        type: Number
    },
    location: {
        type: String
    },
    country: {
        type: String
    },
    reviews:  [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Review',
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    geometry: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      },
    category: {
        type: String,
        enum: ['Homestays','Beachfront','Resorts','Mountains','City Apartments','Amazing Pools','Farms','Arctic','Camping'],
        required: true
    }
});

listingSchema.post ('findOneAndDelete', async (listing)=>{
    await Review.deleteMany ({_id: {$in: listing.reviews}});
});

const Listing = mongoose.model ('Listing',listingSchema);

module.exports = Listing;