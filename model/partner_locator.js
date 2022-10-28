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
    getAllStatuses: function(options) {
        return this.forge().query({ select: 'status', groupBy: 'status' }).fetchAll(options);
    }
});

module.exports = PartnerLocator;
