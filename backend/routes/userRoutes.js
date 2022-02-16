const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

// router.route("/").get(getProducts).post(setProduct);
// router.route("/:id").delete(deleteProduct).put(updateProduct);

module.exports = router;
