const express = require('express');
const { getAllUsers, getUserById, updateUserById } = require("../controllers/user");

const router = express.Router() ;



router.get("/", getAllUsers);
router.get("/:id" , getUserById)
router.patch("/:id" , updateUserById)
router.post("/", saveUser);

router.delete("/", deleteUserById);


module.exports = router  ; 