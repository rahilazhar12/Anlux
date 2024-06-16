// models/Product.js
const mongoose = require('mongoose');

const Glassessschema = new mongoose.Schema({
    name: { type: String, required: true },
    discountPercentage: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    oldPrice: { type: Number, required: true },
    newPrice: { type: Number, required: true }
});

const Glasses = mongoose.model('glasses', Glassessschema);

module.exports = Glasses;
