const express = require('express')
const nodemailer = require("nodemailer")
const router = express.Router()

router.get('/email',(req, res)=>{
    // step 1
    let transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: "olivierjp06@outlook.com",
        pass: "car2naval2",
      },
    })
    // step 2
    let mailOptions = {
      from: "olivierjp06@outlook.com",
      to: "brinks.alpha1@gmail.com",
      subject: "texting and Testing",
      text: "IT works",
    }
  
    // step 3
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log("Error Occurs", err)
      } else {
        console.log("Email sent!")
        res.send('Email Sent')
      }
    })
})

module.exports = router
