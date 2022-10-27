const express = require('express');
const initDb = require('./config/db').initDb;

const app = express();

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

app.use('/request-type', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
});

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.send('Successful response.');
});

app.listen(1337, () => console.log('Example app is listening on port 1337.'));

initDb();
