// controllers/Bags.controller.js
const Glasses = require('../Modals/Glasses.modal');

exports.Glassespost = async (req, res) => {
    const { name, discountPercentage, description, oldPrice, newPrice } = req.body;
    const image = req.file; // Get the uploaded file information

    // Validate that all required fields are provided
    if (!name || !discountPercentage || !image || !description || !oldPrice || !newPrice) {
        return res.status(400).send({ error: 'Please provide all required fields' });
    }

    try {
        const product = new Glasses({
            name,
            discountPercentage,
            image: image.path, // Save the file path in the database
            description,
            oldPrice,
            newPrice
        });
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}


exports.getAllGlasses = async (req, res) => {
    try {
        const products = await Glasses.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
