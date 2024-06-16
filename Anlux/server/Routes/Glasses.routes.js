const express = require('express')
const upload = require('../Middlewares/Multer')
const { Glassespost, getAllGlasses } = require('../Controllers/Glasses.controller')



const router = express.Router()


router.post('/glasses-post', upload.single('image'), Glassespost)
router.get('/glasses-get', getAllGlasses)


module.exports = router