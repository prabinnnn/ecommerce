const User = require("../model/userModel");

const createUser = async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email }); // Corrected line
  if (!findUser) {
    const newUser = await User.create(req.body); // Added await
    res.json(newUser);
  } else {
    res.json({
      msg: "already exits",
      success: false,
    });
  }
};

module.exports = { createUser };
