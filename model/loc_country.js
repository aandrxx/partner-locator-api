const knex = require('../config/db').knex;
const bookshelf = require('bookshelf')(knex);

const LocCountry = bookshelf.Model.extend({
    tableName: 'loc_country'
}, {
    find: function(filter, options) {
        return this.forge().where(filter).fetchAll(options);
    },

    findOne: function(query, options) {
        return this.forge(query).fetch(options);
    },
});

module.exports = LocCountry;
