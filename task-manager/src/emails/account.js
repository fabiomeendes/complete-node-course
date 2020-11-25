const sgMail = require('@sendgrid/mail');

const sendGridAPIKey = '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';

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
