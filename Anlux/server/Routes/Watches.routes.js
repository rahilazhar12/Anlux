const express = require('express')
const upload = require('../Middlewares/Multer')
const { Watchespost, getAllWatches } = require('../Controllers/Watches.controller')





const router = express.Router()


router.post('/watches-post', upload.array('images', 5), Watchespost)
router.get('/watches-get', getAllWatches)






module.exports = router