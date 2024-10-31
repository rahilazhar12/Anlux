const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectToMongoDB = require('./Database/connectToMongoDB');
const cors = require('cors');
const bags = require('./Routes/Bags.routes');
const glasses = require('./Routes/Glasses.routes');
const watches = require('./Routes/Watches.routes');
const auth = require('./Routes/auth.routes');
const orders = require('./Routes/Order.routes');
const compression = require('compression');
const stripe = require('stripe')('sk_test_51PmBjzCJ5MpaKpVPzVQlIOfY54Aaj621PAvcFQf7lfdNLTrgHj1V3aQTYf1dv5xfCMu9MTRSuUVAWteirfjCD28e00mKPl5Hlu'); // Import Stripe
const Bags = require('./Modals/Bags.modal')

dotenv.config();
connectToMongoDB();

const app = express();
app.use(express.json());

const corsOptions = {
    origin: ['http://localhost:10001', 'https://www.anluxuries.com', "https://anluxuries.com"]  // Allow requests from these origins
};

app.use(cors(corsOptions));

app.use('/uploads', express.static('uploads'));

// Enable gzip compression
app.use(compression());

// API routes
app.use('/api', bags);
app.use('/api', glasses);
app.use('/api', watches);
app.use('/api', orders);
app.use('/api', auth);

// Stripe payment session route
app.post('/create-checkout-session', async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        const product = await Bags.findById(productId);

        if (!product) {
            console.error('Product not found');
            return res.status(404).json({ error: 'Product not found' });
        }

        // Construct the full image URL


        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: product.name,

                        },
                        unit_amount: product.newPrice * 100, // Ensure this is the correct amount
                    },
                    quantity: quantity,
                },
            ],
            mode: 'payment',
            success_url: `https://localhost:3000/success`,
            cancel_url: `https://localhost:3000/cancel`,
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating Stripe session:', error);
        res.status(500).json({ error: error.message });
    }
});




app.get('/', (req, res) => {
    res.send({ Message: "Hello World" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`.bgYellow);
});
