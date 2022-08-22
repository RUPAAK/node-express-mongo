const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    // unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  married: {
    type: Boolean,
    default: false,
  },

  detail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserDetail",
    required: true
  }
}, {
  timestamps: true
});


userSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


// userSchema.post("save", async function (next) {
//   console.log('Email sent saying your account has been created. Please verify')
// });


const User = mongoose.model("User", userSchema);

module.exports = User;
