const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('test working');
});

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Page Not Found',
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
