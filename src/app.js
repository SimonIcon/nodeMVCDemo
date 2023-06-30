const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const goalsRoute = require('./routes/goalRouter');
const { errorHandler } = require("./middleware/errorMiddleware");

//dotenv
dotenv.config();
const app = express()
dbConnect();

// data transfer middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes middlewares
app.use('/api/goals', goalsRoute)

// error handler middleware
app.use(errorHandler)

module.exports = app;