'use strict';
const knex = require('../knex');

const id = 105;

// knex('folders')
// .where({'id': `${folderId}`})
// .update({
//   'id': `${folderId}`,
//   'name': `${name}`
// })
// .then(note => console.log(note))
// .catch(err => console.log(err));

// knex('folders')
//   .where({'id': `${id}`})
//   .del()
//   .then(folder=> console.log(folder))
//   .catch(err => console.log(err));
// knex('folders')
//   .select()
//   .then(console.log)

    knex.destroy().then(() => {
        console.log('database connection closed');
      });