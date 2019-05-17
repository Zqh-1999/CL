const express=require('express');
const router=express.Router();
const controller=require('../controller/Groom');

router.get('/Groom', controller.showGroom)

router.get('/Groomshow',controller.Groomshow)
module.exports=router;