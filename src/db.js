const mongoose = require("mongoose");

const dbConnect = async () => {
  mongoose
    .connect("mongodb://localhost:27017/mernclass")
    .then(() => console.log("Database Connection Success"))
    .catch((e) => console.log("Failed to connect to database"));
};

module.exports = dbConnect;


