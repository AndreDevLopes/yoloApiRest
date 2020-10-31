const express = require("express");
const router = express.Router();
const CameraController = require("../controller/CameraController");
const multer = require('multer');
const multerConfig = require('../config/multer');

router.route("/store").post(multer(multerConfig).single('file'),CameraController.store);
router.route("/list").get(CameraController.list);

module.exports = router;