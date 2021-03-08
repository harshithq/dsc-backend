const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    id: {
        type : Number,
    },
    title: {
        type : String,
        trim : true
    },
    price: {
        type : Number,
        
    },
    categoryID: {
        type : Number,
    required : true
    },
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: false
        },
        coordinates: {
          type: [Number],
          required: false
        }
      }
})

module.exports = mongoose.model('Listing',listingSchema)