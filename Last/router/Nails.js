//引入express
const express=require('express');
//创建路由
const router=express.Router();
//引入 controller
const controller=require('../controller/Nails');
//显示模板
router.get('/Nailsshow',controller.Nailsshow);
// 暴露
module.exports=router;