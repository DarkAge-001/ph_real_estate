// Property Model & Routes

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: String,
    type: { type: String, enum: ['rent', 'sale'], required: true },
    price: Number,
    address: String,
    city: String,
    postal_code: String,
    bedrooms: Number,
    size: Number,
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Property', propertySchema);