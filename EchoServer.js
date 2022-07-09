const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
  req.message = req.query.message;
  next();
});

app.post('/', (req, res, next) => {
  req.message = req.body.message;
  next();
});

app.use((req, res, next) => {
  if (typeof req.message !== 'string')
    throw new Error();
  res.json({ message: req.message });
});

app.use((err, req, res, next) => {
  res.sendStatus(422);
});