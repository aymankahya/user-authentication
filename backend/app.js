const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const router = require("./routes/routes");

require("dotenv").config();

require("./config/database");

// Show documents of the the database//

// const showResultDB = async () => {
//   const result = await User.find({}).exec();
//   console.log(result);
// };

// showResultDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 60 * 24 }, // Cookie expiry date set to 1 day (Duration represented in milliseconds, make sure you get this conversion correctly)
  })
);
app.use(passport.session());

require("./config/passport");

app.use("/", router);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
