const passport = require("passport");
require("dotenv").config();

const loginController = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      const errorMessage = encodeURIComponent(info.message);
      return res.redirect(`//${process.env.CLIENT}/login?e=${errorMessage}`);
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect(`//${process.env.CLIENT}/home`);
    });
  })(req, res, next);
};

module.exports = loginController;
