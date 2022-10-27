const express = require('express');
const router = express.Router();
const { states } = require('../controllers');

/*
 * Get item route
 */
router.get('/:id', states.getState);

/*
 * Get items route
 */
router.get('/', states.getStates);

module.exports = router;
