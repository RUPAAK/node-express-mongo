const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema({
  father_name: {
    type: String,
  },
  mother_name: {
    type: String,
  },
});

const UserDetail = mongoose.model("UserDetail", userDetailSchema);

module.exports = UserDetail;
