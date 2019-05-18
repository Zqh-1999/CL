//引入模块包
const express = require('express')
//创建路由
const router = express.Router();

//引入controller
const controller = require('../controller/CtrlMyProducts')

// 显示页面
router.get("/admin/MyProducts", controller.MyProducts);

router.get('/admin/showNameings', controller.showNameings)

// 暴露
module.exports = router;