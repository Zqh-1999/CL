//引入模块包
const express = require('express')
//创建路由
const router = express.Router();

//引入controller
const controller = require('../controller/CtrlOther');

// shop 页面
router.get("/shop", controller.shop);

// 暴露
module.exports = router;