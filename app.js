const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  app = express();

const port = 1337;
app.use(bodyParser.json())
app.use(
  express.static(
    path.join(path.normalize(__dirname + '/'), 'angular/dist/angular')
  )
);

app.get("/", (req, res) => {
  res.sendFile('index.html', { root: 'angular/dist/angular' });
});



app.listen(port, () => {
  console.info(`Server is listening on port ${port}.`);
});
