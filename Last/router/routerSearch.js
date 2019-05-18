//引入模块包
const express = require('express');

//创建路由
const router = express.Router();

const controller = require('../controller/CtrlSearch');

router.get('/lgp/search',controller.search);

router.get('/lgp/searchGroom',controller.searchGroom);

// 暴露
module.exports = router;
