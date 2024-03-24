const User = require("../models/User");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const signUpController = async (req, res, next) => {
  try {
    // Check if the username already exists in the database
    const user = await User.findOne({ username: req.body.username }).exec();
    if (user) {
      return res.redirect(
        `//${process.env.CLIENT}/login?status=${encodeURIComponent(
          "user already exists"
        )}`
      );
    } else {
      // Create the password hash with the salt included
      bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        const newUser = new User({
          username: req.body.username,
          password: hashedPassword,
        });

        await newUser.save();

        res.redirect(
          `//${process.env.CLIENT}/login?status=${encodeURIComponent(
            "user created success"
          )}`
        );
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = signUpController;
