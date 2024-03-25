const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const keysGenerator = () => {
  // Generates an object where the ketys are stored in properties 'privateKey' and 'publicKey'
  const keyPair = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096, //bits - standard for RSA keys
    publicKeyEncoding: {
      type: "pkcs1", // Public Key Cryptography Standards 1
      format: "pem", // Most common formatting choice
    },
    privateKeyEncoding: {
      type: "pkcs1", // Public Key Cryptography Standards 1
      format: "pem", // Most common formatting choice
    },
  });

  fs.writeFileSync(
    path.join(__dirname, "..", "/rsa_key_pub.pem"),
    keyPair.publicKey
  );
  fs.writeFileSync(
    path.join(__dirname, "..", "/rsa_key_prv.pem"),
    keyPair.privateKey
  );
};

keysGenerator();
