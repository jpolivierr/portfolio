const express = require("express")
const nodemailer = require("nodemailer")
const router = express.Router()
require("dotenv").config()

router.post("/email", (req, res) => {
  console.log(req.body)

  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: "SSLv3",
    },
    service: "outlook",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  })
  const { name, email, message, phone } = req.body
  let mailOptions = {
    from: "olivierjp06@outlook.com",
    to: "olivierjp06@outlook.com",
    subject: `NAME: ${name} | EMAIL FROM: ${email} | PHONE: ${phone} `,
    text: `${message}`,
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("Error Occurs", err)
      res.status(400).json({ err })
    } else {
      console.log("Email sent!")
      res.status(200).json({ email: "Email Sent", data })
    }
  })
})

module.exports = router
