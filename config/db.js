const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: ':memory:'
    },
    useNullAsDefault: true
});

const initDb = async () => {
    try {
        await knex.schema.createTable('loc_state', (table) => {
            table.increments('state_id').unsigned().primary();
            table.string('name', 255).notNullable();
            table.string('short_name', 50);
            table.integer('country_id').unsigned().notNullable();
        });
        await knex('loc_state').insert(require('../data/loc_state'));

        await knex.schema.createTable('loc_country', (table) => {
            table.increments('country_id').unsigned().primary();
            table.string('name', 255).notNullable();
            table.string('short_name', 50);
        });
        await knex('loc_country').insert(require('../data/loc_country'));

        await knex.schema.createTable('partner_locator', (table) => {
            table.increments('id').unsigned().primary();
            table.string('company', 255).notNullable();
            table.string('status', 255).notNullable();
            table.string('logo', 255).notNullable();
            table.string('address', 255).notNullable();
            table.string('website', 255).notNullable();
            table.string('phone', 255).notNullable();
            table.string('countries_covered', 1000).notNullable();
            table.string('states_covered', 1000).notNullable();
        });
        await knex('partner_locator').insert(require('../data/partner_locator'));
    } catch (e) {
        throw(e);
    }
};

module.exports.knex = knex;
module.exports.initDb = initDb;
