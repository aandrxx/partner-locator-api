const express = require('express');
const router = express.Router();
const { countries } = require('../controllers');

/*
 * Get item route
 */
router.get('/:id', countries.getCountry);

/*
 * Get items route
 */
router.get('/', countries.getCountries);

module.exports = router;
