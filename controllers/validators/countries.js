const getCountry = (id) => Number.isInteger(+id);

const getCountries = (filter) => {
    const { country_id, name, short_name, ...other } = filter;
    if(Object.keys(other).length > 0) return false;
    return true;
}

module.exports = { getCountry, getCountries };
