const nodemailer = require('nodemailer');
const EMAIL_ID = "villagehomedecor88@gmail.com";
const EMAIL_PWD = "ggwl nwsb vdhq twim";
const EMAIL_SERVICE = process.env.EMAIL_SERVICE || 'gmail';

const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  auth: {
    user: EMAIL_ID,
    pass: EMAIL_PWD
  }
});

/**
 * Send Email.
 */
const sendEmail = (mailOptions, callback) => {
    return transporter.sendMail(mailOptions, callback);
}

module.exports = {
    sendEmail: sendEmail
}

