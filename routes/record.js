const express = require("express");
const router = express.Router();
const recordController = require("../controllers/record");

router.get("/create/:user_id/:status",recordController.create);
router.get("/updateById/:id",recordController.updateById);
router.get("/deleteById/:id",recordController.deleteById);

router.get("/getAllRecords",recordController.getAllRecords);

module.exports = router;