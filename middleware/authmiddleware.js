const user = require("../model/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const authMiddler = asyncHandler((req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("bearer")) {
    token = req.header.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
      }
    } catch (e) {
      throw new Error("no authorization token is expired. plz login ");
    }
  } else {
    throw new Error("there is no token attached to it");
  }
});
module.exports = { authMiddler };
