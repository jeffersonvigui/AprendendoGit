const express = require('express');  // 1
const routes = require("./routes"); // depois
const mustache = require('mustache-express');
const app = express(); // 2
app.use(express.json()); // 3
app.use(routes); //depois
app.engine('mst',mustache());
app.set('view engine','mst');
app.set('views',__dirname + '/views');
module.exports = app; // 4
