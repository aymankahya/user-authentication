const User = require("../models/User");
const bcrypt = require("bcryptjs");
const issueJWT = require("../utils/issueJWT");
require("dotenv").config();

const loginController = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user)
      return res
        .status(401)
        .json({ success: false, error: "Incorrect username" });

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match)
      return res
        .status(401)
        .json({ success: false, error: "Incorrect password" });

    const jwt = issueJWT(user, "1d");

    return res.status(200).json({
      success: true,
      user: { id: user._id, username: user.username },
      token: jwt.token,
      expiresIn: jwt.expires,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = loginController;
