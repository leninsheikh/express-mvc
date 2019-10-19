const Mail = require('@src/utils/mail');

module.exports = {
    /**
     * sendEmail
     * @param req
     * @param res
     */
    sendEmail: (req, res) => {
        let data = { message: req.query.mgs || 'Welcome to CodeHaven '};
        let to = req.query.email || 'justtlenin@gmail.com';
        console.log(to);
        Mail.send(to, 'emails/register.ejs', data);
        res.json({message: 'success'});
    }
};
