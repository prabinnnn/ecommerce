const {
  createUser,
  loginUserControl,
  getAllUser,
  getaUser,
  deleteaUser,
} = require("../controller/userController");
const router = require("express").Router();
router.post("/register", createUser);
router.post("/login", loginUserControl);
router.get("/alluser", getAllUser);
router.get("/:id", getaUser);
router.delete("/:id", deleteaUser);
module.exports = router;
