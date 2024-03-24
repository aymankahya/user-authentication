//==================================================================//
//  Implementation of the User schema to be stored in the database
//==================================================================//

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
