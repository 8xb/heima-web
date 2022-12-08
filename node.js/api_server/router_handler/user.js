//导入数据库模块
const db = require('../db/mysql');
//导入bcryptjs加密包
const bcryptjs = require('bcryptjs');

//注册
module.exports.regUser = (req, res) => {

    //获取表单数据
    const userinfo = req.body;

    //判断用户名或密码是否为空
    if (!userinfo.username || !userinfo.password) {
        return res.send({
            status: 1,
            msg: '用户名或密码不合法'
        });
    }

    //定义sql语句，查询数据库是否占用
    const sqlStr = 'select * from ev_users where username = ?';
    db.query(sqlStr, [userinfo.username], (err, results) => {
        //执行sql语句失败
        if (err) {
            return res.send({
                status: 1,
                msg: err.message
            });
        }

        //判断用户是否被占用
        if (results.length > 0) {
            return res.send({
                status: 1,
                msg: '用户名被占用，请更换其他用户名'
            });
        }

        //bcryptjs加密用户密码
        userinfo.password = bcryptjs.hashSync(userinfo.password, 10);

        //定义sql语句，插入用户名和密码到数据库
        const sql = 'insert into ev_users set ?';
        db.query(sql, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            //执行sql失败
            if (err) return res.send({
                status: 1,
                msg: err.message
            });
            //sql执行成功，但影响行数不为1
            if (results.affectedRows !== 1) {
                return res.send({
                    status: 1,
                    msg: '注册失败，稍后再试'
                });
            }
            res.send({
                status: 0,
                msg: '注册成功'
            });
        });
    });
};

//登录
module.exports.login = (req, res) => {
    res.send({
        status: 200,
        msg: '登录成功',
        data: 123
    });
};