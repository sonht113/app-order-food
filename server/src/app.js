const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

const logger = require('morgan');

const db = require('./config/db')

const usersRoute = require('./routes/users.route');

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
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json())


// Router
app.use('/v1/users', usersRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

db.connect();

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
})

module.exports = app;
