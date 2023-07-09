const router = require("express").Router();
const passport = require("passport");

router.get("/login", (req, res) => {
  console.log("Google Login");
  // res.send("Google Login");
});

router.get("/google", (req, res) => {
  passport.authenticate("google", {
    scope: ["profile"],
  });
});

module.exports = router;
