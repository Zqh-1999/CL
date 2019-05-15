//引入模块包
const express = require('express')
//创建路由
const router = express.Router();

//引入controller
const controller = require('../controller/CtrlOther');

// zhangyu
// 1.shop 页面
router.get("/shop", controller.shop);

// 2.beauty 页面
router.get("/beauty", controller.beauty);

// 3.bridal 页面
router.get("/bridal", controller.bridal);

// 4.man 页面
router.get("/man", controller.man);

// 5.women 页面
router.get("/women", controller.women);


// zhouyunzhuo
// 1.AMonentLikeThie 页面
router.get("/AMonentLikeThie", controller.AMonentLikeThie);

// 2.body 页面
router.get("/body", controller.body);

// 3.BRIDA 页面
router.get("/BRIDA", controller.BRIDA);

// 4.EyeCollection 页面
router.get("/EyeCollection", controller.EyeCollection);

// 5.Groom 页面
router.get("/Groom", controller.Groom);


// 6.Lips 页面
router.get("/Lips", controller.Lips);

// 7.Nails 页面
router.get("/Nails", controller.Nails);

// 8.Parfums 页面
router.get("/Parfums", controller.Parfums);

// 5.Groom 页面
router.get("/Groom", controller.Groom);

// 5.Groom 页面
router.get("/Groom", controller.Groom);

// 5.Groom 页面
router.get("/Groom", controller.Groom);

// 5.Groom 页面
router.get("/Groom", controller.Groom);


// 暴露
module.exports = router;