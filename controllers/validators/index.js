const { getCountry, getCountries } = require('./countries');
const { getPartner, getPartners } = require('./partner_locator');
const { getState, getStates } = require('./states');

module.exports.validator = { getCountry, getCountries, getPartner, getPartners, getState, getStates };
