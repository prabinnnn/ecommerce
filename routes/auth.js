const {
  createUser,
  loginUserControl,
  getAllUser,
  getaUser,
  deleteaUser,
  updateUser,
} = require("../controller/userController");
const router = require("express").Router();
router.post("/register", createUser);
router.post("/login", loginUserControl);
router.get("/alluser", getAllUser);
router.get("/:id", getaUser);
router.delete("/:id", deleteaUser);
router.put("/:id", updateUser);
module.exports = router;
