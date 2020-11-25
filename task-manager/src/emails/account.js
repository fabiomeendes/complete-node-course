const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fabiocamillo@outlook.com',
        subject: 'Thanks for joining in!',
        text: `Hello ${name}. Welcome to the app!`,
        html: '<p>Teste!!!!!!</p>'
    });
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fabiocamillo@outlook.com',
        subject: 'Sorry to see you go',
        text: `Goodbye ${name}. Thanks for use the app!`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};
