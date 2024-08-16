const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html, // If you want to send HTML instead of plain text
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
