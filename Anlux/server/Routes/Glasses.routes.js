const express = require('express')
const upload = require('../Middlewares/Multer')
const { Glassespost, getAllGlasses, getGlassById, orderimagechange, getItemById } = require('../Controllers/Glasses.controller')




const router = express.Router()


router.post('/glasses-post', upload.array('images', 5), Glassespost)
router.get('/glasses-get', getAllGlasses)
router.get('/getglassesonid/:id', getItemById)
router.post('/orderchange/:id', orderimagechange)




module.exports = router