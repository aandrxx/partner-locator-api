const express = require('express');
const router = express.Router();
const LocState = require('../model/loc_state');

router.get('/:id', async (req, res) => {
  if(req.params.id) {
    try {
      const state = await LocState.findOne({state_id: req.params.id}, { require: false });
      if(state) {
        res.status(200).json(state);
      } else {
        res.status(404).json({
          errors: {
              msg: 'NOT_FOUND'
          }
        });
      }
    } catch (error) {
      res.status(500).json({
        errors: {
            msg: 'SERVER_ERROR'
        }
      });
    }
  } else {
    res.status(400).json({
      errors: {
          msg: 'BAD_REQUEST'
      }
    });
  }
});

module.exports = router;
