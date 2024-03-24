require("dotenv").config();

const logoutController = async (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect(`//${process.env.CLIENT}/login`);
  });
};

module.exports = logoutController;
