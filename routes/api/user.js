const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const passport = require("passport");

router.post("/signup", (req, res) => {
  console.log("user signup");

  const { username, email, password } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log("User.js post error ", err);
    } else if (user) {
      res.json({
        error: `An account with that email already exists.`,
      });
    } else {
      const newUser = new User({
        username: username,
        email: email,
        password: password,
      });
      console.log("NEW USER ", newUser);
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
    }
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("logged in ", req.user);
  res.send(req.user);
});

router.get("/", (req, res, next) => {
  console.log("======== USER! =======");
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

module.exports = router;
