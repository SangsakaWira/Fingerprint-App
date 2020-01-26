const express = require("express");
const router = express.Router();
const recordController = require("../controllers/record");

router.get("/create/:user_id",recordController.create);
router.get("/updateById/:id",recordController.updateById);
router.get("/deleteById/:id",recordController.deleteById);

module.exports = router;