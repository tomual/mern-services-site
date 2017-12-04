var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/services-site');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

var messagesSchema = mongoose.Schema({
    message: String
});
var Messages = mongoose.model('Messages', messagesSchema);

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', (req, res) => {
    Messages.findOne((error, message) => {
        console.log(message);
        res.send(message.message);
    });
    
});

app.listen(3001, () => {
    console.log('Example app listening on port 3001!');
});
