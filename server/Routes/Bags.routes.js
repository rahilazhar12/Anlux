const express = require('express')
const upload = require('../Middlewares/Multer')
const { Bagspost, getAllBags } = require('../Controllers/Bags.controller')


const router = express.Router()


router.post('/bags-post', upload.fields([{ name: 'mainImage', maxCount: 1 }, { name: 'additionalImages', maxCount: 4 }]), Bagspost);
router.get('/bags-get', getAllBags)


module.exports = router