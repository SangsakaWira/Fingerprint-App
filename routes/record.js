const express = require("express");
const router = express.Router();
const recordController = require("../controllers/record");

router.get("/create/:user_id/:status",recordController.create);
router.get("/updateById/:id",recordController.updateById);
router.get("/deleteById/:id",recordController.deleteById);

router.get("/getAllRecords",recordController.getAllRecords);
router.get("/getRecordByUserId/:user_id",recordController.getRecordByUserId)
router.get("/getRecordByStatus/:status",recordController.getRecordByStatus)

module.exports = router;