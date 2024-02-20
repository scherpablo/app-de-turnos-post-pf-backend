const express = require("express");
const {
  getAllUsers,
  postUsers,
  getUserById,
} = require("../../handlers/UsersHandlers/usersHandlers");
const router = express.Router();

router.get("/", getAllUsers);
router.post("/", postUsers);
router.get("/:id", getUserById);

module.exports = router;
