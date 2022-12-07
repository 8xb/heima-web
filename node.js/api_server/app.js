const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//导入cors跨域模块
const cors = require('cors');
//注册全局cors
app.use(cors());

//导入router路由模块
const user_router = require('./router/user');
//注册全局，并添加/api路径
app.use('/api', user_router);

//错误抛出
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        status: 500,
        msg: '内部服务器错误!',
    });
});


//监听端口启动服务
app.listen(port, () => {
    console.log(`server run at http://localhost:${port}`);
});