// 1.引入express包
const express = require('express');
const multer = require('multer');
const upload = multer();
// 2.使用Router来创建路由
const router = express.Router();
// 3.引入控制器模块
const CtrlPostAdd = require('../controller/CtrlPostAdd');

// 显示文章发表页面
router.get('/admin/post-add', CtrlPostAdd.postAddPage);

// 上传文章图片
router.post('/admin/postAddUpload', upload.single('feature'), CtrlPostAdd.postAddUpload);

// 添加文章
router.post('/admin/postAddArticle', CtrlPostAdd.postAddArticle);
module.exports = router;