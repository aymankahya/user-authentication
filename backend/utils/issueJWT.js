const jsonwebtoken = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");

const PRIV_KEY = fs.readFileSync(
  path.join(__dirname, "..", "rsa_key_prv.pem"),
  "utf8"
);

const issueJWT = (user, expiryDuration) => {
  const id = user._id;

  const payload = {
    sub: id,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: expiryDuration,
    algorithm: "RS256",
  });

  return {
    token: `Bearer ${signedToken}`,
    expires: expiryDuration,
  };
};

module.exports = issueJWT;
