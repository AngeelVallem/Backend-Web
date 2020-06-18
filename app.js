const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const {API_VERSION} = require('./config');



//load routings
const UserRoutes = require("./routers/User");



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


//configure header http



//routers basic
app.use(`/api/${API_VERSION}`,UserRoutes);



module.exports = app;