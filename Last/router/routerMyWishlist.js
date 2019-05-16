//引入模块包
const express = require('express')
//创建路由
const router = express.Router();

//引入controller
const controller = require('../controller/CtrlMyWishlist')

// 显示页面
router.get("/admin/MyWishlist", controller.MyWishlist);

router.get('/admin/showNameing', controller.showNameing)

// 暴露
module.exports = router;