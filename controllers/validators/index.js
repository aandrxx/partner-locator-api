const { getCountry, getCountries } = require('./countries');
const { getPartner, searchPartners } = require('./partner_locator');
const { getState, getStates } = require('./states');

module.exports.validator = { getCountry, getCountries, getPartner, searchPartners, getState, getStates };
