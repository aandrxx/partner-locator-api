const express = require('express');
const router = express.Router();
const { partner_locator } = require('../controllers');

/*
 * Get item route
 */
router.get('/partners/:id', partner_locator.getPartner);

/*
 * Get items route
 */
router.get('/partners', partner_locator.searchPartners);

module.exports = router;

/*
 * Get all statuses route
 */
router.get('/statuses', partner_locator.getAllStatuses);

module.exports = router;
