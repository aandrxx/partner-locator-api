const LocState = require('../model/loc_state');

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getState = async (req, res) => {
    const { id } = req.params;
    if(id) {
      try {
        const state = await LocState.findOne({state_id: id}, { require: false });
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
}

module.exports = { getState };
