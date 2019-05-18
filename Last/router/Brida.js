// 引入 express
const express=require('express');
//创建路由
const router=express.Router();
//引入controller
const controller=require('../controller/Brida');
// 显示页面
router.get('/Birde', controller.showBrida);
//显示模板
router.get('/Brideshow',controller.Brideshow);
//显示尺码
router.get('/Bridesize',controller.Bridesize);
//颜色
router.get('/Bridecolor',controller.Bridecolor);
//鞋跟高
router.get('/Brideheight',controller.Brideheight);
//材质
router.get('/Bridematerials',controller.Bridematerials);
module.exports=router;