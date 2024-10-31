const express = require('express')
const { Orders, getAllOrders } = require('../Controllers/Order.controller')




const router = express.Router()



router.post('/orders', Orders)
router.get('/get-allorders', getAllOrders)



module.exports = router