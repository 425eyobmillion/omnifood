var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/keble';
mongoose.connect(mongoDB, { useNewUrlparser: true, useUnifiedTopology: true });

var db = mongoose.coonection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));