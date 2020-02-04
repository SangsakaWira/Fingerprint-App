const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/logout",userController.logout);

router.post("/getById",userController.getUserById);
router.get("/getAllUsers",userController.getAllUser);

module.exports = router;