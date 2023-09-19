var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mateusteti2007@gmail.com',
    pass: 'nvwh urln zfsi knyl'
  }
});

var mailOptions = {
  from: 'mateusteti2007@gmail.com',
  to: 'mateusteti2007@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

