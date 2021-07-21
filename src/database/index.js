const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/carupi', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Pai ta ON!')
});
mongoose.Promise = global.Promise;

module.exports = mongoose;