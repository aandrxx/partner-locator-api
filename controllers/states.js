const { handleError } = require('../utils/handleError');
const LocState = require('../model/loc_state');

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getState = async (req, res) => {
    const { id } = req.params;
    if(Number.isInteger(+id)) {
        try {
            const state = await LocState.findOne({ state_id: id }, { require: false });
            if(state) {
                res.status(200).json(state);
            } else {
                handleError(res, { code: 404, msg: 'NOT_FOUND' });
            }
        } catch (error) {
            handleError(res, { code: 500, msg: 'SERVER_ERROR' });
        }
    } else {
        handleError(res, { code: 400, msg: 'BAD_REQUEST' });
    }
}

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
 const getStates = async (req, res) => {
    const { query } = req;
    if(query) {
        try {
            const states = await LocState.find({ ...query }, { require: false });
            if(states) {
                res.status(200).json(states);
            }
        } catch (error) {
            handleError(res, { code: 500, msg: 'SERVER_ERROR' });
        }
    } else {
        handleError(res, { code: 400, msg: 'BAD_REQUEST' });
    }
}

module.exports = { getState, getStates };
