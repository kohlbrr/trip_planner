'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const routes = require('./routes');

// nunjucks boilerplate
app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });

// morgan boilerplate
app.use(morgan('dev'));

// body-parser boilerplate
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = app.listen(8080, () => {
  console.log('Listening on port 8080!');
})

// static files
app.use(express.static(path.join(__dirname, './public')));

app.use('/', routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
})
