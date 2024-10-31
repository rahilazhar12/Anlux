// controllers/Bags.controller.js
const Bags = require('../Modals/Bags.modal');



exports.Bagspost = async (req, res) => {
    const { name, discountPercentage, description, oldPrice, newPrice } = req.body;
    const mainImageFile = req.files.mainImage ? req.files.mainImage[0] : null;
    const additionalImageFiles = req.files.additionalImages || [];

    // Validate that all required fields are provided
    if (!name || !discountPercentage || !mainImageFile || additionalImageFiles.length < 1 || !description || !oldPrice || !newPrice) {
        return res.status(400).send({ error: 'Please provide all required fields' });
    }

    try {
        const mainImage = mainImageFile.path;
        const additionalImages = additionalImageFiles.map(file => file.path);
        const product = new Bags({
            name,
            discountPercentage,
            mainImage,
            additionalImages,
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


exports.getAllBags = async (req, res) => {
    try {
        const products = await Bags.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
