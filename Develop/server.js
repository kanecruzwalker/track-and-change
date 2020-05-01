const express = require("express");
const logger = require("morgan");




// TODO: import mongoose
const mongoose = require('mongoose');


const apiRoutes = require("./routes/api");

const PORT = process.env.PORT || 3001;

const app = express();

// use logging middleware
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public", { "extensions": "html" }));


// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
// // mongoose.connect(MONGODB_URI);
// TODO: create mongodb connection with mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds121176.mlab.com:21176/heroku_tr7bdjh5", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});




app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
