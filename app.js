const express = require("express");
const twilio = require("twilio");
const bodyParser = require("body-parser");

// * SETS UP EXPRESS *
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 8767;

// * TWILIO *
const acctSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilPhone = process.env.TWILIO_PHONE_NUMBER;

const client = new twilio(acctSID, authToken);

// Create a route to handle incoming SMS messages
// This is where the magic happens!
app.post("/sms", (req, res) => {
  console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);
  // Here, we're writing and returning raw TwiML
  res.type("text/xml");
  res.send(`
    <Response>
      <Message>TwilioQuest rules</Message>
    </Response>
  `);
});

// * SERVER *
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
