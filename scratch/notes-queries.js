'use strict';
const knex = require('../knex');
const folderId = 105;
const name = 'New Folder Name';

// knex('folders')
// .where({'id': `${folderId}`})
// .update({
//   'id': `${folderId}`,
//   'name': `${name}`
// })
// .then(note => console.log(note))
// .catch(err => console.log(err));
knex('folders')
  .select()
  .then(console.log);

    knex.destroy().then(() => {
        console.log('database connection closed');
      });