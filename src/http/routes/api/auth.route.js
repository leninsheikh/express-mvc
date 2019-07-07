const Express = require('express');
const passport = require('passport');
const authController = require('@src/http/controllers/auth/auth.controller');

const router = Express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);

router.use(passport.authenticate('jwt', { session: false }));
router.get('/user', authController.user);

module.exports = router;
