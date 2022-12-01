const express = require('express');
const router = express.Router();
// get路由
router.get('/get', (req, res) => {
    console.log('get content!');
    query = req.query;
    res.send({
        status: 0,
        msg: 'GET请求成功！',
        data: query
    });
});
// post路由
router.post('/post', (req, res) => {
    console.log('post content!');
    const body = req.body;
    res.send({
        status: 0,
        msg: 'POST请求成功！',
        data: body
    });
});
// 导出模组
module.exports = router;