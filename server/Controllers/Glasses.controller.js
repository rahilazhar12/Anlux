// controllers/Bags.controller.js
const Glasses = require('../Modals/Glasses.modal');
const Bags = require('../Modals/Bags.modal')
const Watches = require('../Modals/Watches.modal')
const mongoose = require('mongoose')

// exports.Glassespost = async (req, res) => {
//     const { name, discountPercentage, description, oldPrice, newPrice } = req.body;
//     const files = req.files;

//     // Validate that all required fields are provided
//     if (!name || !discountPercentage || !files || files.length < 1 || !description || !oldPrice || !newPrice) {
//         return res.status(400).send({ error: 'Please provide all required fields' });
//     }

//     try {
//         const mainImage = files[0].path; // The first image is the main image
//         const additionalImages = files.slice(1).map(file => file.path); // The rest are additional images

//         const product = new Glasses({
//             name,
//             discountPercentage,
//             mainImage,
//             additionalImages,
//             description,
//             oldPrice,
//             newPrice
//         });

//         await product.save();
//         res.status(201).send(product);
//     } catch (error) {
//         res.status(400).send({ error: error.message });
//     }
// }

exports.Glassespost = async (req, res) => {
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

        const product = new Glasses({
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



exports.getAllGlasses = async (req, res) => {
    try {
        const products = await Glasses.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};




// exports.getItemById = async (req, res) => {
//     try {
//         const { id } = req.params;

//         // Check both collections for the ID
//         const glassesItem = await mongoose.model('glasses').findById(id);
//         const bagsItem = await mongoose.model('bags').findById(id);

//         // Determine the correct model based on which item was found
//         glassesItem ? mongoose.model('glasses') : mongoose.model('bags');
//         const item = glassesItem || bagsItem; // Get the found item

//         if (!item) {
//             return res.status(404).send({ error: 'Item not found' });
//         }

//         res.status(200).send(item);
//     } catch (error) {
//         res.status(500).send({ error: error.message });
//     }
// };

exports.getItemById = async (req, res) => {
    try {
        const { id } = req.params;

        // Check all three collections for the ID
        const glassesItem = await mongoose.model('glasses').findById(id);
        const bagsItem = await mongoose.model('bags').findById(id);
        const watchesItem = await mongoose.model('watches').findById(id);

        // Determine the correct model based on which item was found
        const item = glassesItem || bagsItem || watchesItem; // Get the found item

        if (!item) {
            return res.status(404).send({ error: 'Item not found' });
        }

        res.status(200).send(item);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};



// exports.orderimagechange = async (req, res) => {
//     const { id } = req.params;
//     const { mainImage, additionalImages } = req.body;

//     try {
//         // Try to find the product in Bags collection first
//         let product = await Bags.findById(id);

//         if (!product) {
//             // If not found in Bags, try to find it in Glasses collection
//             product = await Glasses.findById(id);
//         }

//         // If product is still not found, return an error
//         if (!product) {
//             return res.status(404).send({ error: 'Product not found' });
//         }

//         // Update the product images
//         product.mainImage = mainImage;
//         product.additionalImages = additionalImages;

//         // Save the updated product
//         await product.save();
//         res.status(200).send(product);
//     } catch (error) {
//         res.status(400).send({ error: error.message });
//     }
// };


exports.orderimagechange = async (req, res) => {
    const { id } = req.params;
    const { mainImage, additionalImages } = req.body;

    try {
        // Try to find the product in Bags collection first
        let product = await Bags.findById(id);

        if (!product) {
            // If not found in Bags, try to find it in Glasses collection
            product = await Glasses.findById(id);
        }

        if (!product) {
            // If not found in Glasses, try to find it in Watches collection
            product = await Watches.findById(id);
        }

        // If product is still not found, return an error
        if (!product) {
            return res.status(404).send({ error: 'Product not found' });
        }

        // Update the product images
        product.mainImage = mainImage;
        product.additionalImages = additionalImages;

        // Save the updated product
        await product.save();
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
