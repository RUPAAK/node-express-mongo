const User = require("../../model/user");

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.send({
        data: "Some fields are missing",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({
        data: "User not found",
      });
    }

    res.status(200).send({
      data: user,
    });
  } catch (error) {
    return res.send({
      data: error.message ? error.message : "Something went wrong",
    });
  }
};

module.exports = signInUser;
