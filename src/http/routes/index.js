import Express from 'express';

import admin from './admin.route';
import shop from './shop.route';
import userController from '@src/http/controllers/user.controller';

const router = Express.Router();
router.use('/admin', admin);
router.use('shop', shop);

router.get('/users', userController.index);
router.post('/users', userController.store);

export default router;
