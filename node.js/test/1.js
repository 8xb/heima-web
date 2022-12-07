const fs = require('fs');
fs.readFile('./files/1.txt', 'utf-8', (err, dataStr) => {
    if (err) {
        return console.log('读取失败' + err.path);
    }
    console.log('读取成功，内容是：' + dataStr);
})