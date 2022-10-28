const { knex } = require('../config/db');
const bookshelf = require('bookshelf')(knex);

const PartnerLocator = bookshelf.Model.extend({
    tableName: 'partner_locator'
}, {
    find: function(query, options) {
        return this.forge().query((qb) => query ? qb.whereRaw(query) : qb).fetchAll(options);
    },

    findOne: function(query, options) {
        return this.forge(query).fetch(options);
    },
});

module.exports = PartnerLocator;
