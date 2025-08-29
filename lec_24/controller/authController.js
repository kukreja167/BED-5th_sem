const User = require("../model/user");
const jwt = require("jsonwebtoken");
module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });
  if (!user) {
    return res.json({
      success: false,
      message: "User does not exist"
    });
  }

  if (user.password !== password) {
    return res.json({
      success: false,
      message: "Invalid credentials"
    });
  }


  let token = jwt.sign({ id: user._id }, "okkkk");

  res.json({
    success: true,
    message: "Login successful",
    data: user,
    token: token
  });
};
