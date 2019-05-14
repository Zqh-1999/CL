const express = require('express')

const router = express.Router();

const contian = require('../controller/CtrlCreateNewCustomer')


router.get('/admin/adder',contian.adder)

router.post('/admin/userAdd', contian.BEUserAdd);









module.exports = router