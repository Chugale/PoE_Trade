// const router = import('express').Router();
import router from 'express/Router';

// const controller = ('./controller');
import controller from './controller';

//api endpoints
router.get('/api/lens', controller.api.getLens);
router.get('/api/lens', controller.getLens);
router.get('/api/gem_weight', controller.api.getGem_Weight);

// db endpoints
router.get('/db/regular_gems', controller.db.dbSuperior);
router.get('/db/awakened_gems', controller.db.getWeight);


module.exports = router;