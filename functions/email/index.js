const nodemailer = require('nodemailer');
require('dotenv').config({ path: '../../.env.local' })

const sendEmail = (
    transporter,
    to,
    from,
    replyTo,
    subject,
    body,
) => {

    const mailOptions = {
        from: from,
        to: to,
        replyTo: replyTo,
        subject: subject,
        html: body,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
}

module.exports = {
    sendEmail,
    createTransporter,
}