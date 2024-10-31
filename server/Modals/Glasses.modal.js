// models/Product.js
const mongoose = require('mongoose');

const Glassessschema = new mongoose.Schema({
    name: { type: String, required: true },
    discountPercentage: { type: Number, required: true },
    mainImage: { type: String, required: true },
    additionalImages: [{ type: String }], // Array of additional images
    description: { type: String, required: true },
    oldPrice: { type: Number, required: true },
    newPrice: { type: Number, required: true }
});

const Glasses = mongoose.model('glasses', Glassessschema);

module.exports = Glasses;
