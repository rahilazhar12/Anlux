const Order = require('../Modals/Order.modal')



exports.Orders = async (req, res) => {
    try {
        const { name, email, phone, billingAddress, cartItems, totalAmount, shippingMethod } = req.body;

        const newOrder = new Order({
            user: { name, email, phone, billingAddress },
            cartItems,
            totalAmount,
            shippingMethod
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: 'Error creating order', error });
    }
};


// Get all orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


