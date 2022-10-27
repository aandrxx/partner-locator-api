const express = require('express');
const router = express.Router();
const LocState = require('../model/loc_state');

router.get('/:id', async (req, res) => {
  if(req.params.id) {
    try {
      res.status(200).json(await LocState.findOne({state_id: req.params.id}));
    } catch (error) {
      res.status(400).json({
        errors: {
            msg: 'BAD_REQUEST'
        }
    });
    }
  }
});

module.exports = router;
