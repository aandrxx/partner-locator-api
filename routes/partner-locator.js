const express = require('express');
const router = express.Router();
const { partner_locator } = require('../controllers');

/*
 * Get item route
 */
router.get('/:id', partner_locator.getPartner);

/*
 * Get items route
 */
router.get('/', partner_locator.searchPartners);

module.exports = router;
