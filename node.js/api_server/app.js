const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//导入cors跨域模块
const cors = require('cors');

//注册全局cors
app.use(cors());

//注册res.cc函数,封装res.send()
app.use((req, res, next) => {
    // status = 0为成功；status = 1为失败；默认将status的值设置为1，方便处理失败的情况
    res.cc = function (err, status) {
        res.send({
            // 状态
            status: 1,
            // 状态描述，判断err是错误对象还是字符串
            message: err instanceof Error ? err.message : err
        });
    };
    next();
});

//导入router路由模块
const user_router = require('./router/user');
//注册全局，并添加/api路径
app.use('/api', user_router);

//导入joi模块
const joi = require('joi');
//注册错误中间件 错误抛出
app.use((err, req, res, next) => {
    console.log('|||||||||||||||||||||出现一条错误 赶紧处理吧');
    console.error(err.stack);
    //数据验证失败
    if (err instanceof joi.ValidationError) {
        return res.cc(err);
    }
    //未知错误
    res.cc(err);
});


//监听端口启动服务
app.listen(port, () => {
    console.log(`server run at http://localhost:${port}`);
});