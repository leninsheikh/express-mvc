const Express = require('express');

const  admin = require('./admin.route');
const shop = require('./shop.route');
const userController = require('@src/http/controllers/user.controller');
const authController = require('@src/http/controllers/auth/auth.controller');
const passport = require('passport');

const router = Express.Router();
router.use('/admin', admin);
router.use('shop', shop);

router.post('/auth/login', authController.login);
router.use(passport.authenticate('jwt', { session: false }));
router.get('/users', userController.index);
router.post('/users', userController.store);

module.exports = router;
