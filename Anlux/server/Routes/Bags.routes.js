const express = require('express')
const upload = require('../Middlewares/Multer')
const { Bagspost, getAllBags } = require('../Controllers/Bags.controller')


const router = express.Router()


router.post('/bags-post', upload.single('image') , Bagspost)
router.get('/bags-get', getAllBags)


module.exports = router