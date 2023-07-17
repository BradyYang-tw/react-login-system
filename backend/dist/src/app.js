"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
// import {RegisterRoutes} from '../build/routes';
const cors_1 = __importDefault(require("cors"));
// import {errors} from 'celebrate';
// import errorHandler from './errorHandler';
const bodyParser = require("body-parser");
const routes_2 = require("build/routes");
const swaggerUI = __importStar(require("swagger-ui-express"));
const swaggerJson = __importStar(require("build/swagger.json"));
// psql datasource
const psqlConfig_1 = require("./config/psqlConfig");
psqlConfig_1.connectionSource
    .initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
const app = (0, express_1.default)();
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
app.use((0, cors_1.default)({
// credentials: true, //设置成true 请求中才会带上cookie信息，否则请求失败
}));
app.use('/api', routes_1.default);
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
(0, routes_2.RegisterRoutes)(app);
app.use(["/openapi", "/docs", "/swagger"], swaggerUI.serve, swaggerUI.setup(swaggerJson));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//# sourceMappingURL=app.js.map