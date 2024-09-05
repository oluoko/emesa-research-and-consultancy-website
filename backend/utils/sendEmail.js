const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // Create the transporter using environment variables for configuration
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // Use EMAIL_HOST from the environment variables
    port: process.env.EMAIL_PORT, // Use EMAIL_PORT from the environment variables
    secure: false, // Set to 'false' since port 587 uses STARTTLS
    auth: {
      user: process.env.EMAIL, // Use EMAIL from the environment variables
      pass: process.env.EMAIL_PASSWORD, // Use EMAIL_PASSWORD from the environment variables
    },
  });

  const mailOptions = {
    from: `"Emesa Research" <${process.env.EMAIL}>`, // Sender's name and email
    to: options.email, // Recipient email address
    subject: options.subject, // Email subject
    text: options.message, // Email message (plaintext)
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
