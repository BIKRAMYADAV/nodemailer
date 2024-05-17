const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config();
const fs = require('fs')
const handlebars =  require('handlebars');

import {event} from "./events/events";
const getCompiledTemplate = require('./Services/templateService')


const htmlTemplate = fs.readFileSync('src/templates/emailTemplate.html', 'utf-8');
const template = handlebars.compile(htmlTemplate);
const html = template({
    participantName: event.participantName,
    title: event.title,
    start: event.start,
    end: event.end,
    researcher: event.researcher,
    meetLink: event.meetLink,
    comments: event.comments,
    status: event.status
});



const mailOptions = {
    from: {
        name : "MyParticipants",
      address:  process.env.EMAIL_USER
},
to: event.participantEmail,
subject: "testing nodemailer using typescript with dotenv",
html
};

const transporter = nodemailer.createTransport({
    service : 'namecheap',
    host: "mail.privateemail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS  }
});


transporter.sendMail(mailOptions, (error:any, info:any) => {
    if (error) {
        return console.log(error);
    }
    console.log("email sent: ", info.messageid);
})

