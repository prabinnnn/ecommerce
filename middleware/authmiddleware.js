const user = require("../model/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const authMiddler = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("bearer")) {
    token = req.header.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (e) {
      throw new Error("no authorization token is expired. plz login ");
    }
  } else {
    throw new Error("there is no token attached to it");
  }
});
const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await user.findOne({ email });
  if (adminUser.roles != admin) {
    throw new error("u are not admin");
  } else {
    next();
  }
});
module.exports = { authMiddler, isAdmin };
