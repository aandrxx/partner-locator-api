const { knex } = require('../config/db');
const bookshelf = require('bookshelf')(knex);

const LocState = bookshelf.Model.extend({
    tableName: 'loc_state'
}, {
    find: function(filter, options) {
        return this.forge().where(filter).fetchAll(options);
    },

    findOne: function(query, options) {
        return this.forge(query).fetch(options);
    },
});

module.exports = LocState;
