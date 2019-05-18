const express = require('express')
const router = express.Router()

const controller = require('../controller/index')

// 后台首页
router.get('/admin/index', controller.BEIndex)

module.exports = router