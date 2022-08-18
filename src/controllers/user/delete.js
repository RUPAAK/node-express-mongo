const User = require("../../model/user");

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(400).send({
        data: "User not found to delete",
      });
    }

    res.status(200).send();
  } catch (error) {
    return res.send({
      data: error.message ? error.message : "Something went wrong",
    });
  }
};

module.exports = deleteUser;
