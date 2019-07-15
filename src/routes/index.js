const Express = require('express');
const passport = require('passport');
const NodeMailer  = require('nodemailer');

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
router.get('/mail', (req, res) => {
    let transporter = NodeMailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
            // should be replaced with real sender's account
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD
        }
    });
    let mailOptions = {
        // should be replaced with real recipient's account
        to: 'ddr7@getnada.com',
        subject: "EXPRESS NodeMailer",
        body: "Simple Text",
        from: process.env.MAIL_FROM_ADDRESS
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info);
    });
    res.send('ok');
});
/*
 * passport authenticate middleware
 */
router.use(passport.authenticate('jwt', { session: false }));

router.use('/users', user);

module.exports = router;
