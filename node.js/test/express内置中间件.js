const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    console.log(req.body);
    res.send(`get content!${req.body.name}`);
    // res.send(req.body);
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('内部服务器错误!');
});

app.listen(80, () => {
    console.log('http://localhost');
});
