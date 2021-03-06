const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// parser app json

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// get routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});