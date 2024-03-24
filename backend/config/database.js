//==================================================================//
// Configuration of the MongoDB database for user credentials storage
//==================================================================//

const mongoose = require("mongoose");
require("dotenv").config();

// Set the correct database name based on the current node environnement (prod / dev)
const dbName =
  process.env.NODE_ENV !== "prod"
    ? "test"
    : `${process.env.PRODUCTION_DB_NAME}`;

// Set the mongoDB connection string
const mongoDB = `mongodb+srv://${encodeURIComponent(
  process.env.DB_USERNAME
)}:${encodeURIComponent(
  process.env.DB_PASSWORD
)}@authenticationcluster.u1bitn0.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=AuthenticationCluster`;

mongoose.connect(mongoDB);
const db = mongoose.connection;

// Failed Connection to MongoDB Error Handling
db.on("error", console.error.bind("Connection to MongoDB Database Failed"));

module.exports = db;
