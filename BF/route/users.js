const express = require('express')
const router = express.Router()

const controller = require('../controller/users')

// 4.3 用户页面
router.get('/admin/users', controller.BEUsers)

// 4.3.1 用户显示
router.get('/admin/showUsers', controller.BFShowUsers)

// 4.3.2 添加用户
router.post('/admin/addUser', controller.BEAddUser)

// 4.3.3 删除用户
router.get('/admin/deleteUser', controller.BEDeleteUser)

// 4.3.4 修改用户 回显
router.get('/admin/backUser', controller.BEBackUser)

// 4.3.5 修改用户 修改
router.post('/admin/updataUser', controller.BEUpdataUser)

// 4.3.6 批量删除
router.get('/admin/deleteUsers', controller.BEDeleteUsers)

module.exports = router