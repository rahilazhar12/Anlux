const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectToMongoDB = require('./Database/connectToMongoDB');
const cors = require('cors');
const bags = require('./Routes/Bags.routes')
const glasses = require('./Routes/Glasses.routes')
const watches = require('./Routes/Watches.routes')
const auth = require('./Routes/auth.routes')
const orders = require('./Routes/Order.routes')
const compression = require('compression');



const app = express();
app.use(express.json());
const corsOptions = {
    origin: ['http://localhost:10001', '', 'https://www.anluxuries.com', "https://anluxuries.com"]  // Allow requests from both these origins
};

app.use(cors(corsOptions));

app.use('/uploads', express.static('uploads'));

dotenv.config();
connectToMongoDB();

app.get('/home', (req, res) => {
    res.send({ Message: "Hellow World" })
})

// Enable gzip compression
app.use(compression());





app.use('/api', bags);
app.use('/api', glasses);
app.use('/api', watches);
app.use('/api', orders);
app.use('/api', auth)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`.bgYellow);
});
