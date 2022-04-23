const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const db = require('./config/db')

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');

dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.use('/v1', indexRouter);
app.use('/v1/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
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

db.connect();

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
})

module.exports = app;
