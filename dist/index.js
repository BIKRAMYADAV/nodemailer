"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();
const fs = require('fs');
const handlebars = require('handlebars');
const events_1 = require("./events/events");
const getCompiledTemplate = require('./Services/templateService');
const htmlTemplate = fs.readFileSync('src/templates/emailTemplate.html', 'utf-8');
const template = handlebars.compile(htmlTemplate);
const html = template({
    participantName: events_1.event.participantName,
    title: events_1.event.title,
    start: events_1.event.start,
    end: events_1.event.end,
    researcher: events_1.event.researcher,
    meetLink: events_1.event.meetLink,
    comments: events_1.event.comments,
    status: events_1.event.status
});
const mailOptions = {
    from: {
        name: "MyParticipants",
        address: process.env.EMAIL_USER
    },
    to: events_1.event.participantEmail,
    subject: "testing nodemailer using typescript with dotenv",
    html
};
const transporter = nodemailer.createTransport({
    service: 'namecheap',
    host: "mail.privateemail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log("email sent: ", info.messageid);
});
