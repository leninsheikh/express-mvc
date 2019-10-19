const Express = require('express');

const router = Express.Router();

router.get('/', (req, res) => {
    res.render('emails/register.ejs', {title: 'Admin'})
});

module.exports = router;
