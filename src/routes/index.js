const express = require("express");
const router = express.Router();
const CameraController = require("../controller/CameraController");

router.route("/store").post(CameraController.store);
router.route("/list").get(CameraController.list);

module.exports = router;