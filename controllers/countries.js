const { handleError } = require('../utils/handleError');
const { validator } = require('./validators');
const LocCountry = require('../model/loc_country');

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getCountry = async (req, res) => {
    const { id } = req.params;
    if(validator.getCountry(id)) {
        try {
            const country = await LocCountry.findOne({ country_id: id }, { require: false });
            if(country) {
                res.status(200).json(country);
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
 const getCountries = async (req, res) => {
    const { query } = req;
    if(validator.getCountries(query)) {
        try {
            const countries = await LocCountry.find({ ...query }, { require: false });
            if(countries) {
                res.status(200).json(countries);
            }
        } catch (error) {
            handleError(res, { code: 500, msg: 'SERVER_ERROR' });
        }
    } else {
        handleError(res, { code: 400, msg: 'BAD_REQUEST' });
    }
}

module.exports = { getCountry, getCountries };
