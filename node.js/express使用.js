const express = require('express');
const moment = require('moment');
const app = express();
// server.on('request', (req, res) => {
//     res.setHeader('content-type', 'text/html;charset=utf-8');
//     res.end(`<h1>世界你好！现在时间${moment().format('YYYY年MM月DD日 HH:mm:ss')}</h1>`);
//     console.log('content!');
// });
app.get('/', (req, res) => {
    res.send(`<h1>get content!现在时间${moment().format('YYYY年MM月DD日 HH:mm:ss')}</h1>`);
    console.log('get content!');
});
app.post('/', (req, res) => {
    res.send(`<h1>post content!现在时间${moment().format('YYYY年MM月DD日 HH:mm:ss')}</h1>`);
    console.log('post content!');
});

app.listen(80, () => {
    console.log('http://localhost');
});