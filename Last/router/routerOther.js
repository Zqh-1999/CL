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

// 6.LOUBOUTINWORLD 页面
router.get("/LOUBOUTINWORLD", controller.LOUBOUTINWORLD);


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

// 9.LipsRouge 页面
router.get("/LipsRouge", controller.LipsRouge);

// 10.LipsSliky 页面
router.get("/LipsSliky", controller.LipsSliky);


// liangguoping

// 1.AccessoriesItems 页面
router.get("/AccessoriesItems", controller.AccessoriesItems);

// 2.BagsItems 页面
router.get("/BagsItems", controller.BagsItems);

// 3.BEAUTYLipsVelvetMatte 页面
router.get("/BEAUTYLipsVelvetMatte", controller.BEAUTYLipsVelvetMatte);

// 4.bodyshoes 页面
router.get("/bodyshoes", controller.bodyshoes);

// 5.ClassicsDandelion 页面
router.get("/ClassicsDandelion", controller.ClassicsDandelion);


// 6.Corneille 页面
router.get("/Corneille", controller.Corneille);

// 7.MENAccessoriesBelts 页面
router.get("/MENAccessoriesBelts", controller.MENAccessoriesBelts);

// 8.MENAccessoriesNew 页面
router.get("/MENAccessoriesNew", controller.MENAccessoriesNew);

// 9.MENBagsBackpacks 页面
router.get("/MENBagsBackpacks", controller.MENBagsBackpacks);

// 10.MENBagsNew 页面
router.get("/MENBagsNew", controller.MENBagsNew);

// 11.MENShoesOxfords 页面
router.get("/MENShoesOxfords", controller.MENShoesOxfords);

// 12.MENShoesSneakers 页面
router.get("/MENShoesSneakers", controller.MENShoesSneakers);

// 13.MENTheClassicsGreggo 页面
router.get("/MENTheClassicsGreggo", controller.MENTheClassicsGreggo);

// 14.TheIconsEloise 页面
router.get("/TheIconsEloise", controller.TheIconsEloise);

// 15.WOMENPouches 页面
router.get("/WOMENPouches", controller.WOMENPouches);

// 16.WOMENShoesSneakers 页面
router.get("/WOMENShoesSneakers", controller.WOMENShoesSneakers);

// 17.WOMENTopHandles 页面
router.get("/WOMENTopHandles", controller.WOMENTopHandles);


// xudengxuan
// 1. help_concat 页面
router.get("/help_concat", controller.help_concat);

// 2. help 页面
router.get("/help", controller.help);

// 3. keeper 页面
router.get("/keeper", controller.keeper);

// 4. policy 页面
router.get("/policy", controller.policy);

// 5. secrecy 页面
router.get("/secrecy", controller.secrecy);

// 6. stopfake 页面
router.get("/stopfake", controller.stopfake);

// 7. BEAUTYLIPVelvetMatte1 页面
router.get("/BEAUTYLIPVelvetMatte1", controller.BEAUTYLIPVelvetMatte1);

// 8. BEAUTYLIPVelvetMatte2 页面
router.get("/BEAUTYLIPVelvetMatte2", controller.BEAUTYLIPVelvetMatte2);

// 9. BEAUTYLIPVelvetMatte3 页面
router.get("/BEAUTYLIPVelvetMatte3", controller.BEAUTYLIPVelvetMatte3);

// 10. BEAUTYLIPVelvetMatte4 页面
router.get("/BEAUTYLIPVelvetMatte4", controller.BEAUTYLIPVelvetMatte4);

// 11. BEAUTYLIPVelvetMatte5 页面
router.get("/BEAUTYLIPVelvetMatte5", controller.BEAUTYLIPVelvetMatte5);

// 12. BEAUTYLIPVelvetMatte6 页面
router.get("/BEAUTYLIPVelvetMatte6", controller.BEAUTYLIPVelvetMatte6);

// 13. BEAUTYLIPVelvetMatte7 页面
router.get("/BEAUTYLIPVelvetMatte7", controller.BEAUTYLIPVelvetMatte7);

// 14. BEAUTYLIPVelvetMatte8 页面
router.get("/BEAUTYLIPVelvetMatte8", controller.BEAUTYLIPVelvetMatte8);

// 15. BEAUTYLIPVelvetMatte9 页面
router.get("/BEAUTYLIPVelvetMatte9", controller.BEAUTYLIPVelvetMatte9);

// 16. BEAUTYLIPVelvetMatte10 页面
router.get("/BEAUTYLIPVelvetMatte10", controller.BEAUTYLIPVelvetMatte10);

// 17. BEAUTYLIPVelvetMatte11 页面
router.get("/BEAUTYLIPVelvetMatte11", controller.BEAUTYLIPVelvetMatte11);

// 18. BEAUTYLIPVelvetMatte12 页面
router.get("/BEAUTYLIPVelvetMatte12", controller.BEAUTYLIPVelvetMatte12);

// 19. BEAUTYLIPVelvetMatte13 页面
router.get("/BEAUTYLIPVelvetMatte13", controller.BEAUTYLIPVelvetMatte13);

// 20. BEAUTYLIPVelvetMatte14 页面
router.get("/BEAUTYLIPVelvetMatte14", controller.BEAUTYLIPVelvetMatte14);

// 21. BEAUTYLIPVelvetMatte15 页面
router.get("/BEAUTYLIPVelvetMatte15", controller.BEAUTYLIPVelvetMatte15);



// 暴露
module.exports = router;