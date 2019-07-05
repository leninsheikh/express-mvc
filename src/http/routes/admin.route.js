import Express from 'express';
import { html } from '@src/utils/path'

const router = Express.Router();

router.get('/', (req, res) => {
    res.sendFile(html('admin'))
})

export default router;