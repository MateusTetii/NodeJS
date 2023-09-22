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
  to: 'joedio.borges@ifc.edu.br',
  subject: 'AtividadeWeb',
  text: 'Mateus, 2B nvwh urln zfsi knyl'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

