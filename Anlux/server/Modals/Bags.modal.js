// models/Product.js
const mongoose = require('mongoose');

const Bagsschema = new mongoose.Schema({
    name: { type: String, required: true },
    discountPercentage: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    oldPrice: { type: Number, required: true },
    newPrice: { type: Number, required: true }
});

const Bags = mongoose.model('bags', Bagsschema);

module.exports = Bags;
