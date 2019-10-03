const accountSid = 'ACfb833921f7791830266a8775906a935c';
const authToken = '0608ffc51feace89a7bde72361517a8f';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12267969273',
     to: '+16046448096'
   })
  .then(message => console.log(message.sid));
