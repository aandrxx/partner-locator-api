const express = require('express');
const { initDb } = require('./config/db');
const bodyParser = require('body-parser');

const app = express();

// for parsing json
app.use(bodyParser.json({ limit: '20mb' }));
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

app.use(require('./routes'));

app.listen(1337, () => console.log('Example app is listening on port 1337.'));

initDb();
