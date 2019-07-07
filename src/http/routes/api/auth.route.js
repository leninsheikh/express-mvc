const Express = require('express');
const authController = require('@src/http/controllers/auth/auth.controller');

const router = Express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;
