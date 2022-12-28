//导入数据库模块
const db = require('../db/mysql');
//导入bcryptjs加密包
const bcryptjs = require('bcryptjs');
//导入moment日期处理类库
const moment = require('moment');

//注册
module.exports.regUser = (req, res) => {

    //获取表单数据
    const userinfo = req.body;

    //判断用户名或密码是否为空
    // if (!userinfo.user_name || !userinfo.user_password) {
    //     return res.cc('用户名或密码不合法');
    // }

    //定义sql语句，查询数据库是否占用
    const sqlStr = 'select * from ev_users where user_name = ?';
    db.query(sqlStr, [userinfo.user_name], (err, results) => {
        //执行sql语句失败
        if (err) {
            return res.cc(err.message);
        }

        //判断用户是否被占用
        if (results.length > 0) {
            return res.cc('用户名被占用，请更换其他用户名');
        }

        //bcryptjs加密用户密码
        userinfo.user_password = bcryptjs.hashSync(userinfo.user_password, 10);

        //定义sql语句，插入用户名和密码到数据库
        const sql = 'insert into ev_users set ?';
        const sqlQuery = {
            user_name: userinfo.user_name,
            user_password: userinfo.user_password,
            //使用服务器端时间，非前端
            user_registertime: moment().format('YYYY-MM-DD HH:mm:ss'),
            user_nickname: userinfo.user_nickname,
            user_email: userinfo.user_email,
            user_pic: userinfo.user_pic
        };
        db.query(sql, sqlQuery, (err, results) => {
            //执行sql失败
            if (err) return res.cc(err.message);
            //sql执行成功，但影响行数不为1
            if (results.affectedRows !== 1) {
                return res.cc('注册失败，稍后再试');
            }
            //sql执行成功，用户名和密码插入到数据库，注册成功
            res.cc('注册成功');
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