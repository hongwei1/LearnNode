var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// set 方法用于内部变量
//  views-视图存放目录
app.set('views', path.join(__dirname, 'views'));
// view engine setup, 网页模板引擎
app.set('view engine', 'pug');

// use 用于调用 express 的中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//设定静态文件目录:
//public/images/1.png --> http://localhost:3000/images/1.png  网址直接对应的.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// app.js
// 在 app 中加载这个模块.
var api = require('./routes/api');
app.use('/api', api.index);


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

module.exports = app;
