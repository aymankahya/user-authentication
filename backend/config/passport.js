//========================================================================================//
// Configuration of the PasseportJS framework for implementing the authenticating strategy
//========================================================================================//
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcryptjs");
// const JWTStrategy = require("passport-jwt").Strategy
// const ExtractJWT = require('passport-jwt').ExtractJwt;

const strategy = new LocalStrategy(async (username, password, done) => {
  try {
    // Check if the username supplied exists in the database
    const user = await User.findOne({ username }).exec();
    console.log(user);
    if (!user) return done(null, false, { message: "Incorrect username" });
    // Check for password match
    console.log(password);
    console.log(user.password);
    const match = bcrypt.compare(password, user.password);
    if (!match) return done(null, false, { message: "Incorrect password" });
    // Return the user to be stored in the session
    return done(null, user);
  } catch (err) {
    // Handle no match errors
    return done(err);
  }
});

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(strategy);
