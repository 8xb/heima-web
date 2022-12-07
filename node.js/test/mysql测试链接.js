const mysql = require('mysql');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
});
// db.query('select 1', (err, results) => {
//     if (err) return console.log(err);
//     console.log(results);
// });

// const sqlStr = 'select * from users';
// db.query(sqlStr, (err, results) => {
//     if (err) return console.log(err.message);
//     console.log(results);
// });

// const user = { username: '唐大仙儿', password: 'pcc123' };
// const sqlStr = 'insert into users (username,password) value (?,?)';
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//     if (err) return console.log(err.message);
//     // console.log(results);
//     if (results.affectedRows === 1) {
//         console.log('插入成功');
//     }
// });

const user = { username: '唐大仙儿', password: 'pcc123' };
const sqlStr = 'insert into users set ?';
db.query(sqlStr, user, (err, results) => {
    if (err) return console.log(err.message);
    // console.log(results);
    if (results.affectedRows === 1) {
        console.log('插入成功');
    }
});