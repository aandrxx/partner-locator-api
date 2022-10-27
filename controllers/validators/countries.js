const getCountry = (id) => Number.isInteger(+id);

const getCountries = (query) => {
    const { country_id, name, short_name, ...other } = query;
    if(Object.keys(other).length > 0) return false;
    return true;
}

module.exports = { getCountry, getCountries };
