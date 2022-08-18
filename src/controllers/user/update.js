const User = require("../../model/user");

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    // if (!id) {
    //   return res.status(400).send({
    //     data: "Please provide user id",
    //   });
    // }


    const { name, married } = req.body;

    const user = await User.findById(id);


    if(!user){
        return res.status(400).send({
            data: "User of that id does not exist"
        })
    }

    user.name= name || user.name
    const updateUser= await user.save()


    res.status(200).send({
        data: updateUser
    })

  } catch (error) {
    return res.send({
      data: error.message ? error.message : "Something went wrong",
    });
  }
};

module.exports = updateUser;
