const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //加入這個才解析前端傳來的參數
app.use(
  cors({
    // credentials: true, //设置成true 请求中才会带上cookie信息，否则请求失败
  })
);

// db connect
mongoose
  .connect(
    `mongodb+srv://brady:1qaz%40WSX@cluster0.dp78dhx.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Success connect db!");
  })
  .catch((e) => {
    console.log("Fail to connect db", e);
  });

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
    console.log("somebody want to login");
  } else {
    res.status(404).send("error");
  }
});

app.post("/signup", (req, res) => {
  let { username, password } = req.body;
  let newUser = new User({ username, password });
  newUser
    .save()
    .then(() => {
      console.log("New User");
      res.status(200).send("ok");
    })
    .catch((e) => {
      console.log(e);
    });
});

// routing for all
app.get("*", (req, res) => {
  res.send("Cnanot find what you want!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
