//引入模块包
const express = require('express')
//创建路由
const router = express.Router();

//引入controller
const controller = require('../controller/CtrlCreateNewCustomer')

// 显示页面
router.get("/admin/CreateNewCustomer", controller.CreateNewCustomer);

// 暴露
module.exports = router;