const express=require('express');
const router=express.Router();
const controller=require('../controller/Brida');

router.get('/', controller.showBrida);

router.get('/Brideshow',controller.Brideshow);

router.get('/Bridesize',controller.Bridesize);

router.get('/Bridecolor',controller.Bridecolor);

router.get('/Brideheight',controller.Brideheight);

router.get('/Bridematerials',controller.Bridematerials);
module.exports=router;