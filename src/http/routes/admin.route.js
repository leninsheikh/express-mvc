const Express = require('express');
const { html } = require('@src/utils/path');

const router = Express.Router();

router.get('/', (req, res) => {
    res.sendFile(html('admin'))
});

module.exports = router;
