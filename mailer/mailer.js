const nodemailer = require('nodemailer');

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'garth.mckenzie@ethereal.email',
        pass: 'N1fZ8nYrrUMSptaVYe'
    }
};

module.exports = nodemailer.createTransport(mailConfig);