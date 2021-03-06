const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        console.log("ERROR ", err);
        return done(err);
      }
      if (!user) {
        console.log("NO USER!!");
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.checkPassword(password)) {
        console.log("WRONG PASSWORD");
        return done(null, false, { message: "Incorrect password" });
      }

      return done(null, user);
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
