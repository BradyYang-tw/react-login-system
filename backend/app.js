const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// middleware
app.use(bodyParser.urlencoded({ extended: true }));

// request handling
app.get("/", (req, res) => {
  res.send("You are on the home page");
});

app.get("/user/:id", (req, res) => {
  res.send("hi " + req.params.id);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  console.log("somebody want to login");
});

// routing for all
app.get("*", (req, res) => {
  res.send("Cnanot find what you want!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
