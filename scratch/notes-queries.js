
const { DATABASE } = require('../config');

const knex = require('knex')({
  client: 'pg',
  connection: {
      database: 'noteful-app'
  },
});

