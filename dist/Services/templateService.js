"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompiledTemplate = void 0;
const fs = require('fs');
const handlebars = require('handlebars');
const getCompiledTemplate = (event) => {
    const htmlTemplate = fs.readFileSync('src/templates/emailTemplate.html', 'utf-8');
    const template = handlebars.compile(htmlTemplate);
    return template({
        participantName: event.participantName,
        title: event.title,
        start: event.start,
        end: event.end,
        researcher: event.researcher,
        meetLink: event.meetLink,
        comments: event.comments,
        status: event.status
    });
};
exports.getCompiledTemplate = getCompiledTemplate;
