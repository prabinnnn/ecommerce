const { generateToken } = require("../config/jwtToken");
const User = require("../model/userModel");
const asynHandler = require("express-async-handler");
const createUser = asynHandler(async (req, res) => {
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
});
const loginUserControl = asynHandler(async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordmatch(password))) {
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?.id),
    });
  } else {
    console.log("invalid credent");
  }
});

module.exports = { createUser, loginUserControl };
