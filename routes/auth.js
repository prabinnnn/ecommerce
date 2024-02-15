const {
  createUser,
  loginUserControl,
  getAllUser,
} = require("../controller/userController");
const router = require("express").Router();
router.post("/register", createUser);
router.post("/login", loginUserControl);
router.get("/alluser", getAllUser);
module.exports = router;
