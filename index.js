const express = require('express');
const cors = require('cors');
const { initDb } = require('./config/db');
const bodyParser = require('body-parser');

const app = express();

// Setup express server port from ENV, default: 1337
app.set('port', process.env.PORT || 1337)

// for parsing json
app.use(bodyParser.json({ limit: '20mb' }));
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

app.use(cors());
app.use(require('./routes'));

app.listen(app.get('port'), () => console.log(`Example app is listening on port ${app.get('port')}.`));

initDb();
