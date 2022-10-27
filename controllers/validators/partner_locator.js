const getPartner = (id) => Number.isInteger(+id);

const getPartners = (query) => {
    const { id, company, status, logo, address, website, phone, countries_covered, states_covered, ...other } = query;
    if(Object.keys(other).length > 0) return false;
    return true;
}

module.exports = { getPartner, getPartners };
