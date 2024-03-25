const User = require("../models/User");
const bcrypt = require("bcryptjs");
const issueJWT = require("../utils/issueJWT");
require("dotenv").config();

const signUpController = async (req, res, next) => {
  try {
    // Check if the username already exists in the database
    const user = await User.findOne({ username: req.body.username }).exec();
    if (user) {
      return res
        .status(400)
        .json({ success: false, msg: "user already exists" });
    } else {
      // Create the password hash with the salt included
      bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        const newUser = new User({
          username: req.body.username,
          password: hashedPassword,
        });

        await newUser.save();
        // Issue a JWT token for the registered the user
        const jwt = issueJWT(newUser, "1d");

        res
          .status(200)
          .json({
            success: true,
            token: jwt.token,
            expiresIn: jwt.expires,
            msg: "user created success",
          });
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = signUpController;
