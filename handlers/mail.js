const nodemailer = require('nodemailer');
const pug = require('pug');
const juice = require('juice');
const htmlToText = require('html-to-text');
const promisify = require('es6-promisify');

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

exports.send = async (options) => {
    const mailOptions = {
        from: `Jose Benavides <jbenavides.bermudez@gmail.com`,
        to: options.user.email,
        subject: options.subject,
        html: 'this will be filled in later',
        text: 'this will be filled in later'
    };
    const sendMail = promisify(transport.sendMail, transport);
    return sendMail(mailOptions);
}

/*transport.sendMail({
    from: 'Jose Benavides <jbenavides.bermudez@gmail.com>',
    to: 'victoria.sampi@gmail',
    subject: 'Just trying things out! :)',
    html: 'Hey I <strong>love</string> you',
    text: 'Hey **I love you**'
});*/