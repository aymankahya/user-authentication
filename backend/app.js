const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const router = require("./routes/routes");
const isAuth = require("./middleware/isAut");
const User = require("./models/User");

require("dotenv").config();

require("./config/database");

const showResultDB = async () => {
  const result = await User.find({}).exec();
  console.log(result);
};

showResultDB();

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.set("views", __dirname);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 60 * 24 }, // Cookie expiry date set to 1 day (Duration represented in milliseconds, make sure you get this conversion correctly)
  })
);
app.use(passport.session());

require("./config/passport");

app.get("/", isAuth, (req, res) => {
  res.json({ user: req.user._doc, loggedIn: true });
});

app.use("/", router);

app.listen(3000, () => console.log("app listening in port 3000"));
