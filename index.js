const express = require('express');
const initDb = require('./config/db').initDb;

const app = express();

app.use(require('./routes'));

app.listen(1337, () => console.log('Example app is listening on port 1337.'));

initDb();
