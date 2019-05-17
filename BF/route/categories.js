const express = require('express')
const router = express.Router()

const categories = require('../controller/categories')

// 分类目录页面路由
router.get('/admin/categories', categories.page)

// 分类显示
router.get('/admin/showCategories', categories.showCategories)

// 添加分类目录
router.post('/admin/addCategory', categories.addCategory)

// 删除分类目录
router.get('/admin/deleteCategory', categories.deleteCategory)

// #region 修改分类目录
// 回显
router.get('/admin/backCategory', categories.backCategory)

// 修改
router.post('/admin/updateCategory', categories.updateCategory)
// #endregion

// 批量删除
router.get('/admin/deleteCategories', categories.deleteCategories)
module.exports = router