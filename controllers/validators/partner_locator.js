const getPartner = (id) => Number.isInteger(+id);

const searchPartners = (query) => {
    const {
        status,
        countries_covered_contains,
        states_covered_contains,
        searchString,
        ...other 
    } = query;

    if(Object.keys(other).length > 0) return false;

    let parsedQuery = [];

    if(status) parsedQuery.push(`status = '${status}'`);
    if(countries_covered_contains) parsedQuery.push(`countries_covered like '%${countries_covered_contains}%'`);
    if(states_covered_contains) parsedQuery.push(`states_covered like '%${states_covered_contains}%'`);

    if(searchString) {
        let subQuery = [];
        const words = searchString.trim().split(' ');
        words.forEach(word => {
            subQuery.push(`company like '%${word}%' or address like '%${word}%'`);
        });
        parsedQuery.push(`(${subQuery.join(' or ')})`);
    }

    return parsedQuery.length > 0 ? `(${parsedQuery.join(' and ')})` : '';
}

module.exports = { getPartner, searchPartners };
