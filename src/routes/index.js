const Express = require('express');
const passport = require('passport');
const mailController = require('@src/http/controllers/mail.controller,js');

const  admin = require('./web/admin.route');
const auth = require('./api/auth.route');
const user = require('./api/user.route');

/**
 * registering all routes
 * @type {Router}
 */
const router = Express.Router();
router.use('/auth', auth);
router.use('/admin', admin);
router.get('/mail', mailController.sendEmail);
/*
 * passport authenticate middleware
 */
router.use(passport.authenticate('jwt', { session: false }));

router.use('/users', user);

module.exports = router;
