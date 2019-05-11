const express = require('express');
const parser = require('body-parser');
const path = require('path');

const { PORT: port = 8000 } = process.env;
const app = express();

require('./server/config/database');


app.use(express.static(path.join(__dirname, 'dist/PPM')));
app.use(parser.json());

require('./server/routes/product.routes')(app);

// Page refresh issue fixed by adding this route! /* will direct to index.html in our DIST folder.
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/PPM/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => console.log(`Express server listening on port ${port}`));
