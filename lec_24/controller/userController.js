const User = require("../model/user");
const jwt = require("jsonwebtoken");

module.exports.users = async (req, res) => {
  let allUsers = await User.find();
  res.json({
    success: true,
    message: "All users fetched successfully",
    data: allUsers
  });
};

module.exports.newuser = async (req, res) => {
  const { name, email, password } = req.body;

  let userexists = await User.findOne({ email });
  if (userexists) {
    return res.json({
      success: false,
      message: "User already exists"
    });
  }

  let newUser = new User({ name, email, password });
  await newUser.save();




  res.json({
    success: true,
    message: "User added successfully",
    data: newUser,

  });
};

module.exports.getuserbyid = async (req, res) => {
  let id = req.params.id;
  let user = await User.findById(id);
  if (!user) {
    return res.json({ success: false, message: "User not found" });
  }
  res.json({
    success: true,
    message: "User fetched successfully",
    data: user
  });
};


module.exports.deleteuser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findByIdAndDelete(id);
  if (!user) {
    return res.json({
      success: false,
      message: "User not found"
    });
  }
  res.json({
    success: true,
    message: "User deleted successfully"
  });
};
