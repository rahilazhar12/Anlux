// models/Product.js
const mongoose = require('mongoose');

const Bagsschema = new mongoose.Schema({
    name: { type: String, required: true },
    discountPercentage: { type: Number, required: true },
    mainImage: { type: String, required: true },
    additionalImages: [{ type: String }], // Array of additional images
    description: { type: String, required: true },
    oldPrice: { type: Number, required: true },
    newPrice: { type: Number, required: true }
});

const Bags = mongoose.model('bags', Bagsschema);

module.exports = Bags;
