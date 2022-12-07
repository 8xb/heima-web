const express = require('express');
const app = express();
const port = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cors = require('cors');
app.use(cors());
const router = require('./apiRouter');
app.use('/api', router);

app.listen(port, () => console.log(`server run at http://localhost`));