const User = require("../../model/user");
const UserDetail = require("../../model/userdetail");

const signUpUser = async (req, res) => {
  try {
    const { name, email, password, father_name, mother_name } = req.body;

    if (!name || !email || !password) {
      return res.send({
        data: "Some fields are missing",
      });
    }


   const userDetail= await UserDetail({father_name, mother_name}).save()
   
   
   if(!userDetail){
    return res.status(400).send({
      data: "Failed to create user detail. Try agaijn"
    })
   }

    const user = await new User({
      name: name,
      email: email,
      password: password,

      detail: userDetail._id
    }).save();

    
    res.status(201).send({
      data: user,
    });
  } catch (error) {
    console.log(error)
    return res.send({
      data: error.message ? error.message : "Something went wrong",
    });
  }
};

module.exports = signUpUser;
