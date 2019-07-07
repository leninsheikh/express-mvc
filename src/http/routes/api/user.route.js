const Express = require('express');
const userController = require('@src/http/controllers/user.controller');

const router = Express.Router();

router.get('/', userController.index);

module.exports = router;
