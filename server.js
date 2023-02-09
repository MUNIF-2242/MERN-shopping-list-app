//1. declare express backend framework
const express = require('express');
//2.declare mongoose ORM for interect with mongodb database
const mongoose = require('mongoose');
//3.declare bodyparser for take request and take data from body
const bodyParser = require('body-parser');

//4.initialize express
const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
