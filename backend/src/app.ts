import express from "express";
import routes from './routes';
// import {RegisterRoutes} from '../build/routes';
import cors from "cors";
// import {errors} from 'celebrate';
// import errorHandler from './errorHandler';
const bodyParser = require("body-parser");

// psql datasource
import { connectionSource } from "./config/psqlConfig";
connectionSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

const app = express();

// const path = require("path");
// const mongoose = require("mongoose");
// const User = require("./models/user");
// const jwt = require("jsonwebtoken");
// const auth = require("./auth");
// const dotenv = require("dotenv");
// dotenv.config();
// const passport = require("passport");
// require("./passport")(passport);
// const authRoute = require("./routes/auth-route.js");

// // 使用者加密hash function
// const bcrypt = require("bcrypt");
// const { nextTick } = require("process");
// const saltRounds = 10;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //加入這個才解析前端傳來的參數
app.use(
  cors({
    // credentials: true, //设置成true 请求中才会带上cookie信息，否则请求失败
  })
);
app.use('/api', routes)
// app.use("/auth", authRoute);

// // db connect
// mongoose
//   .connect(process.env.DB_CONNECT)
//   .then(() => {
//     console.log("Success connect db!");
//   })
//   .catch((e) => {
//     console.log("Fail to connect db", e);
//   });

// // request handling
// app.get("/", (req, res) => {
//   res.send("You are on the home page");
// });

// app.get("/user/:id", (req, res) => {
//   res.send("hi " + req.params.id);
// });

// app.post("/login", async (req, res, next) => {
//   console.log(req.body);
//   let { username, password } = req.body;
//   try {
//     let foundUser = await User.findOne({ username });
//     console.log(foundUser);
//     bcrypt.compare(password, foundUser.password, (err, result) => {
//       if (err) {
//         next(err);
//       }
//       if (result) {
//         // res.send("ok");
//         const SECRET = "BRADY";
//         const EXPIRES_IN = "1h"; // 10 sec
//         const token = jwt.sign({ user: username }, SECRET, {
//           expiresIn: EXPIRES_IN,
//         });
//         // res.json({
//         //   token,
//         // });
//         res.send({
//           status: 200,
//           message: "登入成功!",
//           token,
//         });
//         // res.cookie("token", token, { maxAge: 60000, httpOnly: true });
//       } else {
//         res.status(404).send("error");
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.post("/signup", (req, res, next) => {
//   let { username, password } = req.body;

//   // 加密
//   bcrypt.genSalt(saltRounds, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//       let newUser = new User({ username, password: hash });
//       try {
//         newUser
//           .save()
//           .then(() => {
//             console.log("New User");
//             res.status(200).send("ok");
//           })
//           .catch((e) => {
//             console.log(e);
//           });
//       } catch (err) {
//         next(err);
//       }
//     });
//   });
// });

// check health
app.get("/health", (req, res) => {
  return res.send("I am Good");
});
// routing for all
app.get("*", (req, res) => {
  res.send("Cnanot find what you want!");
});

const port = 3000;

// RegisterRoutes(app);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
