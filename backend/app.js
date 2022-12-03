const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");

// 使用者加密hash function
const bcrypt = require("bcrypt");
const { nextTick } = require("process");
const saltRounds = 10;

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

app.post("/login", async (req, res, next) => {
  console.log(req.body);
  let { username, password } = req.body;
  try {
    let foundUser = await User.findOne({ username });
    console.log(foundUser);
    bcrypt.compare(password, foundUser.password, (err, result) => {
      if (err) {
        next(err);
      }
      if (result) {
        res.status(200).send("ok");
      } else {
        res.status(404).send("error");
      }
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/signup", (req, res, next) => {
  let { username, password } = req.body;

  // 加密
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      let newUser = new User({ username, password: hash });
      try {
        newUser
          .save()
          .then(() => {
            console.log("New User");
            res.status(200).send("ok");
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (err) {
        next(err);
      }
    });
  });
});

// routing for all
app.get("*", (req, res) => {
  res.send("Cnanot find what you want!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
