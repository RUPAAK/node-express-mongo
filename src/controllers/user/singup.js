const User = require("../../model/user");

const signUpUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.send({
        data: "Some fields are missing",
      });
    }

    const user = await new User({
      name: name,
      email: email,
      password: password,
    }).save();

    
    res.status(201).send({
      data: user,
    });
  } catch (error) {
    return res.send({
      data: error.message ? error.message : "Something went wrong",
    });
  }
};

module.exports = signUpUser;
