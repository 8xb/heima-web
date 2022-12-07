//注册
module.exports.regUser = (req, res) => {
    res.send({
        status: 200,
        msg: '注册成功',
        data: 123
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