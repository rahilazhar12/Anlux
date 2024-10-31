const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        billingAddress: {
            street: { type: String, required: true },
            state: { type: String, required: true },
            zip: { type: String, required: true },
        },
    },
    cartItems: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            name: { type: String, required: true },
            mainImage: { type: String, required: true },
            quantity: { type: Number, required: true },
            newPrice: { type: Number, required: true },
            totalPrice: { type: Number, required: true },
        }
    ],
    totalAmount: { type: Number, required: true },
    shippingMethod: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
