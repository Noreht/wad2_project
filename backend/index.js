require('dotenv').config();
const cors = require('cors');
const express = require('express');
var nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());
const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome'));

// Define a route to handle form submissions
app.post('/api/contact', (req, res) => {
    const formData = req.body.key; // Retrieve the form data from the request body
    console.log(formData)
    // send the formData to the telegram bot

    firstName = formData.firstName;
    lastName = formData.lastName;
    email = formData.email;
    subject = formData.subject;
    contactMessage = formData.message;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASSWORD,
        }
      });
      

    var mailOptions = {
        from: email,
        to: process.env.GMAIL_USER,
        subject: subject,
        html: `<h2>Name of sender:</h2>${firstName} ${lastName}<h2>Message:</h2>${contactMessage}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send( error );


        } else {

          console.log('Email sent: ' + info.response);
          postMessage = `*PSST... New Contact Form Submission*\n\n`;

          postMessage += `*First Name:* ${firstName}\n*Last Name:* ${lastName}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${contactMessage}`;
      
          bot.telegram.sendMessage(
              process.env.CHAT_ID, 
              postMessage,
              { parse_mode: "Markdown"}
              );
      
          console.log(formData); // Log the form data to the console
          res.send(
              { body: "sent to telegram bot successfully"}
              ); // Send a response back to the frontend
        }
      });



});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))


bot.launch()



// Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))
