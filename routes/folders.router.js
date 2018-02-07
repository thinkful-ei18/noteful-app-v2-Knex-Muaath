'use strict';
const express = require('express');
const knex = require('../knex');

const router = express.Router();

router.get('/folders', (req, res, next) => {

  knex('folders')
    .select()
    .then(list => res.json(list));

});

router.get('/folders/:id', (req, res, next) =>{
  const {searchTerm}  = req.query; 
  knex('folders')
    .select('id', 'name')
    .where(function(){
      if(searchTerm) {
        this.where('id', `${searchTerm}`);
      }
    })
    .then(list => res.json(list))
    .catch(err=> next(err));

});

router.post('/folders/:id', (req,res,next) => {
  const {id, name} = req.body;
  const {newItem} = {id, name};

  knex('folders')
  .insert(newItem)
  .returning(['id', 'name'])
  .then(note => res.json(note))
  .catch(err => next(err));

});
router.put('/notes/:id', (req, res, next) => {
  const folderId = req.params.id;
  
  const updateObj = {};
  const updateableFields = ['id','name'];

  updateableFields.forEach(field => {
    if (field in req.body) {
      updateObj[field] = req.body[field];
    }

  /***** Never trust users - validate input *****/
  if (!updateObj.id) {
    const err = new Error('Missing `id` in request body');
    err.status = 400;
    return next(err);
  }
  knex('folders')
    .where({'id': `${folderId}`})
    .update({
      'id': `${req.body.id}`,
      'name': `${req.body.content}`
    })
    .then(note => res.json(note))
    .catch(err => next(err));
  });
});

router.delete('/notes/:id', (req, res, next) => {
  const id = req.params.id;

  knex('folders')
  .where({'id': `${id}`})
  .del()
  .then(folder=> res.json(folder))
  .catch(err => next(err));
});

module.exports = router;
