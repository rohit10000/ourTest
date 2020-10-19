let createError = require('http-errors');
let express = require('express');
let path = require('path');
let logger = require('morgan');
let cors = require('cors');


const mongoose = require('mongoose');

const testRouter = require('./routes/testRouter');
const sectionRouter = require('./routes/sectionRouter');
const topicRouter = require('./routes/topicRouter');
const questionRouter = require('./routes/questionRouter');

const authRouter = require('./routes/authRouter');

const url = "mongodb://localhost:27017/ourTest";
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Nice Rohit! Connected correctly to server");
}, (err) => {console.log(err);});

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.disable('etag');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//routes for tests
app.use('/', testRouter);
app.use('/', sectionRouter);
app.use('/', topicRouter);
app.use('/', questionRouter);


app.use('/', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next){
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
