var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/services-site');

app.use(bodyParser.json());

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to database');
});

var messagesSchema = mongoose.Schema({
    message: String
});

var submissionsSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    dropdown: {type: String, required: true},
    message: {type: String, required: true}
});

var Messages = mongoose.model('Messages', messagesSchema);
var Submissions = mongoose.model('Submissions', submissionsSchema);

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
    Messages.findOne((error, message) => {
        res.send(message.message);
    });
});

app.post('/', (req, res) => {
    const submission = new Submissions({
        name: req.body.name,
        email: req.body.email,
        dropdown: req.body.dropdown,
        message: req.body.message
    });
    submission.save((error, submission) => {
       if (error) {
           res.status(500).send({error: 'Failed to submit form'});
           console.log(error);
       } else {
           res.send(submission);
           console.log(submission);
       }
    });
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
});
