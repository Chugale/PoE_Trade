const router = require('express').Router();
const controller = require('./controller');

//api endpoints
router.get('/api/currency', controller.api.getCurrency);
// router.get('/api/lens', controller.getLens);
router.get('/api/gems', controller.api.getGems);
router.get('/api/beasts', controller.api.getBeasts);

//db endpoints
router.get('/db/gem_weight', controller.db.gem_Weight);
// router.get('/db/awakened_gems', controller.db.getWeight);


module.exports = router;