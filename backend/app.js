const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //加入這個才解析前端傳來的參數
app.use(cors());

// request handling
app.get("/", (req, res) => {
  res.send("You are on the home page");
});

app.get("/user/:id", (req, res) => {
  res.send("hi " + req.params.id);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.username) {
    console.log(`Hello ${req.body.username}`);
    res.status(200);
    res.send("ok");
  }
  console.log("somebody want to login");
});

// routing for all
app.get("*", (req, res) => {
  res.send("Cnanot find what you want!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
