const express = require("express");
const { sendEmail } = require("../controller/emailController");

const router = express.Router();

router.post("/", sendEmail);

module.exports = router;
