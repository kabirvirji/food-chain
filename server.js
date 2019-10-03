const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const dotenv = require('dotenv');
dotenv.config();
const accountSid = process.env.SID;
const authToken = process.env.TOKEN;
const client = require('twilio')(accountSid, authToken);

app.post('/incoming', (req, res) => {

  // const twiml = new MessagingResponse();

  console.log("got text")

  if (req.body.Body !== undefined) {
    // twiml.message(req.body.Body);
    // const client = require('twilio')(accountSid, authToken);

    client.messages
      .create({
         body: req.body.Body,
         from: '+12267969273',
         to: '+16046448096'
       })
      .then(message => console.log(message.sid));
  }
  
  res.writeHead(200, {'Content-Type': 'text/xml'});
  // res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
