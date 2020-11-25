const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fabiocamillo@outlook.com',
        subject: 'Thanks for joining in!',
        text: `Hello ${name}. Welcome to the app!`
    });
}

module.exports
