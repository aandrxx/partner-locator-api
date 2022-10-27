const getState = (id) => Number.isInteger(+id);

const getStates = (filter) => {
    const { state_id, name, short_name, country_id, ...other } = filter;
    if(Object.keys(other).length > 0) return false;
    return true;
}

module.exports = { getState, getStates };
