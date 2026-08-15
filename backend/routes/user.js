const express = require("express");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  saveUser,
  deleteUserById,
} = require("../controllers/user");

const router = express.Router();

// CRUD Operations 
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.patch("/:id", updateUserById);
router.post("/", saveUser);
router.delete("/:id", deleteUserById);

module.exports = router;
