const express = require('express');
const router = express.Router();

//导入router_handler处理函数模块
const userHandler = require('../router_handler/user');
//注册
router.post('/reguser', userHandler.regUser);
//登录
router.post('/login', userHandler.login);

// 导出模组
module.exports = router;