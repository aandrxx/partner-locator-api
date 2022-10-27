const express = require('express');
const router = express.Router();
const { states } = require('../controllers');

/*
 * Get item route
 */
router.get('/:id', states.getState);

module.exports = router;
