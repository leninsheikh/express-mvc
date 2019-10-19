const Express = require('express');

const router = Express.Router();

router.get('/', (req, res) => {
    res.render('admin', {title: 'Admin'})
});

module.exports = router;
