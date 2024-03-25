//==================================================================//
// Implementation of the different routes of the application
//==================================================================//

const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const logoutController = require("../controllers/logoutController");
const signUpController = require("../controllers/signUpController");
const authController = require("../controllers/authController");
const passport = require("passport");

router.post("/login", loginController);
router.post("/logout", logoutController);
router.post("/signup", signUpController);
router.post(
  "/auth",
  passport.authenticate("jwt", { session: false }),
  authController
);

module.exports = router;
