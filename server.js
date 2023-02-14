//1. declare express backend framework
const express = require('express');
//2.declare mongoose ORM for interect with mongodb database
const mongoose = require('mongoose');
//3.declare bodyparser for take request and take data from body
const bodyParser = require('body-parser');
//for production
const path = require('path');

const items = require('./routes/api/items');

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

//Use Routes
app.use('/api/items', items);

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('./client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
