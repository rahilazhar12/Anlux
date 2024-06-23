const Watches = require('../Modals/Watches.modal')


exports.Watchespost = async (req, res) => {
    const { name, discountPercentage, description, oldPrice, newPrice } = req.body;
    const files = req.files;

    // Validate that all required fields are provided
    if (!name || !discountPercentage || !files || files.length < 1 || !description || !oldPrice || !newPrice) {
        return res.status(400).send({ error: 'Please provide all required fields' });
    }

    try {
        const mainImage = files[0].path; // The first image is the main image
        const additionalImages = files.slice(1).map(file => file.path); // The rest are additional images

        const product = new Watches({
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


exports.getAllWatches = async (req, res) => {
    try {
        const products = await Watches.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};