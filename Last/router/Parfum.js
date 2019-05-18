//引入express
const express=require('express');
//创建路由
const router=express.Router();
// 引入 controller
const controller=require('../controller/Parfum');
//显示模板
router.get('/Parfumshow',controller.Parfumshow);
//暴露
module.exports=router;