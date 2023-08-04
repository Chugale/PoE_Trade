import express from 'express';
const router = express.Router()
// const controller = ('./controller');
import { db, api } from '../../../PoE_Trade_DB/controller.js';

//api endpoints
router.get('/api/lens', api.getLens);
// router.get('/api/lens', controller.getLens);
// router.get('/api/gem_weight', controller.api.getGem_Weight);

// db endpoints
// router.get('/db/regular_gems', db.dbSuperior);
// router.get('/db/awakened_gems', db.getWeight);

router.get('/users', (req, res) => {
  console.log('server is logging')
  res.send([{
    id: 1,
    name: 'John Doe',
    age: 32
  }, {
    id: 2,
    name: 'Jane Doe',
    age: 412
  }])
})

export { router }