const {
  createUser,
  loginUserControl,
  getAllUser,
  getaUser,
  deleteaUser,
  updateUser,
} = require("../controller/userController");
const { authMiddler, isAdmin } = require("../middleware/authmiddleware");
const router = require("express").Router();
router.post("/register", createUser);
router.post("/login", loginUserControl);
router.get("/alluser", getAllUser);
router.get("/:id", authMiddler, isAdmin, getaUser);
router.delete("/:id", deleteaUser);
router.put("/edit-user", authMiddler, updateUser);
router.put("/block-user/:id", authMiddler, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddler, isAdmin, unblockUser);
module.exports = router;
