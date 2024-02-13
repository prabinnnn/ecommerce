const {
  createUser,
  loginUserControl,
} = require("../controller/userController");
const router = require("express").Router();
router.post("/register", createUser);
router.post("/login", loginUserControl);
module.exports = router;
