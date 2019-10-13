const express = require('express');
const expressFileUpload = require('express-fileupload');
const path = require('path');
const uuid = require('uuid');

const app = express();

const PORT = process.env.PORT || 3000;

// const routes = require('./routes.js');

// app.use(express.static(path.join(__dirname, 'app')));

// Sets up the Express App
// =============================================================

// Set Handlebars as the default templating engine.

// Sets up the Express app to handle data parsing

// default options
app.use(expressFileUpload());

app.post('/upload', function(req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let image = req.files.image;

  // Use the mv() method to place the file somewhere on your server
  image.mv(`./media/images/image${uuid()}.jpg`, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/', routes);
app.post('/addPicture', (req, res) => {
    console.log(req);
    res.send(req);
})

// Turn on that server!
app.listen(PORT, () => {
    console.log('App listening on port 3000');
});