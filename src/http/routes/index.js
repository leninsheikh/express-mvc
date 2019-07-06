const Express = require('express');

const  admin = require('./admin.route');
const shop = require('./shop.route');
const userController = require('@src/http/controllers/user.controller');

const router = Express.Router();
router.use('/admin', admin);
router.use('shop', shop);

router.get('/users', userController.index);
router.post('/users', userController.store);

module.exports = router;
