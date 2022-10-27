const express = require('express');
const router = express.Router();
const fs = require('fs');
const routesPath = `${__dirname}/`;

const removeExtensionFromFile = (file) => {
    return file.split('.').slice(0, -1).join('.').toString()
}

fs.readdirSync(routesPath).filter((file) => {
    const routeFile = removeExtensionFromFile(file);
    return routeFile !== 'index' && file !== '.DS_Store'
        ? router.use(`/${routeFile}`, require(`./${routeFile}`))
        : '';
});

router.get('/', (req, res) => {
    res.send('Successful response.');
});

/*
 * Handle 404 error
 */
router.use('*', (req, res) => {
    res.status(404).json({
        errors: {
            msg: 'URL_NOT_FOUND'
        }
    });
});

module.exports = router;
