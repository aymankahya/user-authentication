//========================================================================================//
// Configuration of the PasseportJS framework for implementing the authenticating strategy
//========================================================================================//
const passport = require("passport");
const User = require("../models/User");
const path = require("path");
const fs = require("fs");

const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const PUB_KEY = fs.readFileSync(
  path.join(__dirname, "..", "/rsa_key_pub.pem"),
  "utf8"
);

// Configuring the jwt verification step options
const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ["RS256"],
};

const strategy = new JWTStrategy(options, async (paylaod, done) => {
  try {
    // Check if the username supplied exists in the database
    const user = await User.findOne({ _id: paylaod.sub }).exec();
    if (!user) return done(null, false);

    // Return the user to be stored in the session
    return done(null, user);
  } catch (err) {
    // Handle no match errors
    return done(err);
  }
});

passport.use(strategy);
