//引入模块包
const express = require('express')
//创建路由
const router = express.Router();

//引入controller
const controller = require('../controller/CtrlOther');

// 1.shop 页面
router.get("/shop", controller.shop);

// 2.beauty 页面
router.get("/beauty", controller.beauty);

// 3.bridal 页面
router.get("/bridal", controller.bridal);

// 4.man 页面
router.get("/man", controller.man);

// 2.beauty 页面
router.get("/beauty", controller.beauty);

// 2.beauty 页面
router.get("/beauty", controller.beauty);

// 2.beauty 页面
router.get("/beauty", controller.beauty);

// 2.beauty 页面
router.get("/beauty", controller.beauty);

// 2.beauty 页面
router.get("/beauty", controller.beauty);

// 2.beauty 页面
router.get("/beauty", controller.beauty);

// 暴露
module.exports = router;