import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
    res.send(`<h2>Hello from Shop</h2>`)
})

export default router;