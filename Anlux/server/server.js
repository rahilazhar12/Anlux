const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectToMongoDB = require('./Database/connectToMongoDB');
const cors = require('cors');
const bags = require('./Routes/Bags.routes')
const glasses = require('./Routes/Glasses.routes')


const app = express();
app.use(express.json());
const corsOptions = {
    origin: ['http://localhost:5173', 'http://anluxuries.com/']  // Allow requests from both these origins
};

app.use(cors(corsOptions));

app.use('/uploads', express.static('uploads'));

dotenv.config();
connectToMongoDB();

app.get('/home', (req, res) => {
    res.send({ Message: "Hellow World" })
})



app.use('/api', bags);
app.use('/api', glasses);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`.bgYellow);
});
