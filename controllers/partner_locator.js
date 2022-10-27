const { handleError } = require('../utils/handleError');
const { validator } = require('./validators');
const PartnerLocator = require('../model/partner_locator');

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getPartner = async (req, res) => {
    const { id } = req.params;
    if(validator.getPartner(id)) {
        try {
            const partner = await PartnerLocator.findOne({ id }, { require: false });
            if(partner) {
                res.status(200).json(partner);
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
 const getPartners = async (req, res) => {
    const { query } = req;
    if(validator.getPartners(query)) {
        try {
            const partners = await PartnerLocator.find({ ...query }, { require: false });
            if(partners) {
                res.status(200).json(partners);
            }
        } catch (error) {
            handleError(res, { code: 500, msg: 'SERVER_ERROR' });
        }
    } else {
        handleError(res, { code: 400, msg: 'BAD_REQUEST' });
    }
}

module.exports = { getPartner, getPartners };
