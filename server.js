const express = require('express')
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan')
const session = require('express-session')
const passport = require('passport')
const app = express();

require('dotenv').config()
require('./config/database.js');
require('./config/passport');

app.use(logger('dev'));
app.use(express.json());
app.use(
  session({
    secret: "genre_secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))

app.use(express.static(path.join(__dirname, 'build')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/users', require('./routes/api/user'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Express app running on port ${port}`)
})