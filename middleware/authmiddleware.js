const user = require("../model/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const authMiddler = asyncHandler((req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("bearer")) {
  }
});
