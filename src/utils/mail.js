const NodeMailer  = require('nodemailer');
const ejs = require('ejs');
const { views } = require('@src/utils/path');

const send = (to, body, data) => {
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
        to: to,
        subject: "ExpressAPI",
        from: process.env.MAIL_FROM_ADDRESS
    };
    ejs.renderFile(views(body), data, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            mailOptions.html = data;
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message %s sent: %s', info);
            });
        }
    });
};

module.exports = {send};
