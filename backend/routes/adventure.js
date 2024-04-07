const express = require("express");
const router = express.Router();

const {
  user
} = require("../controllers/adventure");

router.post("/userip", user);

module.exports = router;
