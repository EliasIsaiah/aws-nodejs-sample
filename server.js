const express = require('express');
const expressFileUpload = require('express-fileupload');
const path = require('path');
const photoTextModule = require('./sample.js');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const routes = require('./routes.js');

app.use(express.static(path.join(__dirname)));

// Sets up the Express App
// =============================================================

// Set Handlebars as the default templating engine.

// Sets up the Express app to handle data parsing

// default options
app.use(expressFileUpload());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
})

app.post('/photoUpload', (req, res) => {
  console.log(req.files);
  // res.send("yep, got it");
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  photoTextModule(req, res);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/addPicture', (req, res) => {
    console.log(req);
    res.send(req);
})

// Turn on that server!
app.listen(PORT, () => {
    console.log('App listening on port 3000');
});
