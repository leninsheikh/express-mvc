const Express = require('express');
const passport = require('passport');
const validate = require('@src/http/validators');
const { loginRequest, registerRequest } = require('@src/http/validators/auth.validator');
const authController = require('@src/http/controllers/auth/auth.controller');

const router = Express.Router();

router.post('/login', validate(loginRequest), authController.login);
router.post('/register', validate(registerRequest), authController.register);

/**
 * added passport middleware
 */
router.use(passport.authenticate('jwt', { session: false }));

/**
 * protected routes
 */
router.get('/user', authController.user);

module.exports = router;
