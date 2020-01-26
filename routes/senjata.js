const express = require("express");
const router = express.Router();
const senjataController = require("../controllers/senjata");

router.get("/create",senjataController.create);
router.get("/updateById/:id",senjataController.updateById);
router.get("/deleteById/:id",senjataController.deleteById);

module.exports = router;