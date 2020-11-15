const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const mailer = nodemailer.createTransport({
  service: "SendGrid",
  auth: {
    user: process.env.SENDGRID_USERNAME,
    pass: process.env.SENDGRID_PASSWORD,
  },
});

exports.sendEmail = async (req, res) => {
  const { name, email } = req.body;
  const options = {
    from: process.env.SENDGRID_EMAIL,
    to: email,
    // email subject
    subject: "Sending Email Test",
    // email content
    html: `<div style="text-align: center;"><h1>Hello ${name}</h1></div>
     `,
  };
  try {
    //   send email
    await mailer.sendMail(options);
    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    //   error handling
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};
