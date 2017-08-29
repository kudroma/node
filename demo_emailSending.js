var http = require('http');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kudroma@gmail.com',
    pass: ',vyrdcrnrpjpnprl'
  }
});
var mailOptions = {
  from: 'kudroma@gmail.com',
  to: 'kudroma@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

http.createServer(function (req, res) {
 transporter.sendMail(mailOptions, function(error, info){
   if (error) {
     console.log(error);
   } else {
     console.log('Email sent: ' + info.response);
   }
 });
 res.write("Hello world!"); // write a response to a client
}).listen(8080);