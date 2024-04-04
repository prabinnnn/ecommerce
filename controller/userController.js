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
const getAllUser = asynHandler(async (req, res) => {
  try {
    const getAllUser = await User.find();
    res.json({ getAllUser });
  } catch (e) {
    next(e);
  }
});
const getaUser = asynHandler(async (req, res) => {
  console.log();
  const { id } = req.User;
  try {
    const getUser = await User.findById({ id });
    res.json({ getUser });
  } catch (e) {
    next(e);
  }
});
const deleteaUser = asynHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteaUser = await User.findByIdAndDelete({ id });
    res.json({ deleteaUser });
  } catch (e) {
    next(e);
  }
});
const updateUser = asynHandler(async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json(updateUser);
  } catch (e) {
    throw new Error(error);
  }
});
const blockUser = asynHandler(async (req, res) => {
  const { id } = req.params;
  const block = await User.findByIdAndDelete(
    id,
    {
      isBlocked: true,
    },
    {
      new: true,
    },
    res.json({
      message: "user is blocked",
    })
  );
  try {
  } catch (e) {
    throw new Error(error);
  }
});
const unblockUser = asynHandler(async (req, res) => {
  const unBlock = await User.findByIdAndDelete(
    id,
    {
      isunBlocked: true,
    },
    {
      new: true,
    }
  );
  try {
  } catch (e) {}
});
module.exports = {
  createUser,
  loginUserControl,
  getAllUser,
  getaUser,
  deleteaUser,
  updateUser,
  blockUser,
  unblockUser,
};
